let num1 = 231 
let num2 = new Number(231)
let num3 = new Number(231)
console.log(num1==num2)
console.log(num2==num3)
console.log(num)
console.log(typeof num) 

// let num = 231.90
console.log(num.toFixed(3))
console.log(num.toPrecision(2))
console.log(num.toExponential(3))
console.log(num.toString())
console.log(num.valueOf())


//Maths
console.log(Math.E)
console.log(Math.PI)
console.log(Math.LOG10E)
let num3 = 89990.9872
console.log(Math.floor(num3))
console.log(Math.ceil(num3))

console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+11)
//0<=value<1
// 0-9 +11

// min = 40 , max = 50 
console,log(Math.floor(Math.random()*(max-min+1)+min))
console.log(Math.floor(Math.random()*(50-40+1)+40))