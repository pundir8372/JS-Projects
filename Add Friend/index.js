var check = 0
let addFriend = document.querySelector("#Add");

let isStatus = document.querySelector("h5");
addFriend.addEventListener("click", () => {
  if (check == 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    addFriend.innerHTML="Remove Friend";
    check=1;
  }else{
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    addFriend.innerHTML="Add Friend";
    check=0;
  }

})
