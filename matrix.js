function filterAndSort(arr) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      filteredArr.push(arr[i]);
    }
  }

  let n = filteredArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (filteredArr[j] > filteredArr[j + 1]) {
        let temp = filteredArr[j];
        filteredArr[j] = filteredArr[j + 1];
        filteredArr[j + 1] = temp;
      }
    }
  }

  return filteredArr;
}

// Contoh penggunaan:
let n = [12, 9, 13, 6, 10, 4, 7, 2];
console.log(filterAndSort(n)); // Output: [2, 4, 7, 10, 13]
