import {ImageGalleryItemStyled, ImageGalleryImageStyled} from './ImageGalleryItem.styled';

const ImageGalleryIttem = ({src, alt, onClick}) => {
    return (
        <ImageGalleryItemStyled onClick={onClick}>
            <ImageGalleryImageStyled src={src} alt={alt}/>
        </ImageGalleryItemStyled>
    )
};

export default ImageGalleryIttem;