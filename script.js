function mostrarDados() {
  const nomeInput = document.getElementById("nome");
  const idadeInput = document.getElementById("idade");
  const resultado = document.getElementById("resultado");

  const nome = nomeInput.value;
  const idade = idadeInput.value;

  if (nome === "" || idade === "") {
    resultado.textContent = "Por favor, preencha todos os campos.";
    resultado.style.color = "red";
  } else {
    resultado.textContent = `Olá, ${nome}! Você tem ${idade} anos.`;
    resultado.style.color = "red";

    // 🧽 Aqui limpamos os campos após exibir o resultado
    nomeInput.value = "";
    idadeInput.value = "";
  }
}
