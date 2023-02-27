import React from 'react';
import UserItem from '../UserItem/UserItem';

const UsersList = props => {
  let usersListEl = (
    <p className="text-center italic my-12 ">
      No registered users. Use the form above to add a new user.
    </p>
  );

  if (props.users.length > 0) {
    usersListEl = props.users.map(user => (
      <UserItem
        user={user}
        key={user.id}
        id={user.id}
        onDelete={props.onDeleteItem}
      />
    ));
  }

  return (
    <div className="container text-sm">
      <ul className="text-left">{usersListEl}</ul>
    </div>
  );
};

export default UsersList;
