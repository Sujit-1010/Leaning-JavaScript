const buttons =document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
       console.log(e);//type of event ex. PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
       console.log(e.target);//point to that attribute ex. <span class="button" id="blue"</span>
       console.log(e.target.id); // blue
       
       if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id ;
       }
         if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
       }
         if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
       }
         if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
       }
    });
});

// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

