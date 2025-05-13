const body = document.body;
const box = document.querySelectorAll(".audio")
const btn = document.querySelector(".btn");
const navItems = document.querySelectorAll(".nav-iteam")

btn.addEventListener("click", ()=>{
    body.style.background = "radial-gradient(788px at 0.7% 3.4%, rgb(164, 231, 192) 0%, #080505 90%)";
    for(i=0; i<=box.length; i++){
        let presentBox = box[i]
        presentBox.style.backgroundColor = "#FFF"
        presentBox.style.color = "black"
        presentBox.style.boxShadow = ".1px .1px 14px 0.1px #a19f9f"
    }
})
function playPause(id) {
    const audio = document.getElementById(id);
    document.querySelectorAll('audio').forEach((a) => {
      if (a.id !== id) {
        a.pause();
        a.currentTime = 0;
      }
    });
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  