function calcSum() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
      numbers.push(i);
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    document.getElementById("result").textContent = "Sum: " + sum;
  }
  
  document.getElementById("myButton").addEventListener("click", calculateSum);