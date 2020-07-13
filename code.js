 
 
function startFirstFlame(event){
   
if (event.target.className == 'control__languages__English' ){document.querySelector('.Languages').innerHTML = 'English' 
document.querySelector('.text1').innerHTML = 'Easy' ;  document.querySelector('.changetext1').innerHTML = 'You go first you opponent isnt very smart'
document.querySelector('.text2').innerHTML = 'Medium' ;  document.querySelector('.changetext2').innerHTML = 'Your opponent go first .He will try hard to win.'
document.querySelector('.text3').innerHTML = 'Custom'   ; document.querySelector('.changetext3').innerHTML = 'You can set your own settings.'
}
if (event.target.className == 'control__languages__Russian' ){document.querySelector('.Languages').innerHTML =   'Русский' 
document.querySelector('.text1').innerHTML = 'Легко'    ; document.querySelector('.changetext1').innerHTML = 'Простой режим. Вы ходите первыми. Ваш противник действует хаотично.'
document.querySelector('.text2').innerHTML = 'Средне' ; document.querySelector('.changetext2').innerHTML = 'Сложный режим . Ваш противник ходит первым и будет  пытаться вас обыграть.'
document.querySelector('.text3').innerHTML = 'Пользовательский' ; document.querySelector('.changetext3').innerHTML = 'Вы можете настроить колличество спичек .'
}
if (event.target.className == 'control__languages__Ukrainian' ){document.querySelector('.Languages').innerHTML =  'Українська'  
document.querySelector('.text1').innerHTML = 'Легко'  ; 
document.querySelector('.text2').innerHTML = 'Середнє' ; document.querySelector('.changetext2').innerHTML = 'Складний режим . Ваш противник ходить першим і буде намагатись вас обіграти.'
document.querySelector('.text3').innerHTML = 'Користуваьцкий' ; document.querySelector('.changetext3').innerHTML = 'Ви можете налаштувати кількість сірників'
}
 
}
 
 
function changeClass1(){
  document.querySelector('.herebeflame1').className = 'flame1' 
}
function changeClassBack1(){
  document.querySelector('.flame1').className = 'herebeflame1' 
}
function changeClass2(){
  document.querySelector('.herebeflame1').className = 'flame1' 
  document.querySelector('.herebeflame2').className = 'flame2' 
}
function changeClassBack2(){
  document.querySelector('.flame1').className = 'herebeflame1' 
  document.querySelector('.flame2').className = 'herebeflame2' 
}
function changeClass3(){
  document.querySelector('.herebeflame1').className = 'flame1' 
  document.querySelector('.herebeflame2').className = 'flame2' 
  document.querySelector('.herebeflame3').className = 'flame3' 
}
function changeClassBack3(){
  document.querySelector('.flame1').className = 'herebeflame1' 
  document.querySelector('.flame2').className = 'herebeflame2' 
  document.querySelector('.flame3').className = 'herebeflame3' 
}

