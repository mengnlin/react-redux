import React from 'react';
import { uniqueId } from '../../util/uniqueID';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            id: uniqueId()
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            title: "",
            body: "",
            done: false,
            id: uniqueId()
        });
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    updateBody(e) {
        this.setState({
            body: e.target.value
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" onChange={this.updateTitle} value={this.state.title}/>
                </label>
                <label>
                    Body:
                    <textarea type="text" onChange={this.updateBody} />
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default TodoForm;