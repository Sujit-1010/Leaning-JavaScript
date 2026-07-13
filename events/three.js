// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>setInterval Example</title>
// </head>
// <body>

//     <h1>Chai aur Javascript</h1>

//     <button id="start">Start</button>
//     <button id="stop">Stop</button>

//     <script>
//         function sayDate(str) {
//             console.log(str, Date.now());
//         }

//         let intervalId = null;

//         // Start button
//         document.getElementById("start").addEventListener("click", function () {

//             // Prevent multiple intervals
//             if (intervalId === null) {
//                 intervalId = setInterval(sayDate, 1000, "Hi");
//             }

//         });

//         // Stop button
//         document.getElementById("stop").addEventListener("click", function () {

//             clearInterval(intervalId);
//             intervalId = null;

//         });
//     </script>

// </body>
// </html>