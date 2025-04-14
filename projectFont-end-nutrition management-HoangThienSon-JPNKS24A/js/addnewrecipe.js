document.getElementsByClassName('addcategory')[0].addEventListener('click',function(){
    document.getElementsByClassName("none")[0].style.display = "none";
    document.getElementsByClassName("choicecategory")[0].style.display = "block";
    
});
function loadFile () {
    let food = JSON.parse(localStorage.getItem("food"));
    console.log(food);
    if(food.length == 0) {
        alert('ko tim duoc mang food');
        return;
    }
    return food ? food : [];
}
function loadUser () {  
    let userlogin = JSON.parse(localStorage.getItem("userlogin")) ||[];
    console.log(userlogin);
    if(userlogin.length==0) {
        alert("khong tim thay nguoi dung da dang nhap");
        return;
    }else {
        let constuser = userlogin[userlogin.length-1];
        console.log(constuser);
        return constuser ? constuser : {};
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function run() {
    
    await sleep(4000); // chờ 2 giây
    
}

