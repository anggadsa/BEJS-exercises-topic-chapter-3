function toRoman(num){
    // let roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let num2 = num; //example 4, 13
    let i = 0;
    let string =''

    for(let j=0; j)
    while(num2 != 0){
        if(num2 >= value[i]){
            string = string + roman[i]
            num2 = num2 - value[i]
        }
        i++
    }
    
    return string
}

console.log(toRoman(2));

// function romanize(num) {
//     let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    
//     for ( i in lookup ) {
//       while ( num >= lookup[i] ) {
//         roman += i;
//         num -= lookup[i];
//       }
//     }
//     return roman;
//   }
// console.log(romanize(1453));