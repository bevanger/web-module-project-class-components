import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const tasks = [
  {
    task: 'Clean Kitchen',
    id: 12345,
    completed: false
  },
  {
    task: 'Clean Bathroom',
    id: 123456,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 1234567,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 12345678,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === id){
          return ({
            ...task,
            completed: !task.completed
          });
        }
        return task;
      })
    });
  }

  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return(task.completed === false);
      })
    });
  }
  render() {
    return (
      <div>
        <h1 className="header">ToDo List</h1>
        <TodoForm handleAddTask={this.handleAddTask}/>
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} tasks={this.state.tasks}/>
      </div>
    );
  }

}

export default App;
