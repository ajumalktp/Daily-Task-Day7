function queueTime(customers, n) {
    let tills = new Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      let minTime = Math.min(...tills);
      let minIndex = tills.indexOf(minTime);
      tills[minIndex] += customers[i];
    }
    return Math.max(...tills);
  }
console.log(queueTime([5,3,4], 1));
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10], 2));
