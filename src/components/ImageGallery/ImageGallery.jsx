import React, { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryIttem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  

  render() {
    const searchData = this.props.searchData;
    const onItemClick = this.props.onItemClick
    return (
      <ImageGalleryStyled>
        {searchData &&
          searchData.map(data => {
            return (
              <ImageGalleryIttem
                key={data.id}
                src={data.webformatURL}
                alt={data.id}
                onClick={() => {onItemClick(data)}}
              />
            );
          })}
      </ImageGalleryStyled>
    );
  }
}

export default ImageGallery;
