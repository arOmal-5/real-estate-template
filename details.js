let selectedBHK = "";
let selectedFurnishing = "";
let selectedPropertyType = "";

function selectBHK() {
    const bhkSelect = document.getElementById('bhk');
    selectedBHK = bhkSelect.value;
}

function selectFurnishing(furnishing) {
    selectedFurnishing = furnishing;
    // Highlight selected furnishing option (optional)
    const furnishingItems = document.querySelectorAll('.furnishing-item');
    furnishingItems.forEach(item => item.classList.remove('selected'));
    event.currentTarget.classList.add('selected'); // Highlight selected
}

function selectPropertyType() {
    const propertyTypeSelect = document.getElementById('property-type');
    selectedPropertyType = propertyTypeSelect.value;
}

function goToPredictionPage() {
    // Show loading overlay
    document.getElementById('loading-overlay').style.display = 'flex';

    // Check if all details are filled
    if (!selectedBHK || !selectedFurnishing || !selectedPropertyType) {
        alert("Please fill in all the details");
        document.getElementById('loading-overlay').style.display = 'none'; // Hide loading overlay
        return;
    }

    // Simulate loading time before redirecting
    setTimeout(() => {
        // Redirect to the prediction page
        window.location.href = 'prediction.html';
    }, 2000); // 2 seconds delay
}
