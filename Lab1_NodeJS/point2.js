let stdin = process.openStdin()
stdin.addListener("data", (d) => {
console.log(d.toString().trim())
stdin.destroy()
//stdin.end() // ตั้งแต่ node v10 ใช้ stdin.destroy()
});
str= "Computer"
console.log(str);
console.log(str.length)
console.log(str.substring(7, 13) )
console.log(str.replace("Banana", "Grape"))
console.log(str.toUpperCase() )
console.log(str.toLowerCase() )
console.log(str.concat(", ", "Grape") )
console.log(str.charAt(0))
//coconsole.log(str.indexOf("Kiwi")) //start from 0
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log( pos + '\n') // print 21
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log( pos + '\n') // print 7
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log( res + '\n') // print Banana
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log( res + '\n') // print Banana
var res = str.slice(7);
console.log( res + '\n') // print Banana, Kiwi
var n1 = '2';
var n2= '3';
console.log(n1+n2)
var n3 = parseInt(n1)+ parseInt(n2);
console.log(n3) // 5
isNaN(123) //false
isNaN(-1.23) //false
isNaN(5-2) //false
isNaN(0) //false
isNaN('123') //false
isNaN('Hello') //true
isNaN('2005/12/12') //true
isNaN('') //false
isNaN(true) //false
isNaN(undefined) //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN(0 / 0) //true
