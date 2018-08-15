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
      console.log(user);
      console.log(firstName);
      console.log(lastName);
      console.log(gender);
      console.log(age);
      console.log(phone);
      console.log(email);
      console.log(field);
      console.log(specific);
      console.log(school);
      console.log(degrees);
      let container = document.getElementById("mentorList");
      let userContainer = document.createElement("div");
      let headerTag = document.createElement("h3");
      let userImg = document.createElement("img");
      let userInfo = document.createElement("p");
      headerTag.innerHTML = firstName + " " + lastName;
      userContainer.className = "mentors";
      userImg.src = user.picture;
      userInfo.innerHTML = gender + '<br>' + "AGE: " + age + '<br>' + email + '<br>' +  field + '<br>' + specific;
      container.appendChild(userContainer);
      userContainer.appendChild(headerTag);
      userContainer.appendChild(userImg);
      userContainer.appendChild(userInfo);
      //if key is present, push to array, else make new arr
      if(Object.keys(firstNameAccess).includes(firstName)){
          let obj = {first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees};
          firstNameAccess[firstName].push(obj);
      }else{
          firstNameAccess[firstName] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}];
      }
      if(Object.keys(lastNameAccess).includes(lastName)){
          lastNameAccess[lastName].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          lastNameAccess[lastName] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(genderAccess).includes(gender)){
          genderAccess[gender].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          genderAccess[gender] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(imageAccess).includes(image)){
          imageAccess[image].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          imageAccess[image] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(fieldAccess).includes(field)){
          fieldAccess[field].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          fieldAccess[field] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(emailAccess).includes(email)){
          emailAccess[email].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          emailAccess[email] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(ageAccess).includes(age)){
          ageAccess[age].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          ageAccess[age] = [{first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}]
      }
      if(Object.keys(phoneAccess).includes(phone)){
          phoneAccess[phone].push({first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees});
      }else{
          phoneAccess[phone] = {first:firstName, last: lastName, gender: gender, image: image, field: field, email: email, age: age, phone: phone, specifc: specific, school: school, degrees: degrees}
      }
  }
}

createMentorArray(mentors);