import { btn } from './Button.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  className = '',
  children,
  ...restProps
}) {
  const composeClasses = classNames(btn, className);
  return (
    <button type={type} className={composeClasses} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
