// Booking form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle booking logic here

  // Prompt user for location
  const location = prompt('Please enter your location:');
  
  // Display confirmation dialog if location is provided
  if (location) {
    const confirmDialog = confirm('Your vaccination appointment is booked! Do you want to select the nearest hospitals?');

    // Check user's choice
    if (confirmDialog) {
      // Redirect or perform further actions to select nearest hospitals
      alert('Redirecting to the nearest hospitals page...');
      // Replace the alert with your desired code to redirect or perform actions
    }
  } else {
    alert('Location is required.');
  }
});
