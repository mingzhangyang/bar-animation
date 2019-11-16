import data from "./data/sample.js";
import {readySet, animate} from "./animate.js";

window.onload = () => {
  readySet(data);
  document.getElementById("start").addEventListener('click', () => {
    console.log("start");
    animate(data);
    document.getElementById("start").style.opacity = "0";

  });
};


