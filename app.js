const numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {
  const input = document.getElementById("valor").value;
  const valor = parseInt(input);

  if (valor > 100) {
    alert("Digite um numero de 0 a 100");
    return;
  }

  if (valor === numeroSecreto) {
    alert("Parabéns você acertou!");
  } else if (valor > numeroSecreto) {
    alert(`ERROU... O numero e menor que ${valor}`);
  } else if (valor < numeroSecreto) {
    alert(`ERROU... O numero e maior que ${valor}`);
  }
}
