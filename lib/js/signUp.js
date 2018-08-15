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
const firstNameElement = document.getElementById("firstName").value;
const lastNameElement = document.getElementById("lastName").value;
const emailElement = document.getElementById("email").value;
const passwordElement = document.getElementById("password").value;
const button = document.getElementById("getStarted").value;
// let userId = userIdGen();

// function userIdGen(){
//     return "id-" + Math.random().toString(36).substr(2, 16);
// };

//figure out how to stop producing data everytime submit clicked;
button.addEventListener("click", updateDB);

//Set database object here
const database = firebase.database();

//store global access

function updateDB(e){
    e.preventDefault();


    firebase.auth.createUserWithEmailAndPassword(emailElement, passwordElement).then(function(data){
        const user = firebase.auth().currentUser;
        database.ref('users/' + userId).set({
            user_id : userId,
            first_name: firstNameElement,
            last_name: lastNameElement,
            email: emailElement,
            password: passwordElement
        });
    });
}



