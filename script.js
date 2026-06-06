function createSnowflake() {

    const snow = document.createElement("div");

    snow.innerHTML = "❄";

    snow.style.position = "fixed";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.top = "-20px";
    snow.style.color = "white";
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 15 + 10 + "px";
    snow.style.pointerEvents = "none";
    snow.style.zIndex = "9999";

    document.body.appendChild(snow);

    let pos = -20;

    const fall = setInterval(() => {

        pos += 2;

        snow.style.top = pos + "px";

        if(pos > window.innerHeight){
            clearInterval(fall);
            snow.remove();
        }

    },20);
}

setInterval(createSnowflake,200);
