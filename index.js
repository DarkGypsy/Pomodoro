let minutos = 25;
let segundos = 0;

const min = document.getElementById("minutos");
const seg = document.getElementById("segundos");
const btn = document.getElementById("start");
const stp = document.getElementById("stop");
const music = document.getElementById("music");
const title = document.getElementById("title");
const buzz = document.getElementById("buzz");
if (segundos < 10) {
    segundos = `0${segundos}`
};
min.textContent = minutos;
seg.textContent = segundos;

btn.addEventListener('click', () =>{
    minutos = 24;
    segundos = 59;
    music.play();
    btn.className = "hidden"
    stp.className = "btn"
    let time = setInterval(() =>{
        segundos = segundos - 1;
        min.textContent = minutos;
        seg.textContent = segundos;
        if (segundos < 10) {
            segundos = `0${segundos}`;
            seg.textContent = segundos;
        };
        if (minutos < 10) {
            min.textContent = `0${minutos}`;
            title.textContent = `(0${minutos}:${segundos}) Pomodoro`
        }else{
            title.textContent = `(${minutos}:${segundos}) Pomodoro`
        }
        
        if (segundos <= 0) {
            segundos = 60;
            minutos = minutos - 1;
        }
        if (minutos < 0) {
            title.textContent = "Time to work";
            min.textContent = "00";
            seg.textContent = "00";
            music.pause();
            buzz.play();
            clearInterval(time); 
            setTimeout(() => {
                title.textContent = "Pomodoro";
                min.textContent = "25";
            }, 17000);
        }
        stp.addEventListener('click', () =>{
            clearInterval(time); 
            music.pause();
            music.currentTime = 0; 
            minutos = 25;
            segundos = 0;
            btn.className = "btn"
            stp.className = "hidden"
            if (segundos < 10) {
                segundos = `0${segundos}`
            };
            min.textContent = minutos;
            seg.textContent = segundos;
            title.textContent = "Pomodoro";
        });
    }, 1000);
})
