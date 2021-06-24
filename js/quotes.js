const quotes = [
    {
        quote: "Some random quote 1",
        author: "me",
    },
    {
        quote: "Some random quote 2",
        author: "you",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;