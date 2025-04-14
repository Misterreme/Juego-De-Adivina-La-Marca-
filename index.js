
// function guessHiddenWord(intento) {
//     let intentos = 3;

//     while (intentos > 0) {
//         // const pista = ;
//         const respuesta = prompt("Intenta adivinar la palabra oculta.");

//         if (respuesta === intento) {
//             alert("🎉 Felicidades, has encontraste la palabra oculta. Toma una galleta 🍪.");
//             break;
    
//         } else {
//             intentos--;
//             alert(`❌ Palabra incorrecta. Te quedan ${intentos} intentos(s).`);
//         };
    
//         if (intentos === 0) {
//             alert("Te quedaste sin intentos. GAME OVER 💀.");
//         };
//     };
// };

// function generateHiddenWord() {
//     const palabras = ["Hola", "Azul", "Oscuro", "Marron", "Peruano"];
//     const ramdomIndex = Math.floor(Math.random() * palabras.length);
//     const palabraOculta = palabras[ramdomIndex];
//     console.log(palabraOculta);
//     alert(`La palaba secreta inicia con ${palabraOculta.charAt(0)}`);
//     return palabraOculta
// };

// guessHiddenWord(generateHiddenWord());

const win = document.getElementById("win");
const input = document.getElementById("word-input");
const checkButton = document.getElementById("check-button");
const pista = document.getElementById("pista");
const verPista = document.getElementById("pista-button");
const cerrarPista = document.getElementById("cerrar-pista")
const pistaDialog = document.getElementById("pista-modal");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const palabraSecreta = generarPalabra().toLocaleLowerCase();
let intentos = 3;
pista.textContent = palabraSecreta.charAt(0);

verPista.addEventListener("click", (event) => {
    // event.preventDefault();
    pistaDialog.showModal();
    console.error("Error here!!")
});

cerrarPista.addEventListener("click", (event) => {
    event.preventDefault();
    pistaDialog.close()
})

resetButton.addEventListener("click", () => {
    window.location.reload();    
})

checkButton.addEventListener("click", function() {
    jugar(palabraSecreta);
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        jugar(palabraSecreta);
    }
});

function jugar(intento) {
    const respuesta = input.value;
        
    if (respuesta === intento) {
        win.style.display = "block";
        message.style.display = "none";
        input.disabled = true;
        checkButton.disabled = true;
        input.style.borderColor = "green"

    } else if (respuesta.trim() === "") {
        message.textContent = "⚠️ Debes ingresar una palabra para jugar ⚠️";
        message.style.display = "block";

    } else {
        intentos--
        message.style.display = "block";
        message.textContent = `❌ Palabra incorrecta. Te quedan ${intentos} intentos(s)`;
    }

    if (intentos === 0) {
        message.style.display = "block";
        message.textContent = `💀 Te quedaste sin intentos 💀. La palabra secreta era ${palabraSecreta}`;
        input.disabled = true;
        checkButton.disabled = true;
        input.style.borderColor = "red";
    }

    input.value = "";
}


function generarPalabra() {
    const palabras = [
        "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "Volkswagen", "BMW", "Mercedes", "Audi",
        "Hyundai", "Kia", "Mazda", "Subaru", "Jeep", "Dodge", "Ram", "GMC", "Tesla", "Lexus", "Infiniti",
        "Acura", "Buick", "Cadillac", "Chrysler", "Lincoln", "Volvo", "Peugeot", "Renault", "Fiat",
        "Alfa Romeo", "Mini", "Porsche", "Jaguar", "Land Rover", "Mitsubishi", "Suzuki", "Saab", "Skoda",
        "Seat", "Opel", "Citroen", "Geely", "BYD", "Changan", "GreatWall", "Haval", "Rivian", "Lucid",
        "Polestar", "Genesis", "Tata", "Mahindra", "Lancia", "Pagani", "Koenigsegg", "Bugatti", "McLaren",
        "Ferrari", "Lamborghini", "Rolls Royce", "Bentley", "Aston Martin", "Smart"
    ];
    const randomIndex = Math.floor(Math.random() * palabras.length);
    // return palabras[randomIndex];
    // console.log(palabras[randomIndex])
    return palabras[randomIndex];
}
