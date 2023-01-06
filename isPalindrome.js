let str = "racecar";
let bag = ""
for(let i = str.length-1; i>=0; i--){
  bag += str[i];
}
(bag == str)?console.log(str,"is a Palindrome"):console.log(str,"Not a Palindrome")