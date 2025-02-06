const shareButton = document.getElementById("js-share-btn");
const shareDiv = document.getElementById("js-mobile-share");

shareButton.addEventListener("click", () => {
  shareDiv.classList.toggle('show');
});



getYear();

function getYear() {
  document.getElementById('js-year').textContent = new Date().getFullYear();
}