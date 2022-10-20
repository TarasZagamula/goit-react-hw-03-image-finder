import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryImageStyled,
} from './ImageGalleryItem.styled';

const ImageGalleryIttem = ({ src, alt, onClick }) => {
  return (
    <ImageGalleryItemStyled onClick={onClick}>
      <ImageGalleryImageStyled src={src} alt={alt} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryIttem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryIttem;
