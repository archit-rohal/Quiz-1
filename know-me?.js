var readlinesync = require('readline-sync');
var t = readlinesync.question("Hi! My name is Archit"+"\nLet's see how well do you know me,shall we?"+"\nDo you want to proceed?\n").toLowerCase();
var score=0;
if(t=="yes") {
  var m = "Right!";
  var n = "Wrong!";
  function play(que,ans) {
  var x = readlinesync.question(que).toLowerCase();
  if(x==ans) {
    console.log(m);
    score=score+1;
  }
  else {
    console.log(n)
  }
 }
 var x = {q : "What's my favourite colour?\n", ans : "blue"};
 var y = {q : "What's my favourite food?\n", ans : "pizza"};
 var z = {q : "Where do i live?\n", ans : "delhi"};
 var arr = [x,y,z];
 for(i=0;i<arr.length;i++) {
 play(arr[i].q,arr[i].ans);
 console.log("Now your score is",score);
 }
}
console.log("Your final score is",score,"\nThank you for playing!");
