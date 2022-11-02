'use strict'

const myQuote = document.querySelector('#quote');
const myAuthor = document.querySelector('#author');
const btn = document.querySelector('#update');
const url = 'https://favqs.com/api/qotd'

async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json();
        myQuote.textContent = data.quote.body
        myAuthor.textContent = data.quote.author
        console.log(data.quote)

    } catch (e) {
        console.log(e)
    }
}

btn.addEventListener('click', () => {
    fetchHandler().then(r => r)
});