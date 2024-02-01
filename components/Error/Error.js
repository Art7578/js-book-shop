class Error {
    render() {
        const error = document.getElementById('error');

        const html = `
            <div class="error-container">
                <div class="error-message">
                    <p>Please try again later</p>
                </div>
            </div>
        `;

        error.innerHTML = html;
    }
}

const errorPage = new Error();