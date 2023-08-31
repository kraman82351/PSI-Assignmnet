ReadMe

Part1 : Debugging

    Error1 : setTimout
    Correction1 : setTimeout

    Error2 : const userListDiv = document.querySelector('#userList');
    Correction2 : const userListDiv = document.querySelector('#usersList');

    Error3 : userDiv.innerhtml = `${user.name}`;
    Correction3 : userDiv.innerHTML = `${user.name};

    Error4 : fetchUsers((user))
    Correction4 : fetchUsers((users))



Part2 : Feature Enhancement

    1. Add User : 

        * Add User button is given an id of openFormButton on which a 'click' EventListener is added which opens the form for adding user to the list. 

        * Added a submit Handler to the Submit Button of the form, which gets the user name from the form and set its id as the length of the usersList and push the id and name to the usersList.
        
        * saved the added user to the localStorage and display all the current users in the list.
        
        * reset the form and set the display property of the userForm to none so the that the form gets hidden again.

    2. Delete User :

        * Added a delete button along side with each of the name displayed on screen and also a click event listeners to each of the delete buttons.

        * Checks the click event on each of the delete buttons, if any click is detected then by retriving id of that particular user is passed to the deleteUser function.

        * In the deleteUser function, using the id first I get the index of that id and delete the element on that particular index.

        * After deletion I again map the userId(index) with user name and save the data in the localStorage and agin display the users. 

    3. Search User :

        * Added a serach bar which helps to search user from the list and also added a search button with a click event listener.

        * On click of search button, first I got the string entered in the search bar and checks which names include the enterd string and display those filtered names.