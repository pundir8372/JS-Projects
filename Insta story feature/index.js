let arr=[
  {dp:"https://media.istockphoto.com/id/1155571106/photo/portrait-of-indian-poor-senior-or-old-woman.jpg?s=1024x1024&w=is&k=20&c=toY5lAb-2_mdC1ECPVzY6JFvQyP4dDsRxzUE9RYua3o=",story:"https://media.istockphoto.com/id/1514251891/photo/indian-farmer-ploughing-his-fields.jpg?s=2048x2048&w=is&k=20&c=XquGfOLrTX-NFtnJyv-mnkpaIJIOiFumUdfIddvkwrs="},
  {dp:"https://media.istockphoto.com/id/910380108/photo/indian-village-woman-preparing-food.jpg?s=2048x2048&w=is&k=20&c=efW4k1N9mTLq1ylJAqfhloAvOaEiMuowVNpnAptyqOw=",story:"https://media.istockphoto.com/id/1426232245/photo/open-fire-for-cooking-used-in-rural-indian-village.jpg?s=2048x2048&w=is&k=20&c=C-rp78lbtsCEs3Vuo8437NJdoUC_b1HWJ-F3lRZm5Vs="},
  {dp:"https://media.istockphoto.com/id/1207525376/photo/sunset-view-and-shadow-click-during-trekking-adventure-mountain-view-chopta-uttarakhand-india.jpg?s=2048x2048&w=is&k=20&c=jl-XeZjZt-06Ney5Q5pIIJyk8vKqvfR9b6eUjAEPKbQ=",story:"https://images.unsplash.com/photo-1612645052924-5ec1aca579d6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {dp:"https://media.istockphoto.com/id/1155210214/photo/woman-farming-in-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=8bdkK9DS4SCrpgOdHGkoE97H4DdCaZ9XoVXzTVGLTTM=",story:"https://media.istockphoto.com/id/1995188368/photo/bal-mithai.jpg?s=2048x2048&w=is&k=20&c=HzgRARVhYqgyZppvpQ1pa7lgc6Zws_1pwX_ViPS1Lro="
  },
]
var clutter="";
arr.forEach(function(element,index){
  clutter+=`<div id="story">
  <img id="${index}" src="${element.dp}">
</div>`
})
document.querySelector("#stories").innerHTML=clutter;

let stories=document.querySelector("#stories");
stories.addEventListener("click",(e)=>{
  document.querySelector("#fullScreen").style.display="block";
  document.querySelector("#fullScreen").style.backgroundImage=`url(${arr[e.target.id].story})`


  setTimeout(()=>{
    document.querySelector("#fullScreen").style.display="none";
  },2000)

});