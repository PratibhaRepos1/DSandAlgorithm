/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
input is nums = [2,7,11,15], target = 9 */

// const nums = [1, 3, 7, 9, 2];
// const target = 11;
// let result = [];
// for (let i = 0; i < nums.length; i++) {
//   let pointer1 = i;
//   let pointer2 = target - nums[i];

//   //console.log(pointer1);
//   //console.log(pointer2);
//   for (let j = 1; j <= nums.length; j++) {
//     if (pointer2 === nums[j]) {
//       result.push(pointer1);
//       result.push(j);
//     }
//   }
// }
// console.log(result);

const nums = [1, 3, 7, 3, 2];
const target = 11;
let result = [];

function findTwoSum(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        result.push(p1);
        result.push(p2);
        return result;
      }
    }
  }
  return null;
}
console.log(findTwoSum(nums, target));
