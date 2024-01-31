class Books {
    async render() {
        try {
            const books = document.getElementById('books');
            const response = await fetch('books.json');
            const data = await response.json();
            let htmlCatalog = '';

            data.forEach(({id, 
                           img, 
                           title, 
                           author, 
                           published_year, 
                           genre, 
                           pages, 
                           language, 
                           rating, 
                           reviews, 
                           price}) => {
                htmlCatalog += `
                            <li class="books-element">
                                <img class="books-element__img" src="${img}" alt="${title}">
                                <h3 class="books-element__title">${title}</h3>
                                <p class="books-element__info">👴 ${author}</p>
                                <p class="books-element__info">📅 ${published_year}</p>
                                <p class="books-element__info">Genre: ${genre}</p>
                                <p class="books-element__info">Pages: ${pages}</p>
                                <p class="books-element__info">Language: ${language}</p>
                                <p class="books-element__info">Rating: ${rating}</p>
                                <p class="books-element__info">Reviews: ${reviews}</p>
                                <p class="books-element__info price">
                                    💲 Price: ${price.toLocaleString()} USD
                                </p>
                                <button class="books-element__btn">Добавит в корзину</button>
                            </li>
                `
            });

            const html = `
                <ul class="books-container">
                    ${htmlCatalog}
                </ul>
            `;

            books.innerHTML = html;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

const booksPage = new Books();
booksPage.render();