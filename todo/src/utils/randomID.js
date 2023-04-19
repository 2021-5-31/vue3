export default function randomID(){
    const str = Math.random().toString(16)
    return Date.now() + str.substr(2,6)

}
