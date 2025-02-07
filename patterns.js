// 2

// A
const patternA = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
};

patternA(5);
console.log(" ");

//B
const patternB = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
};
patternB(5);
console.log(" ");

//C
const patternC = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    if (i % 2 === 0) {
      let start = i;
      for (let j = 1; j <= i; j++) {
        row += start;
        start++;
      }
    } else {
      let mid = Math.floor(i / 2);
      let start = i - mid;

      for (let j = 1; j <= i; j++) {
        row += start;
        if (j <= mid) {
          start++;
        } else {
          start--;
        }
      }
    }
    console.log(row);
  }
};

patternC(5);
console.log(" ");

//D
const patternD = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      let base = j * n + 1;
      let value;

      if (j % 2 === 0) {
        value = base + (i - 1);
      } else {
        value = base + (n - i);
      }
      row += value + (j < n - 1 ? " " : "");
    }
    console.log(row);
  }
};
patternD(5);
console.log(" ");
