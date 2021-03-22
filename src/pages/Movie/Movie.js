import React from 'react';
import Heading from '../../components/Heading/Heading';
import SearchBox from '../../containers/SearchBox/SearchBox';
import MovieList from '../../containers/MovieList/MovieList';
import { ReactComponent as Loading } from '../../assets/loading.svg';
import {
  searchMovieContainer,
  title,
  movieCount as movieCountStyle,
} from './Movie.module.scss';

export default function Movie(props) {
  const [movieList, setMovieList] = React.useState([]);
  const [hasMovie, setHasMovie] = React.useState(false);
  const [movieCount, setMovieCount] = React.useState(0);
  const [hasError, sethasError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchMovie = (e) => {
    e.preventDefault();

    const searchInput = document.getElementById('textInput');

    setIsLoading(true);
    fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${searchInput.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data.movie_count > 0) {
          setMovieList(res.data.movies);
          setMovieCount(res.data.movie_count);
          setHasMovie(true);
        } else {
          setHasMovie(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        sethasError(err);
        setIsLoading(false);
      });
  };

  const renderSpinner = () => (
    <>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </>
  );

  const renderList = () => (
    <>
      <SearchBox handler={searchMovie} />
      {hasMovie ? (
        <>
          <p className={movieCountStyle}>{movieCount} RESULTS</p>
          <MovieList movieList={movieList} />
        </>
      ) : (
        <Heading level={2}>No results found. Try again!</Heading>
      )}
    </>
  );

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then((res) => {
        setMovieList(res.data.movies);
        setMovieCount(res.data.movie_count);
        setHasMovie(true);
        setIsLoading(false);
      })
      .catch((err) => {
        sethasError(err);
        setIsLoading(false);
      });
  }, []);

  if (hasError)
    return React.createElement(`h${1}`, {
      children: hasError.message,
    });

  return (
    <div className={searchMovieContainer}>
      <Heading level={1} className={title} children="Movies" />
      {isLoading ? renderSpinner() : renderList()}
    </div>
  );
}
