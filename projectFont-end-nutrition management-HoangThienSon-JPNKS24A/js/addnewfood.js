
function close () {
    window.location.href = "./Ingredient dashboarh.html";
}

document.getElementsByClassName("close-btn")[0].addEventListener("click",close);
document.getElementsByClassName("btn-cancel")[0].addEventListener("click",close);

function loadFile () {
    let food = JSON.parse(localStorage.getItem("food"));
    return food ? food : [];
}

function loadFileuser () {
    let user = JSON.parse(localStorage.getItem("userlogin"));
    if(user.length==0) {
        console.log('khong tim thay mnag cac nguoi dung dang nhap');
        return;
    }
    let constUser = user[user.length-1];
    return constUser ? constUser : {};
}
function checkInforbasic() {
    let food = loadFile();
    if(food.length==0) {
        console.log('khong tim thay mang foood');
    }
    let userlogin = loadFileuser();
    console.log(userlogin);

    let listinput = document.getElementsByTagName("input");
    let categoryinput = document.getElementsByClassName("unit-select")[0].value.trim().toLocaleLowerCase();
    console.log(categoryinput);
    let unit = document.getElementsByClassName("unit-select")[1].value.trim().toLocaleLowerCase();
    console.log(unit);
    let inputquantity ="";
    for(i=0;i<6;i++) {
        if(listinput[i].value == "") {
            alert("du lieu quan trong khong duoc de trong");
            return false;
        }
        if(i==0) {
            if(listinput[i].value.length <2) {
                alert("ten mon an khong duoc de trong");
                return false;
            }
        } 
        if(i>0) {
            let value = listinput[i].value.trim();
            if(!isNaN(value)  != true) {
                alert("cac chat dinh duong phai la so");
                return false;
            }
            if(i==1) {
                inputquantity = `${listinput[1].value} ${unit}`;
                document.getElementsByClassName("nutritional-value")[0].innerHTML = `Nutritional value per ${inputquantity}`;
            }
        }
    }
    let valueInput = [];
    for(j=6;j<=42;j++) {
        let value = listinput[j].value.trim();
        if(!isNaN(value)  != true) {
            alert("cac chat dinh duong phai la so");
            return false;
        } else if (value=="") {
            valueInput.push(null);
        } else {
            valueInput.push(value);
        }
        
    }
    console.log(valueInput);
    const newFood = {
        id: food.length > 0 ? food[food.length - 1].id + 1 : 0,
        name : listinput[0].value,
        category : categoryinput,
        like : 1,
        quantity : inputquantity,
        source : userlogin.username,
        macronutrients : {
            carbohydrate : listinput[3].value,
            energy :listinput[2].value,
            fat:listinput[2].value,
            protein:listinput[5].value,
        },
        micronutrients: {
            cholesterol: listinput[0].value,
            fiber:listinput[1].value,
            sodium: listinput[2].value,
            water:listinput[3].value,
            vitaminA: listinput[4].value,
            vitaminB6:listinput[5].value,
            vitaminB12:listinput[6].value,
            vitaminC: listinput[7].value,
            vitaminD: listinput[8].value,
            vitaminE: listinput[9].value,
            vitaminK: listinput[10].value,
            starch: listinput[11].value,
            lactose: listinput[12].value,
            alcohol: listinput[13].value,
            caffeine: listinput[14].value,
            sugars: listinput[15].value,
            calcium: listinput[16].value,
            iron: listinput[17].value,
            magnesium: listinput[18].value,
            phosphorus: listinput[19].value,
            potassium: listinput[20].value,
            zinc: listinput[21].value,
            copper: listinput[22].value,
            fluoride: listinput[23].valuel,
            manganese: listinput[24].value,
            selenium: listinput[25].value,
            thiamin: listinput[26].value,
            riboflavin: listinput[27].value,
            niacin: listinput[28].value,
            pantothenicAcid: listinput[29].value,
            folateTotal: listinput[30].value,
            folicAcid: listinput[31].value,
            fattyAcidsTrans: listinput[32].value,
            fattyAcidsSaturated: listinput[33].value,
            fattyAcidsMonounsaturated: listinput[34].value,
            fattyAcidsPolyunsaturated: listinput[35].value,
            chloride: listinput[36].value,
        },
        ingredients : [],
    }
    food.push(newFood);
    
    if(food[food.length-1] != newFood) {
        alert("chua them duoc");
        return false;
    } else {
        confirm("Are you sure you want to add this dish?");
        localStorage.setItem("food",JSON.stringify(food));
        alert("da the thanh cong mon an");
        close ();                           
        return true;
    }
    

}
    

document.getElementsByClassName("btn-save")[0].addEventListener("click",save);

function save () {
    let a = checkInforbasic();
   
    if(!a) {
        return;
    }

    
    
}

function logOut() {
    window.location.href = "../fages/Login.html";
}
