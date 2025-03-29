document.getElementById("submitBtn").addEventListener("click", fetchAge);

function fetchAge() {
    const enteredName = document.getElementById("name").value;

    if (!enteredName) {
        alert("Please enter a name.");
        return;
    }

    const apiUrl = `https://api.agify.io?name=${enteredName}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data); 

            const { name, age } = data;

            if (age === null) {
                alert(`No age prediction available for the name: ${name}`);
            } else {
                alert(`Your name is: ${name}\nYour predicted age is: ${age}`);
            }
        })
        .catch(error => {
            console.error("Error fetching age:", error);
            alert("An error occurred while fetching age prediction.");
        });
}
