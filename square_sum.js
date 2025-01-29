function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num ** 2, 0);
}
console.log(sumOfSquares([1, 2, 3, 4]))
