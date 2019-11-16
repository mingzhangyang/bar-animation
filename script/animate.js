import update from "./update.js";

export function readySet(data) {
  let arr = update(data[0]);
  for (let i = 0; i < arr.length; i++) {
    let o = arr[i];
    let d = document.getElementById(o.name);
    d.firstElementChild.innerText = o.name;
    d.lastElementChild.innerText = o.value;
    d.style.width = `${2 * o.value}px`;
    d.style.transform = `translateY(${40 + i * 80}px)`;
  }
}

export function animate(data, duration = 20000) {
  let start = null;
  let bin = duration / (data.length - 1);

  function go(timestamp) {
    if (!start) {
      start = timestamp;
    }
    let progress = timestamp - start;
    if (progress >= duration) {
      console.log("done");
      return;
    }
    let cur = Math.floor(progress / bin);
    let nex = cur + 1;
    let ratio = (progress % bin) / bin;
    let arr = update(data[cur], data[nex], ratio);
    for (let i = 0; i < arr.length; i++) {
      let obj = arr[i];
      let d = document.getElementById(obj.name);
      d.style.width = `${2 * obj.value}px`;
      d.style.transform = `translateY(${40 + i * 80}px)`;
      d.lastElementChild.innerText = obj.value.toFixed(0);
    }
    requestAnimationFrame(go);
  }

  requestAnimationFrame(go);
}