function calcularAgua() {
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0) {
    resultado.textContent = "Por favor, insira um peso válido.";
    resultado.style.color = "red";
    return;
  }

  const aguaMl = peso * 35; // 35 ml por kg
  const aguaLitros = (aguaMl / 1000).toFixed(2); // em litros

  resultado.textContent = `Você deve beber aproximadamente ${aguaLitros} litros de água por dia.`;
  resultado.style.color = "#00796b";
}
