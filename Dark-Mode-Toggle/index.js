const inputEl = document.querySelector("input");
// console.log(inputEl.checked); its false 
const bodyEl = document.querySelector("body");



function updateBody() {

    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
   
} 
// to set default mode to dark mode meaning when page loads dark mode is on
// inputEl.checked = true; 
// updateBody();

// to set default mode to light mode meaning when page loads light mode is on
// inputEl.checked = false; 
inputEl.checked = JSON.parse(localStorage.getItem("mode")); 
updateBody();


inputEl.addEventListener("input", function() {
    updateBody();
    updateLocalStorage();
});



// function updateLocalStorage() {
//     localStorage.setItem("mode", inputEl.checked);
// }

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

