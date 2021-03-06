$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

//   <STORING SIGN-UPS>
const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const signUpBtn = document.getElementById("getStarted");
const logInBtn = document.getElementById("logIn");
const signUpRedirect = "search.html";
const logInRedirect = "myMentors.html";

// let userId = userIdGen();

// function userIdGen(){
//     return "id-" + Math.random().toString(36).substr(2, 16);
// };

//figure out how to stop producing data everytime submit clicked;
signUpBtn.addEventListener("click", userSignUp);
logInBtn.addEventListener("click", userLogIn);
//Set database object here
const database = firebase.database();

//store global access

function userSignUp(e){
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(emailElement.value, passwordElement.value).then(function(data){
        const user = firebase.auth().currentUser;
    
        database.ref('users/' + user.uid).set({
            first_name: firstNameElement.value,
            last_name: lastNameElement.value,
            email: emailElement.value,
        });
        
    if (value == ""){
        window.location.href = signUpRedirect;
    }else{
        alert("Please Fill In All The Fields");
    }
    });

    return false;
}

const logInEmail =  document.getElementById("logInEmail");
const logInPassword =  document.getElementById("logInPassword");


function userLogIn(e){
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(logInEmail.value, logInPassword.value).then(function(data){
        const user = firebase.auth().currentUser;
        window.location.href = signUpRedirect;
    });
    return false;
}

