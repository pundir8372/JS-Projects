const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const height = parseInt(document.querySelector("#height").value);
  const weight=  parseInt(document.querySelector("#Weight").value);
  const result=document.querySelector("#results");
  if(height==="" || height<0 || isNaN(height)){
    result.innerHTML=`Please enter a valid height ${height}`;
  }
  else if(weight==="" || weight<0 ||isNaN(weight)){
    result.innerHTML=`Please enter a valid weight ${weight}`;
  }
  else{
    const bmi=(weight / ((height*height)/1000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`
    
  }
})