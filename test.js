function openMenu() {
  const sideMenu = document.querySelector(".side-menu")
  sideMenu.classList.remove("translateX")
}

function closeMenu() {
  const sideMenu = document.querySelector(".side-menu")
  sideMenu.classList.add("translateX")
}

function setRed() {
  const Red = document.querySelector(".web-body")
  Red.classList.add("redcolor")
  Red.classList.remove("greencolor","bluecolor","image1","image2","image3","image4")
}

function setBlue() {
  const Blue = document.querySelector(".web-body")
  Blue.classList.add("bluecolor")
  Blue.classList.remove("greencolor","redcolor","image1","image2","image3","image4")


}


function setGreen() {
  const Green = document.querySelector(".web-body")
  Green.classList.add("greencolor")
  Green.classList.remove("redcolor","bluecolor","image1","image2","image3","image4")

}

function setImage1(){
   const image1 = document.querySelector(".web-body")
   image1.classList.add("image1")
   image1.classList.remove("image2","image3","image4","redcolor","bluecolor","greencolor")
   
}

function setImage2(){
  const image2 = document.querySelector(".web-body")
  image2.classList.add("image2")
  image2.classList.remove("image1","image3","image4","redcolor","bluecolor","greencolor")

}

function setImage3(){
  const image3 = document.querySelector(".web-body")
  image3.classList.add("image3")
  image3.classList.remove("image2","image1","image4","redcolor","bluecolor","greencolor")

}

function setImage4(){
  const image4 = document.querySelector(".web-body")
  image4.classList.add("image4")
  image4.classList.remove("image2","image3","image1","redcolor","bluecolor","greencolor")

}