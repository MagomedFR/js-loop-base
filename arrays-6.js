const arr = [7, 10, 10, 3, 8, 6, 10, 1, 8, 4];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}
//-----
let i = 0;
while(i < arr.length){
    if(arr[i] % 2 !== 0){
        console.log(arr[i])
    }
    i++
}