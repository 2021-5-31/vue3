export default (todoListRef)=>{
    const delTodo =(item)=>{
        todoListRef.value.splice(todoListRef.value.findIndex(n=>n===item),1)
    }
    const clearCompleted = ()=>{
        todoListRef.value = todoListRef.value.filter(item=>!item.completed)

    }
    return{
        delTodo,
        clearCompleted
    }
}