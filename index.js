const body = document.querySelector("body");
const form = document.createElement("form");
const precioHotelNoche = 140;

function formulario() {
  form.id = "formulario";
  form.innerHTML = `
    <label for="city"> Ciudad: </label>
    <select id="city">
        <option value="Barcelona"> Barcelona </option>
        <option value="Madrid"> Madrid </option>
        <option value="Sevilla"> Sevilla </option>
        <option value="Valencia"> Valencia </option>
    </select>
    <label for="hotel"> Número de noches: </label>
    <input type="number" id="hotel" name="name">
    <label for="coche"> Número de días de alquiler del coche: </label>
    <input type="number" id="coche" name="name">
    <button type="submit"> Calcular coste </button>
    `;
  const resultDom = document.createElement("div");
  resultDom.id = "resultado";
  resultDom.style.backgroundColor = "#f0f0f0";
  resultDom.style.padding = "10px";
  resultDom.style.marginTop = "20px";
  resultDom.style.border = "2px double black";

  body.appendChild(form);
  body.appendChild(resultDom);
}
formulario();

function costeHotel() {
  const numNochesHotel = parseInt(document.querySelector("#hotel").value, 10);
  const precioHotelPorDiasSeleccionados = numNochesHotel * precioHotelNoche;
  //PrecioHotelPor.. precio calculado por dias de estancia
  console.log(
    `Precio calculado por ${numNochesHotel} días de estancia: ${precioHotelPorDiasSeleccionados}€`
  );
  return precioHotelPorDiasSeleccionados;
}

function costeAvion(ciudad, numNoches) {
  const precioAvion = {
    Barcelona: 90,
    Madrid: 90,
    Sevilla: 50,
    Valencia: 40,
  };

  const costePorNoches = precioAvion[ciudad] * numNoches;
  console.log(
    `Coste del viaje a ${ciudad} por ${numNoches} noches: ${costePorNoches}€`
  );

  if (numNoches > 3) {
    const calculoDiezPorciento = costePorNoches * 0.1;
    // precioDescuento, es el precio con el descuento ya hecho
    const precioDescuento = costePorNoches - calculoDiezPorciento;
    console.log(precioDescuento);
    console.log(
      `El 10% de ${costePorNoches} euros es: ${calculoDiezPorciento} euros`
    );
  }

  return costePorNoches;
}

function costeCoche(numDias) {
  const costePorDia = 40;
  let aPagarPorCoche = costePorDia * numDias;

  if (numDias >= 7) {
    aPagarPorCoche -= 50;
    console.log("descuento de 50€");
  } else if (numDias >= 3) {
    aPagarPorCoche -= 20;
    console.log("descuento de 20€");
  }

  console.log(
    `Coste del alquiler del coche por ${numDias} días: ${aPagarPorCoche}€`
  );
  return aPagarPorCoche;
}

function calcularCoste() {
  const numNochesHotel = parseInt(document.querySelector("#hotel").value, 10);
  const ciudadSeleccionada = document.querySelector("#city").value;
  const numDiasConCoche = parseInt(document.querySelector("#coche").value, 10);

  // calcularCoste()
  const costoHotel = costeHotel();
  const costoAvion = costeAvion(ciudadSeleccionada, numNochesHotel);
  const costoCoche = costeCoche(numDiasConCoche);
  const resultado = document.querySelector("#resultado");
  const totalAPagar = costoHotel + costoAvion + costoCoche;
  resultado.innerHTML = `
  <h2> Coste hotel : ${costoHotel}€ - Coste vuelo :${costoAvion}€ - Coste coche : ${costoCoche} - Total : ${totalAPagar} </h2>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calcularCoste();
});
