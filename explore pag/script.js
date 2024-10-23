const portfolios = [
    { name: "Alice Johnson", link: "account.html?user=alice" },
    { name: "Bob Smith", link: "account.html?user=bob" },
    { name: "Charlie Brown", link: "account.html?user=charlie" },
    // Add more portfolios as needed
];

const portfolioContainer = document.getElementById('portfolio-container');

portfolios.forEach(portfolio => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `<h2>${portfolio.name}</h2>`;
    item.onclick = () => window.location.href = portfolio.link;
    portfolioContainer.appendChild(item);
}); 