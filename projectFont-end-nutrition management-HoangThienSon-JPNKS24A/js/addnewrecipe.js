document.getElementsByClassName('addcategory')[0].addEventListener('click',function(){
    document.getElementsByClassName("none")[0].style.display = "none";
    document.getElementsByClassName("choicecategory")[0].style.display = "block";
    
});
function loadFile () {
    let food = JSON.parse(localStorage.getItem("food"));
   
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
        
        return constuser ? constuser : {};
    }
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

function constFood () {
    let constFood = localStorage.getItem('idaddrepices');
    console.log(constFood);
    return constFood;
}

let food2 = loadFile();

let id = constFood();
let constFood2 = food2[id];

const nutritionData = {
    labels: [
      `Fat - ${constFood2.macronutrients.fat}g`,
      `Carbohydrate - ${constFood2.macronutrients.carbohydrate}g`,
      `Protein - ${constFood2.macronutrients.protein}g`,
      `Energy - ${constFood2.macronutrients.energy}kcal`,
    ],
    datasets: [{
      data: [15.2, 0.8, 2.9, 151],
      backgroundColor: ["#e74c3c", "#f39c12", "#3498db", "#9b59b6"],
      hoverOffset: 10
    }]
  };

  // Cấu hình biểu đồ
  const config = {
    type: "pie",
    data: nutritionData,
    options: {
      responsive: true,
      animation: {
        animateScale: true
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return `${ctx.label}`;
            }
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  };

  // Vẽ biểu đồ
  const ctx = document.getElementById("pie-Chart").getContext("2d");
  new Chart(ctx, config);


let lisstInput = document.getElementsByTagName('input');

lisstInput[0].value = constFood2.name;

cooking;


let value = document.getElementById("cooking").value.trim();
if(value!='') {
    food2[id].ingredients.push(value);
}
localStorage.setItem("food",JSON.stringify(food2));
