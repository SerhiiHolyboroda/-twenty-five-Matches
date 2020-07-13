 
 
function startFirstFlame(event){
   
if (event.target.className == 'control__languages__English' ){document.querySelector('.Languages').innerHTML = 'English' 
document.querySelector('.text1').innerHTML = 'Easy'
document.querySelector('.text2').innerHTML = 'Medium'
document.querySelector('.text3').innerHTML = 'Hard'
}
if (event.target.className == 'control__languages__Russian' ){document.querySelector('.Languages').innerHTML =   'Русский' 
document.querySelector('.text1').innerHTML = 'Легко'
document.querySelector('.text2').innerHTML = 'Средне'
document.querySelector('.text3').innerHTML = 'Сложно'
}
if (event.target.className == 'control__languages__Ukrainian' ){document.querySelector('.Languages').innerHTML =  'Українська'  
document.querySelector('.text1').innerHTML = 'Легко'
document.querySelector('.text2').innerHTML = 'Середнє'
document.querySelector('.text3').innerHTML = 'Складно'
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

