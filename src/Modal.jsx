import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-model" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;

// modal-overlay show-model
