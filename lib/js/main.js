let nav = document.getElementById("topNav");
let main = document.getElementById("main");
let menu = document.getElementsByClassName("menuitems");
let close = document.getElementById("closebtn");
let signUp = document.getElementById("button button-block")

let users = [];
let mentors = [];

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  const menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "290px") {
	nav.style.height = "50px";
	main.style.marginTop = "50px";
	
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "290px";
	main.style.marginTop = "275px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}

};

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
  const button = document.getElementById("getStarted");
  button.addEventListener("click",updateDB);
  
  //Set database object here
  const database = firebase.database().ref();
  
  //store global access
  
  let allMessages = document.getElementsByClassName("allMessages")[0];
  /**
   * Updates the database with the username and message.
   */
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
  // }