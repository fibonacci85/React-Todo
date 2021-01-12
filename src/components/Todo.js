import React from 'react';
import './Todo.css'


const Todo = (props) => {

    const handleClick = () => {
        props.handleItemToggle(props.item.id);
    }

return(
    <div onClick={handleClick} className={`item${props.item.completed ? 'completed' : ''}`}>
        <h2>{props.item.task}</h2>
    </div>
)
}

export default Todo;