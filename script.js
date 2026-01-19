/* 
  Cafe Lagano - Main Menu Script
  Handles: Dynamic Rendering, Accordion Interaction, Category Icons
*/

const menuData = {
    "Warme Getränke": [
        { name: "Espresso", description: "", price: "2.50 €" },
        { name: "Double Espresso", description: "", price: "2.80 €" },
        { name: "Espresso Macchiato", description: "", price: "2.80 €" },
        { name: "Tasse Kaffee", description: "", price: "2.80 €" },
        { name: "Milch Kaffee", description: "", price: "3.00 €" },
        { name: "Cappuccino", description: "", price: "3.50 €" },
        { name: "Latte Macchiato", description: "", price: "3.50 €" },
        { name: "Latte Macchiato", description: "Karamell, Vanille", price: "3.80 €" },
        { name: "Franck Cappuccino", description: "", price: "3.50 €" },
        { name: "Heiße Schokolade", description: "Schwarz/Weiss", price: "3.50 €" },
        { name: "Frappé/Hladan Nescafé", description: "", price: "3.50 €" },
        { name: "Tee", description: "", price: "2.60 €" },
        { name: "Tee mit Rum", description: "", price: "3.50 €" },
        { name: "Sahne", description: "", price: "+0.30 €" }
    ],
    "Alkoholfreie Getränke": [
        { name: "Teinacher still", description: "0.20l", price: "2.00 €" },
        { name: "Teinacher medium", description: "0.20l", price: "2.00 €" },
        { name: "Coca Cola", description: "0.20l", price: "3.60 €" },
        { name: "Coca Cola Zero", description: "0.20l", price: "3.60 €" },
        { name: "Fanta", description: "0.20l", price: "3.60 €" },
        { name: "Sprite", description: "0.20l", price: "3.60 €" },
        { name: "Bitter Lemon", description: "0.20l", price: "3.60 €" },
        { name: "Tonic Water", description: "0.20l", price: "3.60 €" },
        { name: "Orangina", description: "0.25l", price: "3.60 €" },
        { name: "Cockta", description: "0.25l", price: "4.00 €" },
        { name: "Jana", description: "0.33l", price: "4.00 €" },
        { name: "Cedevita", description: "0.20l", price: "3.60 €" },
        { name: "Ice Tea", description: "0.33l", price: "3.60 €" },
        { name: "Säfte (versch. Sorten)", description: "0.20l", price: "3.60 €" },
        { name: "Necktare (versch. Sorten)", description: "0.20l", price: "3.60 €" },
        { name: "Gepresster Orangensaft/Limonade", description: "0.25l", price: "3.60 €" },
        { name: "Red Bull", description: "0.25l", price: "4.50 €" }
    ],
    "Bier": [
        { name: "Heineken", description: "0.33l", price: "4.00 €" },
        { name: "Heineken Alkoholfrei", description: "0.33l", price: "4.00 €" },
        { name: "Stuttgarter Hofbräu", description: "0.50l", price: "3.80 €" },
        { name: "Jelen", description: "0.33l", price: "4.00 €" },
        { name: "Ozujsko", description: "0.33l", price: "4.00 €" },
        { name: "Karlovacko", description: "0.33l", price: "4.00 €" },
        { name: "Corona", description: "0.33l", price: "4.50 €" },
        { name: "Desperados", description: "0.33l", price: "4.50 €" },
        { name: "Radler", description: "0.33l", price: "4.00 €" }
    ],
    "Weine": [
        { name: "Rotwein", description: "0.20l", price: "4.30 €" },
        { name: "Weißwein", description: "0.20l", price: "4.30 €" },
        { name: "Roséwein", description: "0.20l", price: "4.30 €" },
        { name: "Weinschorle/Spricer", description: "0.25l", price: "4.30 €" },
        { name: "Korea/Bambus", description: "0.25l", price: "4.30 €" },
        { name: "Aperol Spritz", description: "0.25l", price: "6.00 €" },
        { name: "Lillet", description: "0.25l", price: "6.00 €" },
        { name: "Prosseco", description: "0.20l", price: "4.50 €" }
    ],
    "Flaschen": [
        { name: "Jack Daniel's", description: "0.70l", price: "80.00 €" },
        { name: "Chivas", description: "0.70l", price: "90.00 €" },
        { name: "Stock", description: "0.70l", price: "70.00 €" },
        { name: "Johnnie Walker", description: "0.70l", price: "70.00 €" },
        { name: "Johnnie Black", description: "0.70l", price: "90.00 €" },
        { name: "Vodka (Three Sixty, Smirnoff)", description: "0.70l", price: "80.00 €" },
        { name: "Belvedere", description: "0.70l", price: "100.00 €" },
        { name: "Gin Bombay", description: "0.70l", price: "80.00 €" },
        { name: "Jäger", description: "0.70l", price: "70.00 €" },
        { name: "Pelinkovac", description: "1.00l", price: "70.00 €" },
        { name: "Grasevina", description: "1.00l", price: "30.00 €" },
        { name: "Plavac", description: "1.00l", price: "30.00 €" },
        { name: "Prossecco", description: "0.75l", price: "30.00 €" },
        { name: "Moët", description: "0.75l", price: "100.00 €" },
        { name: "Moët Ice", description: "0.75l", price: "120.00 €" },
        { name: "Coca Cola", description: "1.00l", price: "5.00 €" },
        { name: "Bitter Lemon/Tonic Water", description: "1.00l", price: "5.00 €" },
        { name: "Mineral Wasser", description: "0.70l", price: "5.00 €" }
    ],
    "Shots": [
        { name: "Jäger", description: "2cl", price: "3.00 €" },
        { name: "Pelinkovac", description: "2cl", price: "3.00 €" },
        { name: "Ramazzotti", description: "2cl", price: "3.00 €" },
        { name: "Rakija", description: "2cl", price: "3.00 €" },
        { name: "Ficken", description: "2cl", price: "3.00 €" },
        { name: "Havana", description: "2cl", price: "3.00 €" },
        { name: "Bacardi", description: "2cl", price: "3.00 €" },
        { name: "Tequila", description: "2cl", price: "3.00 €" },
        { name: "Baylies", description: "2cl", price: "3.00 €" },
        { name: "Captain Morgan", description: "2cl", price: "3.00 €" }
    ],
    "Spirituosen": [
        { name: "Jack Daniel's", description: "4cl", price: "6.00 €" },
        { name: "Chivas", description: "4cl", price: "6.00 €" },
        { name: "Johnnie Walker", description: "4cl", price: "5.50 €" },
        { name: "Johnnie Black", description: "4cl", price: "6.50 €" },
        { name: "Vodka", description: "4cl", price: "6.00 €" },
        { name: "Stock", description: "4cl", price: "5.00 €" },
        { name: "Gin Bombay", description: "4cl", price: "6.00 €" }
    ]
};

