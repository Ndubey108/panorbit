import React from "react";
import './modal.css';

function Modal({ data, closeModal,style }) {
console.log(closeModal)
  return (
    <div className="modal">
      <div className="modal-content">
      <img  src={data?.profilepicture}  alt="img"/>
    <p> <span className="value">{data?.username}</span></p>
      <p>  <span className="value">{data?.email}</span></p>
        <button onClick={closeModal}>Signout</button>
      </div>
    </div>
  );
}

export default Modal;
