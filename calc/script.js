// const { clearConfigCache } = require("prettier");

(function () {
  const display = document.querySelector("#display");
  const dot = document.getElementById("dot");
  const clear = document.getElementById("clear");
  const back = document.getElementById("back");
  const equal =  document.getElementById("equal");
  let signal = 0;
  let saved = "";
  let active = true;
  const addNumberDisplay = () => {
    for (let i = 0; i < 10; i++) {
      document.getElementById(`${i}`)
        .addEventListener("click", () => (display.textContent += `${i}`));
    }
    dot.addEventListener("click", () => {
      if (!display.textContent.includes(".")) display.textContent += ".";
    });
    clear.onclick=()=>display.textContent = "";
    back.addEventListener("click", () => {
      let last = display.textContent.length - 1;
      display.textContent = "";
      display.textContent = display.textContent.substring(0, last);
    });
  };
  const setUp = (identi) => {
    document.getElementById(`${identi}`).addEventListener("click", () => {
      saved = parseFloat(display.textContent);
      display.textContent = "";
      signal = `${identi}`;
      active = true;
    });
  };
  const calc = () => {
    const arithmetic = {
      "+" : () => display.textContent = parseFloat(display.textContent) + saved,
      "-" : () => display.textContent = saved - parseFloat(display.textContent),
      "x" : () => display.textContent = parseFloat(display.textContent) * saved,
      "÷" : () => {
        display.textContent = saved / parseFloat(display.textContent)
        if (display.textContent === "Infinity"){
          alert("you know what you've done");
          display.textContent = "Kek";
        }
      }
    }
    equal.addEventListener("click",  () => {
      if (active) {
        arithmetic[signal]();
        display.textContent = parseFloat(display.textContent).toPrecision(3);
      }
      active = false; 
    });
  };
  addNumberDisplay();
  setUp("÷");
  setUp("x");
  setUp("-");
  setUp("+");
  calc();
})();
