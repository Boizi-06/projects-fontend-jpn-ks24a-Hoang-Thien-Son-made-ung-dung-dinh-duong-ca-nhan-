












function loadfile (){
    let user = JSON.parse(localStorage.getItem("user"));
    return user ? user : [];
}
function checkemail() {
    console.log("mail");
    let user = loadfile();
    let email = document.getElementsByClassName("text")[0].value;
    let findEmail = user.filter(user=>user.email==email);
    if(email.indexOf(" ")!=-1) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        return false
    }
    if(findEmail.length>0) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
        <div class="header">
            <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
            <span class="delete">X</span>
        </div>
        <p>email da ton tai</p>
        `;
        return false;
    }
    
    if(email.indexOf("@gmail.com")==-1) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        return false;
    } else {
        
        return true;
    }
}
document.getElementsByClassName("delete")[0].addEventListener("click",function() {
    document.getElementsByClassName("ennor")[0].style.display="none";
});
function checkpass ()  {
    console.log("pass");

    let pass = document.getElementsByClassName("text")[2].value;
    let confirmPass =  document.getElementsByClassName("text")[3].value;
    if (pass.length < 8 ) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
        <div class="header">
            <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
            <span class="delete">X</span>
        </div>
        <p>mat khau phai la 7 chu so</p>
        `;
        return false;
    } else if (confirmPass != pass ) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
        <div class="header">
            <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
            <span class="delete">X</span>
        </div>
        <p>mat khau confirm bi sai</p>
        `;
        return false;
    } else {
        
        return true;
    }
} 
function checkName () {
    console.log("name");
    let name = document.getElementsByClassName("text")[1].value;
    if (name.length < 1) {
        document.getElementsByClassName("ennor")[0].style.display="block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
        <div class="header">
            <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
            <span class="delete">X</span>
        </div>
        <p>ten nguoi dung khong duoc de trong cv </p>
        `;
        return false;
    } else {
        
        return true;
    }
}
function addnewUser ()  {
    console.log("1");
    let user =  loadfile ();
    let Email = document.getElementsByClassName("text")[0].value;
    let pass = document.getElementsByClassName("text")[2].value;
    let Name = document.getElementsByClassName("text")[1].value;
    if(checkemail() && checkpass() && checkName()) {
        let newUser = {
            id: user.length + 1,
            email : Email,
            username : Name,
            password : pass,
        };
        user.push(newUser);
        localStorage.setItem("user",JSON.stringify(user));
        document.getElementsByClassName("text")[0].value="";
        document.getElementsByClassName("text")[2].value="";
        document.getElementsByClassName("text")[1].value="";
        document.getElementsByClassName("text")[3].value="";
        document.getElementsByClassName("success")[0].style.display="block";
    }
}
document.getElementsByClassName('submit')[0].addEventListener("click",addnewUser);




