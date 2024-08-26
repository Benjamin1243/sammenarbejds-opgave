const makeMoreButtonsButton = document.querySelector("#moreButton")
const playSoundButton = document.querySelector("#play-sound")
const audio = new Audio("sound.wav")
const selfDestroyButton = document.querySelector("#self-destroy")
const countNumber = document.querySelector("#countNumber")
const backGroundChangeButton = document.querySelector("#back-ground-change-button")
const supriseButton = document.querySelector("#supriseButton")
const alertButton = document.querySelector("#alertButton")
const citatButton = document.querySelector("#citat")
const deleteButton = document.querySelector("#delete-site")
const buttons = document.querySelectorAll('button');
const countButton = document.querySelector("#count-button")
const citater =  [
    "Jeg hader kvinder, fordi de altid ved, hvor tingene er. - Voltaire",
    "Hele mit liv har jeg troet, at luft var gratis, indtil jeg købte en pose chips.",
    "Venner er som BH’er: tæt på dit hjerte og dér for at støtte dig.",
    "Du kan lære meget fra dine børn. Fx hvor meget tålmodighed du har.",
    "Alle vil leve længe, men ingen vil være gammel.",
    "Pis aldrig mod vinden.",
    "Husk du altid, er helt unik! – Ligesom alle andre.",
    "En ren samvittighed er normalt tegn på en dårlig hukommelse.",
    "Hunde har ejere, katte har personale.",
    "Min læge fortalte mig, at løb kunne tilføje et par år til mit liv. Jeg tror, han havde ret. Jeg føler mig allerede ti år ældre."
];
playSoundButton.addEventListener("click", playSound)
selfDestroyButton.addEventListener("click", selfDestroy)
countButton.addEventListener("click", count)
deleteButton.addEventListener("click", deleteSite)
citatButton.addEventListener("click", citatFunc)
alertButton.addEventListener("click", alertBox)
supriseButton.addEventListener("click", suprise)
makeMoreButtonsButton.addEventListener("click", makeMoreButton)
backGroundChangeButton.addEventListener("click", backGroundChange)

//denne funktion skaber flere knapper, som hver især kan skifte sidens baggrund til elementet baggrund
function makeMoreButton(){
    let newButton = document.createElement("BUTTON");
    let backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ","+ Math.floor(Math.random() * 256) +","+Math.floor(Math.random() * 256) + ")";
    newButton.style.backgroundColor = backgroundColor;
    console.log(backgroundColor);
    newButton.addEventListener("click", backgroundColorFromElement);
    let text = document.createTextNode("Skift til denne farve");
    newButton.appendChild(text);
  document.body.appendChild(newButton);
}
//denne funktion ændrer baggrundsfarven på siden
function backGroundChange(){
document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ","+ Math.floor(Math.random() * 256) +","+Math.floor(Math.random() * 256) + ")";
}
function backgroundColorFromElement(event){
   let color = this.style.backgroundColor
   console.log(color)
   document.body.style.backgroundColor =color

}
function suprise(){
    
        var x = document.createElement("IMG");
        x.setAttribute("src", "ben.png");
        x.setAttribute("width", "104");
        x.setAttribute("height", "104");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
}
function alertBox(){
    alert("Hello World!")
}
function citatFunc(){
    alert(citater[ Math.floor(Math.random() * 9)]);
}
function deleteSite(){
    document.body.remove();
}
function count(){
    countNumber.textContent = Number(countNumber.textContent) + 1;
    
    console.log(this.placeholder);
}
function selfDestroy(){
    this.classList.add("ani");
}
function playSound(){
    countNumber.classList.add("ani2")

}
buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });
 