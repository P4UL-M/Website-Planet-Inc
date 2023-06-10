function addRequest() {
    // Get form input values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const selectElement = document.getElementById("country");
    const country = selectElement.options[selectElement.selectedIndex].textContent;
    const message = document.getElementById("message").value;

    // Get the table body
    const tableBody = document.getElementById("requests-table").getElementsByTagName("tbody")[0];

    // Create a new row
    const newRow = document.createElement("tr");

    // Create table cells
    const indexCell = document.createElement("td");
    const firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const countryCell = document.createElement("td");
    const messageCell = document.createElement("td");

    // Set cell values
    indexCell.textContent = tableBody.rows.length + 1; // Increment index for each new row
    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    emailCell.textContent = email;
    countryCell.textContent = country;
    // make the text less than 20 characters long and add "..." to the end
    messageCell.textContent = (message.length > 20 ? message.substring(0, 20) + "..." : message) || "None";

    // Append cells to the new row
    newRow.appendChild(indexCell);
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(countryCell);
    newRow.appendChild(messageCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear form inputs
    document.getElementById("request-form").reset();


    // Save the request to localStorage
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push({
        firstName,
        lastName,
        email,
        country,
        message,
    });
    localStorage.setItem("requests", JSON.stringify(requests));
}

function loadRequests() {
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    const tableBody = document.getElementById("requests-table").getElementsByTagName("tbody")[0];

    // Iterate over the requests and add them to the table
    requests.forEach((request, index) => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${request.firstName}</td>
        <td>${request.lastName}</td>
        <td>${request.email}</td>
        <td>${request.country}</td>
        <td>${request.message.length > 20 ? request.message.substring(0, 20) + "..." : request.message || "None"}</td>
      `;
    });
}

// Add event listener to form reset
document.getElementById("request-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addRequest();
});

// Load requests when the page starts
window.addEventListener("DOMContentLoaded", function () {
    loadRequests();
});