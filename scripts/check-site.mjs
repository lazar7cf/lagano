// Dependency-free checks for the static site and generated menu.
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(resolve(root, file), 'utf8');
const pages = new Map(['index.html', 'menu.html'].map((file) => [file, read(file)]));
const ids = new Map([...pages].map(([file, html]) => {
  const values = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(values.length, new Set(values).size, `Duplicate IDs in ${file}`);
  return [file, new Set(values)];
}));

for (const [file, html] of pages) {
  assert.match(html, /<html lang="de">/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `One H1 in ${file}`);
  assert.equal((html.match(/class="site-header"/g) || []).length, 1);
  assert.equal((html.match(/class="site-footer"/g) || []).length, 1);
  assert.doesNotMatch(html, /aggregateRating|reviewBody|tel:\+497031123456|mailto:hello@cafelagano.de|href="https:\/\/instagram.com"/);
  assert.doesNotMatch(html, /src="assets\/images\/(?:hero.png|cat-.*?\.png|about.png)"/);
  for (const match of html.matchAll(/<(a|link|script|img|iframe)\b[^>]*\b(?:href|src)="([^"]+)"[^>]*>/g)) {
    const [tag, type, raw] = match;
    const url = raw.replaceAll('&amp;', '&');
    if (/^https?:\/\//.test(url)) {
      if (type === 'a' && tag.includes('target="_blank"')) assert.match(tag, /rel="[^\"]*noopener/);
      continue;
    }
    const [path, hash] = url.split('#');
    const target = path || file;
    assert(existsSync(resolve(root, target)), `Missing file ${target} in ${file}`);
    if (hash) assert(ids.get(target)?.has(hash), `Missing anchor ${url} in ${file}`);
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(match[0], /\balt="[^"]+"/, `Image alt text in ${file}`);
    assert.match(match[0], /\bwidth="\d+"/);
    assert.match(match[0], /\bheight="\d+"/);
  }
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) assert(existsSync(resolve(root, candidate.trim().split(' ')[0])), `Missing responsive image in ${file}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}

const data = JSON.parse(read('assets/data/menu.json'));
const menu = pages.get('menu.html');
const total = Object.values(data).flat().length;
assert.equal((menu.match(/class="menu-item(?: menu-item-regional)?"/g) || []).length, total);
assert.equal((menu.match(/class="menu-section(?: menu-section-wide)?"/g) || []).length, Object.keys(data).length);
const schema = JSON.parse([...menu.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)][0][1]);
assert.equal(schema.hasMenuSection.length, Object.keys(data).length);
Object.entries(data).forEach(([name, items], categoryIndex) => {
  const section = schema.hasMenuSection[categoryIndex];
  assert.equal(section.name, name);
  assert.equal(section.hasMenuItem.length, items.length);
  items.forEach((item, index) => {
    assert.equal(section.hasMenuItem[index].name, item.name);
    assert.equal(section.hasMenuItem[index].description || '', item.description);
    if (!item.price.startsWith('+')) assert.equal(section.hasMenuItem[index].offers.price, item.price.replace(' €', ''));
  });
});
for (const match of read('assets/fonts/fonts.css').matchAll(/url\(([^)]+)\)/g)) {
  assert(existsSync(resolve(root, 'assets/fonts', match[1])), `Missing font ${match[1]}`);
}
console.log(`Passed: local links and anchors, metadata, image dimensions/alt text, fonts, and all ${total} menu entries with prices.`);
