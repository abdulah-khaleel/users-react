import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import backgroundImage from './assets/background.webp';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UsersList/UsersList';

import './App.css';

function App() {
  const [usersArray, setUsersArray] = useState([
    { userName: 'Ali Ahmad', userAge: 28, id: 'user-01' },
    { userName: 'Mahmoud Abbas', userAge: 35, id: 'user-02' },
    { userName: 'Khalil', userAge: 36, id: 'user-03' },
  ]);

  return (
    <div className="wrapper mx-auto font-body ">
      <div className="mx-auto  max-w-sm sm:max-w-lg">
        <h1 className="text-center font-bold text-lg my-5">Users Tracker</h1>
        <div className="text-center border border-slate-400 rounded-lg p-3 sm:p-5 mb-6">
          <UserInput users={usersArray} />
        </div>
        <div className="text-center border border-slate-400 rounded-lg p-3 sm:p-5">
          <p className="mb-2 font-bold">Current Users</p>
          <UsersList users={usersArray} />
        </div>
      </div>
    </div>
  );
}

export default App;
