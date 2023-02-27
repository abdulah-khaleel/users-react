import React from 'react';

const Button = props => {
  return (
    <button className="text-white p-3 bg-slate-600 rounded-lg shadow-lg hover:bg-slate-700 transition duration-200">
      {props.children}
    </button>
  );
};

export default Button;
