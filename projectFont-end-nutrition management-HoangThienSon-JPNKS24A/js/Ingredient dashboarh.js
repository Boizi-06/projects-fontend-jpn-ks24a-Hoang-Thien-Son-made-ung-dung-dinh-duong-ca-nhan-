

function logOut() {
    window.location.href = "../fages/Login.html";
}

function food() {
     window.location.href = "../fages/Ingredient dashboarh.html"
}

function home() {
    window.location.href = "../home.html";
}
function addnewFood () {
    window.location.href = "../fages/addnewfood.html";
}
document.getElementsByClassName("createfood")[0].addEventListener("click",addnewFood);


let foodData = []; 
let currentPage = 1;
let itemPage = 8;



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

// hai ham tren da dungs logic

function renderFood (page, data=null) {

    let food = loadFile();
    console.log(food);
    if(data == null) {
        foodData = food;
        console.log(`render food khong co data ${foodData}`);
    } else {
        foodData = data;
        console.log(`render food co data ${foodData}`);
    }


    let maxPage = Math.ceil(foodData.length/itemPage);
    let start = (page-1)*itemPage;
    let end = start + itemPage;
    let dataPage = foodData.slice(start,end);
    let str = "";
    for(i=0;i<dataPage.length;i++) {
        str += `
                    <div class="cardfood-home" data-id="${dataPage[i].id}" onclick="displayinforFood(${dataPage[i].id})">
                        <div class="namefood">
                            <span>${dataPage[i].name}</span> 
                            <span>${dataPage[i].source}</span>
                        </div>
                        <div class="infornutrientfoodbasic">
                            <div>
                                <span>${dataPage[i].macronutrients.energy} kcal</span>
                                <span>Energy</span>
                            </div>
                            <div>
                                <span>${dataPage[i].macronutrients.fat} g</span>
                                <span>Fat</span>
                            </div>
                            <div>
                                <span>${dataPage[i].macronutrients.carbohydrate} g</span>
                                <span>Carbohydrate</span>
                            </div>
                            <div>
                                <span>${dataPage[i].macronutrients.protein} g</span>
                                <span>Protein</span>
                            </div>
                        </div>
                    </div>
        
        
        `;
    }
    document.getElementsByClassName("listfood-home")[0].innerHTML=str;

    displaypaginationdhome (foodData);
}

// ham renderfood ddax dung yuc


function displaypaginationdhome (food) {
    let maxPage = Math.ceil(food.length/itemPage);
    let str="";
    for(i=0;i<maxPage;i++) {
        str+= `<span class="switchPage" onclick="nextPage(${i+1})" >${i+1}</span>`;
    }
    document.getElementsByClassName("paginationd-home")[0].innerHTML=str;
                
    
    
}

function nextPage (id) {
    currentPage = id
    renderFood(currentPage,foodData);

}

function searchFood () {
    let value = document.getElementById("searchInput").value;
    let food = loadFile();
    let findfood = [];
    if(value== "") {
        renderFood(currentPage);
        return;
    } else {
        findfood = food.filter(i=>i.name==value);
        if(findfood .length == 0) {
            document.getElementsByClassName("listfood-home")[0].innerHTML = `444 not foud`;
            showModal("Cannot find the dish in the list.");
            dataFood = food;
            renderFood(currentPage);
            document.getElementById("searchInput").value="";
            return;
        } else {
            document.getElementById("searchInput").value="";
            dataFood = findfood;
            renderFood(1,dataFood);
        }
    }
}
function searchByCategory () {
    
    
    let categoryInput = document.getElementById("searchCategory");
    console.log(categoryInput);
    if (!categoryInput) {
        document.getElementsByClassName("listfood-home")[0].innerHTML=`444 not found`;
        return;
    }
    let value = categoryInput.value.trim().toLowerCase();
    let food = loadFile();
    let findfood = [];
    
    if(value=="") {
        renderFood(currentPage);
        return;
    } else {
        findfood = food.filter(i=>i.category.trim().toLowerCase()==value);
        console.log(findfood);
        if(findfood .length == 0) {
            showModal("The menu item does not exist.");
            
            foodData = food;
            renderFood(currentPage);
            document.getElementById("searchCategory").value = "";
            return;
        } else {
            foodData = findfood;
            document.getElementById("searchCategory").value = "";
            renderFood(1,foodData);
        }
    }
}

function sortBynutrient () {
    let food = loadFile();
    let value = document.getElementsByClassName("inputnutrient")[0].value.trim().toLowerCase();
    console.log(value);
    if(value in food[1].macronutrients){
        foodData = food;
        foodData.sort((a, b) => b.macronutrients[value] - a.macronutrients[value]);
        renderFood(1,foodData);
        document.getElementsByClassName("inputnutrient")[0].value = "";
    } else {
        foodData=[];
        document.getElementsByClassName("listfood-home")[0].innerHTML=`444 not found`;
        document.getElementsByClassName("inputnutrient")[0].value = "";
        showModal("Please enter the names of the macronutrients present in the dish.");
        foodData = food;
        renderFood(1,foodData);
        return;
    }
}

// xap xep tim kiem da dung

function logOut() {
    window.location.href = "../fages/Login.html";
}
function recipe() {
    window.location.href = "../fages/Recipesdashboard.html";
}
function logOut() {
    window.location.href = "../fages/Login.html";
}
function home() {
    window.location.href = "../home.html";
}
function displayinforFood (id) {
    let constUserid = id;
    localStorage.setItem("constUserid",JSON.stringify(constUserid));
    console.log(constUserid);
    window.location.href = "../fages/foodinformation.html";
}

function showModal(message) {
    document.getElementById("modalMessage").innerText = message;
    document.getElementById("modalBox").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalBox").style.display = "none";
}



renderFood(1);


