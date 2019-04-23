import React from 'react'
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{

    render(){
       return (
        <div>
           <TodoForm receiveTodo={this.props.receiveTodo}/>
           <ul>
               {this.props.todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)}
           </ul>
        </div>
       )
    }
}

export default TodoList;