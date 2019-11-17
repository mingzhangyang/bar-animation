import data from "./data/sample.js";
import {readySet, animate} from "./animate.js";

window.onload = () => {
  readySet(data, n => 2 * n);
  let running = false;
  document.getElementById("start").addEventListener('click', () => {
    if (running) {
      return;
    }
    console.log("start");
    animate(data, 20000, n => 2 * n, () => {
      document.getElementById("start").classList.remove("running");
      running = false;
    });
    running = true;
    document.getElementById("start").classList.add("running");
  });
};


