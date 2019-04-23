import {connect} from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {receiveTodo} from '../../actions/todo_actions'
// return pojo
const mapStateToProps = state => (
    {todos: allTodos(state)}
);


const mapDispatchProps = dispatch =>(
    {receiveTodo: (todo)=> dispatch(receiveTodo(todo))}
)

export default connect (
    mapStateToProps,mapDispatchProps
)(TodoList);