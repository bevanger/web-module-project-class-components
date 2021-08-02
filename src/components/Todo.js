import React from 'react';

const ToDo = props => {
 const handleCLick = () => {
     props.handleCompleted(props.task.id);
     console.log(props.task.id)
 }
    return (
        <div onClick={handleCLick} className={`task${props.task.completed ? ' completed ' : ''}`}>
           <p>{props.task.task}</p> 
        </div>
    );
};
export default ToDo;