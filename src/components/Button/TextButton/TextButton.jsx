import { TextButtonStyled } from './TextButton.styled';

export const TextButton = ({ onClick, children }) => {
  return (
    <TextButtonStyled type="button" onClick={onClick}>
      {children}
    </TextButtonStyled>
  );
};
