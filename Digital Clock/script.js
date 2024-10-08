let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
  let currectTime = new Date();
  hrs.innerHTML = (currectTime.getHours()<10?"0":"") + currectTime.getHours();
  min.innerHTML = (currectTime.getMinutes()<10?"0":"") + currectTime.getMinutes();
  sec.innerHTML = (currectTime.getSeconds()<10?"0":"") + currectTime.getSeconds();
},1000) 











