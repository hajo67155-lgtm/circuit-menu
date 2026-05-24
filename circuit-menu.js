let ww = window.innerWidth;
let wh = window.innerHeight;
const border = document.getElementById("border");
border.style.width = `${ww+5}px`;
border.style.height = `${wh*0.05}px`;
border.style.top = `${-2}px`;
border.style.left = `${0}px`;

const file = document.getElementById("file");
file.style.width = `${ww*0.09}px`;
file.style.height = `${wh*0.05}px`;
file.style.top = `${-1}px`;
file.style.left = `${0}px`;

const makes = document.querySelector(".makes");
makes.style.width = `${wh*0.2}px`;
makes.style.height = `${wh*0.2}px`;

const make = document.getElementById("make");
make.style.top = `${wh*0.125}px`;
make.style.left = `${wh*0.125}px`;

const modal = document.getElementById("modal");
const exit = document.getElementById("exit");
exit.style.top = `${wh*0.3}px`;
exit.style.left = `${ww*0.7}px`;
exit.style.width = `${ww*0.04}px`;
exit.style.height = `${wh*0.04}px`;
make.onclick = () => {
    modal.style.display = "flex";
};
exit.onclick = () => {
    modal.style.display = "none";
    dd.style.display = "none";
    de.style.display = "none";
};
const mbg = document.getElementById("model-background");
mbg.style.width = `${ww*0.5}px`;
mbg.style.height = `${wh*0.45}px`;
mbg.style.left = `${ww*0.5-ww*0.25}px`;
mbg.style.top = `${wh*0.5-wh*0.225}px`;
const ont = document.getElementById("opus_name-text");
ont.style.width = `${ww*0.3}px`;
ont.style.left = `${ww*0.35}px`;
ont.style.top = `${wh*0.32}px`;
const onti = document.getElementById("opus_name-input");
onti.style.width = `${ww*0.3}px`;
onti.style.height = `${wh*0.04}px`;
onti.style.left = `${ww*0.35}px`;
onti.style.top = `${wh*0.4}px`;
const tst = document.getElementById("type_select-text");
tst.style.width = `${ww*0.3}px`;
tst.style.left = `${ww*0.35}px`;
tst.style.top = `${wh*0.48}px`;
const tss = document.getElementById("type_select-select")
tss.style.width = `${ww*0.3}px`;
tss.style.height = `${wh*0.04}px`;
tss.style.left = `${ww*0.35}px`;
tss.style.top = `${wh*0.56}px`;
const create = document.getElementById("create");
create.style.width = `${ww*0.2}px`;
create.style.height = `${wh*0.04}px`;
create.style.top = `${wh*0.64}px`;
create.style.left = `${ww*0.29}px`;
const detail = document.getElementById("detail");
detail.style.width = `${ww*0.2}px`;
detail.style.height = `${wh*0.04}px`;
detail.style.top = `${wh*0.64}px`;
detail.style.left = `${ww*0.51}px`;
const dd = document.getElementById("detail-d");
dd.style.width = `${ww*0.4}px`;
dd.style.height = `${wh*0.7}px`;
const de = document.getElementById("detail-exit");
de.style.top = `${wh*0.154}px`;
de.style.left = `${ww*0.66}px`;
detail.onclick = () => {
    dd.style.display = "flex";
    de.style.display = "flex";
}
de.onclick = () => {
    dd.style.display = "none";
    de.style.display = "none";
}
create.onclick = () => {
    if(onti.value === "") {
        alert("作品名を入力してください");
    } else {
        const opus_name = onti.value;
        alert(opus_name);
    }
}
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
