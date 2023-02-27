import React, { useState } from 'react';
import backgroundImage from './assets/background.webp';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UsersList/UsersList';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [usersArray, setUsersArray] = useState([
    { userName: 'Ali Ahmad', userAge: 28, id: 'user-01' },
    { userName: 'Mahmoud Abbas', userAge: 35, id: 'user-02' },
    { userName: 'Khalil', userAge: 36, id: 'user-03' },
  ]);

  const addUserHandler = formData => {
    if (
      formData.userAge.trim().length === 0 ||
      formData.userName.trim().length === 0
    ) {
      setModalMessage('Please enter both the username and age submitting.');
      setShowModal(true);
      return;
    }
    if (formData.userAge <= 17 || formData.userAge >= 120) {
      setModalMessage('Please enter a valid age (17 and above)');
      setShowModal(true);
      return;
    }
    setUsersArray(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        userName: formData.userName,
        userAge: formData.userAge,
        id: Math.random(),
      });
      return updatedUsers;
    });
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  const deleteItemHandler = userId => {
    setUsersArray(prevUsers => {
      const updatedUsers = prevUsers.filter(goal => goal.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <div className={`wrapper mx-auto font-body ${showModal ? '' : ''}`}>
      <div className="mx-auto  max-w-sm sm:max-w-lg mb-10 relative">
        <h1 className="text-center font-bold text-lg my-5">Users Tracker</h1>
        <div className="text-center border border-slate-400 rounded-lg p-3 sm:p-5 mb-6">
          <UserInput onAddUser={addUserHandler} users={usersArray} />
        </div>
        <div className="text-center border border-slate-400 rounded-lg p-3 sm:p-5">
          <p className="mb-2 font-bold">Current Users</p>
          <UsersList users={usersArray} onDeleteItem={deleteItemHandler} />
        </div>
        {showModal ? (
          <Modal
            showModal={showModal}
            modalMessage={modalMessage}
            handleModalClick={handleModalClick}
          />
        ) : (
          ''
        )}
        {/* <Modal /> */}
      </div>
    </div>
  );
}

export default App;
