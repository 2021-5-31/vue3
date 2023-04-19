import {ref,watchEffect} from 'vue'
import {getTodo,addLocalStorage} from '../utils/setLocalStorage'
export default function(){
    const todoListRef = ref(getTodo())
    watchEffect(()=>{
        addLocalStorage(todoListRef.value)
    })
    return {
        todoListRef,
    }
}