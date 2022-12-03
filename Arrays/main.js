const strings = ["a", "b", "c", "d"];
// suppose 32 bit os system then consider 4*4 bytes = 16 bytes is a storage required in memory
//console.log(strings[2]);
//push - insert element
strings.push("e"); //O(1)
//console.log(strings);

//pop - remove last element
// strings.pop(); //O(1)
// strings.pop();

console.log(strings);

strings.unshift("x"); //insert an element at 0th index : O(n)

strings.splice(2, 0, "alian"); // O(n/2)
console.log(strings);
//[ 'x', 'a', 'alian', 'b', 'c', 'd', 'e' ]
//   0    1      2      3    4    5    6
