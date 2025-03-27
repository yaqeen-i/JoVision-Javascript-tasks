function submitForm(){

    const Name = document.getElementById("nameD").value;
    const age = document.getElementById("ageD").value;

    const userData = {
        name: Name,
        age: age,
        timestamp: new Date().toLocaleString()
    };
    
    const { name: userName, age: userAge, timestamp: userTimestamp } = userData;

    alert(`Your name is: ${userName}\nYour age is: ${userAge}\nTimestamp: ${userTimestamp}`);
}
