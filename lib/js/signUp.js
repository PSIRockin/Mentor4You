//   <STORING SIGN-UPS>
const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const button = document.getElementById("getStarted");
let uId = function(){
    return "id-" + Math.random().toString(36).substr(2, 16);
};
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database();

//store global access

function updateDB(e){
    e.preventDefault();
    database.ref('users/' + uId).set({
        FIRST_NAME: firstNameElement,
        last_name: lastNameElement,
        email: emailElement,
        password: passwordElement
    });
}



/**
 * Updates the database with the username and message.
 *
function updateDB(event){
    event.preventDefault();
    const firstName        = firstNameElement.value;
    const lastName         = lastNameElement.value;
    const email        = emailElement.value;
    const password        = passwordElement.value;

    firstNameElement.value = "";
    lastNameElement.value  = "";
    emailElement.value = "";
    passwordElement.value  = "";

    console.log(firstName + " : " + lastName);

    //make my JSON to push
    let messageJSON = {
       FIRST: firstName,
       LAST: lastName,
       EMAIL: email,
       PASSWORD: password
    }
    //Update database here
    database.push(messageJSON);
    window.location.href = "https://psirockin.github.io/Mentor4You/search.html";
}

// Set database "child_added" event listener here
// database.on("child_added", addMessageToBoard);

// function addEventListener(rowData){
//     const data = rowData.val();
//     console.log(data);
//     const firstName = data.FIRST;
//     const lastName = data.LAST;
//     const email = data.EMAIL;
//     const password = data.PASSWORD;
//     let p = document.createElement("P");
//     p.innerText = `${name}: ${message}`;
//     allMessages.appendChild(p);
//     //build a paragraph and append to ".allMessages"
// }*/