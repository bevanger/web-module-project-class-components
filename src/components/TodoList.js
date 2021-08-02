// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    const handleClick = () => {
        props.handleClear();
    }
    return(
        <div>
            {props.tasks.map(task => (
                <Todo handleCompleted={props.handleCompleted} key={task.id} task={task}/>
                ))}
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
}
export default TodoList;