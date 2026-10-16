// ========================================
// FLAVORFIND - FOOD RECIPE FINDER
// HTML + CSS + JAVASCRIPT
// ========================================

const recipes = [

    // ========== INDIAN CUISINE ==========

    {
        id: 1,
        name: "Chicken Biryani",
        cuisine: "Indian",
        category: "non-vegetarian",
        time: 50,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=700&q=80",
        description: "Aromatic Indian rice cooked with chicken and spices.",
        ingredients: ["Rice", "Chicken", "Onion", "Tomato", "Biryani masala"],
        instructions: ["Marinate chicken with spices.", "Cook onions and tomatoes.", "Add chicken and rice.", "Cook until the chicken and rice are fully cooked."]
    },
    {
        id: 2,
        name: "Masala Dosa",
        cuisine: "Indian",
        category: "vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80",
        description: "Crispy dosa filled with delicious potato masala.",
        ingredients: ["Dosa batter", "Potatoes", "Onion", "Mustard seeds", "Turmeric"],
        instructions: ["Prepare potato masala.", "Spread dosa batter on a hot pan.", "Cook until crispy.", "Add the masala and fold."]
    },
    {
        id: 3,
        name: "Idli Sambar",
        cuisine: "Indian",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
        description: "Soft steamed idlis served with flavorful sambar.",
        ingredients: ["Idli batter", "Toor dal", "Tomato", "Sambar powder", "Vegetables"],
        instructions: ["Steam idlis until cooked.", "Cook dal and vegetables.", "Add sambar powder and tamarind.", "Simmer and serve with idli."]
    },
    {
        id: 4,
        name: "Paneer Butter Masala",
        cuisine: "Indian",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
        description: "Paneer cubes in creamy tomato gravy.",
        ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Indian spices"],
        instructions: ["Prepare tomato gravy.", "Add butter and spices.", "Add paneer cubes.", "Simmer and serve."]
    },
    {
        id: 5,
        name: "Butter Chicken",
        cuisine: "Indian",
        category: "non-vegetarian",
        time: 40,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
        description: "Tender chicken in a buttery tomato sauce.",
        ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
        instructions: ["Marinate the chicken.", "Cook the chicken thoroughly.", "Prepare tomato gravy.", "Add butter and cream, then simmer."]
    },
    {
        id: 6,
        name: "Vegetable Pulao",
        cuisine: "Indian",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
        description: "Fragrant rice cooked with vegetables and spices.",
        ingredients: ["Rice", "Carrots", "Beans", "Peas", "Whole spices"],
        instructions: ["Wash the rice.", "Cook vegetables with spices.", "Add rice and water.", "Cook until the rice is tender."]
    },
    {
        id: 7,
        name: "Chole Masala",
        cuisine: "Indian",
        category: "vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
        description: "Chickpeas cooked in a spicy Indian gravy.",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Chole masala", "Ginger"],
        instructions: ["Cook soaked chickpeas until tender.", "Prepare onion and tomato gravy.", "Add spices and chickpeas.", "Simmer and serve."]
    },
    {
        id: 8,
        name: "Samosa",
        cuisine: "Indian",
        category: "vegetarian",
        time: 40,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
        description: "Crispy pastry filled with spiced potatoes.",
        ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"],
        instructions: ["Prepare the potato filling.", "Shape the pastry.", "Fill and seal the samosas.", "Fry until golden and fully cooked."]
    },

    // ========== CHINESE CUISINE ==========

    {
        id: 9,
        name: "Vegetable Fried Rice",
        cuisine: "Chinese",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
        description: "Rice stir-fried with colorful vegetables.",
        ingredients: ["Cooked rice", "Carrot", "Beans", "Spring onion", "Soy sauce"],
        instructions: ["Heat oil in a wok.", "Stir-fry the vegetables.", "Add cooked rice.", "Add soy sauce and mix."]
    },
    {
        id: 10,
        name: "Hakka Noodles",
        cuisine: "Chinese",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
        description: "Stir-fried noodles with crunchy vegetables.",
        ingredients: ["Noodles", "Cabbage", "Carrot", "Capsicum", "Soy sauce"],
        instructions: ["Boil the noodles.", "Stir-fry the vegetables.", "Add noodles and sauces.", "Toss and serve."]
    },
    {
        id: 11,
        name: "Chicken Manchurian",
        cuisine: "Chinese",
        category: "non-vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
        description: "Chicken pieces coated in a savory sauce.",
        ingredients: ["Chicken", "Garlic", "Soy sauce", "Cornflour", "Spring onion"],
        instructions: ["Prepare the chicken pieces.", "Cook the chicken thoroughly.", "Prepare garlic and soy sauce.", "Combine and simmer."]
    },
    {
        id: 12,
        name: "Vegetable Spring Rolls",
        cuisine: "Chinese",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        description: "Crispy rolls filled with vegetables.",
        ingredients: ["Spring roll wrappers", "Cabbage", "Carrot", "Beans", "Oil"],
        instructions: ["Prepare the vegetable filling.", "Fill and roll the wrappers.", "Seal the edges.", "Cook until crispy."]
    },
    {
        id: 13,
        name: "Sweet and Sour Chicken",
        cuisine: "Chinese",
        category: "non-vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
        description: "Chicken tossed in a tangy sweet and sour sauce.",
        ingredients: ["Chicken", "Bell pepper", "Pineapple", "Vinegar", "Tomato sauce"],
        instructions: ["Cook chicken thoroughly.", "Stir-fry the peppers.", "Prepare the sauce.", "Combine everything and serve."]
    },
    {
        id: 14,
        name: "Hot and Sour Soup",
        cuisine: "Chinese",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
        description: "A warming soup with a spicy and tangy flavor.",
        ingredients: ["Vegetable stock", "Mushrooms", "Carrot", "Vinegar", "Soy sauce"],
        instructions: ["Heat the vegetable stock.", "Add sliced vegetables.", "Season with vinegar and soy sauce.", "Simmer until vegetables are cooked."]
    },

    // ========== ITALIAN CUISINE ==========

    {
        id: 15,
        name: "Margherita Pizza",
        cuisine: "Italian",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        description: "Classic pizza with tomato sauce, cheese, and basil.",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
        instructions: ["Spread sauce over the dough.", "Add cheese and basil.", "Bake at 220°C until the crust is cooked."]
    },
    {
        id: 16,
        name: "Creamy Alfredo Pasta",
        cuisine: "Italian",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Pasta coated in a rich creamy sauce.",
        ingredients: ["Pasta", "Cream", "Garlic", "Butter", "Parmesan"],
        instructions: ["Boil pasta.", "Cook garlic in butter.", "Add cream and cheese.", "Mix with pasta and serve."]
    },
    {
        id: 17,
        name: "Lasagna",
        cuisine: "Italian",
        category: "non-vegetarian",
        time: 60,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80",
        description: "Layered pasta baked with meat sauce and cheese.",
        ingredients: ["Lasagna sheets", "Tomato sauce", "Minced meat", "Cheese"],
        instructions: ["Cook the meat and prepare the sauce.", "Layer pasta sheets with sauce.", "Add cheese.", "Bake until bubbling and fully cooked."]
    },
    {
        id: 18,
        name: "Bruschetta",
        cuisine: "Italian",
        category: "vegetarian",
        time: 15,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=700&q=80",
        description: "Toasted bread topped with tomatoes and herbs.",
        ingredients: ["Bread", "Tomatoes", "Garlic", "Olive oil", "Basil"],
        instructions: ["Toast the bread.", "Chop tomatoes and herbs.", "Mix with olive oil.", "Spoon over the toast."]
    },
    {
        id: 19,
        name: "Mushroom Risotto",
        cuisine: "Italian",
        category: "vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=80",
        description: "Creamy Italian rice cooked with mushrooms.",
        ingredients: ["Arborio rice", "Mushrooms", "Vegetable stock", "Butter", "Parmesan"],
        instructions: ["Cook mushrooms in butter.", "Add rice and stir.", "Add warm stock gradually.", "Stir until creamy and cooked."]
    },
    {
        id: 20,
        name: "Garlic Bread",
        cuisine: "Italian",
        category: "vegetarian",
        time: 15,
        image: "https://images.unsplash.com/photo-1619531040576-f9416740661c?auto=format&fit=crop&w=700&q=80",
        description: "Toasted bread with garlic butter and herbs.",
        ingredients: ["Bread", "Butter", "Garlic", "Parsley", "Cheese"],
        instructions: ["Mix butter, garlic, and herbs.", "Spread over bread.", "Add cheese if desired.", "Bake until golden."]
    },

    // ========== KOREAN CUISINE ==========

    {
        id: 21,
        name: "Bibimbap",
        cuisine: "Korean",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=700&q=80",
        description: "Korean rice bowl topped with vegetables and sauce.",
        ingredients: ["Rice", "Carrot", "Spinach", "Mushrooms", "Gochujang"],
        instructions: ["Cook the rice.", "Prepare vegetables separately.", "Arrange everything over rice.", "Serve with Korean chili paste."]
    },
    {
        id: 22,
        name: "Kimchi Fried Rice",
        cuisine: "Korean",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
        description: "Spicy Korean-style fried rice.",
        ingredients: ["Rice", "Kimchi", "Spring onion", "Soy sauce", "Sesame oil"],
        instructions: ["Chop the kimchi.", "Stir-fry the kimchi.", "Add rice and sauces.", "Mix thoroughly and serve."]
    },
    {
        id: 23,
        name: "Korean Vegetable Pancake",
        cuisine: "Korean",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        description: "Savory pancake filled with vegetables.",
        ingredients: ["Flour", "Water", "Spring onion", "Carrot", "Oil"],
        instructions: ["Mix flour and water.", "Add chopped vegetables.", "Pour into a hot oiled pan.", "Cook both sides until golden."]
    },
    {
        id: 24,
        name: "Korean Chicken",
        cuisine: "Korean",
        category: "non-vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        description: "Chicken coated in a spicy Korean-inspired sauce.",
        ingredients: ["Chicken", "Gochujang", "Garlic", "Soy sauce", "Honey"],
        instructions: ["Prepare the sauce.", "Cook chicken thoroughly.", "Add the sauce.", "Simmer until coated and serve."]
    },

    // ========== JAPANESE CUISINE ==========

    {
        id: 25,
        name: "Vegetable Sushi",
        cuisine: "Japanese",
        category: "vegetarian",
        time: 40,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80",
        description: "Japanese rice rolls filled with vegetables.",
        ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Carrot", "Rice vinegar"],
        instructions: ["Cook and season the rice.", "Spread rice over nori.", "Add vegetables.", "Roll tightly and slice."]
    },
    {
        id: 26,
        name: "Japanese Ramen",
        cuisine: "Japanese",
        category: "non-vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
        description: "Noodle soup served in a flavorful broth.",
        ingredients: ["Ramen noodles", "Broth", "Egg", "Spring onion", "Mushrooms"],
        instructions: ["Prepare the broth.", "Cook noodles according to the packet.", "Prepare cooked toppings.", "Serve noodles in hot broth."]
    },
    {
        id: 27,
        name: "Chicken Teriyaki",
        cuisine: "Japanese",
        category: "non-vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        description: "Chicken coated in a sweet and savory glaze.",
        ingredients: ["Chicken", "Soy sauce", "Honey", "Garlic", "Ginger"],
        instructions: ["Mix the sauce ingredients.", "Cook chicken thoroughly.", "Add sauce to the pan.", "Simmer until glossy."]
    },
    {
        id: 28,
        name: "Vegetable Tempura",
        cuisine: "Japanese",
        category: "vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        description: "Crispy battered vegetables.",
        ingredients: ["Carrot", "Sweet potato", "Flour", "Cold water", "Oil"],
        instructions: ["Slice the vegetables.", "Mix a light batter.", "Dip vegetables in batter.", "Fry carefully until crisp and cooked."]
    },

    // ========== MEXICAN CUISINE ==========

    {
        id: 29,
        name: "Vegetable Tacos",
        cuisine: "Mexican",
        category: "vegetarian",
        time: 20,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=80",
        description: "Tortillas filled with beans, vegetables, and salsa.",
        ingredients: ["Tortillas", "Beans", "Tomatoes", "Lettuce", "Cheese"],
        instructions: ["Warm the tortillas.", "Prepare the beans and vegetables.", "Fill each tortilla.", "Add salsa and serve."]
    },
    {
        id: 30,
        name: "Chicken Burrito",
        cuisine: "Mexican",
        category: "non-vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
        description: "A tortilla wrap filled with chicken, rice, and beans.",
        ingredients: ["Tortilla", "Chicken", "Rice", "Beans", "Salsa"],
        instructions: ["Cook chicken thoroughly.", "Prepare rice and beans.", "Fill the tortilla.", "Fold and serve."]
    },
    {
        id: 31,
        name: "Cheese Quesadilla",
        cuisine: "Mexican",
        category: "vegetarian",
        time: 15,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=80",
        description: "Crispy tortilla filled with melted cheese.",
        ingredients: ["Tortillas", "Cheese", "Bell pepper", "Onion"],
        instructions: ["Add cheese and vegetables to a tortilla.", "Fold the tortilla.", "Cook in a pan until golden.", "Cut into wedges."]
    },
    {
        id: 32,
        name: "Mexican Rice",
        cuisine: "Mexican",
        category: "vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
        description: "Rice cooked with tomatoes and mild spices.",
        ingredients: ["Rice", "Tomatoes", "Onion", "Garlic", "Vegetable stock"],
        instructions: ["Cook onion and garlic.", "Add rice and tomatoes.", "Pour in stock.", "Cook until the rice is tender."]
    },

    // ========== THAI CUISINE ==========

    {
        id: 33,
        name: "Pad Thai",
        cuisine: "Thai",
        category: "non-vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=700&q=80",
        description: "Thai stir-fried noodles with a tangy sauce.",
        ingredients: ["Rice noodles", "Egg", "Chicken or tofu", "Peanuts", "Lime"],
        instructions: ["Soak noodles according to the packet.", "Cook the egg and protein.", "Add noodles and sauce.", "Serve with peanuts and lime."]
    },
    {
        id: 34,
        name: "Thai Green Curry",
        cuisine: "Thai",
        category: "vegetarian",
        time: 30,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
        description: "Fragrant coconut curry with vegetables.",
        ingredients: ["Green curry paste", "Coconut milk", "Vegetables", "Basil", "Rice"],
        instructions: ["Heat the curry paste.", "Stir in coconut milk.", "Add vegetables.", "Simmer until cooked and serve with rice."]
    },
    {
        id: 35,
        name: "Thai Mango Salad",
        cuisine: "Thai",
        category: "vegetarian",
        time: 15,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        description: "Fresh mango salad with a sweet and tangy dressing.",
        ingredients: ["Green mango", "Carrot", "Lime", "Peanuts", "Chili"],
        instructions: ["Shred the mango and carrot.", "Prepare lime dressing.", "Mix the ingredients.", "Top with peanuts and serve."]
    },

    // ========== AMERICAN CUISINE ==========

    {
        id: 36,
        name: "Classic Cheeseburger",
        cuisine: "American",
        category: "non-vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        description: "Juicy burger with cheese and fresh vegetables.",
        ingredients: ["Burger bun", "Chicken or beef patty", "Cheese", "Lettuce", "Tomato"],
        instructions: ["Cook the patty thoroughly.", "Toast the bun.", "Add cheese and vegetables.", "Assemble the burger."]
    },
    {
        id: 37,
        name: "Fluffy Pancakes",
        cuisine: "American",
        category: "dessert",
        time: 15,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        description: "Soft pancakes perfect for breakfast.",
        ingredients: ["Flour", "Milk", "Egg", "Sugar", "Baking powder"],
        instructions: ["Mix dry ingredients.", "Add milk and egg.", "Pour batter into a pan.", "Cook both sides until golden."]
    },
    {
        id: 38,
        name: "Mac and Cheese",
        cuisine: "American",
        category: "vegetarian",
        time: 25,
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=700&q=80",
        description: "Creamy macaroni covered in cheese sauce.",
        ingredients: ["Macaroni", "Milk", "Cheddar cheese", "Butter", "Flour"],
        instructions: ["Boil macaroni.", "Prepare a butter and flour base.", "Add milk and cheese.", "Mix with macaroni and serve."]
    },
    {
        id: 39,
        name: "Chocolate Brownies",
        cuisine: "American",
        category: "dessert",
        time: 35,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        description: "Rich chocolate brownies with a soft center.",
        ingredients: ["Chocolate", "Butter", "Sugar", "Flour", "Eggs"],
        instructions: ["Melt chocolate and butter.", "Mix with sugar, eggs, and flour.", "Pour into a baking tin.", "Bake until set."]
    },

    // ========== FRENCH CUISINE ==========

    {
        id: 40,
        name: "French Crêpes",
        cuisine: "French",
        category: "dessert",
        time: 20,
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=80",
        description: "Thin French pancakes served with sweet toppings.",
        ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar"],
        instructions: ["Whisk ingredients into a smooth batter.", "Rest briefly.", "Cook a thin layer in a pan.", "Flip and serve."]
    },
    {
        id: 41,
        name: "Ratatouille",
        cuisine: "French",
        category: "vegetarian",
        time: 45,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
        description: "A colorful French vegetable dish.",
        ingredients: ["Eggplant", "Zucchini", "Tomatoes", "Bell pepper", "Herbs"],
        instructions: ["Slice the vegetables.", "Arrange them in a baking dish.", "Add herbs and olive oil.", "Bake until tender."]
    },
    {
        id: 42,
        name: "French Toast",
        cuisine: "French",
        category: "dessert",
        time: 15,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80",
        description: "Golden bread dipped in an egg mixture.",
        ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Sugar"],
        instructions: ["Whisk eggs, milk, and cinnamon.", "Dip the bread.", "Cook in a buttered pan.", "Serve when golden and cooked."]
    },

    // ========== ARABIC CUISINE ==========

    {
        id: 43,
        name: "Chicken Shawarma",
        cuisine: "Arabic",
        category: "non-vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80",
        description: "Spiced chicken served in flatbread.",
        ingredients: ["Chicken", "Flatbread", "Yogurt", "Garlic", "Spices"],
        instructions: ["Marinate the chicken.", "Cook it thoroughly.", "Prepare garlic yogurt sauce.", "Wrap chicken in flatbread."]
    },
    {
        id: 44,
        name: "Falafel",
        cuisine: "Arabic",
        category: "vegetarian",
        time: 35,
        image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb9?auto=format&fit=crop&w=700&q=80",
        description: "Crispy chickpea patties with herbs and spices.",
        ingredients: ["Chickpeas", "Parsley", "Garlic", "Cumin", "Flour"],
        instructions: ["Blend soaked chickpeas with herbs.", "Shape into small patties.", "Cook until crisp and fully cooked.", "Serve with sauce."]
    },
    {
        id: 45,
        name: "Hummus",
        cuisine: "Arabic",
        category: "vegetarian",
        time: 10,
        image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=700&q=80",
        description: "Creamy chickpea dip served with bread.",
        ingredients: ["Cooked chickpeas", "Tahini", "Lemon juice", "Garlic", "Olive oil"],
        instructions: ["Add ingredients to a blender.", "Blend until smooth.", "Adjust lemon and seasoning.", "Serve with olive oil."]
    },

    // ========== INTERNATIONAL DISHES ==========

    {
        id: 46,
        name: "Chocolate Cake",
        cuisine: "International",
        category: "dessert",
        time: 45,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
        description: "Rich chocolate cake for dessert lovers.",
        ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Milk"],
        instructions: ["Mix dry ingredients.", "Add wet ingredients.", "Pour into a prepared tin.", "Bake at 180°C until cooked."]
    },
    {
        id: 47,
        name: "Fruit Yogurt Bowl",
        cuisine: "International",
        category: "dessert",
        time: 5,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
        description: "Fresh fruit mixed with creamy yogurt.",
        ingredients: ["Yogurt", "Banana", "Strawberries", "Apple", "Honey"],
        instructions: ["Wash and chop the fruit.", "Add yogurt to a bowl.", "Mix in the fruit.", "Drizzle with honey."]
    },
    {
        id: 48,
        name: "Garden Vegetable Salad",
        cuisine: "International",
        category: "vegetarian",
        time: 10,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        description: "Fresh and colorful salad with a light dressing.",
        ingredients: ["Lettuce", "Cucumber", "Tomatoes", "Carrot", "Lemon"],
        instructions: ["Wash all vegetables.", "Chop and combine.", "Prepare a lemon dressing.", "Toss and serve."]
    },
    {
        id: 49,
        name: "Grilled Vegetable Sandwich",
        cuisine: "International",
        category: "vegetarian",
        time: 15,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        description: "Toasted sandwich with vegetables and cheese.",
        ingredients: ["Bread", "Tomato", "Cucumber", "Cheese", "Butter"],
        instructions: ["Prepare sliced vegetables.", "Arrange them on bread with cheese.", "Butter the outside.", "Grill until golden."]
    },
    {
        id: 50,
        name: "Banana Smoothie",
        cuisine: "International",
        category: "vegetarian",
        time: 5,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=700&q=80",
        description: "A refreshing banana smoothie.",
        ingredients: ["Banana", "Milk", "Yogurt", "Honey", "Ice"],
        instructions: ["Peel and slice the banana.", "Add all ingredients to a blender.", "Blend until smooth.", "Serve immediately."]
    }

];


