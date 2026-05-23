const border = document.getElementById("border");
border.style.width = `${window.innerWidth+5}px`;
border.style.height = `${window.innerHeight*0.05}px`;
border.style.top = `${-2}px`;
border.style.left = `${0}px`;

const file = document.getElementById("file");
file.style.width = `${window.innerWidth*0.09}px`;
file.style.height = `${window.innerHeight*0.05}px`;
file.style.top = `${-1}px`;
file.style.left = `${0}px`;

const makes = document.querySelector(".makes");
makes.style.width = `${window.innerHeight*0.2}px`;
makes.style.height = `${window.innerHeight*0.2}px`;

const make = document.getElementById("make");
make.style.top = `${window.innerHeight*0.125}px`;
make.style.left = `${window.innerHeight*0.125}px`;

const modal = document.getElementById("modal");
const exit = document.getElementById("exit");
make.onclick = () => {
    modal.style.display = "flex";
};
exit.onclick = () => {
    modal.style.display = "none";
};
