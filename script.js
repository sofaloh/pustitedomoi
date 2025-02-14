function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300); 
let audio = new Audio ("Грустная Песня - Мяу мяу мяу мяу.mp3");
let audioStopped = false;
  document.addEventListener("click", function () {
    if (!audioStopped && audio.paused) {
      audio.play();
      audio.loop = true;
    }
    let cong = document.getElementById("cong");
    let img = document.getElementById("serdce");
        cong.style.visibility = "visible";
        img.style.visibility = "visible";
        arina.style.visibility = "visible";ola.style.visibility = "visible";dasha.style.visibility = "visible";
        let scale = 1;
        const targetScale = 3;
        const step = 0.02;
    function animate() {
        if (scale < targetScale) {
            scale += step;
            img.style.transform = `scale(${scale})`;
            cong.style.transform = `scale(${scale})`;
            requestAnimationFrame(animate);
        }
    }
    animate();
  });
