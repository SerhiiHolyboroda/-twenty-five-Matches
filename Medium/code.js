 let matchCount = 25 ;
 let yourMatchCount = 0 ;
 let hisMatchCount = 0 ;
 console.log('All' , matchCount)
 document.querySelector('.header__count').innerText = 'Good luck!'
 
 function show(){
  document.querySelector(".leftSide").style.visibility= 'visible' ;
 }
 setTimeout(first, 1000);
  function first(){
    document.querySelector('.header__count').innerText = "Start in 3"
    setTimeout(second, 1000);
  }
  
  function second(){
    document.querySelector('.header__count').innerText = "Start in 2"
    setTimeout(third, 1000);
  
  }
  function third(){
    document.querySelector('.header__count').innerText = "Start in 1"
    setTimeout(tw, 1000);
  }
  function hegoFirst(){
    let randomNumber = Math.floor((Math.random() * 3) +1);
hisMatchCount += randomNumber ;
matchCount -= randomNumber ;
document.querySelector('.header__count').innerText = matchCount
document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
  }
  function tw(){

    document.querySelector('.header__count').innerText = 25
    setTimeout(hegoFirst(), 1000);
     
    setTimeout( show , 1000);

   
  }
 
 
  function fly(x){

 
     
    if(hisMatchCount +  yourMatchCount < 25 ){
  
    
    document.querySelector('.header__count').innerText = matchCount
    matchCount -=   x

   
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

   if(matchCount <=  3   ) {
      
    if(hisMatchCount % 2 != 0 && matchCount == 3){
    hisMatchCount += 3
   matchCount -= 3
   
   document.querySelector('.header__count').innerText = matchCount
    
   document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
   
   document.querySelector('.header__count').innerText = matchCount
  }
 
  if(hisMatchCount % 2 != 0 && matchCount == 1){
    hisMatchCount += 1
    matchCount -= 1
    
    document.querySelector('.header__count').innerText = matchCount
     
    document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
    
    document.querySelector('.header__count').innerText = matchCount
  }
  if(hisMatchCount % 2 == 0 && matchCount == 3){
    hisMatchCount += 2
    matchCount -= 2
    
    document.querySelector('.header__count').innerText = matchCount
     
    document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
    
    document.querySelector('.header__count').innerText = matchCount
  }
}
  }
   if(hisMatchCount +  yourMatchCount >= 25 ){
   
   if ( yourMatchCount % 2 == 0) {
    document.querySelector('.header__count').innerText = 'You win!'
   } 
    if( yourMatchCount % 2  != 0 ){
   
    document.querySelector('.header__count').innerText = 'You lose!'
   }
  }}
   
  
   
 
 