import {computed, ref} from 'vue';
export default (todoListRef)=>{
    let originTitle = null;
    const editingTodoRef = ref(null);
    const editing = (item)=>{
        originTitle = item.title;
        editingTodoRef.value = item
        
    }
    const doneEdit = (item)=>{
        if(!item.title && todoListRef.value.findIndex(n=>n===item) !== -1){
            todoListRef.value.splice(todoListRef.value.findIndex(n=>n===item),1)
        }

        editingTodoRef.value = null
        
    }
    const escapeEdit = (item)=>{
        item.title = originTitle;
        editingTodoRef.value = null
    }
    const allDoneRef = computed({
        get(){
            return todoListRef.value.filter(item=>!item.completed).length === 0
        },
        set(checked){
            todoListRef.value.forEach(item =>item.completed = checked)
        }
    })
    return {
        editingTodoRef,
        allDoneRef,
        editing,
        doneEdit,
        escapeEdit,

    }
}