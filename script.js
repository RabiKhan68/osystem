const biosMessage = [
    "Checking system memory...",
    "Detecting hard drives...",
    "Loading bootloader...",
    "Starting OS kernel...",
    "Loading UI...",
];

let index = 0;
const screen = document.getElementById("boot-screen");

const showNextMessage = () => {
if(index < biosMessage.length) {
    screen.innerText += biosMessage[index] + "\n";
    index++;
    setTimeout(showNextMessage, 2000);
    Audio = new Audio("server-startup.mp3");
    Audio.play("server-startup.mp3");
} else {
    let dots = 0;
    const loadingInterval = setInterval(() => {
        if(dots < 3) {
            screen.innerText += ".";
            dots++;
        } else {
            clearInterval(loadingInterval);
            screen.innerText += "\nBoot successful! Press any key to continue...";
            document.addEventListener("keydown", () => {
                window.location.href = "logo.html";
            });
        }
    }, 500);
}
};
setTimeout(showNextMessage, 2000);