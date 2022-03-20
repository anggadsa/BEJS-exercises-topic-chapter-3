function caesar_encrypt(string, num){
    let enkripsi = '';
    for(let i=0; i <= string.length-1; i++){

        let charAt = string.charCodeAt(i)
        
        if(charAt >= 97 && charAt <= 122){
            let char = (charAt + num - 97) % 26 + 97;
            let change = String.fromCharCode(char)
            enkripsi = enkripsi + change;
            
        } else {
            enkripsi = enkripsi + string.charAt(i)
        }
        
    }

    return enkripsi;
}

function caesar_decrypt(string, num){
    let dekripsi = '';
    let decrypt = 26 - num;
    for(let i=0; i <= string.length-1; i++){

        let charAt = string.charCodeAt(i)
        
        if(charAt >= 97 && charAt <= 122){
            let char = (charAt + decrypt - 97) % 26 + 97;
            let change = String.fromCharCode(char)
            dekripsi = dekripsi + change;
        } else {
            dekripsi = dekripsi + string.charAt(i)
        }
        
    }
    
    return dekripsi;
}
console.log(caesar_encrypt('aku anak sehat', 1))
console.log(caesar_encrypt('xyz', 4))

console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat