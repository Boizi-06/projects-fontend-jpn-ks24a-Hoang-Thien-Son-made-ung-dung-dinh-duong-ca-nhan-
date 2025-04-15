let itemPage = 8;
let dataFood = [];
let curentpage = 1;

function loadFile() {
    let food = JSON.parse(localStorage.getItem("food"));
    return food ? food : [];
}

function loadUser() {
    let listUserlogin = JSON.parse(localStorage.getItem('userlogin'));
    let userlogin = listUserlogin[listUserlogin.length - 1];
    return userlogin ? userlogin : [];
}

function renderFood(page, data = null) {
    let food = loadFile();
    let userlogin = loadUser();

    if (data !== null) {
        dataFood = data;
    } else if (dataFood.length === 0) {
        dataFood = food;
    }

    const start = (page - 1) * itemPage;
    const end = start + itemPage;
    let pageData = dataFood.slice(start, end);

    let str = "";
    for (let i = 0; i < pageData.length; i++) {
        str += `
        <div class="cardfood-home">
            <div class="communityrecipes-home">
                <div class="button">
                    <img src="../assets/icon/diversity_3.svg.png" alt="">
                    <span>Community Recipes</span>
                </div>
                <span> </span>
            </div>
            <div class="inforfood-home">
                <span>${pageData[i].name}</span>
                <div class="author">
                    <span>${pageData[i].source}</span>
                    <div class="like" data-id="${pageData[i].id}" onclick="addMylikeFood(${pageData[i].id})">
                        <img class="like2" src="../assets/icon/favorite_border.png" style="width: 16px; cursor: pointer;" data-id="${pageData[i].id}" />
                        <span class="tim">${pageData[i].like}</span>
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
        </div>`;
    }

    document.getElementsByClassName("listfood-home")[0].innerHTML = str;
    displaypaginationdhome(dataFood);
}

function logOut() {
    window.location.href = "../fages/Login.html";
}

function food() {
    window.location.href = "../fages/Ingredient dashboarh.html";
}

function recipe() {
    window.location.href = "../fages/Recipesdashboard.html";
}

function home() {
    window.location.href = "../home.html";
}

function searchFood() {
    let value = document.getElementById("searchInput").value.trim().toLowerCase();
    let food = loadFile();

    if (value === "") {
        renderFood(curentpage);
        return;
    }

    let findfood = food.filter(i => i.name.trim().toLowerCase() === value);
    if (findfood.length === 0) {
        showModal("Could not find the dish you love.");
        dataFood = food;
        renderFood(curentpage);
    } else {
        dataFood = findfood;
        renderFood(1, dataFood);
    }

    document.getElementById("searchInput").value = "";
}

function searchByCategory() {
    let categoryInput = document.getElementById("searchCategory");
    if (!categoryInput) {
        document.getElementsByClassName("listfood-home")[0].innerHTML = `44 not found`;
        return;
    }

    let value = categoryInput.value.trim().toLowerCase();
    let food = loadFile();

    if (value === "") {
        renderFood(curentpage);
        return;
    }

    let findfood = food.filter(i => i.category.trim().toLowerCase() === value);
    if (findfood.length === 0) {
        showModal("Cannot find the menu items.");
        dataFood = food;
        renderFood(curentpage);
    } else {
        dataFood = findfood;
        renderFood(1, dataFood);
    }

    document.getElementById("searchCategory").value = "";
}

function sortBynutrient() {
    let food = loadFile();
    let value = document.getElementsByClassName("inputnutrient")[0].value.trim().toLowerCase();

    if (value in food[0].macronutrients) {
        dataFood = food;
        dataFood.sort((a, b) => b.macronutrients[value] - a.macronutrients[value]);
        renderFood(curentpage, dataFood);
    } else {
        showModal('Please enter the macronutrients to arrange them.');
        renderFood(curentpage);
    }

    document.getElementsByClassName("inputnutrient")[0].value = "";
}

function displaypaginationdhome(food) {
    let maxPage = Math.ceil(food.length / itemPage);
    let str = "";
    for (let i = 0; i < maxPage; i++) {
        str += `<span class="switchPage" onclick="nextPage(${i + 1})">${i + 1}</span>`;
    }
    document.getElementsByClassName("paginationd-home")[0].innerHTML = str;
}

function nextPage(id) {
    curentpage = id;
    renderFood(curentpage, dataFood);
}

function addMylikeFood(id) {
    let food = loadFile();
    let user = loadUser();

    if (!user.mylikefood) {
        user.mylikefood = [];
    }

    let foodItem = food.find(f => f.id === id);
    if (!foodItem) return;

    let liked = user.mylikefood.some(f => f.id === id);
    let element = document.querySelector(`.like2[data-id="${id}"]`);

    if (!element) {
        console.error(`Element with data-id=${id} not found`);
        return;
    }

    if (!liked) {
        foodItem.like += 1;
        user.mylikefood.push(foodItem);

        element.src = "../assets/icon/heart-solid.svg";
        let timElement = element.closest('.like').querySelector('.tim');
        if (timElement) {
            timElement.innerText = foodItem.like;
        }

        localStorage.setItem("food", JSON.stringify(food));
        let userlogin = JSON.parse(localStorage.getItem("userlogin"));
        let index = userlogin.length - 1;
        userlogin[index] = user;
        localStorage.setItem("userlogin", JSON.stringify(userlogin));
    } else {
        element.src = "../assets/icon/heart-solid.svg";
    }
}
function showModal(message) {
    document.getElementById("modalMessage").innerText = message;
    document.getElementById("modalBox").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalBox").style.display = "none";
}

renderFood(curentpage);
