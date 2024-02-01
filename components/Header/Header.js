class Header {

    render(count) {
        const header = document.getElementById('header');

        const html = `
            <div class="header-container">
                <div class="header-counter">
                🛒 Count: ${count}
                </div>
            </div>
        `;

        header.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);