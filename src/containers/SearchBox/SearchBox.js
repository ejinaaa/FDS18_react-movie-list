import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { searchBox, searchBtn } from './SearchBox.module.scss';
import PropTypes from 'prop-types';

export default function SearchBox({ handler }) {
  return (
    <form className="searchContainer">
      <Input className={searchBox} placeholder="Search" />
      <Button
        type="submit"
        className={searchBtn}
        children={<i className="fas fa-search"></i>}
        onClick={handler}
      />
    </form>
  );
}

SearchBox.propTypes = {
  handler: PropTypes.func.isRequired,
};
