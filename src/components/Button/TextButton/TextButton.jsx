import PropTypes from 'prop-types';
import { TextButtonStyled } from './TextButton.styled';

export const TextButton = ({ onClick, children }) => {
  return (
    <TextButtonStyled type="button" onClick={onClick}>
      {children}
    </TextButtonStyled>
  );
};

TextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
