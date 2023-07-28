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
    <label for="name">Nùmero de noches:</label>
    <input type="number" id="hotel" name="name">
    <label for="name">Número de días de alquiler del coche:</label>
    <input type="text" id="coche" name="name">
    <button type="submit">Calcular coste</button>
    
    `;
  body.appendChild(form);
}
formulario();



const inputCoche = document.querySelector("#coche");
const submit = document.querySelector("button");
const nocheDeHotel = 140;

function costeHotel() {
    submit.addEventListener("click", (event)=>{
        event.preventDefault();
        const inputHotel = document.querySelector("#hotel");
        const inputValue = inputHotel.value;
        const costeHotel = inputValue * nocheDeHotel;
        console.log(costeHotel);
    })
    
}
costeHotel()



function costeAvion (ciudad, noches) {

    const precioAvion = {
    Barcelona: 90,
    Madrid: 90,
    Sevilla: 50,
    Valencia: 40,
    };

    const costeNoche = precioAvion[ciudad] * noches;
    console.log(`Coste del viaje a ${ciudad} por ${noches} noches: ${costeNoche}€`);
}
costeAvion("Barcelona", 2);






