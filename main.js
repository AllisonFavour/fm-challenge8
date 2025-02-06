const shareButton = document.getElementById("js-share-btn");
const shareDiv = document.getElementById("js-mobile-share");

shareButton.addEventListener("click", () => {
  // shareDiv.classList.toggle("show");
  // console.log('clicked');

  if (shareDiv.classList.contains("show")) {
    shareDiv.style.display = "none";
    shareDiv.classList.remove("show");
  } else {
    shareDiv.style.display = "block";
    shareDiv.classList.add("show");
  }
  console.log("clicked");
});



getYear();

function getYear() {
    const yearSpan = document.getElementById('js-year');
    const date = new Date();
    const year = date.getFullYear();
    
    yearSpan.innerText = year;
}