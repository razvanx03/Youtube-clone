const lightmode = document.getElementById("Lightmode");
const nightmode = document.getElementById("Nightmode");

const sidebar = document.querySelector(".sidebar"); 
const header = document.querySelector(".header")
const body = document.querySelector("body");
const search = document.querySelector(".enter-search");
const voiceSearch = document.querySelector(".voice-search");

const lightText = document.getElementById("light-text");
const nightText = document.getElementById("night-text");

lightmode.addEventListener("change", () => {
  if (lightmode.checked) {
      sidebar.classList.remove("night-on");
      header.classList.remove("night-on");
      body.classList.remove("night-on");
      search.classList.remove("night-on");
      voiceSearch.classList.remove("night-on");
    }
});

nightmode.addEventListener("change", () => {
  if (nightmode.checked) {
    sidebar.classList.add("night-on");
    header.classList.add("night-on");
    body.classList.add("night-on");
    search.classList.add("night-on");
    voiceSearch.classList.add("night-on");
  }
});

// resizer
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1300) {
    lightText.innerHTML = "Light";
    nightText.innerHTML = "Night";
  } else {
    lightText.innerHTML = "Lightmode";
    nightText.innerHTML = "Nightmode";
  }
})

// for buy now button
function openPremium() {
  alert("Link will open in a new tab.");
  window.open("https://www.youtube.com/premium", "_blank");
}