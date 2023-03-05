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
    focus('input');
  } else if (valor > numeroSecreto) {
    alert(`ERROU... O numero e menor que ${valor}`);
    focus('input');
  } else if (valor < numeroSecreto) {
    alert(`ERROU... O numero e maior que ${valor}`);
    focus('input');
  }
}

  function pressionaEnter(){
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13){
         Chutar();
      }
   }, false);
}

pressionaEnter();
