document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Você clicou em: ${item.textContent}`);
    });
});
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Não deixa enviar o cadastro sem preencher os coiso

    // Obter valor do cadastro
    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const foto = document.getElementById('foto').files[0];

    // o cadastro
    console.log('Nome:', nome);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('Foto:', foto.name);

    alert('Cadastro realizado com sucesso!');

    // apertar o botao para poder mudar a pagina q tu ta 
    document.getElementById('botaoSpotify').disabled = false;
});

document.getElementById('botaoSpotify').addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/vitoria_silva18/Desktop/sim/simparte2/index.html';
});