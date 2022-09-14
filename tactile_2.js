function isPalindrome(number){
    return number.toString() == number.toString().split("").reverse().join("");
}

function largestPalindrome(){

    var arr = [];    
    for(var i = 999; i>100; i--){
        for(var j = 999; j>100; j--){
            var multiple = j*i;
            if(isPalindrome(multiple)){
                arr.push(j * i);
            }
        }
    }

    return Math.max.apply(Math, arr);
}

console.log(largestPalindrome());