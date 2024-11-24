let menu = {
    addDishToCourse: function(courseName, dishName, dishPrice){
        // LEARNED: DO NOT CAPITALIZE THE KEYS
            const dish = {
                course: courseName,
                name: dishName,
                price: dishPrice
            } 
            this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName){
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal: function(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal will include ${appetizer.name} as a starter, ${main.name} as a main dish, and ${dessert.name} for dessert. Your total will be ${totalPrice}. Enjoy your meal!`
},
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    }

};

menu.addDishToCourse('appetizers', 'Sliders', 12.99);
menu.addDishToCourse('appetizers', 'Spanikopita', 8.99);
menu.addDishToCourse('appetizers', 'Quesedilla', 9.99);
menu.addDishToCourse('appetizers', 'Nachos', 8.99);
menu.addDishToCourse('mains', 'Smoked Salmon', 26.99);
menu.addDishToCourse('mains', 'Turkey Burger', 16.99);
menu.addDishToCourse('mains', 'Goat Cheese, Walnut, and Raspberry Salad', 18.99);
menu.addDishToCourse('mains', 'New York Steak', 29.99);
menu.addDishToCourse('desserts', 'Ice Cream', 4.99);
menu.addDishToCourse('desserts', 'Tiramisu', 7.99);
menu.addDishToCourse('desserts', 'Apple Pie', 6.99);
menu.addDishToCourse('desserts', 'New York Cheesecake', 9.99);

meal = menu.generateRandomMeal();

console.log(meal);

// console.log(menu.courses);
