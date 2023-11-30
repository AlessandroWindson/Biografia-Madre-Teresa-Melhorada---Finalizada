document.addEventListener('DOMContentLoaded', function () {
    // Adiciona event listener para o botão de alternar modo claro/escuro

    setInterval(changeTitleColor, 2000); // Altera a cor a cada 2000 milissegundos (2 segundos)

    function changeTitleColor() {
        const title = document.querySelector('.page-title');
        if (title) {
            const randomColor = getRandomColor();
            title.style.color = randomColor;
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Adiciona event listener para o botão de mudar fundo
    const mudarFundoButton = document.getElementById('btnMudarFundo');
    if (mudarFundoButton) {
        mudarFundoButton.addEventListener('click', mudarFundo);
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

    function mudarFundo() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }

    // Adicione event listeners para os botões de navegação
    document.getElementById('btnInicio').addEventListener('click', function () {
        navigate('index.html');
    });

    document.getElementById('btnBiografia').addEventListener('click', function () {
        navigate('biography.html');
    });

    document.getElementById('btnLegado').addEventListener('click', function () {
        navigate('legacy.html');
    });

    // Adiciona event listeners para os títulos (h1, h2, h3, h4, h5)
    const pageTitleButtons = document.querySelectorAll('h1, h2, h3, h4, h5');
    pageTitleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageTitle = button.innerText.toLowerCase().trim();
            navigate(`${pageTitle}.html`);
        });
    });

    function navigate(url) {
        window.location.href = url;
    }
});
