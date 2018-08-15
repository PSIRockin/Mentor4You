let nav = document.getElementById("topNav");
let main = document.getElementById("main");
let menu = document.getElementsByClassName("menuitems");
let close = document.getElementById("closebtn");
let signUp = document.getElementById("button button-block")


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

// function mentorIdGen(){
//     return "id-" + Math.random().toString(36).substr(2, 16);
// }


// for(i = 0; i < mentors.length; i++){
//     setMentor(mentors[i]);
// }


// function setMentor(mentors){

//     let uid = mentorIdGen();

//     const database = firebase.database();

//     database.ref('mentors/' + uid).set({
//         uid :  uid,
//         first_name : mentors.name.first,
// 		last_name : mentors.name.last,
// 		gender: mentors.gender,
// 		age: mentors.age,
// 		image: mentors.picture,
// 		phone: mentors.phone,
// 		email: mentors.email,
// 		field: mentors.areaOfStudy,
// 		specific: mentors.specific,
// 		school: mentors.school,
// 		degrees: mentors.degrees,
// 		phone: mentors.phone,
// 		picture: mentors.picture,
// 		areaOfStudy: mentors.areaOfStudy

//     })
// }