import React, { Component } from 'react';
import { TextButton } from './Button/TextButton/TextButton';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    searchData: [],
    searchValue: null,
    page: 1,
    showModal: null,
    showLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    const prevValue = prevState.searchValue;
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ showLoader: true });
      return fetch(
        `https://pixabay.com/api/?key=29344030-4477c2161924855e32deae646&q=${searchValue}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState(prevState => {
            if (prevValue !== searchValue) {
              return { searchData: data.hits, showLoader: false };
            }
            return {
              searchData: [...prevState.searchData, ...data.hits],
              showLoader: false,
            };
          });
        });
    }
    return;
  }

  galleryDataSet = data => {
    this.setState({
      galleryData: data,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  searchSet = data => {
    this.setState({
      searchValue: data.search,
      page: 1,
    });
  };

  resetShowModal = () => {
    this.setState({
      showModal: null,
    });
  };

  togleleLoader = () => {
    this.seatStaete(prevState => ({
      showLoader: !prevState.showLoader,
    }));
  };

  modalImgSet = selectedImg => {
    this.setState({
      showModal: selectedImg,
    });
  };

  render() {
    const { searchData, showModal, showLoader } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <SearchBar onSubmit={this.searchSet} />
        <ImageGallery searchData={searchData} onItemClick={this.modalImgSet} />
        {searchData.length > 0 && (
          <TextButton onClick={this.loadMore} children="load more" />
        )}
        {showModal && (
          <Modal closeModal={this.resetShowModal} data={showModal} />
        )}
        {showLoader && <Loader />}
      </div>
    );
  }
}

export default App;
