// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // You can add your logic for form submission here, like sending the data to a server or displaying a thank you message.
    // For demonstration purposes, let's just log the form data to the console.

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    console.log(formDataObject);

    // Clear the form fields after submission
    event.target.reset();
});
