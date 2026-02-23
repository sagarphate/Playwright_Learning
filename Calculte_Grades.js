/** WAP- Calculate Graded as per below
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
 */ 

let marks = 25
if(marks>=90 && marks<=100){
    console.log("Student Received Grade A")
} else if(marks>=80 && marks<=89){
    console.log("Student Received Grade B")
}else if(marks>=70 && marks<=79){
    console.log("Student Received Grade C")
}else if(marks>=60 && marks<=69){
    console.log("Student Received Grade D")
}else if(marks>=35 && marks<=59){
    console.log("Student Received Grade E")
}else{
    console.log("Student Received below 35 Marks")
}