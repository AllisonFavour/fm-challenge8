const shareButton = document.getElementById("js-share-btn");
const shareDiv = document.getElementById("js-mobile-share");

shareButton.addEventListener("click", () => {
  shareDiv.classList.toggle("show");
});



getYear();

function getYear() {
    const yearSpan = document.getElementById('js-year');
    const date = new Date();
    const year = date.getFullYear();
    
    yearSpan.innerText = year;
}