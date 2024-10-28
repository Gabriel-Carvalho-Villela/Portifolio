let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

   
    const textoWhatsApp = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
    const numeroWhatsApp = "5587996342157"; 

    // URL para abrir o WhatsApp com a mensagem
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

    // Abre a URL no WhatsApp
    window.open(urlWhatsApp, "_blank");
});

btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})