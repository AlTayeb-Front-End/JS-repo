console.log(closed);
console.log(
  `This is screen height ${window.outerHeight} & This is screen width ${window.outerWidth}`
);
console.log(
  `This is document height ${window.innerHeight} & This is document width ${window.innerWidth}`
);
console.log(`This is scroll top ${Math.round(window.scrollY)}`);

let smallWindow;

function openNewWindow() {
  smallWindow = window.open("child.html", "_Blank  ");
}

function scrollWindow() {
  smallWindow.scrollBy(0, 50);
  smallWindow.focus();
}
