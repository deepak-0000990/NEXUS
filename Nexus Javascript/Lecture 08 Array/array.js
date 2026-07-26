const arr = [1,2,4,56,78,"Deepak",true]
console.log(arr)
console.log(arr.length)
console.log(arr[2])
console.log(arr.at(-5))
// at is latest, it takes negative index
//length 
const newarr = structuredClone(arr)
console.log(newarr==arr)

// push ,add element at end
arr.push(23)
console.log(arr)

// pop
// pop (delete) the last element from the array
arr.pop()
console.log(arr)

//unshift,add the element start
arr.unshift(90)
console.log(arr)

// shift,delete element from the start
arr.shift()
console.log(arr)

// Delete operation
delete arr [0]
console.log(arr)

console.log(arr)
console.log(arr.indexOf(4))
console.log(arr.lastIndexOf(true))
console.log(arr.includes(23))


console.log(arr.slice(2,4))

// splice (changes in original array),splice(starting_index,total_element,add value)
console.log(arr.splice(2,5))
let newsplice = arr.splice(2,5)
console.log(newsplice)
console.log(arr)

arr.splice(2,3,78,"rohit")
console.log(arr)

console.log(arr.toString())
console.log(arr.join("&"))

let arr1 = [2,56,78,34,23]
let arr2 = [12,34,21,59,8]
let arr4 = [2,5,6,7,89]
let arr3 = arr1.concat(arr2,arr4)
console.log(arr3)

// 2D Array
let arr = [12,45,67]
let arr2d = [[23,67,[9000,9888]],[7888,9000,3444],[67,88]]
// console.log(arr2d[0][0])
// flat to uses to convert into 1d array 
let newarr =arr2d.flat(Infinity)
console.log(newarr)

let abc = [2,4,5,6]
console.log(Array.isArray (abc))

let ac = new Array(23,45,6,7)
console.log(ac)


let ac1 = new Array(23)//only show size of array 
console.log(ac1)