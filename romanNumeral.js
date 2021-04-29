function convertToRoman(num) {
    const numbers=[1,4,5,9,10,40,50,90,100,400,500,900,1000]; //Key point is realizing the repeatation of the symbols for 3 times before change it
    const romanNumbers=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]; // for 3 I repeats 3 times for 8 I also repeats 3 times etc.
    var i =12;  //my biggest number can have 12 character at most for 4 digit decimal numbers like 1356
    let roman ="";
    while(num!==0){
        if(numbers[i]<=num){
            roman += romanNumbers[i];
            num -= numbers[i];
        }else{
            i -=1;
        }
    }
    return roman;
}

convertToRoman(36);