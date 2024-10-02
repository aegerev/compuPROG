const rootElement = document.getElementById('root');

const quoteElement = document.createElement('h1');
quoteElement.textContent = "There is Always A Bull Market Somewhere."
quoteElement.classList.add('fancy');

const newAuthor = document.createElement('p');
newAuthor.textContent = " ~ Jim Cramer"
newAuthor.classList.add('plain');

quoteElement.appendChild(newAuthor);

rootElement.appendChild(quoteElement);


