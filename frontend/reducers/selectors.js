


export const allTodos = state => {
    return (
        Object.keys(state.todos).map((id) => {
        // debugger
        return state.todos[id];
    }))
}