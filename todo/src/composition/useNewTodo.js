import { ref } from 'vue';
import randomID from '../utils/randomID'
export default function useNewTodo(todoListRef) {
    const newTodoRef = ref('')
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return
        }
        const todo = {
            title: value,
            completed: false,
            id: randomID(),
        }
        todoListRef.value.push(todo)
        newTodoRef.value = ''
    }
    return {
        newTodoRef,addTodo
    }
}