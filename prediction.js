document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    const selectedCity = localStorage.getItem('selectedCity');
    const selectedBHK = localStorage.getItem('selectedBHK');
    const selectedFurnishing = localStorage.getItem('selectedFurnishing');
    const selectedPropertyType = localStorage.getItem('selectedPropertyType');

    // Simulate estimated property price calculation (for demonstration)
    const estimatedPrice = Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000; // Random price between 1,000,000 and 10,000,000
    
    // Construct the result message with compact details
    const resultMessage = `
        <p><strong>${selectedCity}</strong> | <strong>${selectedBHK} BHK</strong> | <strong>${selectedFurnishing}</strong> | <strong>${selectedPropertyType}</strong></p>
        <h3>Estimated Property Price: <span class="price">₹${estimatedPrice.toLocaleString()}</span></h3>
    `;

    // Display the result message
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultMessage;
});
