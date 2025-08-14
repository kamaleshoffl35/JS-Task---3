function printkeys(obj){
    let keys = Object.values(obj)
    for(i=0;i<keys.length;i++){
        console.log(keys[i] )
    }
}
let person = {
    'name':'Kamalesh',
    'age' : '21',
    'location':'Mannargudi'
}
printkeys(person)