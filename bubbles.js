function create() {
  const div = document.querySelector("div");
  const elem = document.createElement("span");
  var x = Math.random() * 40;

  elem.style.width = x + "px";
  elem.style.height = x + "px";
  
  elem.style.left = Math.random() * innerWidth + "px";
  div.appendChild(elem);
  setTimeout(() =>{
    elem.remove();
}, 6000);

 
}
let id=null;

id=setInterval(create, 100);