// ========================================
// 1. ELEMENTS AND STATE
// ========================================

const recipeContainer = document.getElementById("recipeContainer");
const favoriteContainer = document.getElementById("favoriteContainer");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const sectionTitle = document.getElementById("sectionTitle");
const recipeCount = document.getElementById("recipeCount");
const favoriteCount = document.getElementById("favoriteCount");
const emptyMessage = document.getElementById("emptyMessage");
const recipeModal = document.getElementById("recipeModal");

let selectedCuisine = "All";
let selectedCategory = "all";
let currentSearch = "";
let currentRecipeId = null;

let favorites = [];

try {
    const storedFavorites = JSON.parse(
        localStorage.getItem("flavorFindFavorites") || "[]"
    );

    if (Array.isArray(storedFavorites)) {
        favorites = storedFavorites.filter(
            id => Number.isInteger(id) &&
            recipes.some(recipe => recipe.id === id)
        );
    }
} catch (error) {
    favorites = [];
}


// ========================================
// 2. SAFE HTML TEXT
// ========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];
    });
}


// ========================================
// 3. RECIPE CARD
// ========================================

function createRecipeCard(recipe) {
    const saved = favorites.includes(recipe.id);

    return `
        <article class="recipe-card">

            <img
                src="${escapeHTML(recipe.image)}"
                alt="${escapeHTML(recipe.name)}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/600x400/fff0dc/526f48?text=Food+Recipe';"
            >

            <div class="recipe-info">

                <p>🌍 ${escapeHTML(recipe.cuisine)}</p>

                <h3>${escapeHTML(recipe.name)}</h3>

                <p>${escapeHTML(recipe.description)}</p>

                <p>⏱️ ${recipe.time} minutes</p>

                <button
                    type="button"
                    class="view-btn"
                    data-action="view"
                    data-id="${recipe.id}">
                    View Recipe
                </button>

                <button
                    type="button"
                    class="favorite-btn"
                    data-action="favorite"
                    data-id="${recipe.id}">
                    ${saved ? "❤️ Saved" : "♡ Favorite"}
                </button>

            </div>

        </article>
    `;
}


