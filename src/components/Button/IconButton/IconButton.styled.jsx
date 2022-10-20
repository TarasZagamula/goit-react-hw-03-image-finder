import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const ButtonStyled = styled.button`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const ButtonLabelStyled = styled(FaSearch)`
  fill: red;
  position: absolute;
  left: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
`;
