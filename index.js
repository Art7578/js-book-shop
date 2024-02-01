function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    booksPage.render();
}

let library = [];

fetch('books.json')
    .then(res => res.json())
    .then(body => {
        library = body;
        render();
    })
    .catch(error => {
        errorPage.render();
    });