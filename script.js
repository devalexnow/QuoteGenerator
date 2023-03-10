const quoteContainer = document.getElementById('guote-container');
const authorText = document.getElementById("author");
const quotesText = document.getElementById("quotes");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


// Show new quote
function newQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check if author is empty
    if (!quote.author) {
        authorText.textContent = "autor nieznany";
    } else {
        authorText.textContent = quote.author;
    }
// Check if quote is too long 
    if (quote.text.length > 30) {
        quotesText.classList.add('long-quote');
    } else {
        quotesText.classList.remove('long-quote');
    }
    quotesText.textContent = quote.text;
}

//Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotesText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, `_blank`);
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

newQuote()