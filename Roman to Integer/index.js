/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numberValue = 0;
    for(let i=0; i<s.length; i++){
        if( s[i] == "M"){
            numberValue += 1000;
        }else if( s[i] == "D"){
            numberValue += 500;
        }else if( s[i] == "C"){
            if(s[i+1] == "D"){
                numberValue += 400;
                i++;
            }else if(s[i+1] == "M"){
                numberValue += 900;
                i++;
            }else{
                numberValue += 100;
            }
        }else if( s[i] == "L"){
            numberValue += 50;
        }else if( s[i] == "X"){
            if(s[i+1] == "L"){
                numberValue += 40;
                i++;
            }else if(s[i+1] == "C"){
                numberValue += 90;
                i++;
            }else{
                numberValue += 10;
            }
        }else if( s[i] == "V"){
            numberValue += 5;
        }else{
            if(s[i+1] == "V"){
                numberValue += 4;
                i++;
            }else if(s[i+1] == "X"){
                numberValue += 9;
                i++;
            }else{
                numberValue += 1;
            }
        }
    }
    return numberValue;
};