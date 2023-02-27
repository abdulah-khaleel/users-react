import React, { useState } from 'react';
import Button from '../UI/Button';

const UserInput = props => {
  const [enteredValue, setEnteredValue] = useState({
    userName: '',
    userAge: '',
  });

  const inputChangeHandler = event => {
    console.log(event.target.value);
    const { name, value, type } = event.target;
    setEnteredValue(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(enteredValue);
    props.onAddUser(enteredValue);
  };

  return (
    <form className="text-sm sm:text-md" onSubmit={formSubmitHandler}>
      <div className="text-left mb-6">
        <label className="block mb-1">
          <span className="text-sm ml-1">Enter your Username</span>
        </label>
        <input
          type="text"
          name="userName"
          className="border rounded-lg p-2 w-full shadow-inner"
          placeholder="Username here .."
          onChange={inputChangeHandler}
          value={enteredValue.userName}
        />
      </div>

      <div className="text-left mb-6 ">
        <label className="block mb-1">
          <span className="text-sm ml-1">Your Age (In Years)</span>
        </label>
        <input
          type="number"
          name="userAge"
          className="border rounded-lg p-2 w-full shadow-inner"
          placeholder="Age here .."
          onChange={inputChangeHandler}
          value={enteredValue.userAge}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
