let arr = [3, 4, -6, 10, 2, 9, -5, -1, 7, 8];
let accumulator = 0;
let i = 0;
while(i < arr.length){
    if(arr[i] > 0){
        accumulator += arr[i]
    }
    i++
}
console.log(accumulator)