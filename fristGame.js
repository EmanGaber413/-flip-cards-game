
let testimages = [];
let scoreRate=0
let Game=document.querySelector(".game")

  let images = document.querySelectorAll("img");
  
  images.forEach((image) => {
    image.addEventListener("click",function () {
      if(testimages.length<2){
       
    image.classList.add("opacity-100");
    testimages.push(image); 

  if (  testimages[0].getAttribute("role") === testimages[1].getAttribute("role") && scoreRate<16)  {

        testimages.forEach((selectedItem) => {
       
          selectedItem.classList.add("success");
          scoreRate++
          

          let score =document.querySelector(".score")
          let htmltext=`<h2 class=" pe-1 pe-md-3 ">score:${scoreRate/2}</h2>
                         <h2 class="pe-1 pe-md-3 fw-bolder text-capitalize "> winner</h2>`
                
             score.innerHTML=htmltext
          testimages = [];
          console.log(scoreRate)

          if (scoreRate===16) { 
          document.querySelector(".finishGame").classList.add("finish")
          Game.classList.add("z-n1")

          }
         
        });
        testimages = [];
      }
    }
     
      else{ testimages.forEach ((selectedItem)=>{selectedItem.classList.remove("opacity-100");})
    testimages=[]}
  })


})
        
      
      

      // if (testimages[0].getAttribute("role") === testimages[1].getAttribute("role") )  {

      //   const top1 = getComputedStyle(testimages[0]).top
      //   console.log(testimages);
      //   console.log(top1);
        
         
      //     testimages.forEach((item) => {
         
      //       item.classList.add("success");
      //       testimages = [];
      //     });
        
      //   }
      //   testimages = [];



  








// let images = document.querySelectorAll("img")
// let testimages = []
// function show() {images.classList.add("opacity-100")
// }

// images.forEach((image)=>{
//     image.addEventListener("click",function fill1 () {
//         return new Promise((callback) => {

//     let catchRole1=image.role

//     testimages.push(catchRole1)

//    return callback()
// })
// })
// })

// fill1.then(
// function compare(callback) {
//     if (testimages[0]===testimages[1]  ) {

//         console.log(testimages)
//         // testimages[0].classList.add("success");
//         // testimages[1].classList.add("success");

//         // testimages = []

//     }

//      else{ console.log("not found")};

//      callback()
// };
// )
