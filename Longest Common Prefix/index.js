/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let LCP = "";
    let count = 0;
    for(let firstElem=0; firstElem<strs[0].length; firstElem++){
        let characterC = strs[0][firstElem];
        for(let allElem=1; allElem<strs.length; allElem++){
            if(characterC == strs[allElem][firstElem]){
                count++;
            }else{
                break;
            }
        }
        if( count == strs.length-1){
            LCP += characterC;
            count = 0;
        }else{
            break;
        }
    }
    return (LCP.length>0) ? LCP : "";
};