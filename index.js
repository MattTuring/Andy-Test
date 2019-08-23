var responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

var fortuneGiven = false;
document.querySelector('.clear').disabled = true;

document.querySelector('.get-anwser').addEventListener('click', function(){
if (document.querySelector('input').value == "" || document.querySelector('input').value == "Ask your question here!") {
  document.querySelector('.hidden').classList.add('show');
  document.querySelector('input').value = "";
} else {
    var fortune = Math.floor((Math.random() * responses.length));
    var userInput = document.querySelector('input').value;
    document.getElementById('content').innerHTML = `<p class="text-center style">"${userInput}"</p>
    <p class="text-center">${responses[fortune]}</p>`;
    document.querySelector('input').value = "";
    document.querySelector('.hidden').classList.remove('show');
    fortuneGiven = true
    console.log('this is running')
    document.querySelector('.clear').disabled = false;
}
})

document.querySelector('input').addEventListener('click', function(){
  if (document.querySelector('input').value == "Ask your question here!") {
    document.querySelector('input').value = "";
  }
})

document.querySelector('.clear').addEventListener('click', function(){
  if (fortuneGiven = true) {
    document.getElementById('content').innerHTML = `<img class="ball block" src="assets/eight-ball.png"  alt="">`;
  }
  fortuneGiven = false;
  document.querySelector('.clear').disabled = true;
})

document.getElementById('favorite').addEventListener('click', function(){
  var fav = document.createElement('span');
  var content = document.getElementById('content').innerHTML
  if (fortuneGiven == true) {
    document.querySelector('article').appendChild(fav);
    fav.innerHTML = `<p class="text-center">${content}</p>`;
  }
})
