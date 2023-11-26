document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
  });
});


function load(){
var nameRetrived=localStorage.getItem('Uname');
var name1='';
name1=nameRetrived.charAt(0).toUpperCase() + nameRetrived.slice(1,nameRetrived.length);
document.getElementById('Usename').innerHTML=name1;
}
load();

function showAlert() {
    alert("Use The Bottom Right Plus Button To Add Your Notes!");
}
const quesIcon = document.getElementById("ques-icon");
quesIcon.addEventListener("click", showAlert);

var popup_bg=document.querySelector('.popup_bg');
var popup_box=document.querySelector('.popup_box');
 
  function show() {
   popup_bg.style.display="block";
   popup_box.style.display="block";
    }
 function main(){
  popup_bg.style.display="none";
  popup_box.style.display="none";
 }

var contain=document.getElementById("contain")
var add_notes=document.getElementById("add_notes")
var title=document.getElementById("title")
var content=document.getElementById("content")
var error = document.getElementById("error")
var error2= document.getElementById("error2")

//select todotext,todocon,contain
var err_flag1=false;
var err_flag2=false;
add_notes.addEventListener("click",function(event){
  if(title.value.length>0 && content.value.length>0){
    if(title.value.length>=20)
    {
      error.style.display="Block";
      err_flag1=true;
    }
    if(title.value.length<20){
      error.style.display="none";
      err_flag1=false;
    }
    if(content.value.length>=100){
      error2.style.display="Block";
      err_flag2=true;
    }
    if(content.value.length<100){
      error2.style.display="none";
      err_flag2=false;
    }
    if(err_flag1==false && err_flag2==false){
    event.preventDefault()
    const currentDate = new Date();
    const localDate = currentDate.toLocaleString(); 
    var div=document.createElement("div")
    div.setAttribute("class","Notes_contain")
    var tit=title.value.charAt(0).toUpperCase()+title.value.slice(1,title.value.length)
    var cont=content.value.charAt(0).toUpperCase()+content.value.slice(1,title.value.length)
    div.innerHTML=`<h1 class="font-fam text-center">${tit}</h1></br><p font-fam text-wrap>${cont}</p></br><p class="font-weight-light d-inline-block">Created on ${localDate}</p></br><button class="deletebtn" onclick="Delete(event)">Delete</button>`
    contain.append(div)
    popup_bg.style.display="none";
    popup_box.style.display="none";
  }
}
  else{
    alert('Enter Values')
  }
});

function Delete(event){
    event.target.parentElement.remove()
 }
 
