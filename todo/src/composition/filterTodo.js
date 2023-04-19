import { ref, onMounted, onUnmounted, computed } from 'vue';
import filter from '../utils/filter'
export default ({ value: todoListRef }) => {
    const selectRef = ref('all')
    const hashArr = ['all', 'active', 'completed'];

    const hashChange = () => {
        const hash = location.hash.replace(/#\//, '');
        if (hashArr.includes(hash)) {
            selectRef.value = hash
        } else {
            location.hash = ''
            selectRef.value = 'all'
        }
        

    }
    onMounted(() => {
        window.addEventListener('hashchange', hashChange)
    })
    onUnmounted(() => {
        window.removeEventListener('hashchange', hashChange)
    })
    const filteredTodoRef = computed(() => {
        return filter(selectRef.value,todoListRef)
    })
    const leftTodoRef = computed(() => {
        return filter('active',todoListRef).length
    })
    const clearCompletedRef = computed(() => {
        return filter('completed',todoListRef).length
    })
    return {
        filteredTodoRef,
        selectRef,
        leftTodoRef,
        clearCompletedRef,
    }
}