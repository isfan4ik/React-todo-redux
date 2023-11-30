import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoActions';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
