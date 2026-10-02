// Optional maintenance command, no build or dependencies required.
// Keeps the static, no-JavaScript pages and menu metadata in sync.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const menu = JSON.parse(read('assets/data/menu.json'));
const ids = ['warme-getraenke', 'alkoholfreie-getraenke', 'bier', 'weine', 'flaschen', 'shots', 'spirituosen'];
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const displayPrice = (price) => price.replace('.', ',');
const regional = new Set(['Cockta', 'Cedevita', 'Franck Cappuccino', 'Jelen', 'Ozujsko', 'Karlovacko', 'Rakija', 'Pelinkovac']);

function category(name, items, index) {
  return `<section class="menu-section${index === 4 ? ' menu-section-wide' : ''}" id="${ids[index]}" aria-labelledby="category-${index}">
  <div class="menu-section-heading"><h2 id="category-${index}">${escape(name)}</h2></div>
  <ul class="menu-items">
${items.map((item) => `    <li class="menu-item${regional.has(item.name) ? ' menu-item-regional' : ''}"><div class="menu-item-info"><h3 class="menu-item-name">${escape(item.name)}</h3>${item.description ? `<p class="menu-item-desc">${escape(item.description)}</p>` : ''}</div><span class="menu-item-price">${displayPrice(item.price)}</span></li>`).join('\n')}
  </ul>
</section>`;
}

function photoBreak(image, alt, title, copy, second = false) {
  return `<figure class="menu-photo-break${second ? ' menu-photo-break-evening' : ''}">
  <div class="photo"><img src="assets/images/placeholders/${image}-1280.webp" srcset="assets/images/placeholders/${image}-640.webp 640w, assets/images/placeholders/${image}-1280.webp 1280w" sizes="(max-width: 767px) 100vw, 65vw" width="1280" height="${second ? 1920 : 848}" alt="${alt}" loading="lazy" decoding="async"></div>
  <figcaption class="menu-break-copy"><p>${title.replaceAll('<br>', ' ')}</p><span>${copy}</span></figcaption>
</figure>`;
}

const categories = Object.entries(menu).map(([name, items], index) => category(name, items, index));
const groups = `<div class="menu-grid">${categories.slice(0, 2).join('\n')}</div>
${photoBreak('barista', 'Milch wird in einen Cappuccino gegossen', 'Zeit für eine<br>kleine Pause.', 'Und einen guten Kaffee.')}
<div class="menu-grid">${categories.slice(2, 4).join('\n')}</div>
${photoBreak('drinks', 'Ein orangefarbener Aperitif auf einem Tisch im Tageslicht', 'Noch ein Gespräch.<br>Noch ein Glas.', 'Der Nachmittag darf bleiben.', true)}
<div class="menu-grid">${categories.slice(4).join('\n')}</div>`;

const nav = Object.keys(menu).map((name, index) => `<a href="#${ids[index]}"${index === 0 ? ' aria-current="location"' : ''}>${escape(name)}</a>`).join('\n');
const schema = {
  '@context': 'https://schema.org', '@type': 'Menu', name: 'Getränkekarte Cafe Lagano',
  hasMenuSection: Object.entries(menu).map(([name, items]) => ({
    '@type': 'MenuSection', name, hasMenuItem: items.map((item) => ({
      '@type': 'MenuItem', name: item.name, ...(item.description ? { description: item.description } : {}),
      // Sahne is an existing surcharge, not a standalone product offer.
      ...(item.price.startsWith('+') ? {} : { offers: { '@type': 'Offer', price: item.price.replace(' €', ''), priceCurrency: 'EUR' } })
    }))
  }))
};

const replace = (source, marker, content) => {
  const pattern = new RegExp(`(<!-- ${marker}:start -->)[\\s\\S]*?(<!-- ${marker}:end -->)`);
  if (!pattern.test(source)) throw new Error(`Missing marker: ${marker}`);
  return source.replace(pattern, (_, start, end) => `${start}\n${content}\n${end}`);
};

const selection = ['Espresso', 'Cockta', 'Cedevita'].map((name) => {
  const categoryIndex = Object.values(menu).findIndex((items) => items.some((item) => item.name === name));
  const item = Object.values(menu)[categoryIndex].find((item) => item.name === name);
  return `<li><a href="menu.html#${ids[categoryIndex]}"><span class="selection-name">${escape(item.name)}${item.description ? `<small>${escape(item.description)}</small>` : ''}</span><span class="selection-price">${displayPrice(item.price)}</span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a></li>`;
}).join('\n');

const check = process.argv.includes('--check');
let stale = false;
for (const file of ['index.html', 'menu.html']) {
  const original = read(file);
  const isMenu = file === 'menu.html';
  const header = read('partials/header.html').trim().replace('{{menu-current}}', isMenu ? 'aria-current="page"' : '').replace('{{visit-href}}', isMenu ? '#menu-visit' : '#contact');
  let output = replace(original, 'shared-header', header);
  output = replace(output, 'shared-footer', read('partials/footer.html').trim());
  if (!isMenu) output = replace(output, 'home-selection', `<ul class="home-selection">\n${selection}\n</ul>`);
  if (isMenu) {
    output = replace(output, 'menu-navigation', nav);
    output = replace(output, 'menu-content', groups);
    output = replace(output, 'menu-schema', `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`);
  }
  if (output !== original) {
    if (check) { console.error(`Content out of sync: ${file}`); stale = true; }
    else writeFileSync(resolve(root, file), output);
  }
}
if (stale) process.exitCode = 1;
else console.log(`${check ? 'Verified' : 'Synchronized'} shared header, footer, ${Object.keys(menu).length} categories and ${Object.values(menu).flat().length} menu entries.`);
