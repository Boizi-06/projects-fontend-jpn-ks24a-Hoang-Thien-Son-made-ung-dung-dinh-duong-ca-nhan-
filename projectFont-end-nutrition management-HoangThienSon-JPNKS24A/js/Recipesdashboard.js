let itemPage = 8;
let dataFood = [];
let curentpage = 1;


  

function loadFile () {
    let food = JSON.parse(localStorage.getItem("food"));
    return food ? food : [];
}
function loadUser () {
    let listUserlogin = JSON.parse (localStorage.getItem('userlogin'));
    
    let userlogin = listUserlogin[listUserlogin.length-1];
    console.log(userlogin);
    return userlogin ? userlogin : [];
}
function myfood() {
    let value   =   document.getElementsByClassName("myfood")[0].checked;
    console.log(value);
    if(value ==true){
       let userlogin = loadUser();
       dataFood = userlogin.myfood;
        if(userlogin.myfood.length ==0) {
           
            document.getElementsByClassName("myfood")[0].checked = false;
            // nhưng chỉ được dùng trong hàm async
            showModal("You haven't added any dishes yet.");
            // return;
        }
       renderFood(curentpage,dataFood);
    } else {
        let food = loadFile();
        dataFood = food;
        renderFood(curentpage,dataFood);
    }

}

function mylikefood () {
    let food = loadFile();
    let userlogin = loadUser();
    let value = document.getElementsByClassName("like")[0];
    value.innerHTML = `favorites ${userlogin.mylikefood.length}`;
    dataFood = userlogin.mylikefood;
    if (dataFood.length == 0) {
        showModal("You haven't added any dishes to your favorites list yet.");
        
        // return;
    }
    renderFood(curentpage,dataFood);

 }
// Myfood();


function renderFood(page, data = null) {
    let food = loadFile();
    let userlogin = loadUser();
    if(data == null) {
        dataFood = food;
    } else {
        dataFood = data;
    }
    const start = (page-1) * itemPage;
    const end = start + itemPage;
    let pageData = dataFood.slice(start,end);
   
    let str = "";
    for (let i = 0; i < pageData.length; i++) {

      
        str += `
        <div class="cardfood-home">
            <div class="communityrecipes-home">
                <div class="button" onclick="addevent (${pageData[i].id})">
                    <img src="../assets/icon/diversity_3.svg.png" alt="">
                    <span>Community Recipes</span>
                </div>
                <span> </span>
            </div>
            <div class="inforfood-home">
                <span>${pageData[i].name}</span>
                <div class="author">
                    <span>${pageData[i].source}</span>
                    <div class="like" data-id="${pageData[i].id}" onclick="addFavoritedish(${pageData[i].id})">
                        <img src="../assets/icon/favorite_border.png" alt="" class="like2 data-id="${pageData[i].id}">
                        <span>${pageData[i].like}</span>
                    </div>
                </div>
                <div class="category-home">
                    <img src="../assets/icon/Icon (4).png" alt="">
                    <span>${pageData[i].category}</span>
                </div>
                <hr>
                <div class="infornutrientfood-home">
                    <div><span>by</span><span>${pageData[i].quantity}</span></div>
                    <div><span>Energy</span><span>${pageData[i].macronutrients.energy}</span></div>
                    <div><span>Fat</span><span>${pageData[i].macronutrients.fat}</span></div>
                    <div><span>Carbohydrate</span><span>${pageData[i].macronutrients.carbohydrate}</span></div>
                    <div><span>Protein</span><span>${pageData[i].macronutrients.protein}</span></div>
                </div>
            </div>
        </div>
        `;
    }

    document.getElementsByClassName("listfood-home")[0].innerHTML = str;

    displaypaginationdhome(dataFood)
}


function logOut() {
    
    window.location.href = "../fages/Login.html";
}

function food() {
     window.location.href = "../fages/Ingredient dashboarh.html"
}


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
    renderFood(curentpage,dataFood);

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
            showModal("The dish you are looking for is not on the list.");
            dataFood = food;
            renderFood(curentpage);
            document.getElementById("searchInput").value="";
            return;
        } else {
            document.getElementById("searchInput").value="";
            dataFood = findfood;
            renderFood(1,dataFood);
        }
    }
}

function logOut() {
    window.location.href = "../fages/Login.html";
}

function searchByCategory () {
    
    
    let categoryInput = document.getElementById("searchCategory");
    console.log(categoryInput);
    if (!categoryInput) {
        document.getElementsByClassName("listfood-home")[0].innerHTML = `444 not foud`;
        
        return;
    }
    let value = categoryInput.value.trim().toLowerCase();
    let food = loadFile();
    let findfood = [];
    
    if(value=="") {
        showModal("Please enter the existing food categories.");
        
        renderFood(curentpage);
        // return;
    } else {
        findfood = food.filter(i=>i.category.trim().toLowerCase()==value);
        console.log(findfood);
        if(findfood .length == 0) {
            showModal("Please enter the existing food categories.");
            
            dataFood = food;
            renderFood(curentpage);
            document.getElementById("searchCategory").value = "";
            return;
        } else {
            dataFood = findfood;
            document.getElementById("searchCategory").value = "";
            renderFood(1,dataFood);
        }
    }
}

function sortBynutrient () {
    let food = loadFile();
    let value = document.getElementsByClassName("inputnutrient")[0].value.trim().toLowerCase();
    if(value in food[1].macronutrients){
        dataFood = food;
        dataFood.sort((a, b) => b.macronutrients[value] - a.macronutrients[value]);
        renderFood(curentpage,dataFood);
        document.getElementsByClassName("inputnutrient")[0].value = "";
    } else {
        dataFood=[];
       
        document.getElementsByClassName("inputnutrient")[0].value = "";
        showModal("Please enter the macronutrients in the dish to organize them.");
        dataFood = food;
        renderFood(curentpage,dataFood);
        return;
    }
}

function home() {
    window.location.href = "../home.html";
}


function showModal(message) {
    document.getElementById("modalMessage").innerText = message;
    document.getElementById("modalBox").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalBox").style.display = "none";
}


function addevent (id) {
    
        const cards = document.getElementsByClassName('communityrecipes-home');
        for (let i = 0; i < cards.length; i++) {
        cards[i].style.cursor = 'pointer';
        cards[i].addEventListener('click', function() {
            let idaddrepices = id;
            localStorage.setItem('idaddrepices',idaddrepices);
            window.location.href = "../fages/addnewrecipe.html"
    
        });
}

}
   
document.getElementsByClassName("addrecipe")[0].addEventListener("click",function(){
    window.location.href = "../fages/addnewrecipe.html"
});
function recipe() {
    window.location.href = "../fages/Recipesdashboard.html";
}



renderFood(1);