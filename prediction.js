document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    const selectedCity = localStorage.getItem('selectedCity');
    const selectedBHK = localStorage.getItem('selectedBHK');
    const selectedFurnishing = localStorage.getItem('selectedFurnishing');
    const selectedPropertyType = localStorage.getItem('selectedPropertyType');

    // Simulate estimated property price calculation (for demonstration)
    const estimatedPrice = Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000; // Random price between 1,000,000 and 10,000,000
    
    // Construct the result message
    const resultMessage = `
        <p>City: <strong>${selectedCity}</strong></p>
        <p>Number of BHK: <strong>${selectedBHK}</strong></p>
        <p>Furnishing Type: <strong>${selectedFurnishing}</strong></p>
        <p>Property Type: <strong>${selectedPropertyType}</strong></p>
        <h3>Estimated Property Price: <span class="price">₹${estimatedPrice.toLocaleString()}</span></h3>
    `;

    // Display the result message
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultMessage;
});

// Function to go back to the previous page
function goBack() {
    window.history.back(); // This will take the user back to the previous page
}
