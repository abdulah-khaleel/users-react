import React from 'react';
import UserItem from '../UserItem/UserItem';

const UsersList = props => {
  const usersListEl = props.users.map(user => (
    <UserItem user={user} key={user.id} />
  ));

  return (
    <div className="container text-sm">
      <ul className="text-left">{usersListEl}</ul>
    </div>
  );
};

export default UsersList;
