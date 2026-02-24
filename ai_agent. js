function askAI() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let response = "No tengo información sobre eso.";

    if(input.includes("nacimiento")) {
        response = "Nació el 23 de junio de 1936 en Matagalpa.";
    }
    else if(input.includes("fsl")) {
        response = "Fundó el FSLN en 1961.";
    }
    else if(input.includes("murio") || input.includes("muerte")) {
        response = "Murió el 8 de noviembre de 1976 en Zinica.";
    }
    else if(input.includes("seudonimo")) {
        response = "Su seudónimo era Agatón.";
    }

    document.getElementById("chatMessages").innerHTML +=
        "<p><strong>Tú:</strong> "+input+"</p>" +
        "<p><strong>IA:</strong> "+response+"</p>";

    document.getElementById("userInput").value = "";
}