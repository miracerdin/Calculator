// let audio = new Audio('yay-ziplama-doing-ses-efekti.mp3');

// function myFunction(){
//    let sonuc = eval(document.getElementById('operation').innerHTML);
//    if((sonuc.toFixed(5)).toString().endsWith('00000')){
//        document.getElementById('result').innerHTML = sonuc;
//    }
//    else{document.getElementById('result').innerHTML = sonuc.toFixed(5);}

// }
// let buttonsLength = document.getElementsByClassName('btn').length;
// for(let i=0; i<buttonsLength;i++){
//     document.querySelectorAll('.btn')[i].addEventListener('click', ses);
// }
// function ses(){
//     audio.play()
// }
//<div><a onclick="play_audio('audio_el',audio_element,2.01,3.2);"></a></div>

const result = document.querySelector("#result");
const operation = document.querySelector("#operation");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  let newInput = e.target.innerText;
  console.log(newInput);
  if (newInput == "AC") {
    result.innerText = "";
  } else if (newInput == "C") {
    operation.innerText = "";
  } else if (newInput == "=") {
    if (operation.innerText.includes("/")) {
      if (
        eval(operation.innerText)
          .toString()
          .slice(eval(operation.innerText).toString().indexOf(".") + 1).length >
        4
      ) {
        result.innerText = eval(operation.innerText).toFixed(4);
      }
    } else {
      result.innerText = eval(operation.innerText);
    }
  } else {
    operation.innerText += newInput;

    let operators = ["+", "-", "/", "*"];
    if (newInput == e.target.querySelector(".btn-.").innerText) {
      operation.innerText.inc;
    }
  }
});
