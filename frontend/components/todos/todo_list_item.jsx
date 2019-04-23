import React from 'react';

class TodoListItem extends React.Component{
    render(){
        // debugger
        return (
            <li>{this.props.todo.title}: <p>{this.props.todo.body}</p></li>               
        )
    }
} 

export default TodoListItem;