// ========================================
// 4. DISPLAY RECIPES
// ========================================

function displayRecipes(recipeList) {

    recipeContainer.innerHTML = recipeList
        .map(createRecipeCard)
        .join("");

    recipeCount.textContent =
        `${recipeList.length} recipe${recipeList.length === 1 ? "" : "s"} found`;

    emptyMessage.hidden = recipeList.length !== 0;
    recipeContainer.hidden = recipeList.length === 0;
}


// ========================================
// 5. DISPLAY FAVORITES
// ========================================

function displayFavorites() {

    const savedRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.id)
    );

    if (savedRecipes.length === 0) {

        favoriteContainer.innerHTML = `
            <p class="favorite-empty">
                No favorites saved yet. Click ♡ Favorite on a recipe!
            </p>
        `;

    } else {

        favoriteContainer.innerHTML = savedRecipes
            .map(createRecipeCard)
            .join("");

    }

    favoriteCount.textContent =
        `${savedRecipes.length} saved`;
}


// ========================================
// 6. FILTER AND SEARCH
// ========================================

function applyFilters() {

    const query = currentSearch.toLowerCase().trim();

    const results = recipes.filter(recipe => {

        const searchableText = [
            recipe.name,
            recipe.cuisine,
            recipe.category,
            recipe.description,
            ...recipe.ingredients
        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableText.includes(query);

        const matchesCuisine =
            selectedCuisine === "All" ||
            recipe.cuisine === selectedCuisine;

        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;

        return matchesSearch &&
            matchesCuisine &&
            matchesCategory;

    });

    if (query) {
        sectionTitle.textContent = `Search Results: ${currentSearch}`;
    } else if (selectedCuisine !== "All") {
        sectionTitle.textContent = `${selectedCuisine} Recipes`;
    } else if (selectedCategory !== "all") {
        sectionTitle.textContent =
            selectedCategory === "dessert"
                ? "Dessert Recipes"
                : selectedCategory === "vegetarian"
                    ? "Vegetarian Recipes"
                    : "Non-Vegetarian Recipes";
    } else {
        sectionTitle.textContent = "Explore All Recipes";
    }

    displayRecipes(results);
    displayFavorites();

}


// ========================================
// 7. SEARCH FORM
// ========================================

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    currentSearch = searchInput.value;

    selectedCuisine = "All";
    selectedCategory = "all";

    document.querySelectorAll(".category-btn").forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(
        '[data-cuisine="All"]:not([data-category])'
    )?.classList.add("active");

    applyFilters();

    document.getElementById("recipes").scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// 8. POPULAR SEARCH BUTTONS
// ========================================

document.querySelectorAll("[data-search]").forEach(button => {

    button.addEventListener("click", function() {

        currentSearch = this.dataset.search;
        searchInput.value = currentSearch;

        selectedCuisine = "All";
        selectedCategory = "all";

        applyFilters();

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ========================================
// 9. CUISINE AND CATEGORY FILTERS
// ========================================

document.querySelectorAll(".category-btn").forEach(button => {

    button.addEventListener("click", function() {

        currentSearch = "";
        searchInput.value = "";

        selectedCuisine = this.dataset.cuisine || "All";
        selectedCategory = this.dataset.category || "all";

        document.querySelectorAll(".category-btn").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        applyFilters();

    });

});


// ========================================
// 10. VIEW RECIPE DETAILS
// ========================================

function viewRecipe(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) return;

    currentRecipeId = id;

    document.getElementById("modalImage").src = recipe.image;
    document.getElementById("modalImage").alt = recipe.name;

    document.getElementById("modalCuisine").textContent =
        `${recipe.cuisine} Cuisine`;

    document.getElementById("modalTitle").textContent =
        recipe.name;

    document.getElementById("modalDescription").textContent =
        recipe.description;

    document.getElementById("modalTime").textContent =
        `⏱️ ${recipe.time} minutes`;

    document.getElementById("modalCategory").textContent =
        recipe.category === "vegetarian"
            ? "🥗 Vegetarian"
            : recipe.category === "dessert"
                ? "🍰 Dessert"
                : "🍗 Non-Vegetarian";

    document.getElementById("modalIngredients").innerHTML =
        recipe.ingredients
            .map(item => `<li>${escapeHTML(item)}</li>`)
            .join("");

    document.getElementById("modalInstructions").innerHTML =
        recipe.instructions
            .map(item => `<li>${escapeHTML(item)}</li>`)
            .join("");

    updateModalFavoriteButton();

    recipeModal.hidden = false;
    document.body.style.overflow = "hidden";

}


// ========================================
// 11. CLOSE RECIPE MODAL
// ========================================

function closeRecipe() {

    recipeModal.hidden = true;
    document.body.style.overflow = "";
    currentRecipeId = null;

}

document.getElementById("closeModal").addEventListener(
    "click",
    closeRecipe
);

recipeModal.addEventListener("click", function(event) {

    if (event.target === recipeModal) {
        closeRecipe();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeRecipe();
    }

});


// ========================================
// 12. FAVORITES
// ========================================

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    try {
        localStorage.setItem(
            "flavorFindFavorites",
            JSON.stringify(favorites)
        );
    } catch (error) {
        console.warn("Favorites could not be saved in this browser.");
    }

    applyFilters();

    if (currentRecipeId === id) {
        updateModalFavoriteButton();
    }

}


// ========================================
// 13. MODAL FAVORITE BUTTON
// ========================================

function updateModalFavoriteButton() {

    const button = document.getElementById("modalFavoriteButton");

    if (!currentRecipeId) return;

    button.textContent = favorites.includes(currentRecipeId)
        ? "❤️ Remove from Favorites"
        : "♡ Add to Favorites";

}

document.getElementById("modalFavoriteButton").addEventListener(
    "click",
    function() {

        if (currentRecipeId !== null) {
            toggleFavorite(currentRecipeId);
        }

    }
);


// ========================================
// 14. RECIPE CARD BUTTON EVENTS
// ========================================

document.addEventListener("click", function(event) {

    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);

    if (button.dataset.action === "view") {
        viewRecipe(id);
    }

    if (button.dataset.action === "favorite") {
        toggleFavorite(id);
    }

});


// ========================================
// 15. RESET BUTTON
// ========================================

document.getElementById("resetButton").addEventListener(
    "click",
    function() {

        currentSearch = "";
        searchInput.value = "";

        selectedCuisine = "All";
        selectedCategory = "all";

        document.querySelectorAll(".category-btn").forEach(button => {
            button.classList.remove("active");
        });

        document.querySelector(
            '[data-cuisine="All"]:not([data-category])'
        )?.classList.add("active");

        applyFilters();

    }
);


// ========================================
// 16. START WEBSITE
// ========================================

applyFilters();

console.log(`FlavorFind loaded ${recipes.length} recipes.`);