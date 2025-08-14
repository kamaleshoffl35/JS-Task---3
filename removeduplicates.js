function remove(arr){
    let uniquearr = []
    for(i=0;i<arr.length;i++){
        if(uniquearr.indexOf(arr[i])==-1){
            uniquearr.push(arr[i])
        }
    }
    return uniquearr
}
const numbers = [1,2,3,3,4,5,5]
console.log(remove(numbers))