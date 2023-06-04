const turnplayer=document.querySelector(".turnp")
const back=document.querySelectorAll(".back")
const card=document.querySelectorAll(".card")
const score1=document.querySelector(".score1")
const score2=document.querySelector(".score2")
const endtext =document.querySelector(".endtext")
const end =document.querySelector(".end")
const reset =document.querySelector(".reset")
const startbtn =document.querySelector(".startbtn")
const start =document.querySelector(".start")
const main=document.querySelector(".main")

let  score_1=0
let  score_2=0

// for (let index = 0; index < 16; index++) {
//     main.innerHTML+=`<div class="card">
//     <img src="" class="face">
//    <div class="back"></div></div>`
//     console.log("sa")
// }
reset.addEventListener("click",()=>{
    location.reload();
})
startbtn.addEventListener("click",()=>{
    start.style.display="none"
    game()
})

function game(){
var imgs=[
    {imgsrc:"/img/beatles.jpg",id:"beat"},
    {imgsrc:"/img/beatles.jpg",id:"beat"},
    {imgsrc:"/img/blink182.jpg",id:"blink"},
    {imgsrc:"/img/blink182.jpg",id:"blink"},
    {imgsrc:"/img/fkatwigs.jpg",id:"fkat"},
    {imgsrc:"/img/fkatwigs.jpg",id:"fkat"},
    {imgsrc:"/img/joy-division.jpg",id:"joy"},
    {imgsrc:"/img/joy-division.jpg",id:"joy"},
    {imgsrc:"/img/fleetwood.jpg",id:"fleet"},
    {imgsrc:"/img/fleetwood.jpg",id:"fleet"},
    {imgsrc:"/img/ledzep.jpg",id:"ledzep"},
    {imgsrc:"/img/ledzep.jpg",id:"ledzep"},
    {imgsrc:"/img/metallica.jpg",id:"metal"},
    {imgsrc:"/img/metallica.jpg",id:"metal"},
    {imgsrc:"/img/pinkfloyd.jpg",id:"pink"},
    {imgsrc:"/img/pinkfloyd.jpg",id:"pink"}
]
imgs.sort(() => Math.random() - 0.5)
let i=0

card.forEach(item=>{
    item.firstElementChild.setAttribute("src",imgs[i].imgsrc)
    item.firstElementChild.setAttribute("id",imgs[i].id)
    i++
    item.addEventListener("click",()=>{
        item.classList.add("flip")
        const flipped_cards=document.querySelectorAll(".flip")
        if(2+2*(score_1+score_2)<flipped_cards.length){
          item.classList.remove("flip")
        }
        else{
            setTimeout(()=>{
                item.children[1].style.display="none"
              },400)
                checkWinner(item)
        }
      
           
    })
     
})

function checkWinner(item){
    item.classList.add("finded")
    const find=document.querySelectorAll(".finded")
   if(find.length==2){
       if(find[0].firstElementChild.getAttribute("id")==find[1].firstElementChild.getAttribute("id")){
            if(turnplayer.textContent=="Player1"){
                score_1++
               score1.textContent=score_1
               }
               else{
                score_2++
                 score2.textContent=score_2
               }
                find.forEach(i=>{
                   i.classList.remove("finded")
                   i.style.pointerEvents="none"
               })
               let endgame=score_1 + score_2
               if(endgame==8){
                end.style.display="flex"
                if(score1==score2){
                    endtext.textContent="Draw !"
                }
                else if(score_1>score_2){
                    endtext.textContent="Player1 Win !"
                }
                else{
                    endtext.textContent="Player2 Win !"
                }
            }
           }
        else{
        
           setTimeout(()=>{
            if(turnplayer.textContent=="Player1"){
                turnplayer.textContent="Player2"
               }
               else{
                turnplayer.textContent="Player1" 
               }
        },1500)
           
        find.forEach(i=>{
            setTimeout(()=>{
                i.classList.remove("flip")
             i.classList.remove("finded")
             
            },1000)
            setTimeout(()=>{
                i.children[1].style.display="block"
              
            
            },1500)
          
           
           
        })
       }
   }
 
}
}



