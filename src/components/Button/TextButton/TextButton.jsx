import { TextButtonStyled } from './TextButton.styled';
import PropTypes from 'prop-types';
import { Children } from 'react';

export const TextButton = ({ onClick, children }) => {
  return (
    <TextButtonStyled type="button" onClick={onClick}>
      {children}
    </TextButtonStyled>
  );
};
