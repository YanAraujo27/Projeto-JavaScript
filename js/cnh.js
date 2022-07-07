function verificarIdade(){
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')
    var idadeNum = parseInt(idade.value)

  if (idadeNum >= 18) {
    alert('Você pode tirar a CNH')
    
  } else {
    alert('Não pode tirar CNH')
  }
}