import Figure from '../../components/Figure/Figure';
import {
  movieListContainer,
  movieContainer,
  movieTitle,
  movieSummary,
  divider,
  movie,
  movieImg,
  movieInfo,
} from './MovieList.module.scss';
import PropTypes from 'prop-types';

const figcaptionDatail = ({
  year = '',
  title = '',
  runtime = '',
  rating = '',
  summary = '',
}) => (
  <>
    <p className="movieYear">{year}</p>
    <p className={movieTitle}>{title}</p>
    <p className="movieRuntime">{`${runtime} minutes`}</p>
    <p className="movieRating">Rating {rating}</p>
    <p className={movieSummary}>{summary}</p>
  </>
);

export default function MovieList({ movieList }) {
  return (
    <ul className={movieListContainer}>
      {movieList.map((movieData) => (
        <li className={movieContainer} key={movieData.id}>
          <span className={divider}></span>
          <Figure
            image={movieData.large_cover_image}
            imgClass={movieImg}
            figureClass={movie}
            figcaptionClass={movieInfo}
            figcaptionDetail={figcaptionDatail(movieData)}
          />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
};
