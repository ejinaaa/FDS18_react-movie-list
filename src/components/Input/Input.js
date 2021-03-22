/* eslint-disable jsx-a11y/label-has-associated-control */
import { input } from './Input.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Input({
  className = '',
  placeholder = '',
  ...restProps
}) {
  const composeClasses = classNames(input, className);

  return (
    <>
      <label htmlFor="textInput"></label>
      <input
        id="textInput"
        className={composeClasses}
        type="text"
        placeholder={placeholder}
        {...restProps}
      />
    </>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
