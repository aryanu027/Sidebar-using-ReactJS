import React, { useContext } from "react";
import { Appcontext } from "./Context";

const Modal = () => {
  let { OpenModal, OnModal, OffModal, Opensidebar } = useContext(Appcontext);
  let CloseModal = () => {
    OffModal();
  };
  return (
    <>
      <div className={`modal-overlay ${OpenModal ? "show-modal" : ""}`}>
        <div className="modal-container">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi
            velit tempora atque quod necessitatibus, qui laudantium quas
            molestias illum assumenda modi quia nobis voluptates ipsam harum
            animi culpa facilis.
          </h3>
          <button className="btn" onClick={CloseModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
