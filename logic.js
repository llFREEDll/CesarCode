const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const Cifrar = () => {
    let MensajeCifrado = ""

    const trama = document.getElementById("trama");
    const desplazamiento = document.getElementById("desplazamiento");

    if (trama.value.length > 0 && desplazamiento.value.length > 0) {
        let AlfabetoIndice = 0
        Array.from(trama.value).forEach(element => {

            if (element == " ") {
                MensajeCifrado += " "
            } else
                if (alfabeto.includes(element)) {
                    
                    AlfabetoIndice = (alfabeto.indexOf(element) + parseInt(desplazamiento.value)) % alfabeto.length
                    MensajeCifrado += alfabeto[AlfabetoIndice]
                    console.log(AlfabetoIndice + "// " + alfabeto.indexOf(element) + " / " + desplazamiento.value + " / " + alfabeto.length)
                }
            //console.log(AlfabetoIndice + "// " + alfabeto.indexOf(element) + " / " + desplazamiento.value + " / " + alfabeto.length)
            // console.log(MensajeCifrado)
        });

        EscribirResultado("Mensaje cifrado : <br/>" + MensajeCifrado)
    } else
        alert("Rellena todos los campos")
}

const EscribirResultado = (val) => {
    document.getElementById("resultado").innerHTML = val
}
const Descifrar = () => {
    let MensajeDescifrado = ""

    const trama = document.getElementById("trama");
    const desplazamiento = document.getElementById("desplazamiento");

    if (trama.value.length > 0 && desplazamiento.value.length > 0) {
        let AlfabetoIndice = 0
        Array.from(trama.value).forEach(element => {
            if (element == " ") {
                MensajeDescifrado += " "
            } else
                if (alfabeto.includes(element)) {
                    AlfabetoIndice = (alfabeto.indexOf(element) - parseInt(desplazamiento.value)) % alfabeto.length
                    MensajeDescifrado += alfabeto[AlfabetoIndice]
                }

            //  console.log(AlfabetoIndice +  "// "+ alfabeto.indexOf(element) + " / " + desplazamiento.value + " / " + alfabeto.length)
            // console.log(MensajeCifrado)
        });

        EscribirResultado("Mensaje descifrado : <br/>" + MensajeDescifrado)
    } else
        alert("Rellena todos los campos")
}