canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "darkgray";
ctx.lineWidth = 1;
ctx.rect(80, 100, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.stroke();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.beginPath(); ctx.arc (150, 150, 40,0, 2* Math.PI); ctx.stroke();

ctx.beginPath();
ctx.stroke();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.beginPath(); ctx.arc (190, 190, 40,0, 2* Math.PI); ctx.stroke();

ctx.beginPath();
ctx.stroke();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath(); ctx.arc (230, 150, 40,0, 2* Math.PI); ctx.stroke();

ctx.beginPath();
ctx.stroke();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.beginPath(); ctx.arc (270, 190, 40,0, 2* Math.PI); ctx.stroke();

ctx.beginPath();
ctx.stroke();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath(); ctx.arc (310, 150, 40,0, 2* Math.PI); ctx.stroke();