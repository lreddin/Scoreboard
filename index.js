let homeScore = 0;
let guestScore = 0;
let homePlueOne = document.getElementById('home-btn-plusOne');
let homePlueTwo = document.getElementById('home-btn-plusTwo');
let homePlueThree = document.getElementById('home-btn-plusThree');
let homeScoreEl = document.querySelector('#score-home');
let newGameEl = document.querySelector("#newGame")



let guestPlueOne = document.getElementById('guest-btn-plusOne');
let guestPlueTwo = document.getElementById('guest-btn-plusTwo');
let guestPlueThree = document.getElementById('guest-btn-plusThree');
let guestScoreEl = document.querySelector('#score-guest')

homePlueOne.addEventListener('click', (event)=>{
 homeScore +=1;
 homeScoreEl.textContent = homeScore;
})

homePlueTwo.addEventListener('click', (event)=>{
 homeScore +=2;
 homeScoreEl.textContent = homeScore;
})

homePlueThree.addEventListener('click', (event)=>{
 homeScore +=3;
 homeScoreEl.textContent = homeScore;
})


guestPlueOne.addEventListener('click', (event)=>{
 guestScore +=1;
 guestScoreEl.textContent = guestScore;
})

guestPlueTwo.addEventListener('click', (event)=>{
 guestScore +=2;
 guestScoreEl.textContent = guestScore;
})

guestPlueThree.addEventListener('click', (event)=>{
 guestScore +=3;
 guestScoreEl.textContent = guestScore;
})

newGameEl.addEventListener('click', ()=>{
    homeScore =0
    guestScore=0
    homeScoreEl.textContent=0;
    guestScoreEl.textContent=0;
})