// Universal icon for all categories
const universalIcon = "icon-plus.svg";

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('menu-container');
    if (!container) return;

    renderMenu(container);
});

function renderMenu(container) {
    container.innerHTML = '';

    Object.keys(menuData).forEach((category, index) => {
        const section = document.createElement('div');
        section.className = 'menu-section';

        section.innerHTML = `
            <div class="menu-category-header" onclick="toggleCategory(this)">
                <div class="category-title-wrap">
                    <img src="assets/images/${universalIcon}" class="category-icon" alt="">
                    <h2 class="menu-category-title">${category}</h2>
                </div>
                <span class="menu-toggle-icon">▾</span>
            </div>
            <div class="menu-items-container">
                <div class="menu-items-list">
                    ${menuData[category].map(item => `
                        <div class="menu-item">
                            <div class="menu-item-info">
                                <h3 class="menu-item-name">${item.name}</h3>
                                ${item.description ? `<p class="menu-item-desc">${item.description}</p>` : ''}
                            </div>
                            <div class="menu-item-price">${item.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(section);
    });
}

function toggleCategory(header) {
    const section = header.parentElement;
    const isActive = section.classList.contains('active');

    // Close all other sections
    document.querySelectorAll('.menu-section').forEach(s => {
        s.classList.remove('active');
    });

    if (!isActive) {
        section.classList.add('active');
    }
}
