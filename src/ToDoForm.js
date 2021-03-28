import React, { useState } from 'react';



const ToDoForm = ({ addTask }) => {

  const[userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    // prevent default is used to prevent the deault behavior of the event, in this case
    // prevent submit from reloading the page
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
    return (
      <form onSubmit = {handleSubmit}>
        <input value={userInput} type='text' onChange={handleChange} placeholder='Enter task...'/>
        <button>Submit</button>
      </form>
    );
  

}

export default ToDoForm;