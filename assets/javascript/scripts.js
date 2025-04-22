function changeImage(src) {
    document.getElementById('img-princ').src = src;
}
/*FUNCÃO  TROCA DE IMAGEM */


function enviarWhats(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    // Validando Nome ao ser enviado.

    const mensagem = document.getElementById('mensagem').value.trim();
    // Validando Mensagem ao ser enviada.
    
    const telefone = '5544997032921'; 
    // Número do meu Whatssap.

    if (nome === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }
    // Uma alerta para que todos os campos seja preenchidos.

    const texto = `Olá! Meu nome é ${nome}. \n${mensagem}`;
    // Ordem correta da mensagem chegar ate meu Whatssap.
    // /n (pular linha)
    
    const msgFormatada = encodeURIComponent(texto);
    // Formatando texto por conta dos espaçamentos.

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    // Link do meu whatssap automatico.
    
    window.open(url, '_blank'); 
    // Abre o WhatsApp em uma nova aba.
}
