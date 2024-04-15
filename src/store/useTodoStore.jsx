import create from "zustand"

export const useTodoStore = create((set) => ({
  todos: [{
    todo: '',
    complete: false
  }],
  addTodo: (todo) => { 
    set(state => ({todos: [...state.todos, todo]}))
  },
  deleteTodo: (index) => {
    set(state => {
      const newTodo = [...state.todos]
      newTodo.splice(index,1)
      return {todos: newTodo}
    })
  },
  completeTodo: (index, complete) => {
    set(state => {
      const updatedTodos = [...state.todos];
      updatedTodos[index].complete = complete;
      return { todos: updatedTodos };
    });
  },
}))
