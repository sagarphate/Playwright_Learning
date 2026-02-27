/** Write a program that classifies a triangle based on its side lengths.
 * Given three input values representing the lengths of the sides, 
 * determine if the triangle is equilateral (all sides are equal), 
 * isosceles (exactly two sides are equal), or scalene (no sides are equal). 
 * Use an if-else statement to classify the triangle.
 */

let sideOne = 10
let sideTwo = 10
let sideThree = 20

if(sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne){
    console.log("This triangle is scalene (no sides are equal)")
} else if(sideOne === sideTwo && sideTwo === sideThree && sideThree === sideOne){
      console.log("This triangle is equilateral (all sides are equal)")
} else {
    console.log("This triangle is isosceles (exactly two sides are equal)")
}

