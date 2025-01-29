function isFirstElementPrime(arr) {
    if (arr.length === 0) return false;
    let num = arr[0];
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isFirstElementPrime([1,2,3,4]));