function alterarCores() {
        var sexo = document.querySelector('input[name="sexo"]:checked').value;
        var interesses = document.querySelectorAll('input[name="interesses"]:checked');
        var body = document.querySelector('body');

        if (sexo === "masculino") {
            body.style.backgroundColor = "#007bff";
        } else if (sexo === "feminino") {
            body.style.backgroundColor = "#ff69b4";
        } else {
            body.style.backgroundColor = "#f8f9fa";
        }
    }
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("change", alterarCores);

