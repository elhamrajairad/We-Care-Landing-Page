// Tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.color = "#102851";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween:30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

