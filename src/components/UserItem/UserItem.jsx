import React from 'react';

const UserItem = props => {
  return (
    <li className="p-3 my-3 rounded text-slate-700 border ">
      {`${props.user.userName} (${props.user.userAge} years old)`}
    </li>
  );
};

export default UserItem;
