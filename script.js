
const letters = [
  "أ","ب","ت","ث","ج","ح","خ","د","ذ",
  "ر","ز","س","ش","ص","ض","ط","ظ",
  "ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"
];
function start(){
 const randommun = Math.floor(Math.random() * letters.length);
const sss = letters[randommun];
 document.getElementById("h1").textContent = sss;
}