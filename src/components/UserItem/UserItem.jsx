import React from 'react';
import deleteIcon from '../../assets/deleteIcon.svg';

const UserItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="p-3 my-3 rounded text-slate-700 border flex justify-between">
      {`${props.user.userName} (${props.user.userAge} years old)`}
      <img
        className="w-3 inline cursor-pointer"
        src={deleteIcon}
        alt="delete-icon"
        onClick={deleteHandler}
      />
    </li>
  );
};

export default UserItem;
