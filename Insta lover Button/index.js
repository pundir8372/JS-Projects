let imageContainer=document.querySelector("#Container");
let Love=document.querySelector("i");
imageContainer.addEventListener("dblclick",()=>{
  Love.style.transform="translate(-50%,-50%) scale(1)";
  Love.style.color="red";
  Love.style.opacity=0.8;
  setTimeout(()=>{
    Love.style.opacity=0;
  },1000)
  setTimeout(()=>{
    Love.style.transform="translate(-50%,-50%) scale(0)";
  },2000)
})