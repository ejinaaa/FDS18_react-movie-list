import { figure } from './Figure.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Figure({
  image = '',
  figureClass = '',
  imgClass = '',
  figcaptionClass = '',
  figcaptionDetail = '',
  ...restProps
}) {
  const composeClasses = classNames(figure, figureClass);

  return (
    <figure className={composeClasses}>
      <img src={image} className={imgClass} alt="" />
      <figcaption className={figcaptionClass}>{figcaptionDetail}</figcaption>
    </figure>
  );
}

Figure.propTypes = {
  image: PropTypes.string.isRequired,
  figureClass: PropTypes.string,
  imgClass: PropTypes.string,
  figcaptionClass: PropTypes.string,
  figcaptionDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
