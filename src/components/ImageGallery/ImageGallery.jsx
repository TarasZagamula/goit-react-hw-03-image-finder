import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryIttem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const searchData = this.props.searchData;
    const onItemClick = this.props.onItemClick;
    return (
      <ImageGalleryStyled>
        {searchData &&
          searchData.map(data => {
            return (
              <ImageGalleryIttem
                key={data.id}
                src={data.webformatURL}
                alt={data.tags}
                onClick={() => {
                  onItemClick(data);
                }}
              />
            );
          })}
      </ImageGalleryStyled>
    );
  }
}

ImageGallery.propTypes = {
  searchData: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
