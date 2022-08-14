// declaration variables
let guess = document.querySelector('.guess');

let message = document.querySelector('.message');
let score = document.querySelector('.score');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
//get number between 0 and 20
let myNumber = Math.trunc(Math.random() * 20) + 1;
console.log(myNumber)
let myscore = 20;
function getNumber() {
if(!guess.value ){
message.innerHTML='no number !'
}else if (guess.value<=0 || guess.value>20){
message.innerHTML= 'choose number between 1 and 20 !'
}else if(guess.value > myNumber){
message.innerHTML='too hight'
myscore--
score.innerHTML=myscore
if(myscore <=0){
message.innerHTML='you lost the game try again =D'
score.innerHTML=0
}
}else if(guess.value < myNumber){
  message.innerHTML='too low'
  myscore--
  score.innerHTML=myscore
  if(myscore <=0){
    message.innerHTML='you lost the game try again =D'
    score.innerHTML=0
    }
}else if(guess.value = myNumber){
  message.innerHTML='correct number :)'
  number.innerHTML=myNumber
  highscore.innerHTML=myscore
  document.querySelector('body').style.backgroundColor = '#60b347';
}
}
//try again button
function tryAgain(){
  document.querySelector('body').style.backgroundColor = '#222';
  message.innerHTML='Start guessing...';
  number.innerHTML= '?';
  myscore=20
  score.innerHTML=myscore
  myNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value=''
  let max = Math.max(...dataScore.map(o=>o.bestscore));
   highscore.innerHTML=max
   }

//save my highscore  in localStorage
let dataScore;
if(localStorage.winner !=null){
  dataScore = JSON.parse(localStorage.winner)
}else {
  dataScore=[]
}
document.getElementById("submit").addEventListener('click', function(){
  if(highscore.innerHTML >0){
    let myObj={
      bestscore:highscore.innerHTML
    }
    dataScore.push(myObj)
    localStorage.setItem("winner",JSON.stringify(dataScore))

  }
})


