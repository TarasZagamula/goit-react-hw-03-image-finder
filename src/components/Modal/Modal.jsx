import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalBody, ModalOverlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  backdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { data } = this.props;
    return (
      <ModalOverlay onClick={this.backdropClick}>
        <ModalBody>
          <img src={data.largeImageURL} alt={data.id} width="600px" />
        </ModalBody>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Modal;
