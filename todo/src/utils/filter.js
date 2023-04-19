export default (select,todoListRef)=>{
    if (select === 'all') {
        return todoListRef;
    } else if (select === 'active') {
        return todoListRef.filter(item => !item.completed)
    } else if (select === 'completed') {
        return todoListRef.filter(item => item.completed)
    } else {
        throw new Error('hash of invalid')
    }
}