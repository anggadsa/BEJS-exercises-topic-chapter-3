function toRoman(num){

    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let num2 = num; 
    let string = ''

    if(num2 === 0){
        string += `Input is undifined`
    }

    while(num2 != 0){
        switch(true){
            case num2 >= 1000:
                string += roman[0]
                num2 -= value[0]
                break
            case num2 >= 100:
                let hundred =  (num2 >= 900) ? (string += roman[1], num2 -= value[1]) 
                    : (num2 >= 500) ? (string += roman[2], num2 -= value[2]) 
                    : (num2 >= 400) ? (string += roman[3], num2 -= value[3])
                    : (string += roman[4], num2 -= value[4]);
                break
            case num2 >= 10:
                let tens =  (num2 >= 90) ? (string += roman[5], num2 -= value[5]) 
                    : (num2 >= 50) ? (string += roman[6], num2 -= value[6]) 
                    : (num2 >= 40) ? (string += roman[7], num2 -= value[7])
                    : (string += roman[8], num2 -= value[8]);
                break
            case num2 >= 1:
                let one =  (num2 >= 9) ? (string += roman[9], num2 -= value[9]) 
                    : (num2 >= 5) ? (string += roman[10], num2 -= value[10]) 
                    : (num2 >= 4) ? (string += roman[11], num2 -= value[11])
                    : (string += roman[12], num2 -= value[12]);
                break
            default:
                console.log(`Error`)
                break
        }
    }
    
    return string
}

console.log(toRoman(0));
console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(14));
console.log(toRoman(1453));
console.log(toRoman(1646));
