document.addEventListener('DOMContentLoaded', function () {
    const eventForm = document.getElementById('eventForm');
    const eventDetails = document.getElementById('eventDetails');

    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventDescription = document.getElementById('eventDescription').value;

        // Create an object with the form data
        const eventData = {
            name: eventName,
            date: eventDate,
            location: eventLocation,
            description: eventDescription
        };

        // Display event details
        const detailsHTML = `
        <div class="details">
            <h2>${eventData.name}</h2>
            <p><strong>Date:</strong> ${eventData.date}</p>
            <p><strong>Location:</strong> ${eventData.location}</p>
            <p><strong>Description:</strong><br>${eventData.description}</p>
       </div> `;

        eventDetails.innerHTML = detailsHTML;
        eventForm.reset();
    });
});
