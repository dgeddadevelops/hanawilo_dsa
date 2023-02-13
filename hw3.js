
// #1
//------->                   [:] 
const arr = [555,     8,     257,     44,     44,     322,     323,     88, 4, 652,1]

const maxSubarraySum = (arr, k) => {
    if(arr.length < k){ return null; } // EDGE CASE
    
    let maxSum = 0, tmpSum = 0;
    
    for(let i = 0; i < k; i++) { maxSum += arr[i]; } // INITIAL WINDOW

    for(let i = k; i < arr.length; i++){
        tmpSum=tmpSum-arr[i-k] + arr[i];
        console.log("Next temp sum: " + tmpSum)
        if(tmpSum>maxSum){maxSum=tmpSum;}
    }
    return maxSum;
}

//# 2
//----->[L]               [R]   
// [    15,      15,      15,     16,    16   ]

const binarySearchFirstOccurrence = (nums, target) =>{

    if(target < nums[0] || target > nums[nums.length-1]){ return -1;} // EDGE
    
    let result, leftPointer = 0, rightPointer = nums.length -1;
    
    while(nums[leftPointer] <= nums[rightPointer]){
        const middleIndex = Math.floor( (leftPointer + rightPointer) / 2 );
        const middleValue = nums[middleIndex];
        
        if(middleValue === target){
            result = middleIndex;
            rightPointer = middleIndex -1;
        } else {
            middleValue < target ? leftPointer = middleIndex+1 : rightPointer = middleIndex -1;
        }
    }
    
    return result;
}

//# 3
const lengthOfLongestSubstring = (s="aabcdefgghijk") => {
        if(s.length < 2){ return s.length } // EDGE CASE
    
        let maxLength = 0; let tmpLength = 0; let charMap = {};
    
        // --->  :
        // "aabcdefgghijk"
        charMap = {};
        for(let i = 0; i < s.length; i++){
                if(!charMap[s.charAt(i)]===true) {
                        tmpLength++;
                        charMap[s.charAt(i)]=true;
                        console.log(charMap)
                    if(tmpLength>maxLength){ maxLength=tmpLength; }
                    }
                    else {
                            tmpLength = 1; // DUPLICATE VALUE ---> BEGINNING OF NEW WINDOW
                            charMap = {};
                            charMap[s.charAt(i)]=true;
                        } 
                    }
                    return maxLength;
                }                                    
               
                
                
// PROBLEM 1 Test Cases: 
// console.log("Expected 700, Actual: " + maxSubarraySum([100,200,300,400], 2));
// console.log("Expected 39, Actual: " + maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); 
// console.log("Expected 5, Actual: " + maxSubarraySum([-3,4,0,-2,6,-1], 2));
// console.log("Expected 5, Actual: " + maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
// console.log("Expected null, Actual: " + maxSubarraySum([2,3], 3));

// PROBLEM 2 Test Cases:
// let nums1 = [1, 2, 3, 4, 5];
// let target1 = 3;
// let expected1 = 2;
// let result1 = binarySearchFirstOccurrence(nums1, target1);
// console.log("RESULT 1: " + result1)
// console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got 
// ${result1}`);

// let nums2 = [1, 2, 3, 4, 5];
// let target2 = 6;
// let expected2 = -1;
// let result2 = binarySearchFirstOccurrence(nums2, target2);
// console.log("RESULT 2: " + result2)
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got 
// ${result2}`);

// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
// let target3 = 2;
// let expected3 = 3;
// let result3 = binarySearchFirstOccurrence(nums3, target3);
// console.log("RESULT 3: " + result3)
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got 
// ${result3}`);

// PROBLEM 3 Test Cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3