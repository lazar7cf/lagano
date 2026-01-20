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

// Category icons mapping
const categoryIcons = {
    "Warme Getränke": "icon-coffee.svg",
    "Alkoholfreie Getränke": "soda-glass-bottle-icon.svg",
    "Bier": "beer-mug-icon.svg",
    "Weine": "wine-bottle-glass-icon.svg",
    "Flaschen": "glass-bottles-icon.svg",
    "Shots": "cocktail-drink-glass-icon.svg",
    "Spirituosen": "icon-cocktail.svg"
};

// Fallback icon
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

        const iconPath = categoryIcons[category] || universalIcon;
        section.innerHTML = `
            <div class="menu-category-header" onclick="toggleCategory(this)" role="button" tabindex="0" aria-expanded="false" aria-label="${category} ${menuData[category].length} Artikel">
                <div class="category-title-wrap">
                    <img src="assets/images/${iconPath}" class="category-icon" alt="" aria-hidden="true">
                    <h2 class="menu-category-title">${category} <span class="item-count">(${menuData[category].length})</span></h2>
                </div>
                <span class="menu-toggle-icon" aria-hidden="true">▾</span>
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
        header.setAttribute('aria-expanded', 'true');
    } else {
        header.setAttribute('aria-expanded', 'false');
    }
}

// Keyboard navigation for menu accordion
document.addEventListener('DOMContentLoaded', () => {
    // Wait for menu to be rendered
    setTimeout(() => {
        document.querySelectorAll('.menu-category-header').forEach(header => {
            header.setAttribute('role', 'button');
            header.setAttribute('tabindex', '0');
            header.setAttribute('aria-expanded', 'false');
            
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCategory(header);
                }
            });
        });
    }, 100);
});

// Menu search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterMenu(searchTerm);
    });
});

function filterMenu(searchTerm) {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuSections = document.querySelectorAll('.menu-section');
    
    if (!searchTerm) {
        // Show all items and sections
        menuItems.forEach(item => {
            item.classList.remove('hidden');
            item.closest('.menu-section')?.classList.remove('hidden');
        });
        menuSections.forEach(section => section.classList.remove('hidden'));
        return;
    }

    let hasVisibleItems = false;
    
    menuSections.forEach(section => {
        const items = section.querySelectorAll('.menu-item');
        let sectionHasVisibleItems = false;
        
        items.forEach(item => {
            const itemName = item.querySelector('.menu-item-name')?.textContent.toLowerCase() || '';
            const itemDesc = item.querySelector('.menu-item-desc')?.textContent.toLowerCase() || '';
            
            if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
                item.classList.remove('hidden');
                sectionHasVisibleItems = true;
                hasVisibleItems = true;
            } else {
                item.classList.add('hidden');
            }
        });
        
        if (sectionHasVisibleItems) {
            section.classList.remove('hidden');
            // Auto-expand sections with matches
            if (!section.classList.contains('active')) {
                section.classList.add('active');
                const header = section.querySelector('.menu-category-header');
                if (header) header.setAttribute('aria-expanded', 'true');
            }
        } else {
            section.classList.add('hidden');
        }
    });
}

// Expand/Collapse All functionality
document.addEventListener('DOMContentLoaded', () => {
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.add('active');
                const header = section.querySelector('.menu-category-header');
                if (header) header.setAttribute('aria-expanded', 'true');
            });
        });
    }
    
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
                const header = section.querySelector('.menu-category-header');
                if (header) header.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

/* 
  Mobile Hamburger Menu Functionality
  Handles: Toggle menu, close on link click, close on outside click, prevent body scroll
*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-links-mobile');
    const mobileLinks = document.querySelectorAll('.nav-links-mobile a');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    // Only initialize if hamburger exists (mobile view)
    if (!hamburger || !mobileMenu) return;

    // Calculate navbar height and position menu below it
    function updateMenuPosition() {
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            const navbarTop = navbar.getBoundingClientRect().top + window.scrollY;
            mobileMenu.style.top = (navbarTop + navbarHeight) + 'px';
            mobileMenu.style.maxHeight = `calc(100vh - ${navbarTop + navbarHeight}px)`;
        }
    }

    // Update position on load and resize
    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);

    // Toggle menu function
    function toggleMenu() {
        const isOpen = hamburger.classList.contains('active');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Open menu
    function openMenu() {
        updateMenuPosition(); // Update position before opening
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('active');
        // Prevent body scroll
        body.classList.add('menu-open');
    }

    // Close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        // Restore body scroll
        body.classList.remove('menu-open');
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking outside (on document)
    document.addEventListener('click', (e) => {
        // Check if menu is open and click is outside menu and hamburger
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on window resize if switching to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

/* 
  Sticky Navigation on Scroll
*/
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
});

/* 
  Open Now Status Indicator
*/
document.addEventListener('DOMContentLoaded', () => {
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.status-text');
    
    if (!statusIndicator || !statusText) return;

    function updateOpenStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour * 60 + minute;

        let isOpen = false;
        let nextOpenTime = '';

        // Opening hours: Mo-Do: 09:00-22:00, Fr-Sa: 09:00-23:00, So: 10:00-21:00
        if (day === 0) { // Sunday
            isOpen = currentTime >= 600 && currentTime < 1260; // 10:00 - 21:00
            if (!isOpen && currentTime < 600) nextOpenTime = 'Heute um 10:00';
            else if (!isOpen) nextOpenTime = 'Morgen um 10:00';
        } else if (day >= 1 && day <= 4) { // Monday - Thursday
            isOpen = currentTime >= 540 && currentTime < 1320; // 09:00 - 22:00
            if (!isOpen && currentTime < 540) nextOpenTime = 'Heute um 09:00';
            else if (!isOpen) nextOpenTime = 'Morgen um 09:00';
        } else if (day === 5 || day === 6) { // Friday - Saturday
            isOpen = currentTime >= 540 && currentTime < 1380; // 09:00 - 23:00
            if (!isOpen && currentTime < 540) nextOpenTime = 'Heute um 09:00';
            else if (!isOpen) nextOpenTime = 'Morgen um 09:00';
        }

        if (isOpen) {
            statusIndicator.classList.remove('closed');
            statusText.textContent = 'Jetzt geöffnet';
        } else {
            statusIndicator.classList.add('closed');
            statusText.textContent = `Geschlossen • ${nextOpenTime}`;
        }
    }

    updateOpenStatus();
    // Update every minute
    setInterval(updateOpenStatus, 60000);
});

/* 
  Scroll-triggered Animations
*/
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});
