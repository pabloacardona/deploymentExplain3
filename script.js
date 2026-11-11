const boton = document.getElementById("boton");
let veces = 0;

boton.addEventListener("click", () => {
  veces++;
  boton.textContent = `Me han pulsado ${veces} ${veces === 1 ? "vez" : "veces"}`;
});
