import React from 'react';
import Button from '../UI/Button';

const Modal = props => {
  return (
    <div className="">
      <div className="text-center  border-slate-400 bg-gray-600 fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full ">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {props.modalMessage[0]}
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">{props.modalMessage[1]}</p>
            </div>
            <div className="items-center px-4 py-3">
              <Button handleModalClick={props.handleModalClick}>Ok</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
