/**
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * @type {CanvasRenderingContext2D}
 */
let context;

/**
 * @type {Machine}
 */
let machine;

function animate() {
  machine.render(context);

  requestAnimationFrame(animate);
}

addEventListener("load", () => {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  machine = new Machine(canvas.width, canvas.height);

  const form = document.getElementById("rollForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const slot1 = document.getElementById("slot1").value;
    const slot2 = document.getElementById("slot2").value;
    const slot3 = document.getElementById("slot3").value;

    machine.roll([slot1, slot2, slot3]);
  });

  animate();
});
