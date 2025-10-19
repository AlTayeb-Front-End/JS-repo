// console.log(closed);
// console.log(
//   `This is screen height ${window.outerHeight} & This is screen width ${window.outerWidth}`
// );
// console.log(
//   `This is document height ${window.innerHeight} & This is document width ${window.innerWidth}`
// );
// console.log(`This is scroll top ${Math.round(window.scrollY)}`);

// let smallWindow;

// function openNewWindow() {
//   smallWindow = window.open("child.html", "_Blank  ");
// }

// function scrollWindow() {
//   smallWindow.scrollBy(0, 50);
//   smallWindow.focus();
// }
// const header = document.getElementById("header");
// const colors = ["red", "green", "blue"];
// let counter = 0;
// let interval = setInterval(() => {
//   header.style.backgroundColor = colors[counter++ % 3];
// }, 1000);
// const stopColor = document.getElementById("show-header");
// stopColor.addEventListener("click", () => clearInterval(interval));
let header = document.getElementById("header");
function showTime() {
  let currendDate = new Date();
  return (header.innerHTML = currendDate.toLocaleTimeString());
}

// let counter = 0;
// let x = 5;
// function incrementCounterWithNumb(x = 3) {
//   return (counter += x);
// }
// setInterval(() => {

//   //  window.navigator.onLine === true ? "OnLine" : "OffLine";
// }, 1000000);
// let options = {
//   enableHighAccuracy: true,
// };
// window.navigator.geolocation.getCurrentPosition(
//   (position) => {
//     header.innerHTML = `latitude = ${position.coords.latitude} , Longitude = ${position.coords.longitude}`;

//     document.getElementById(
//       "location"
//     ).href = `https://www.google.com/maps/place/${position.coords.latitude},${position.coords.longitude}`;
//     document.getElementById("location").innerHTML = "Visite My Location";
//     document.getElementById("location").target = "_Blanck";
//   },
//   console.error("didn't work"),
//   options
// );
