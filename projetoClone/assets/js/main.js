function onInit(){
  changeScrollBg();
  //visibleReturnTop();
  //starCounter();
}
onInit();

function changeScrollBg(){
  window.onscroll = function(){
    const navbar = document.querySelector('.navbar-custom');

    let topNavbar = window.scrollY;
    if (topNavbar >= 60){
      navbar.classList.add("active");
    }else{
      navbar.classList.remove("active");
    }
  }
}

function visibleReturnTop(){
  window.onscroll = function(){
    const returnTop = document.querySelector('.button-backtop');

    let backTop = window.scrollY;
    if (backTop >= 290){
      returnTop.classList.add("visible");
    }else{
      returnTop.classList.remove("visible");
    }
  }
}

function starCounter(){
  window.onscroll = function(){
    let scrollPage = window.scrollY;

    let painelNumberProject = document.getElementById("project");
    let painelNumberYears = document.getElementById("years");
    let painelNumberConsult = document.getElementById("consult");
    let painelNumberSuccess = document.getElementById("succes");
    let project = 0;
    let years = 0;
    let consult = 0;
    let success = 0;

    if (scrollPage >= 500){
      for (project=0; project<=34; project++){
        console.log("");
        console.log(project + "projetc");
        // painelNumberProject.innerText = "";
        // painelNumberProject.innerText = project;
      }
      for (years=0; years<=34; years++){
        console.log("");
        console.log(years + "years");
        // painelNumberYears.innerText = "";
        // painelNumberYears.innerText = years;
      }
      for (consult=0; consult<=34; consult++){
        console.log("");
        console.log(consult + "consult");
        // painelNumberConsult.innerText = "";
        // painelNumberConsult.innerText = consult;
      }
      for (success=0; success<=835; success++){
        console.log("");
        console.log(success + "success");
        // painelNumberSuccess.innerText = "";
        // painelNumberSuccess.innerText = success;
      }return
    }else{
      console.log("Não foi");
      painelNumberProject.innerText = "654";
      painelNumberYears.innerText = "23";
      painelNumberConsult.innerText = "34";
      painelNumberSuccess.innerText = "835";
    }
  }
}







// let scroll = function(valueScroll) {
//   window.onscroll = function(){
//   return valueScroll = window.scrollY
//   }
// }

// function changeScrollBg(){
//   const navbar = document.querySelector('.navbar-custom');
//   if (scroll>=60){
//     navbar.classList.add("active");
//     }else{
//       navbar.classList.remove("active");
//     }
// }

// function visibleReturnTop(){
//   const returnTop = document.querySelector('.button-backtop');
//   if (scroll>=290){
//     returnTop.classList.add("visible");
//     }else{
//       returnTop.classList.remove("visible");
//     }
// }







// var painelNumberProject = document.getElementById("project");
// var painelNumberYears = document.getElementById("years");
// var painelNumberConsult = document.getElementById("consult");
// var painelNumberSucces = document.getElementById("succes");
// var project = 654;
// var years = 23;
// var consult = 35;
// var succes = 836;
// var increment = 0;

// window.onscroll = function(){
//   let active = window.scrollY;
//   if (active >= 1000){

//     function projects(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//         Final = 0.2 / delay

//         const tempoAtrasoEmMs = Final * 1000
//         if (increment < project) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberProject.innerText = clear;
//           painelNumberProject.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }projects(3)
    
//     function yearsExp(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//         Final = 0.2 / delay

//         const tempoAtrasoEmMs = Final * 1000
//         if (increment < years) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberYears.innerText = clear;
//           painelNumberYears.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }yearsExp(3)
    
//     function consultants(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//       Final = 0.2 / delay
    
//       const tempoAtrasoEmMs = Final * 1000
//         if (increment < consult) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberConsult.innerText = clear;
//           painelNumberConsult.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }consultants(3)
    
//     function sucessfulClients(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//       Final = 0.2 / delay
    
//       const tempoAtrasoEmMs = Final * 1000
//         if (increment < succes) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberSucces.innerText = clear;
//           painelNumberSucces.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }sucessfulClients(3)
//   }
// }