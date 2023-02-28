import React from 'react';
import Button from '../UI/Button';

const Modal = props => {
  return (
    <div className="">
      <div className="text-center  border-slate-400 bg-gray-600 fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full ">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div class="mt-3 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {props.modalMessage[0]}
            </h3>
            <div class="mt-2 px-7 py-3">
              <p class="text-sm text-gray-500">{props.modalMessage[1]}</p>
            </div>
            <div class="items-center px-4 py-3">
              <Button handleModalClick={props.handleModalClick}>Ok</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
