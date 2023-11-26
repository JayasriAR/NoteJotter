function checkname(){
var username=document.getElementById('username1');
    console.log('name-----',username.value)
    if(username.value.length>=3)
    {
        localStorage.setItem('Uname',username.value);
        window.location.href = './assests/file/page1.html';
        document.getElementById('username1').style="border-bottom:none";
       
    }
    else{
        document.getElementById('username1').style="border-bottom: 1px solid red";
    }
}
