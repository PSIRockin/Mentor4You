console.log("Called")
let firstNameAccess = {};
let lastNameAccess = {};
let genderAccess = {};
let imageAccess = {};
let fieldAccess = {};
let emailAccess = {};
let ageAccess = {};
let phoneAccess = {};

function createMentorArray(list){
  for(let i = 0; i < list.length; i++){
      let user = list[i];
      let firstName = user.name.first;
      let lastName = user.name.last;
      let gender = user.gender;
      let age = user.age;
      let image = user.picture;
      let phone = user.phone;
      let email = user.email;
      let field = user.areaOfStudy;
      let specific = user.specific;
      let school = user.school;
      let degrees = user.degrees;
      let indexNumber = user.id;

      let container = document.getElementById("mentorList");
      let yourContainer = document.getElementById("myMentorList");
      let userContainer = document.createElement("div");
      let headerTag = document.createElement("h3");
      let userImg = document.createElement("img");
      let userInfo = document.createElement("p");
      let addButton = document.createElement("button");
      let emailLink = document.createElement("a");

      headerTag.innerHTML = firstName + " " + lastName;
      userContainer.className = "mentors";
      addButton.className = "addB";
      addButton.id = indexNumber;
      userImg.src = user.picture;
      userInfo.innerHTML = gender + '<br>' + "AGE: " + age + '<br>' + school + '<br>' + field + '<br>' + specific;
      addButton.innerHTML = "Add Mentor To List";
      emailLink.href = "mailto:" + email;
      emailLink.innerHTML = email;
      container.appendChild(userContainer);
      userContainer.appendChild(headerTag);
      userContainer.appendChild(userImg);
      userContainer.appendChild(userInfo);
      userContainer.appendChild(emailLink);
      userContainer.appendChild(addButton);



      //if key is present, push to array, else make new arr
    //   if(Object.keys(firstNameAccess).includes(firstName)){
    //       let obj = {first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees};
    //       firstNameAccess[firstName].push(obj);
    //   }else{
    //       firstNameAccess[firstName] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}];
    //   }
    //   if(Object.keys(lastNameAccess).includes(lastName)){
    //       lastNameAccess[lastName].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       lastNameAccess[lastName] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(genderAccess).includes(gender)){
    //       genderAccess[gender].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       genderAccess[gender] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(imageAccess).includes(image)){
    //       imageAccess[image].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       imageAccess[image] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(fieldAccess).includes(field)){
    //       fieldAccess[field].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       fieldAccess[field] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(emailAccess).includes(email)){
    //       emailAccess[email].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       emailAccess[email] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(ageAccess).includes(age)){
    //       ageAccess[age].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       ageAccess[age] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
    //   }
    //   if(Object.keys(phoneAccess).includes(phone)){
    //       phoneAccess[phone].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
    //   }else{
    //       phoneAccess[phone] = {first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}
    //   }
  }
  // let button = document.querySelectorAll("button");
  // button.addEventListener("click", addToList);
  
  // function addToList(){
  //   console.log(button.id);
  // }
}

createMentorArray(mentors);

let firstButton = document.getElementById("zero");
firstButton.addEventListener("click", redirect1);
function redirect1(){
  window.location = "myMentor1.html";
}

let secondButton = document.getElementById("one");
secondButton.addEventListener("click", redirect2);
function redirect2(){
  window.location = "myMentor2.html";
}

let thirdButton = document.getElementById("two");
thirdButton.addEventListener("click", redirect3);
function redirect3(){
  window.location = "myMentors.html";
}

// function mentorIdGen(){
//     return "id-" + Math.random().toString(36).substr(2, 16);
// }

// console.log(mentors.length);
// for(i = 0; i < 6; i++){
//     console.log("hnnnnnng")
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
// 		areaOfStudy: mentors.areaOfStudy
//     })
// }

