import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import TodoForm from './Todoform';
import TodoList from './Listtodo';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
