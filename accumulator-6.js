let arr = [2, 7, 5, 10, 9, 4, 6, 8, 1, 3];
let accumulatorOdd = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
        accumulatorOdd += arr[i]
    }
}
console.log(accumulatorOdd)