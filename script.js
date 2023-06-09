const quoteContainer = document.getElementById('quote-container');
const authorText = document.getElementById("author");
const quotesText = document.getElementById("quotes");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');
let apiQuotes =[];

function showLoadingSpinner() {
    loader.hidden = false; //loader będzie widoczny
    quoteContainer.hidden = true; //cytat będzie schowany
}

function removeLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false; //cytat będzie widoczny
        loader.hidden = true; //loader będzie schowany
    }
}

// Show new quote
function newQuote() {
    showLoadingSpinner();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check if author is empty
    if (!quote.author) {
        authorText.textContent = "autor nieznany";
    } else {
        authorText.textContent = quote.author;
    }
    // Check if quote is too long 
    if (quote.text.length > 100) {
        quotesText.classList.add('long-quote');
    } else {
        quotesText.classList.remove('long-quote');
    }
    // set quote, hide loader
    quotesText.textContent = quote.text;
    removeLoadingSpinner();
 }

//Get quote from API
async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        //catch error here
    }
}


function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotesText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, `_blank`);
}


newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
getQuotes();
