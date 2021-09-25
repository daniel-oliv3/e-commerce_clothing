const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-container">
    <img src="public/img/light-logo.png" class="logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Homens</li>
            <li><a href="#" class="footer-link">Camisetas</a></li>
            <li><a href="#" class="footer-link">Moletons</a></li>
            <li><a href="#" class="footer-link">Camisas</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Calças</a></li>
            <li><a href="#" class="footer-link">Tênis</a></li>
            <li><a href="#" class="footer-link">Formais</a></li>
            <li><a href="#" class="footer-link">Esportes</a></li>
            <li><a href="#" class="footer-link">Casual</a></li>
            <li><a href="#" class="footer-link">Assistir</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Mulheres</li>
            <li><a href="#" class="footer-link">Camisetas</a></li>
            <li><a href="#" class="footer-link">Moletons</a></li>
            <li><a href="#" class="footer-link">Camisas</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Calças</a></li>
            <li><a href="#" class="footer-link">Tênis</a></li>
            <li><a href="#" class="footer-link">Formais</a></li>
            <li><a href="#" class="footer-link">Esportes</a></li>
            <li><a href="#" class="footer-link">Casual</a></li>
            <li><a href="#" class="footer-link">Assistir</a></li>
        </ul>
    </div>
    
</div>
<p class="footer-title">Sobre a Empresa</p>
    <p class="info">Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. 
        Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. 
        Cevadis im ampola pa arma uma pindureta. Suco de cevadiss deixa as pessoas mais interessantis.
        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, 
        mas ninguém vê os tombis que eu levo! Delegadis gente finis, bibendum egestas augue arcu ut est. 
        Mé faiz elementum girarzis, nisi eros vermeio.
        Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent. 
        Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Si num tem leite
        então bota uma pinga aí cumpadi!
    </p>
    <p class="info">Apoio, suporte E-mail:  help@clothing, customersupport@clothing.com</p>
    <p class="info">Telefone:  +55 (92) 5555-5555</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Termos e serviços</a>
            <a href="#" class="social-link">Página de privacidade</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing - Melhor Loja Online de Vestuários</p>
    `;
}

createFooter();