// // đăng kí đăng nhập người dùng



let user = [
    { 
        id : 1,
        email : "son666727@gmail.com",
        username : "Hoang son",
        password : "Hoangson06@",
        mylikefood :[],
        myfood : [],
    },
    {
        id : 2,
        email : "hson05542@gmail.com",
        username : "Hoang son",
        password : "Hoangson06@",
        mylikefood :[],
        myfood : [],
    },
    {
        id : 3,
        email : "ntan@gmail.com",
        username : "nhat tan",
        password : "ntan@gmail.com",
        mylikefood :[],
        myfood : [],
    },
    {
        id : 4,
        email : "tramy@gmail.com",
        username : "tra my",
        password : "Tmyxinh@gmail.com",
        mylikefood :[],
        myfood : [],
    },
    {
        id : 5,
        email : "Zitj06@gmail.com",
        username : "tra my",
        password : "Zitjxinh06@",
        mylikefood :[],
        myfood : [],
    }
];

localStorage.setItem("user",JSON.stringify(user));





let food = [
    {
      id: 1,
      like : 1,
      name: "Ackee, canned, drained",
      source: "Minh Cuong Tran",
      category: "Vegetables and Vegetable Products",
      quantity: "100g",
      macronutrients: {
        energy: 151,
        carbohydrate: 0.8,
        fat: 15.2,
        protein: 2.9
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: null,
        sodium: 240.0,
        water: 76.7,
        vitaminA: null,
        vitaminB6: 0.06,
        vitaminB12: 0.0,
        vitaminC: 30.0,
        vitaminD: 0.0,
        vitaminE: null,
        vitaminK: null,
        starch: 0.0,
        lactose: 0.0,
        alcohol: null,
        caffeine: null,
        sugars: 0.8,
        calcium: 35.0,
        iron: 0.7,
        magnesium: 40.0,
        phosphorus: 47.0,
        potassium: 270.0,
        zinc: 0.6,
        copper: 0.27,
        fluoride: null,
        manganese: null,
        selenium: null,
        thiamin: 0.03,
        riboflavin: 0.07,
        niacin: 0.6,
        pantothenicAcid: null,
        folateTotal: 41.0,
        folicAcid: null,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: null,
        fattyAcidsMonounsaturated: null,
        fattyAcidsPolyunsaturated: null,
        chloride: 340.0
      },
      ingredients : [
          "Ackee (đóng hộp, đã để ráo nước)",
          "Cá muối (salted codfish)",
          "Hành tây",
          "Ớt chuông (màu đỏ hoặc xanh)",
          "Cà chua",
          "Tỏi",
          "Hành lá",
          "Tiêu đen",
          "Lá thyme (cỏ xạ hương)",
          "Dầu ăn (dầu thực vật hoặc dầu dừa)"
        ] 
    },
    {
      id: 2,
      like : 1,
      name: "Spinach, raw",
      source: "USDA",
      category: "Vegetables and Vegetable Products",
      quantity: "100g",
      macronutrients: {
        energy: 23,
        carbohydrate: 3.6,
        fat: 0.4,
        protein: 2.9
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.2,
        sodium: 79.0,
        water: 91.4,
        vitaminA: 469.0,
        vitaminB6: 0.2,
        vitaminB12: 0.0,
        vitaminC: 28.1,
        vitaminD: 0.0,
        vitaminE: 2.0,
        vitaminK: 482.9,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 0.4,
        calcium: 99.0,
        iron: 2.7,
        magnesium: 79.0,
        phosphorus: 49.0,
        potassium: 558.0,
        zinc: 0.53,
        copper: 0.13,
        fluoride: null,
        manganese: 0.9,
        selenium: 1.0,
        thiamin: 0.08,
        riboflavin: 0.19,
        niacin: 0.72,
        pantothenicAcid: 0.07,
        folateTotal: 194.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.1,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.2,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)222",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 3,
      like : 1,
      name: "Banana",
      source: "USDA",
      category: "Fruits",
      quantity: "100g",
      macronutrients: {
        energy: 89,
        carbohydrate: 22.8,
        fat: 0.3,
        protein: 1.1
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.6,
        sodium: 1.0,
        water: 74.9,
        vitaminA: 64.0,
        vitaminB6: 0.4,
        vitaminB12: 0.0,
        vitaminC: 8.7,
        vitaminD: 0.0,
        vitaminE: 0.1,
        vitaminK: 0.5,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 12.2,
        calcium: 5.0,
        iron: 0.3,
        magnesium: 27.0,
        phosphorus: 22.0,
        potassium: 358.0,
        zinc: 0.2,
        copper: 0.1,
        fluoride: null,
        manganese: 0.3,
        selenium: 1.0,
        thiamin: 0.03,
        riboflavin: 0.07,
        niacin: 0.7,
        pantothenicAcid: 0.3,
        folateTotal: 20.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.1,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.1,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước333",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 4,
      like : 1,
      name: "Carrot, raw",
      source: "USDA",
      category: "Vegetables",
      quantity: "100g",
      macronutrients: {
        energy: 41,
        carbohydrate: 9.6,
        fat: 0.2,
        protein: 0.9
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.8,
        sodium: 69.0,
        water: 88.3,
        vitaminA: 835.0,
        vitaminB6: 0.1,
        vitaminB12: 0.0,
        vitaminC: 5.9,
        vitaminD: 0.0,
        vitaminE: 0.6,
        vitaminK: 13.2,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 4.7,
        calcium: 33.0,
        iron: 0.3,
        magnesium: 12.0,
        phosphorus: 35.0,
        potassium: 320.0,
        zinc: 0.2,
        copper: 0.1,
        fluoride: null,
        manganese: 0.1,
        selenium: 0.1,
        thiamin: 0.06,
        riboflavin: 0.04,
        niacin: 0.5,
        pantothenicAcid: 0.3,
        folateTotal: 19.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.1,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)444",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 5,
      like : 1,
      name: "Apple, raw",
      source: "USDA",
      category: "Fruits",
      quantity: "100g",
      macronutrients: {
        energy: 52,
        carbohydrate: 13.8,
        fat: 0.2,
        protein: 0.3
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.4,
        sodium: 1.0,
        water: 85.6,
        vitaminA: 54.0,
        vitaminB6: 0.0,
        vitaminB12: 0.0,
        vitaminC: 4.6,
        vitaminD: 0.0,
        vitaminE: 0.2,
        vitaminK: 2.2,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 10.4,
        calcium: 6.0,
        iron: 0.1,
        magnesium: 5.0,
        phosphorus: 11.0,
        potassium: 107.0,
        zinc: 0.0,
        copper: 0.0,
        fluoride: null,
        manganese: 0.0,
        selenium: 0.0,
        thiamin: 0.02,
        riboflavin: 0.02,
        niacin: 0.1,
        pantothenicAcid: 0.1,
        folateTotal: 3.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.0,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)555",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 

    },
    {
      id: 6,
      like : 1,
      name: "Tomato, raw",
      source: "USDA",
      category: "Vegetables",
      quantity: "100g",
      macronutrients: {
        energy: 18,
        carbohydrate: 3.9,
        fat: 0.2,
        protein: 0.9
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 1.2,
        sodium: 5.0,
        water: 95.0,
        vitaminA: 833.0,
        vitaminB6: 0.1,
        vitaminB12: 0.0,
        vitaminC: 13.7,
        vitaminD: 0.0,
        vitaminE: 0.5,
        vitaminK: 7.9,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 2.6,
        calcium: 18.0,
        iron: 0.5,
        magnesium: 11.0,
        phosphorus: 24.0,
        potassium: 237.0,
        zinc: 0.2,
        copper: 0.1,
        fluoride: null,
        manganese: 0.1,
        selenium: 0.4,
        thiamin: 0.04,
        riboflavin: 0.02,
        niacin: 0.6,
        pantothenicAcid: 0.3,
        folateTotal: 15.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.0,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước666",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 7,
      like : 1,
      name: "Lettuce, raw",
      source: "USDA",
      category: "Vegetables",
      quantity: "100g",
      macronutrients: {
        energy: 15,
        carbohydrate: 2.9,
        fat: 0.2,
        protein: 1.4
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 1.0,
        sodium: 28.0,
        water: 95.0,
        vitaminA: 436.0,
        vitaminB6: 0.1,
        vitaminB12: 0.0,
        vitaminC: 9.2,
        vitaminD: 0.0,
        vitaminE: 0.3,
        vitaminK: 126.0,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 1.0,
        calcium: 36.0,
        iron: 0.6,
        magnesium: 13.0,
        phosphorus: 29.0,
        potassium: 194.0,
        zinc: 0.2,
        copper: 0.1,
        fluoride: null,
        manganese: 0.1,
        selenium: 0.3,
        thiamin: 0.04,
        riboflavin: 0.07,
        niacin: 0.3,
        pantothenicAcid: 0.1,
        folateTotal: 38.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.0,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)777",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 8,
      like : 1,
      name: "Broccoli, raw",
      source: "USDA",
      category: "Vegetables",
      quantity: "100g",
      macronutrients: {
        energy: 34,
        carbohydrate: 6.6,
        fat: 0.4,
        protein: 2.8
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.6,
        sodium: 33.0,
        water: 89.3,
        vitaminA: 623.0,
        vitaminB6: 0.2,
        vitaminB12: 0.0,
        vitaminC: 89.2,
        vitaminD: 0.0,
        vitaminE: 0.8,
        vitaminK: 101.6,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 1.7,
        calcium: 47.0,
        iron: 0.7,
        magnesium: 21.0,
        phosphorus: 66.0,
        potassium: 316.0,
        zinc: 0.4,
        copper: 0.1,
        fluoride: null,
        manganese: 0.2,
        selenium: 1.0,
        thiamin: 0.07,
        riboflavin: 0.11,
        niacin: 0.6,
        pantothenicAcid: 0.3,
        folateTotal: 63.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.1,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)28888",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 9,
      like : 1,
      name: "Orange, raw",
      source: "USDA",
      category: "Fruits",
      quantity: "100g",
      macronutrients: {
        energy: 47,
        carbohydrate: 11.8,
        fat: 0.1,
        protein: 0.9
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.4,
        sodium: 0.0,
        water: 86.0,
        vitaminA: 225.0,
        vitaminB6: 0.1,
        vitaminB12: 0.0,
        vitaminC: 53.2,
        vitaminD: 0.0,
        vitaminE: 0.2,
        vitaminK: 0.0,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 9.4,
        calcium: 40.0,
        iron: 0.1,
        magnesium: 10.0,
        phosphorus: 12.0,
        potassium: 181.0,
        zinc: 0.1,
        copper: 0.1,
        fluoride: null,
        manganese: 0.0,
        selenium: 0.0,
        thiamin: 0.09,
        riboflavin: 0.04,
        niacin: 0.4,
        pantothenicAcid: 0.3,
        folateTotal: 30.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.0,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)999",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    },
    {
      id: 10,
      like : 1,
      name: "Strawberry, raw",
      source: "USDA",
      category: "Fruits",
      quantity: "100g",
      macronutrients: {
        energy: 32,
        carbohydrate: 7.7,
        fat: 0.3,
        protein: 0.8
      },
      micronutrients: {
        cholesterol: 0.0,
        fiber: 2.0,
        sodium: 1.0,
        water: 91.0,
        vitaminA: 12.0,
        vitaminB6: 0.1,
        vitaminB12: 0.0,
        vitaminC: 58.8,
        vitaminD: 0.0,
        vitaminE: 0.3,
        vitaminK: 2.2,
        starch: 0.0,
        lactose: 0.0,
        alcohol: 0.0,
        caffeine: 0.0,
        sugars: 4.9,
        calcium: 16.0,
        iron: 0.4,
        magnesium: 13.0,
        phosphorus: 24.0,
        potassium: 153.0,
        zinc: 0.2,
        copper: 0.1,
        fluoride: null,
        manganese: 0.0,
        selenium: 0.0,
        thiamin: 0.03,
        riboflavin: 0.02,
        niacin: 0.4,
        pantothenicAcid: 0.2,
        folateTotal: 24.0,
        folicAcid: 0.0,
        fattyAcidsTrans: 0.0,
        fattyAcidsSaturated: 0.0,
        fattyAcidsMonounsaturated: 0.0,
        fattyAcidsPolyunsaturated: 0.0,
        chloride: null
      },
      ingredients : [
        "Ackee (đóng hộp, đã để ráo nước)1000",
        "Cá muối (salted codfish)",
        "Hành tây",
        "Ớt chuông (màu đỏ hoặc xanh)",
        "Cà chua",
        "Tỏi",
        "Hành lá",
        "Tiêu đen",
        "Lá thyme (cỏ xạ hương)",
        "Dầu ăn (dầu thực vật hoặc dầu dừa)"
      ] 
    }
];

  

  localStorage.setItem("food" ,JSON.stringify(food));


 

let repice = [
    {
      id: 1,
      coverSrc: "https://example.com/image.jpg",
      name: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
      description: "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
      author: "Joana Jardim",
      totalTime: "00:40",
      preparationTime: "00:40",
      finalWeight: "978.8 grams",
      portions: 4,
      ingredients: [
        "food_01", "food_02", "food_03"
      ],
      cookingMethods: [
        {
          id: 1,
          content: "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin."
        }
      ],
      category: [
        {
          id: 1,
          name: "vegetarian"
        },
        {
          id: 2,
          name: "appetizer"
        }
      ]
    }
];
  


localStorage.setItem("recipe",JSON.stringify(repice));

let category = [
    {
      id: 1,
      name: "vegeterian",
      description: "Dishes that do not include meat, fish, or poultry, suitable for"
    },
    {
      id: 2,
      name:"appetizer",
      description: "Small dishes served before the main course to stimulate the appetite."
    },
    {
      id: 3,
      name: "vegan",
      description: "Plant-based recipes with no animal products, including dairy and eggs."
    },
    {
      id: 4,
      name: "main_course",
      description: "The main dish in a meal, often more substantial and filling."
    },
    {
      id: 5,
      name:"dessert",
      description: "Sweet dishes typically served at the end of a meal"
    },
    {
      id: 6,
      name: "low_carb",
      description: "Recipes with reduced carbohydrate content, often for weight or sugar control"
    },
    {
      id: 7,
      name: "gluten_free",
      description:" Meals made without gluten, suitable for those with gluten intolerance"
    },
    {
      id: 8,
      name: "breakfast",
      description:" Recipes designed for the first meal of the day"
    },
    {
      id: 9,
      name: "salad",
      description: "Cold or warm dishes primarily composed of vegetables, fruits, and dressings"
    },
    {
      id: 10,
      name:"soup",
      description: "Liquid-based dishes, either hot or cold, made with a variety of ingredients"
    }
];

localStorage.setItem("category",JSON.stringify(category));

 


// Hàm loadFile: Lấy danh sách tất cả người dùng từ localStorage
function loadFile() {
    let user = JSON.parse(localStorage.getItem("user")); // Lấy danh sách người dùng từ localStorage
    return user ? user : []; // Nếu không có dữ liệu, trả về một mảng rỗng
}

// Hàm checkLogin: Kiểm tra thông tin đăng nhập
function checkLogin() {
    let user = loadFile(); // Lấy danh sách người dùng
    let email = document.getElementsByClassName("text")[0].value; // Lấy email từ input
    let pass = document.getElementsByClassName("text")[1].value; // Lấy mật khẩu từ input
    let remember = document.getElementsByClassName("check")[0].checked; // Kiểm tra nếu người dùng chọn "Remember me"

    // Tìm người dùng trong danh sách dựa trên email
    let emailUserlogin = user.findIndex(u => u.email === email);

    if (emailUserlogin === -1) {
        // Nếu email không tồn tại, hiển thị lỗi
        document.getElementsByClassName("ennor")[0].style.display = "block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
            <div class="header">
                <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
                <span class="delete">X</span>
            </div>
            <p>Email không tồn tại!</p>
        `;
        return; // Kết thúc hàm
    }

    // Kiểm tra mật khẩu
    if (pass !== user[emailUserlogin].password) {
        // Nếu mật khẩu không đúng, hiển thị lỗi
        document.getElementsByClassName("ennor")[0].style.display = "block";
        document.getElementsByClassName("ennor")[0].innerHTML = `
            <div class="header">
                <div class="top"><img src="../assets/icon/remove_circle.png" alt=""><span>Ennor</span></div>
                <span class="delete">X</span>
            </div>
            <p>Mật khẩu không chính xác!</p>
        `;
        return; // Kết thúc hàm
    }

    // Nếu email và mật khẩu đúng
    let constUser = {...user[emailUserlogin]}; // Lấy thông tin người dùng hiện tại

    // Ghi nhớ tài khoản nếu người dùng chọn "Remember me"
    if (remember) {
        localStorage.setItem("constUser", JSON.stringify(constUser)); // Lưu thông tin người dùng vào localStorage
    }

    // Lấy danh sách người dùng đã đăng nhập từ localStorage
    let userLoginsucsess = JSON.parse(localStorage.getItem("userlogin")) || [];

    // Kiểm tra xem người dùng đã có trong danh sách chưa
    let existingIndex = userLoginsucsess.findIndex(u => u.id === constUser.id);

    if (existingIndex !== -1) {
        // Nếu người dùng đã tồn tại, xóa người dùng khỏi vị trí cũ
        userLoginsucsess.splice(existingIndex, 1);
    }

    // Đưa người dùng vào cuối mảng
    userLoginsucsess.push(constUser);

    // Cập nhật localStorage
    localStorage.setItem("userlogin", JSON.stringify(userLoginsucsess));

    console.log("Danh sách người dùng đã đăng nhập:", userLoginsucsess);

    // Hiển thị thông báo thành công
    document.getElementsByClassName("success")[0].style.display = "block";

    // Chuyển hướng về trang chủ
    window.location.href = "../home.html";
}

// Hàm loginUserremenber: Tự động điền thông tin đăng nhập nếu đã lưu
function loginUserremenber() {
    let constUser = JSON.parse(localStorage.getItem("constUser")); // Lấy thông tin người dùng đã lưu từ localStorage
    if (constUser) {
        // Điền thông tin vào các ô input
        document.getElementsByClassName("text")[0].value = constUser.email;
        document.getElementsByClassName("text")[1].value = constUser.password;
        document.getElementsByClassName("check")[0].checked = true;
    }
}

// Hàm tắt thông báo lỗi khi người dùng bấm nút "X"
document.getElementsByClassName("delete")[0].addEventListener("click", function () {
    document.getElementsByClassName("ennor")[0].style.display = "none"; // Ẩn thông báo lỗi
});

// Khởi động: Gọi hàm tự động điền thông tin đăng nhập nếu đã lưu
loginUserremenber();

// Gắn sự kiện click cho nút "Đăng nhập"
document.getElementsByClassName("submit")[0].addEventListener("click", checkLogin);