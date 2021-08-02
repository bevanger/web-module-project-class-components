import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue:""
        }
    }
    handleChanges = evt => {
        this.setState({
            ...this.state,
            inputValue: evt.target.value
        })
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.props.handleAddTask(this.state.inputValue);
    }
    render() {
        return(
            <form>
                <input
                onChange={this.handleChanges}
                type="text"
                name="task"
                />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}
export default TodoForm;