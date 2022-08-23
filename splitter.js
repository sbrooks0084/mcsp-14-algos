// Write the splitter function that: 

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

    // Subarrays cannot have a length of > num
    // sub array CAN have a length that is <= num

function splitter(arr, num) {
    const result = []
    for (let i = 0; i < arr.length; i++){
        const last = result[result.length - 1]
        if(last.length === num){
            result.push([arr[i]])
        }else{
            
        }
        }

    } 
    

const arr = [1,2,3,4,5,6,7,8,9,10]
const num = 3
console.log(splitter(arr, num))

    





// // should return [[1,2,3], [4,5,6], [7,8,9], [10]]

// console.log(splitter(arr, num))