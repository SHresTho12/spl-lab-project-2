// import React from 'react'
// import {
//     Button,
//     chakra,
//     FormControl,
//     FormLabel,
//     Heading,
//     HStack,
//     Input,
//     Stack,
//     useToast,
//     Text,
//     Box,
//     Flex,
//   } from '@chakra-ui/react'
//   import '../../../Css/newDots.css'
//   import numberJson from "../../../Resources/QuizGame/numberJson.json";
// function DrawingApp() {


   

//     //html elements
//     const canvas = document.getElementById("dotsCanvas");
//     const downloadBtn = document.getElementById("downloadImg");
//     const undoButton = document.getElementById("undoBtn");
//     const hint = document.getElementById("hintText");
//     const nextButton = document.getElementById("nextBtn");
    
    
//     //Game States
//     let text;
//     let actualObject;
//     let scaleofdevice = window.devicePixelRatio;
//     let restore_array = [];
//     let index = -1;
    
    
    
//     //Canvas Information object
//     var data = {
//         canvas: null,
//         ctx: null,
//         clickedDot: null, //dot that was previously clicked--fromDot
//         dots: null,
//         is_drawing: false,
//         draw_color: "blue",
//         drawing_width: "2",
//     };
    
//     //Creating the array for the dots position
//     function dotsIndex(arg) {
//         let dots = [];
//         let length = Object.keys(arg).length;
//         for (let i = 1; i <= length; i++) {
//             let indexElement = "v" + i.toString();
//             var width = (arg[indexElement].cx / 1920) * data.canvas.width,
//                 height = (arg[indexElement].cy / 1080) * data.canvas.height;
//             let index = {
//                 x: width,
//                 y: height
//             };
//             dots.push(index);
//         }
//         return dots;
//     }
    
//     //initialize the dots
//     function initilizeDots() {
//         let dotsNumber = Math.floor(Math.random() * 4);
    
//         actualObject = numberJson; //numberJson[dotsNumber];
    
//         data.dots = dotsIndex(numberJson[dotsNumber]);
//         text = dotsNumber;
        
//     }
    
//     //Drawing Dots
//     function drawDots() {
//         //draws the dots on the screen
//         var i = 0;
//         for (; i < data.dots.length; i++) {
//             //loop
//             var d = data.dots[i];
//             var width = (d.x/1920)*data.canvas.width;
//             var height = (d.y/1080)*data.canvas.height;
//             data.ctx.beginPath(); //begin a new path
//             data.ctx.arc(d.x, d.y, 15 / scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle
//            // data.ctx.arc(width,height,15/scaleofdevice,0,2*Math.PI);
//             data.ctx.fillStyle = "#ffb900"; //grey color
//             data.ctx.fill(); //add fill to see on screen--set fillstyle
//             data.ctx.closePath(); //close the path
//         }
        
//     }
    
//     function prepCanvas() {
//         //setup resolution and size of canvas
//         var res = window.devicePixelRatio || 1, //resolution
//             scale = 1 / res;
//         data.canvas = document.getElementById("dotCanvas"); //dots canvas
//         data.ctx = data.canvas.getContext("2d"); //context
        
//         data.canvas.width = window.innerWidth - 60;
//         data.canvas.height = 645;
//         data.canvas.addEventListener("touchstart", start, false);
//         data.canvas.addEventListener("touchmove", draw, false);
//         data.canvas.addEventListener("mousedown", start, false);
//         data.canvas.addEventListener("mousemove", draw, false);
    
//         data.canvas.addEventListener("touchend", stop, false);
//         data.canvas.addEventListener("mouseup", stop, false);
//         data.canvas.addEventListener("mouseout", stop, false);
    
//     }
    
//     //Drawing start event
//     function start(event) {
//         data.is_drawing = true;
//         data.ctx.beginPath();
//         data.ctx.moveTo(
//             event.clientX - data.canvas.offsetLeft,
//             event.clientY - data.canvas.offsetTop
//         );
    
//         event.preventDefault();
//     }
    
