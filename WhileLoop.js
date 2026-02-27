/**
1️⃣ Print "Playwright" 5 times
2️⃣ Print numbers from 1 to 10
3️⃣ Print even numbers from 1 to 20
4️⃣ Calculate sum of first 10 natural numbers
5️⃣ Print the multiplication table of 7
 */

console.log("Print Playwright 5 times")
let i=1
while(i<=5){
    console.log("Playeright")
    i++
}

console.log("numbers from 1 to 10")
let j=1
while(j<=10){
    console.log(j)
    j++
}

console.log("even numbers from 1 to 20")
let k=1
while(k<=20){
    if(k%2 === 0){
        console.log(k)
    }
    k++
}


console.log("Calculate sum of first 10 natural numbers")
let l=1
sum = 0
while(l<=10){
    sum = sum + l
    l++
}
console.log(sum)

console.log("multiplication table of 7")
let m = 1
let table = 7
while(m<=10){
    console.log(m*table)
    m++
}