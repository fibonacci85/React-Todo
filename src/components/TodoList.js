import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const handleClick = () => {
        props.handleItemCompleted();
    }
   
    return(

        <div className="shopping-list">
          {props.todos.map(item => (
             <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} /> 
          ))} 
          <button onClick={handleClick}>Clear Finished</button>
           
        </div>
       
    );
}

export default TodoList;