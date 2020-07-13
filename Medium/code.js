 let matchCount = 25 ;
 let yourMatchCount = 0 ;
 let hisMatchCount = 0 ;
 console.log('All' , matchCount)
 document.querySelector('.header__count').innerText = matchCount
// function startFirstFlame(event){
   
// if (event.target.className == 'control__languages__English' ){document.querySelector('.Languages').innerHTML = 'English' 
// document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Easy'
// document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Medium'
// document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Hard'
// }
// if (event.target.className == 'control__languages__Russian' ){document.querySelector('.Languages').innerHTML =   'Русский' 
// document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Легко'
// document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Средне'
// document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Сложно'
// }
// if (event.target.className == 'control__languages__Ukrainian' ){document.querySelector('.Languages').innerHTML =  'Українська'  
// document.querySelector('.control__gameDifficulty__easy').innerHTML = 'Легко'
// document.querySelector('.control__gameDifficulty__medium').innerHTML = 'Середнє'
// document.querySelector('.control__gameDifficulty__hard').innerHTML = 'Складно'
// }
// document.querySelector('.herebeflame1').className = 'flame' 
// }
// function startSecondFlame(){
//   document.querySelector('.herebeflame2').className = 'flame' 

// }
 
function sayHi() {
  document.querySelector(".Match1").style.display ='none'; 
  document.querySelector(".rightSide__Matches__text").innerText = +1 ;
  let new_row = document.createElement('div'); new_row.className = "SmallM";
  document.querySelector(".leftSide__Matches__text").appendChild(new_row)

}
 
function fly(x){
  if(hisMatchCount +  yourMatchCount < 25 ){

  
  document.querySelector('.header__count').innerText = matchCount
  matchCount -=   x
  console.log(x , matchCount)
 
 yourMatchCount += x
 document.querySelector('.leftSide__Matches__text').innerText =  yourMatchCount

 
 if(matchCount >  3   ){
  
    hisMatchCount += 
  matchCount -=  
  document.querySelector('.header__count').innerText = matchCount
   
  document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
    document.querySelector('.header__count').innerText = matchCount
   }
 }

 if(matchCount <=  3   ){
    
  hisMatchCount += matchCount
 matchCount -= matchCount
  
 document.querySelector('.header__count').innerText = matchCount
  
 document.querySelector('.rightSide__Matches__text').innerText =   hisMatchCount
 
 document.querySelector('.header__count').innerText = matchCount


}
 if(hisMatchCount +  yourMatchCount >= 25 ){
 
 if ( yourMatchCount % 2 == 0) {
  document.querySelector('.header__count').innerText = 'You win!'
 } 
  if( yourMatchCount % 2  != 0 ){
 
  document.querySelector('.header__count').innerText = 'You lose!'
 }

}}
 
(function loop() {
  calc();
  move(div, pos);
 
  if (++frames > 220) {       // tweak, use other techniques - just to reset bounce
    frames = 0; pos.y = 20;
  }
  requestAnimationFrame(loop)
  setTimeout(sayHi, 3650);
 
})();
 
function move(el, p) {
  el.style.transform = el.style.webkitTransform = "translate("+p.x+"px,"+p.y+"px)";
 
}


var div = document.querySelector(".Match2"),
    v = {x: 2.3, y: 1},       // some vector
    pos = {x: 100, y: 20},    // some position
    g = 0.5,                  // some gravity
    absorption = 0.7,         // friction/absorption
    bottom = 150,             // floor collision
    frames = 0;               // to reset animation (for demo)

// main calculation of the animation using a particle and a vector
function calc() {
  pos.x += v.x;               // update position with vector
  pos.y += v.y;
  v.y += g;                   // update vector with gravity
  if (pos.y > bottom) {       // hit da floor, bounce
    pos.y = bottom;           // force position = max bottom
    v.y = -v.y * absorption;  // reduce power with absorption
  }
  if (pos.x < 0 || pos.x > 620) v.x = -v.x;
}

// animate
// (function loop() {
//   calc();
//   move(div, pos);
 
//   if (++frames > 220) {       // tweak, use other techniques - just to reset bounce
//     frames = 0; pos.y = 20;
//   }
//   requestAnimationFrame(loop)
// })();

// function move(el, p) {
//   el.style.transform = el.style.webkitTransform = "translate("+p.x+"px,"+p.y+"px)";
// }
// var el_up =  
//             document.querySelector( 
//               "GFG_UP"); 
//         var el_down =  
//             document.getElementById( 
//               "GFG_DOWN"); 
//         el_up.innerHTML =  
//           "Click on button to change"+ 
//           " the position of the DIV.";
 
function GFG_Fun() { 
  var x = 610; 
  var y = 0 ; 
  var element = document.querySelector('.Matches'); 
  element.style.position = "absolute"; 
  element.style.left = x + 'px'; 
  element.style.top = y + 'px'; 
 
    for(let i = 0; i < 10 ; i++){

      element.style.top =  ++y + 'px'; 
    }
} 
// 845, 108 

function game(){

}