



let hrs = document.getElementById("hrs");
let minut = document.getElementById("minut");
let second = document.getElementById("second");
setInterval(()=>{
  let currenTime = new Date();
hrs.innerHTML = currenTime.getHours();
minut.innerHTML = currenTime.getMinutes();
second.innerHTML = currenTime.getSeconds();
},1000)