//     //draw event
//     function draw(event) {
//         if (data.is_drawing) {
//             data.ctx.lineTo(
//                 event.clientX - data.canvas.offsetLeft,
//                 event.clientY - data.canvas.offsetTop
//             );
//             data.ctx.strokeStyle = data.draw_color;
//             data.ctx.lineWidth = data.drawing_width;
//             data.ctx.lineCap = "round";
//             data.ctx.lineJoin = "round";
//             data.ctx.stroke();
//         }
    
//         event.preventDefault();
//     }
    
//     //Stop the drawing path
//     function stop(event) {
//         if (data.is_drawing) {
//             data.ctx.stroke();
//             data.ctx.closePath();
//             data.is_drawing = false;
//         }
//         event.preventDefault();
    
//         if(event.type != 'mouseout'){
//             restore_array.push(data.ctx.getImageData(0, 0, data.canvas.width, data.canvas.height));
//              index+=1;
//         }
        
    
//     }
    
//     //Change the color of the drAWING
//     document.querySelectorAll(".color-button").forEach((item) => {
//         item.addEventListener("click", (event) => {
//             data.draw_color = item.style.background;
//         });
//     });
//     //Change the color through the color picker
//     document.querySelectorAll(".color-picker").forEach((item) => {
//         item.addEventListener("input", (event) => {
//             console.log(item.value);
//             data.draw_color = item.value;
//         });
//     });
//     //change the size of the lines
//     document.querySelectorAll(".pen-range").forEach((item) => {
//         item.addEventListener("input", (event) => {
//             console.log(item.value);
//             data.drawing_width = item.value;
//         });
//     });
    
//     //Clear the canvas
    
//     document.getElementById("clearCanvas").addEventListener("click", function () {
//         clearCanvas();
//     });
//     //clear canvas function
//     function clearCanvas(){
//         data.ctx.fillStyle = "rgb(73, 219, 85)";
//         data.ctx.clearRect(0, 0, data.canvas.width, data.canvas.height);
//         data.ctx.fillRect(0, 0, data.canvas.width, data.canvas.height);
//         restore_array = [];
//         index =-1;
//         hint.innerHTML = "";
    
//     }
    
//     //Initializing 
//     prepCanvas();
    
    
    
    
//     //download the image of  the canvas
//     //only png
//     downloadBtn.addEventListener("click", function () {
        
//         if (window.navigator.msSaveBlob) {
//             window.navigator.msSaveBlob(data.canvas.msSaveBlob(), "canvas-image.png");
//         } else {
//             const a = document.createElement("a");
//             document.body.appendChild(a);
//             a.href = data.canvas.toDataURL();
//             a.download = "canvas-image.png";
//             a.click();
//             document.body.removeChild(a);
//         }
//     });
    
//     //undo Functionality
//     undoButton.addEventListener("click", function () {
//         console.log("hello");
//         if(index <= 0){clearCanvas();} 
//         else{
//             index-= 1;
//             restore_array.pop();
//             data.ctx.putImageData(restore_array[index],0,0);
//         }
//     });
    
    
//     //functionality for drawing with dots
//     nextButton.addEventListener("click",function(){
//         nextButtonFunctionality();
//     });
    
//     function nextButtonFunctionality(){
//         clearCanvas();
//         initilizeDots();
//         drawDots();
//         showHint();
        
//     }
    
//     //Hint
//     function showHint(){
//         hint.innerHTML =text;
    
//     }

//   return (
//     <body>
//    <div>
//     <div className="container">
//         <canvas className="dotsCanvas" id="dotCanvas"></canvas>

//         <div className="tools">
//             <button type="button" className="dotsButton" id="undoBtn">Undo</button>

//             <button type="button" className="dotsButton" id="clearCanvas">Clear</button>
//             <button type="button" className="dotsButton" id="downloadImg">Download</button>
//             <button type="button" className="dotsButton" id="nextBtn">Next</button>
    
//             <div  className="color-button" style="background: brown;"></div>
//             <div  className="color-button" style="background: red;"></div>
//             <div className="color-button" style="background: green;"></div>

//             <Input type="color" className="color-picker" />
//             <Input type="range" min="0" max="100" className="pen-range" /> 
//          </div> 
//          <h1 className="hint" id="hintText"></h1>
//     </div>
//     <div className="score_container">
//         <h1 className="dotsHeading">Draw The Dots</h1>
    
//     </div>



//     </div>
    




    
// </body>
//   )
// }

// export default DrawingApp