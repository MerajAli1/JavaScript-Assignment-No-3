// Chapter 15 Starts here
var a = ["a","b","c","d","e","f","g","h"];
// Chapter 15 ends here
// Chapter 16 Starts here
a.push("i")
console.log(a)
a.pop()
console.log(a)
// Chapter 16 ends here
// Chapter 17 Starts here
a.shift()
console.log(a)
a.unshift()
var b = a.slice(0,3)
console.log(b)
a.splice(3,0,"x","y","z")
console.log(a)
// Chapter 17 ends here
// Chapter 18 Starts here
var i = a.indexOf("f")
console.log(i)
console.log(a[i])
for(var i=11;i<=15;i++){
    console.log("Meraj Ali", +i)
}
console.log(a[i])
for(var i=0;i<10;i++){
    console.log("9X"+[i+1]+"="+9*[i+1])
}
// Chapter 18 ends here