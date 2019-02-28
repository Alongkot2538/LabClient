let str1 = 'OK';
let str2 = new String('OK');

//เช็คค่า ไม่เช็คชนิด
if (str1 == str2 )
    console.log('equal');
else
    console.log('Not equal');

//เช็คค่า เช็คชนิด
if (str1 === str2 )
    console.log('equal');
else
    console.log('Not equal');
