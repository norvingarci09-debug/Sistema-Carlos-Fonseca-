window.onload = function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
    }, 2000);
}

function openSection(id) {
    document.getElementById("app").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

function goBack() {
    if(confirm("¿Deseas regresar al menú principal?")) {
        document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
        document.getElementById("app").classList.remove("hidden");
    }
}

function toggleAI() {
    document.getElementById("aiChat").classList.toggle("hidden");
}