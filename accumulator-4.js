let arr = ['Аня', 'Вася', 'Анатолий', 'Саша', 'Юля', 'Гена'];
let accumulator = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i][0].toLowerCase() == 'а') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)