const key = 'todo'
export function getTodo(){
    const result = localStorage.getItem(key)
    if(result){
        return JSON.parse(result)
    }
    return []
}
export function addLocalStorage(value){
    localStorage.setItem(key,JSON.stringify(value))
}