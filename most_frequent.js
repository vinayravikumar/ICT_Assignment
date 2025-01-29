function mostFrequentItem(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach(item => {
        freqMap[item] = (freqMap[item] || 0) + 1;
        if (freqMap[item] > maxCount) {
            maxCount = freqMap[item];
            mostFrequent = item;
        }
    });
    return mostFrequent;
}
console.log(mostFrequentItem([3, 3, 2, 1, 3, 2, 2, 2, 2]))