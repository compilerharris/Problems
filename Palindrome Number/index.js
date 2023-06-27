/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX =  x.toString();
    let arr = [];
    let rev = "";
    for(let i=0; i< stringX.length; i++){
        if(stringX[i] != undefined){
            arr[i] = stringX[i];
        }
    }
    rev = arr.reverse().join("");
    return (rev == stringX) ? true : false;
};