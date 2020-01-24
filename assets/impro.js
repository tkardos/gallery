
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const image = document.getElementById("image");

const imageArr = ["outer1.jpg", "fract1.jpg", "fract2.jpg", "fract3.jpg", "fract4.jpg", "fract5.jpg", "aurora.jpg"];
const imagePath = imageArr.map((image) => "images/" + image);
let imageCounter = 0;

function counterHandle(operation) {
  if (operation==="plus" && imageCounter < imagePath.length-1) {
      imageCounter++
    } else if (operation === 'minus' && imageCounter > 0) {
      imageCounter--
    }
    console.log(imageCounter)
  } 
 
leftButton.onclick = () => {
  leftButton.classList.toggle("opa");
  if (rightButton.classList.contains("opa")) {
    rightButton.classList.remove("opa");
  }
  counterHandle('minus');
  image.src = imagePath[imageCounter];
};

rightButton.onclick = () => {
  rightButton.classList.toggle("opa");
  if (leftButton.classList.contains("opa")) {
    leftButton.classList.remove("opa");
  }
  counterHandle('plus');
  image.src = imagePath[imageCounter];
};

// if(content.className == "open" ) {
//   content.className = "";
//   button.innerHTML = "Show More";
// } else {
//   content.className = "open";
//   button.innerHTML = "Show Less";
// }