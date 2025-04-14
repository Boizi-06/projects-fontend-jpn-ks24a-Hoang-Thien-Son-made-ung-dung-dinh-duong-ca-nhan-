
let itemPage = 4;
let dataFood = [];
let curentpage = 1;

function loadFile() {
    let food = JSON.parse(localStorage.getItem("food"));
    return food ? food : [];
}

function loadUser() {
    let listUserlogin = JSON.parse(localStorage.getItem('userlogin'));
    
    let userlogin = listUserlogin[listUserlogin.length-1];
    console.log(userlogin);
    return userlogin ? userlogin : [];
}

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
                <div class="button">
                    <img src="../assets/icon/diversity_3.svg.png" alt="">
                    <span>Community Recipes</span>
                </div>
                <img src="../assets/img/image.png" alt="" >
            </div>
            <div class="inforfood-home">
                <span>${pageData[i].name}</span>
                <div class="author">
                    <span>${pageData[i].source}</span>
                    <div class="like" data-id="${pageData[i].id}" onclick="addMylikeFood(${pageData[i].id})">
                        <span  >
                        <i class="like2" style="color: gray; font-size: 16px; cursor: pointer;" data-id="${pageData[i].id}">♡</i></span>
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
        </div>
        `;
    }

    document.getElementsByClassName("listfood-home")[0].innerHTML = str;
    displaypaginationdhome(dataFood);
}

// function logOut() {
//     window.location.href = "../fages/Login.html";
// }

// function food() {
//     window.location.href = "../fages/Ingredient dashboarh.html";
// }
// function recipe () {
//     window.location.href = "../fages/Recipesdashboard.html";
// }

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
    let value = document.getElementById("searchInput").value;
    let food = loadFile();
    let findfood = [];
    if(value == "") {
        renderFood(curentpage);
        return;
    } else {
        findfood = food.filter(i => i.name == value);
        if(findfood.length == 0) {
            alert("Food not found");
            dataFood = food;
            renderFood(curentpage);
            document.getElementById("searchInput").value = "";
            return;
        } else {
            document.getElementById("searchInput").value = "";
            dataFood = findfood;
            renderFood(1, dataFood);
        }
    }
}

function searchByCategory() {
    let categoryInput = document.getElementById("searchCategory");
    console.log(categoryInput);
    if (!categoryInput) {
        alert("Category input does not exist.");
        return;
    }
    let value = categoryInput.value.trim().toLowerCase();
    let food = loadFile();
    let findfood = [];
    
    if(value == "") {
        renderFood(curentpage);
        return;
    } else {
        findfood = food.filter(i => i.category.trim().toLowerCase() == value);
        console.log(findfood);
        if(findfood.length == 0) {
            alert("Category not found");
            dataFood = food;
            renderFood(curentpage);
            document.getElementById("searchCategory").value = "";
            return;
        } else {
            dataFood = findfood;
            document.getElementById("searchCategory").value = "";
            renderFood(1, dataFood);
        }
    }
}

function sortBynutrient() {
    let food = loadFile();
    let value = document.getElementsByClassName("inputnutrient")[0].value.trim().toLowerCase();
    if(value in food[0].macronutrients) {
        dataFood = food;
        dataFood.sort((a, b) => b.macronutrients[value] - a.macronutrients[value]);
        renderFood(curentpage, dataFood);
        document.getElementsByClassName("inputnutrient")[0].value = "";
    } else {
        dataFood = food;
        alert("Nutrient not found");
        document.getElementsByClassName("inputnutrient")[0].value = "";
        renderFood(curentpage);
        return;
    }
}

function displaypaginationdhome(food) {
    let maxPage = Math.ceil(food.length / itemPage);
    let str = "";
    for(let i = 0; i < maxPage; i++) {
        str += `<span class="switchPage" onclick="nextPage(${i+1})">${i+1}</span>`;
    }
    document.getElementsByClassName("paginationd-home")[0].innerHTML = str;
}

function nextPage(id) {
    curentpage = id+1;
    renderFood(curentpage, dataFood);
}

function addMylikeFood(id) {
    let food = loadFile();
    let user = loadUser();
    
    // Kiểm tra nếu user.mylikefood tồn tại, nếu không thì khởi tạo nó
    if (!user.mylikefood) {
        user.mylikefood = [];
    }
    
    let foodItem = food.find(f => f.id == id);
    if (!foodItem) return;

    let liked = user.mylikefood.some(f => f.id == id);
    let element = document.querySelector(`.like2[data-id="${id}"]`);
    
    if (!element) {
        console.error(`Element with data-id=${id} not found`);
        return;
    }

    if (!liked) {
        // Cập nhật số lượt thích
        foodItem.like += 1;
        user.mylikefood.push(foodItem);
       

        // Thay đổi biểu tượng trái tim - đây là nơi có vấn đề
        // Bạn đang cố thay đổi màu sắc, nhưng nó là một phần tử hình ảnh
        // element.style.color = "red"; // Cách này không hoạt động với hình ảnh

        // Đây là cách đúng để thay đổi hình ảnh
        element.src = "../assets/icon/favorite_filled.png";
        
        // Cập nhật số lượt thích trong giao diện người dùng
        // 
        document.getElementsByClassName("tim")[0].innerHTML=foodItem.like ;

        // Lưu dữ liệu đã cập nhật
        localStorage.setItem("food", JSON.stringify(food));

        let userlogin = JSON.parse(localStorage.getItem("userlogin"));
        if (!userlogin || userlogin.length == 0) {
            alert('Không tìm thấy dữ liệu người dùng');
            return;
        } else {
            let index = userlogin.length - 1;
            userlogin[index] = user;
            localStorage.setItem("userlogin", JSON.stringify(userlogin));
        }
        
        // Không cần phải hiển thị lại toàn bộ trang
        // renderFood(curentpage, dataFood);
    } else {
        // Đã thích rồi
        element.src = "../assets/icon/favorite_filled.png";
    }
}

renderFood(curentpage);