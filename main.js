//declare menu 
const menu = {
  //declare courses with underscore 
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
},
  //getter method and setter methods for each 
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        return this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        return this._courses.mains = mains;
    },
    set appetizers(desserts) {
        return this._courses.desserts = desserts;
    },
  //returns the courses appetizers, mains, and desserts
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
  //new function to add dish with three parameters
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
//pushes courses coursename from add dish to the object dish 
      this._courses[courseName].push(dish);
    },
  //get a random dish by using math random and floor
  
  //also adding object dishes and setting it to the coursename then using that same dishes to return a random number based on its length
  
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomNumber = Math.floor(Math.random() * dishes.length);
        return dishes[randomNumber];
    },
  //grabs random dish from courseName for each 
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
      
      //calculates total price of each course
        const totalPrice = appetizer.price + main.price + dessert.price;
      
      //gets the name of each course by using .name
      
        return `Your appetizer is ${ appetizer.name }, your mains ${ main.name } and your dessert is ${ dessert.name }.The total price is ${ totalPrice }`;
}
};

//now create your menu using the adddishtocourse 
menu.addDishToCourse('appetizers', 'salads', 3.50)
menu.addDishToCourse('appetizers', 'Onion Baji', 3.50)
menu.addDishToCourse('appetizers', 'Wings', 3.50)

menu.addDishToCourse('mains', 'Burger', 6.50)
menu.addDishToCourse('mains', 'Rice', 6.50)
menu.addDishToCourse('mains', 'tofu', 6.50)

menu.addDishToCourse('desserts', 'Cake', 3.50)
menu.addDishToCourse('desserts', 'cookie', 3.50)
menu.addDishToCourse('desserts', 'MilkShake', 3.50)

//declare variable meal to generate random meal from the menu and console.log

const meal = menu.generateRandomMeal()
console.log(meal);
