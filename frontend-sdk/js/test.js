import { createSlider, renderButton } from "./methods.js";

renderPage();

function renderPage() {
    createSlider("slider-left-turn", "turn-left-slider", -2, 2, "<");
    createSlider("slider-right-trun", "turn-right-slider", -2, 2, ">");
    renderButton("MyBtn1", 0, 1);
    renderButton("MyBtn2", 0, -1);



}