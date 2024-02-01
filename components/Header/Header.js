class Header {

    handleOpenPage() {
        shoppingPage.render();
    }

    render(count) {
        const header = document.getElementById('header');

        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handleOpenPage()">
                🛒 Count: ${count}
                </div>
            </div>
        `;

        header.innerHTML = html;
    }
}

const headerPage = new Header();
