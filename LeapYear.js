/** Create a program that determines whether a given year is a leap year. 
 * A leap year is divisible by 4,but not by 100 unless it is also divisible by 400.
 * Use an if-else statement to make this determination.
 */
// 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964,
// 1968, 1972, 1976, 1980. 1984, 1988, 1992, 1996, 2000, 2004
// 2008, 2012, 2016, 2020, 2024, 2028

let year = 1929;

if(year%4 === 0){
    console.log("this is leap year")
} else if(year%100 === 0){
    console.log("this is not a leap year")
} else if(year%400 === 0){
    console.log("this is leap year")
} else {
    console.log("this is not a leap year")
}