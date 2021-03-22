var canvas = document.getElementById("Drawing_Book");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 9;
ctx.arc( 200, 200 , 50 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 9;
ctx.arc( 270, 250 , 50 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 9;
ctx.arc( 335, 200 , 50 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 9;
ctx.arc( 400, 250 , 50 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 9;
ctx.arc( 465, 200 , 50 , 0 , 2 * Math.PI);
ctx.stroke();
