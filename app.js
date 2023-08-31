let usersList=[
    { id: 0, name: 'Alice', }, 
    { id: 1, name: 'Bob', }, 
    { id: 2, name: 'Catherine'},
];

// Simulated user data fetch function (meant to represent an API call)
function fetchUsers(callback) {
    setTimeout(() => {
        callback(usersList);
    }, 1000);
}

// Function to display users
function displayUsers(users) {
    const userListDiv = document.querySelector('#usersList');
    
    //it is done so that users not display more than one times
    userListDiv.innerHTML=''; 
    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `${user.name}`;
        userListDiv.appendChild(userDiv);
    });
}

// Fetch and display users
fetchUsers((users) => {
    displayUsers(users);
}); 


//add users
// Get references to the button and the user form
const openFormButton = document.getElementById('openFormButton');
const userForm = document.querySelector('.user-form');

// Add a click event listener to the button
openFormButton.addEventListener('click', () => {
    // Toggle the visibility of the user form
    userForm.style.display = userForm.style.display === 'none' ? 'block' : 'none';
});

// Handle form submission (you can add your logic here)
const userFormElement = document.getElementById('userForm');
userFormElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting (you can remove this if you want actual form submission)
    
    // Get the user name from the form
    const userName = document.getElementById('userName').value;

    // You can add your logic here to do something with the user name (e.g., add it to a list)
    usersList.push({id:usersList.length,name:userName});
    
    //display users after adding
    displayUsers(usersList);

    // Clear the form
    userFormElement.reset();

    // Hide the form again
    userForm.style.display = 'none';
});