 (function(){

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".equal-btn");
    let clear = document.querySelector(".clear-btn");


   buttons.forEach(function(button) {
      button.addEventListener('click', function(e){
         let value = e.target.dataset.num;
         screen.value += value;
         console.log("red");
      })
   });

   equal.addEventListener('click', function(e){
      if(screen.value === ""){
         screen.value = "";
      }

      else{
         screen.value = eval(screen.value);
      }
   });



clear.addEventListener('click', function(e){
screen.value = "";
});

 })();

 