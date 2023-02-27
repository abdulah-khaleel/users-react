import React from 'react';
import Button from '../UI/Button';

const Modal = props => {
  return (
    <div className="">
      <div className="text-center border border-slate-400 bg-white rounded-lg p-3 sm:p-5 mb-6 absolute top-1">
        <h1 className="font-bold mb-3">User Error</h1>
        <p className="mb-3">{props.modalMessage}</p>
        <Button handleModalClick={props.handleModalClick}>Ok</Button>
      </div>
    </div>
  );
};

export default Modal;
