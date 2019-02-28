//point3 
console.log(" Use for Standard ")
let array = [0,1,2,3]
for(let i=0;i<array.length;i++)
    console.log(array[i])

console.log("for in with array")
for (let key in array)
    console.log ( array[key] )

console.log("for in with object")
let obj = { 'a':1, 'b':2 , 'c':3}
for (key in obj)
     console.log ( key + ': ' + obj[key] )

console.log("Comparison operator")
//Comparison operator
let str1 = 'OK';
let str2 = new String('OK');
if (str1 == str2 )
    console.log('equal');
else
    console.log('Not equal');