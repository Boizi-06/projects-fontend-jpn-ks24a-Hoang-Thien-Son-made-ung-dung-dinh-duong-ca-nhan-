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


let foodData = []; // Lưu trữ dữ liệu món ăn từ localStorage.
let filteredFood = []; // Lưu trữ danh sách món ăn đã lọc (sau khi tìm kiếm hoặc sắp xếp).
let currentPage = 1; // Theo dõi trang hiện tại trong phân trang.
let itemPage = 4; // Số món ăn hiển thị trên mỗi trang.
let sortDirection = "asc"; // Hướng sắp xếp danh sách (tăng dần hoặc giảm dần).
let currentSortField = "name"; // Trường hiện tại đang được sắp xếp (ví dụ: "name", "energy").



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
    curentpage = id
    renderFood(curentpage,foodData);

}

function searchFood () {
    let value = document.getElementById("searchInput").value;
    let food = loadFile();
    let findfood = [];
    if(value== "") {
        renderFood(curentpage);
        return;
    } else {
        findfood = food.filter(i=>i.name==value);
        if(findfood .length == 0) {
            alert("objects food 444 not found");
            foodData = food;
            renderFood(curentpage);
            document.getElementById("searchInput").value="";
            return;
        } else {
            document.getElementById("searchInput").value="";
            foodData = findfood;
            renderFood(1,foodData);
        }
    }
}

function searchByCategory () {
    
    
    let categoryInput = document.getElementById("searchCategory");
    console.log(categoryInput);
    if (!categoryInput) {
        alert("Category input does not exist.");
        return;
    }
    let value = categoryInput.value.trim().toLowerCase();
    let food = loadFile();
    let findfood = [];
    
    if(value=="") {
        renderFood(curentpage);
        return;
    } else {
        findfood = food.filter(i=>i.category.trim().toLowerCase()==value);
        console.log(findfood);
        if(findfood .length == 0) {
            alert("objects food 444 not found");
            foodData = food;
            renderFood(curentpage);
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
        alert("search nutrients 444 not found");
        document.getElementsByClassName("inputnutrient")[0].value = "";
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



renderFood(1);


