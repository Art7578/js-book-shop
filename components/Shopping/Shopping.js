class Shoping {
    handleClear() {
        shopping.innerHTML = '';
    } 
     
    render() {
        const shopping = document.getElementById('shopping');
        const productStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        library.forEach(({id, title, price}) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">📙 ${title}</td>
                        <td class="shopping-element__price">💲 ${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalog += price;
            } 
        })

        const html = `
            <div class="shopping-container">
                <div class="shopping-close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💰 Sum:</td>
                        <td class="shopping-element__price">💲 ${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;
        shopping.innerHTML = html;
    }
}

const shoppingPage = new Shoping();