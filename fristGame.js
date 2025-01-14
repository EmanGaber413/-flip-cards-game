
let testimages = [];
document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll("img");
  
  function show() {
    images.classList.add("opacity-100");
  }

  
        
            images.forEach((image) => {
            image.addEventListener("click",function () {
               
            testimages.push(image);
      
      

      if (testimages[0].getAttribute("role") === testimages[1].getAttribute("role")  ) {
        console.log(testimages );
       
          testimages.forEach((item) => {
            item.classList.add("success");
            testimages = [];
          });
          
        }
        testimages = [];
  
});
})
})
  








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
