// let header = document.getElementById("header");
// let showHeader = document.getElementById("show-header");
// let remvoeHeader = document.getElementById("remove-header");
// let changeBackgroundHeader = document.getElementById("change-background");

// let buttons = [showHeader, remvoeHeader, changeBackgroundHeader];
// let actions = ["show", "remove", "changeBackground"];

// function getAction(action) {
//   return (
//     actions.filter((item) => {
//       return item === `${action.replace("Header", "")}`;
//     })[0] ?? "no-action"
//   );
// }

// function executeAction(action) {
//   // if (getAction(action)) {
//   switch (action) {
//     case "show":
//       header.style.display = "block";
//       break;
//     case "remove":
//       header.style.display = "none";
//       break;
//     case "changeBackground":
//       header.style.backgroundColor = "red";
//       break;
//     default:
//       console.log("there is no valid action");
//   }
//   // }
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     switch (i) {
//       case 0:
//         header.style.color = "blue";
//         break;
//       default:
//         console.log("faild");
//     }
//   });
// }

// console.log(showHeader);

// executeAction();
// console.log("test");
// console.log(`${"test".replace("st", "")}`);

// console.log(
//   `${actions.filter((item) => {
//     return item === "removeHeader".replace("Header", "");
//   })}`
// );
