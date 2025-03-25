function calcSumEven() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
      numbers.push(i);
    }
  
    let evenSum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      evenSum += num;
    }
  }
  
    document.getElementById("result").textContent = "Even Sum: " + evenSum;
  }
  
  document.getElementById("myButton5").addEventListener("click", calcSumEven);