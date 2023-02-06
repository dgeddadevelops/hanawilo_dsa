// ***************************  PROBLEM ONE  *****************************************

// Multiple Pointers Boilerplate
// handle edge cases
// initialize count and pointers
// istantiate loop
// compare values at pointers
// if not equal increment count; increment pointers;
// else increment pointers
// return count


//               lp[:] rp[:]
//sample arr = [    1,    1,    2,    2,    2,    2,    3,    3    ]

const countUniqueValues = (arr) => {
    // edge cases
    if(arr.length <= 1) { return arr.length } // edge case

    // initialize count and left pointer
    let count = 1;
    let lp = 0;  

    // single iterative loop
    while(lp < arr.length -1){
        const rp = lp+1;
        if(arr[rp]!==arr[lp]) {count++; lp++; console.log("unique " +count)}
        else{lp++; console.log("same")}
    }
    return count;
}

console.log(countUniqueValues([1,1,2,2,2,2,3,3,4]))

// ***************************  PROBLEM TWO  *****************************************

// Frequency List Boilerplate
// initialize empty object for duplicate check
// instantiate for loop
// for each item in loop check if key exists in object
        // if true, return true
        // if false, create key
// return false


//                 i[:]   
//sample arr = [    "a",    "b",    "c",    "a"    ]

const areThereDuplicates = (arr) => {
    const freqList = {};
    for(let i = 0; i < arr.length; i++){
        if(freqList[arr[i]]){return true}
        else {freqList[arr[i]] = true;}
    }
    return false;
}

console.log(areThereDuplicates([    "a",    "b",    "c", "a"  ]));

// ************************************PROBLEM THREE**********************************
const avgPair = (arr, avgTarget) => {
    let lp = 0;
    let rp = arr.length -1;

    while(rp > lp){
        const avg = (arr[lp] + arr[rp]) / 2;
        if( avg === avgTarget){ return true; }
        avg < avgTarget ? lp++ : rp--;
    }
    return false;
}

console.log(avgPair([2,3,5],3.5))