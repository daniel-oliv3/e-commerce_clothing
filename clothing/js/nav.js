const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="public/img/dark-logo.png" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Pesquisar marca, produto">
            <button class="search-btn">Procurar</button>
        </div>
        <a href="#"><img src="public/img/user.png" alt=""></a>
        <a href="#"><img src="public/img/cart.png" alt=""></a>
    </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Página Inicial</a></li>
        <li class="link-item"><a href="#" class="link">Mulher</a></li>
        <li class="link-item"><a href="#" class="link">Homen</a></li>
        <li class="link-item"><a href="#" class="link">Crianças</a></li>
    <li class="link-item"><a href="#" class="link">Acessórios</a></li>
    </ul>
    `;
}

createNav();