 let prom = prompt("Введите колличество спичек!",  ) ;
 let matchCount = ( 2 * prom) +1
 let yourMatchCount = 0 ;
 let hisMatchCount = 0 ;
 console.log('All' , matchCount)
 document.querySelector('.header__count').innerText =    matchCount 
 
 
function sayHi() {
  document.querySelector(".Match1").style.display ='none'; 
  document.querySelector(".rightSide__Matches__text").innerText = +1 ;
  let new_row = document.createElement('div'); new_row.className = "SmallM";
  document.querySelector(".leftSide__Matches__text").appendChild(new_row)

}

document.querySelector('#name').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    let x =  +document.querySelector('#name').value 
    document.querySelector('#name').value = ""
    console.log(typeof x)
    fly(x)
    // Cancel the default action, if needed
    
    // Trigger the button element with a click
   
  }
})

// function getInputValue(){
//   x =  document.querySelector('#name').value
//   console.log(x)
//   fly(x)
//   }


function fly(x){
  if(hisMatchCount +  yourMatchCount < matchCount  ){

  
  document.querySelector('.header__count').innerText = matchCount
  matchCount -=   x
  console.log(x , matchCount)
 
 yourMatchCount += x
 document.querySelector('.leftSide__Matches__text').innerText =  yourMatchCount

 let randomNumber = Math.floor((Math.random() * 3) +1);
 if(matchCount >  3   ){
  matchCount -= randomNumber
  document.querySelector('.header__count').innerText = matchCount
  hisMatchCount += randomNumber  
  document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
    document.querySelector('.header__count').innerText = matchCount
 }
 if(matchCount <=  3   ){
    
  hisMatchCount += matchCount
 matchCount -= matchCount
  
 document.querySelector('.header__count').innerText = matchCount
  
 document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
 
 document.querySelector('.header__count').innerText = matchCount


}
 if(hisMatchCount +  yourMatchCount >= matchCount  ){
 
 if ( yourMatchCount % 2 == 0) {
  document.querySelector('.header__count').innerText = 'You win!'
 } 
  if( yourMatchCount % 2  != 0 ){
 
  document.querySelector('.header__count').innerText = 'You lose!'
 }
}}
 
 
 
 
}

 
