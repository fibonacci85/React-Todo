import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css'




const todos = [
  {
    task:"Learn React Class Components",
    id: 123,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
   todos:todos
  }
}

handleItemAdd = (itemName) => {
  const item = {
    task: itemName,
    id: this.state.todos.length,
    completed: false
  };

  const newTodos = [...this.state.todos, item];

  this.setState({
    todos: newTodos
  });
};

handleItemToggle = (itemId) => {
  this.setState({
    todos: this.state.todos.map(item=>{
      if(item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return(item)
    })
  });
}

handleItemCompleted = () => {
  const newTodos = this.state.todos.filter(item => {
    return(!item.completed);
  })
  this.setState({
    todos: newTodos
  })
}


  render() {
    return (
      <div className="App">
        <h1>My Daily To-Do List</h1>
        <TodoForm handleItemAdd={this.handleItemAdd} />
        <TodoList todos={this.state.todos} handleItemToggle={this.handleItemToggle} handleItemCompleted={this.handleItemCompleted} />
      </div>
    );
  }
}

export default App;
