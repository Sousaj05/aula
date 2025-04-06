function enviarCadastro() {
    // Ler os valores dos inputs
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').
 value;
    const email = document.getElementById('email').value;
    const interesse = document.getElementById
 ('interesse').value;
    // Exibir mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
    // Criar mensagem personalizada
    const mensagem = `Olá ${nome}, obrigado por seu 
 interesse em nosso novo lançamento de ${interesse}! 
 Em breve, enviaremos mais detalhes para o e-mail $
 {email}.`;
    // Simular envio da mala direta
    console.log("Enviando mala direta...");
    console.log("Mensagem enviada para:", email);
    console.log("Conteúdo da mensagem:");
    console.log(mensagem);
    console.log("Processo concluído.");
  }