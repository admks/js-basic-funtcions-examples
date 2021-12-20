// // Write a function findMax that takes three arguments and returns their maximum.

let num1 = prompt("1. sayıyı giriniz")
let num2 =prompt("2. sayıyı giriniz")
let num3 =prompt("3. sayıyı giriniz")



function findMax(param1, param2, param3) {
    
    
    if ( param1 > param2 && param1>param3 ) {
        return param1;
    }else if ( param1 < param2 && param2 > param3 ) {
        return param2;
    } else if ( param2 < param3 && param3 > param1 ) {
        return param3;
    }
}
    
console.log(findMax(num1,num2,num3));        
    





// //Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.


function evensAndOdds(number) {
    number = prompt("pozitif bir sayı giriniz")
   
    if (number%2==0 ) {
        return (`${number} bir çift sayıdır`);
        
    }else {
        return (`${number} bir tek sayıdır`);

    }
    
}
console.log(evensAndOdds());




// //Write a function which generates a randomUserIp. Ex: 168.127.25.2

function randomUserIp() {
    let num1 =Math.floor(Math.random()*255);
    let num2 =Math.floor(Math.random()*255);
    let num3 =Math.floor(Math.random()*255);
    let num4 =Math.floor(Math.random()*255);
    console.log(num1 + "." +num2 + "." + num3 + "." + num4  );

}
randomUserIp();







//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let firstName =prompt("Adınız")
let lastName =prompt("Soyadınız")

function fullName(firstName,lastName) {
    
 namelength=(firstName + lastName).length;
    
console.log(`${firstName} ${lastName} : ${namelength} karakter.`);
    
    
}

fullName(firstName,lastName);

