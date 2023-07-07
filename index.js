import { summ, divide, multiply, substract } from "./math.js";

const aInputNode = document.getElementById("aInput");
const bInputNode = document.getElementById("bInput");
const resultBtnNode = document.getElementById("resultBtn");
const outputNode = document.getElementById("output");

resultBtnNode.addEventListener("click", () => {
    const a = parseInt(aInputNode.value);
    const b = parseInt(bInputNode.value);

    outputNode.innerText = summ(a, b);
});
