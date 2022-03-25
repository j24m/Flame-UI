// on buttons that show the toast body.
const btnToastLeft = document.querySelector("#btn-toast-left");
const btnToastCenter = document.querySelector("#btn-toast-center");
const btnToastRight = document.querySelector("#btn-toast-right");

// on toast body
const toastBodyLeft = document.querySelector("#toast-body-left");
const toastBodyCenter = document.querySelector("#toast-body-center");
const toastBodyRight = document.querySelector("#toast-body-right");

// on dismiss btn to hide the toast body 
const btnLeftDismiss = document.querySelector("#btn-left-dismiss");
const btnCenterDismiss = document.querySelector("#btn-center-dismiss");
const btnRightDismiss = document.querySelector("#btn-right-dismiss");


// event listener on buttons.
btnToastLeft.addEventListener("click", showToastLeft);
btnToastCenter.addEventListener("click", showToastCenter);
btnToastRight.addEventListener("click", showToastRight);


// show toast on button click
toastBodyLeft.style.display = "none";
function showToastLeft() {
    toastBodyLeft.style.display = "flex";
}

toastBodyCenter.style.display = "none";
function showToastCenter() {
    toastBodyCenter.style.display = "flex";
}

toastBodyRight.style.display = "none";
function showToastRight() {
    toastBodyRight.style.display = "flex";
}


// hide toast on dismiss
btnLeftDismiss.addEventListener("click",hideToastLeft)
function hideToastLeft(){
    toastBodyLeft.style.display= "none";
}

btnCenterDismiss.addEventListener("click",hideToastCenter)
function hideToastCenter(){
    toastBodyCenter.style.display= "none";
}

btnRightDismiss.addEventListener("click",hideToastRight)
function hideToastRight(){
    toastBodyRight.style.display= "none";
}
