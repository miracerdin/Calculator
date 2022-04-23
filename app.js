let audio = new Audio('yay-ziplama-doing-ses-efekti.mp3');


function myFunction(){
   let sonuc = eval(document.getElementById('operation').innerHTML);
   if((sonuc.toFixed(5)).toString().endsWith('00000')){
       document.getElementById('result').innerHTML = sonuc;
   }
   else{document.getElementById('result').innerHTML = sonuc.toFixed(5);}

}
let buttonsLength = document.getElementsByClassName('btn').length;
for(let i=0; i<buttonsLength;i++){
    document.querySelectorAll('.btn')[i].addEventListener('click', ses);
}
function ses(){
    audio.play()
}
//<div><a onclick="play_audio('audio_el',audio_element,2.01,3.2);"></a></div>
