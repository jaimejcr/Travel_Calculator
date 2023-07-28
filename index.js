const body = document.querySelector("body");


function formulario() {
  const form = document.createElement("form");
  form.id = "formulario";
  form.innerHTML = `
    <label for="city">Ciudad:</label>
    <select id="city">
      <option value="Barcelona">Barcelona</option>
      <option value="Madrid">Madrid</option>
      <option value="Sevilla">Sevilla</option>
      <option value="Valencia">Valencia</option>
    </select>
    <label for="name">Número de noches:</label>
    <input type="number" id="hotel" name="name">
    <label for="name">Número de días de alquiler del coche:</label>
    <input type="number" id="coche" name="name">
    <button type="submit">Calcular coste</button>
  `;
  body.appendChild(form);
}

// -------------------

function costeHotel() {
  const inputHotel = document.querySelector("#hotel");
  const submit = document.querySelector("button");
  const nocheDeHotel = 140;

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = inputHotel.value;
    const costeHotel = inputValue * nocheDeHotel;
    console.log(costeHotel);
  });
}

// -----------------------------------


function costeAvion() {
  const precioAvion = {
    Barcelona: 90,
    Madrid: 90,
    Sevilla: 50,
    Valencia: 40,
  };
  const form = document.querySelector("#formulario");

  
    const cityInput = document.querySelector("#city");
    let cityValue = cityInput.value;
    const inputHotel = document.querySelector("#hotel");
    let inputValue = inputHotel.value;
    const numNoches = parseInt(inputValue, 10);
    const costePorNoches = precioAvion[cityValue] * numNoches;

    console.log(`Coste del viaje a ${cityValue} por ${numNoches} noches: ${costePorNoches}€`);
    if (numNoches > 3) {
      const diezPorCiento = costePorNoches * 0.10;
      const precioConDescuento = costePorNoches - diezPorCiento;
      console.log(`El 10% de ${costePorNoches} euros es: ${diezPorCiento} euros`);
      console.log(precioConDescuento);
    }
    return costePorNoches
  }
// -------------------------------




function costeCoche(numDias) {
  const costePorDia = 40;
  let costeTotal = costePorDia * numDias;

  if (numDias >= 3) {
    costeTotal -= 20;
  }

  if (numDias >= 7) {
    costeTotal -= 50;
  }

  console.log(`Coste del alquiler del coche por ${numDias} días: ${costeTotal}€`);
  return costeTotal;
}

function calcularCoste() {
  const inputCoche = document.querySelector("#coche");
  const numDiasAlquilerCoche = parseInt(inputCoche.value, 10);
  const costeHotel = 140 * parseInt(document.querySelector("#hotel").value, 10);
  const costeAvionTotal = costeAvion();
  const costeCocheTotal = costeCoche(numDiasAlquilerCoche);
  
  const costeTotal = costeHotel + costeAvionTotal + costeCocheTotal;

  console.log(`Coste total del viaje: ${costeTotal}€`);

  return costeTotal
}

formulario();



const form = document.querySelector("#formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultDom = document.createElement("div");
  const costeTotalCalculado = calcularCoste();

  resultDom.innerHTML = `
    <h2>Coste: ${costeTotalCalculado}€</h2>
  `;
  resultDom.style.backgroundColor = "#f0f0f0";
  resultDom.style.padding = "10px";
  resultDom.style.marginTop = "20px";
  body.appendChild(resultDom);
});





