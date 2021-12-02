function onInit(){
  changeScrollBg();
}
onInit();

function changeScrollBg(){
  window.onscroll = function(){
    const navbar = document.querySelector('.navbar-custom');
    const returnTop = document.querySelector('.button-backtop');

    let topNavbar = window.scrollY;
    
    changeBackground(topNavbar, navbar);
    showButtonPageUp(topNavbar, returnTop);
    starCounter(topNavbar);
  }
}

function changeBackground(scrollValueBg, selector){
  if (scrollValueBg >= 60){
    selector.classList.add("active");
  }else{
    selector.classList.remove("active");
  }
}

function showButtonPageUp(scrollValue, backTop){
  if (scrollValue >= 290){
    backTop.classList.add("visible");
  }else{
    backTop.classList.remove("visible");
  }
}

function starCounter(scrollValue){
  let painelNumberProject = document.getElementById("project");
  let painelNumberYears = document.getElementById("years");
  let painelNumberConsult = document.getElementById("consult");
  let painelNumberSuccess = document.getElementById("succes");
  let project = 0;
  let years = 0;
  let consult = 0;
  let success = 0;

  if (scrollValue >= 440){
    for (project=1; project<=654; project++){
      console.log("");
      console.log(project + "projetc");
      painelNumberProject.innerText = "";
      painelNumberProject.innerText = project;
    }
    for (years=1; years<=23; years++){
      console.log("");
      console.log(years + "years");
      painelNumberYears.innerText = "";
      painelNumberYears.innerText = years;
    }
    for (consult=1; consult<=35; consult++){
      console.log("");
      console.log(consult + "consult");
      painelNumberConsult.innerText = "";
      painelNumberConsult.innerText = consult;
    }
    for (success=1; success<=836; success++){
      console.log("");
      console.log(success + "success");
      painelNumberSuccess.innerText = "";
      painelNumberSuccess.innerText = success;
    }
  }else{
    console.log("Não foi");
    painelNumberProject.innerText = "654";
    painelNumberYears.innerText = "23";
    painelNumberConsult.innerText = "34";
    painelNumberSuccess.innerText = "835";
  }
}







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