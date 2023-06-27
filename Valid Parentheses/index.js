/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    if( s[0] == ")" || s[0] == "}" || s[0] == "]" ){
        return false;
    }
    arr.push(s[0]);
    for(let i=1; i<s.length; i++){
        if( s[i] == "(" || s[i] == "{" || s[i] == "[" ){
            arr.push(s[i]);
        }else if( s[i] == ")" ){
            if( arr[arr.length-1] == "("){
                arr.pop();
            }else{
                return false;
            }
        }else if( s[i] == "}" ){
            if( arr[arr.length-1] == "{"){
                arr.pop();
            }else{
                return false;
            }
        }else if( s[i] == "]" ){
            if( arr[arr.length-1] == "["){
                arr.pop();
            }else{
                return false;
            }
        }
    }
    return (arr.length == 0) ? true : false;
};