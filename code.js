 
 
function startFirstFlame(event){
   
if (event.target.className == 'control__languages__English' ){document.querySelector('.Languages').innerHTML = 'English' 
document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Easy'
document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Medium'
document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Hard'
}
if (event.target.className == 'control__languages__Russian' ){document.querySelector('.Languages').innerHTML =   'Русский' 
document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Легко'
document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Средне'
document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Сложно'
}
if (event.target.className == 'control__languages__Ukrainian' ){document.querySelector('.Languages').innerHTML =  'Українська'  
document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Легко'
document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Середнє'
document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Складно'
}
document.querySelector('.herebeflame1').className = 'flame' 
}
function startSecondFlame(){
  document.querySelector('.herebeflame2').className = 'flame' 

}
 


