/** Below code is for finding the unique keys of each complex object in any complex array. 
*
*   Note: Each element of an array must be an object.
*
*   Input:
*   a =[
*     { c: [{ d: 5}] },
*     '5',
*     { f: 7 },
*      { e: { c: [ 9, { d: 9 }] } }
*   ];
*
*   Output: ["c", "d", "f", "e"]
*/

const a =[
    { c: [{ d: 5}] },
    '5',
    { f: 7 },
     { e: { c: [ 9, { d: 9 }] } }
  ];
  
  var uniqueA = [];
  const getUniqueRec = (obj) => {
      const temp = Object.keys(obj);
      if( temp.length != 0){
        for(let index=0; index<temp.length; index++){
          if(!uniqueA.includes(temp[index])){
            if( temp[index] != '0' && temp[index] != '1' && temp[index] != '2' && temp[index] != '3' && temp[index] != '4' && temp[index] != '5' && temp[index] != '6' && temp[index] != '7' && temp[index] != '8' && temp[index] != '9'){
              uniqueA.push(temp[index]);
            }
          }
          if( typeof(obj[temp[index]]) != "string" && typeof(obj[temp[index]]) != "number" ){
            if( Object.keys(obj[temp[index]]).length != 0 ){
              getUniqueRec(obj[temp[index]]);
            }
          }
        }
    }
  }
  
  const getUnique = (a) => {
    a.map((row) => {
   if( typeof(row) != "string" &&  typeof(row) != "number"){
     getUniqueRec(row);
      }
    })
  };
  
  getUnique(a);
  console.log(uniqueA);
  
  /** 
  *   Recursion Function is used.
  */