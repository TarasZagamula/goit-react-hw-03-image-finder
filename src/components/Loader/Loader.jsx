import { FallingLines } from 'react-loader-spinner';
import { ModalOverlay } from '../Modal/Modal.styled';

const Loader = () => {
  return (
    <ModalOverlay>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </ModalOverlay>
  );
};

export default Loader;
