let container = document.querySelector(".container");
let card = document.querySelector(".card");
let title = document.querySelector(".productTitle");
let sneaker = document.querySelector(".productImage");
let sizes = document.querySelector(".sizes");
let purchase = document.querySelector(".purchase");
let description = document.querySelector(".productDescription");
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    console.log(xAxis, yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
container.addEventListener("mouseenter", (e) => {
    
  card.style.transition = "none";
    title.style.transform = "translateZ(160px)";
    description.style.transform = "translateZ(160px)";
    sizes.style.transform = "translateZ(160px)";
    purchase.style.transform = "translateZ(160px)";
    sneaker.style.transform = "translateZ(160px)";
       
}) 


container.addEventListener("mouseleave", (e) => {
    
  card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0)";
    description.style.transform = "translateZ(0)";
    sizes.style.transform = "translateZ(0)";
    purchase.style.transform = "translateZ(0)";
    sneaker.style.transform = "translateZ(0)";

})


//Multiple containers code below

// let container = document.querySelectorAll(".container");
// let card = document.querySelectorAll(".card");
// let title = document.querySelectorAll(".productTitle");
// let sneaker = document.querySelectorAll(".productImage");
// let sizes = document.querySelectorAll(".sizes");
// let purchase = document.querySelectorAll(".purchase");
// let description = document.querySelectorAll(".productDescription");
// for (let index = 0; index < container.length; index++) {
//     container[index].addEventListener("mousemove", (e) => {
//         let xAxis = (window.innerWidth/2 - e.pageX)/25;
//         let yAxis = (window.innerHeight/2 - e.pageY)/25;
//         //console.log(xAxis, yAxis);
//         card[index].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//     })
// }
// for (let index = 0; index < container.length; index++) {
// container[index].addEventListener("mouseenter", (e) => {
    
//        card[index].style.transition = "none";
//     title[index].style.transform = "translateZ(120px)";
//     description[index].style.transform = "translateZ(120px)";
//     sizes[index].style.transform = "translateZ(120px)";
//     purchase[index].style.transform = "translateZ(120px)";
//     sneaker[index].style.transform = "translateZ(120px)";
       
// })
// }   


// for (let index = 0; index < container.length; index++) {
// container[index].addEventListener("mouseleave", (e) => {
    

//         card[index].style.transition = "all 0.5s ease";
//     card[index].style.transform = `rotateY(0deg) rotateX(0deg)`;
//     title[index].style.transform = "translateZ(0)";
//     description[index].style.transform = "translateZ(0)";
//     sizes[index].style.transform = "translateZ(0)";
//     purchase[index].style.transform = "translateZ(0)";
//     sneaker[index].style.transform = "translateZ(0)";
// })
// }