function findCount(arr) {
    const countMap = new Map();
  
    for (let num of arr) {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    }
  
    return countMap;
  }
  
  // Example usage:
  const arr = [3, 3, 3, 5, 5];
  const countMap = findCount(arr);
  
  // Print the counts
  countMap.forEach((count, num) => {
    console.log(`Number ${num} appears ${count} times.`);
  });
  