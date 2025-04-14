


let input = document.getElementsByTagName("input");
console.log(input.length);

function loadFile () {
    let food = JSON.parse(localStorage.getItem("food"));
    return food ? food :[];
}
function loadid () {
    let id = localStorage.getItem("constUserid");
    return id;
}

function displayinfor () {
    let id = loadid();
    
    let food = loadFile();
    
    let constFood = food[id-1];
    
    let input = document.getElementsByTagName("input");
   
    input[0].value=constFood.name;
    input[1].value=constFood.category;
    input[2].value=constFood.source;
    input[3].value=constFood.quantity;
    document.getElementsByClassName("nutritional-value")[0].innerHTML=`Nutrients value per ${constFood.quantity}`;
        

    

    let i = 4;

    // Gán macronutrients
    for (let key in constFood.macronutrients) {
        input[i].value = constFood.macronutrients[key];
        i++;
    }

    // Gán micronutrients
    for (let key in constFood.micronutrients) {
        input[i].value = constFood.micronutrients[key];
        i++;
    }
}

function close () {
    window.location.href = "./Ingredient dashboarh.html";
}
document.getElementsByTagName("button")[0].addEventListener("click",close);
document.getElementsByTagName("button")[1].addEventListener("click",close);

displayinfor ();
function logOut() {
    window.location.href = "../fages/Login.html";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function run() {
    
    await sleep(4000); // chờ 2 giây
    
}