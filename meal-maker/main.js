/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    this.dish = {
      name: dishName,
      price: dishPrice,
    };
  },
  getRandomDishFromCourse(courseName) {
    const dishes = courses.courseName * (Math.random(Math.floor) * 1);
    console.log('dishes :>> ', menu.dishes);
    return dishes;
  },
};

console.log('this.courses :>>', menu.courses);
