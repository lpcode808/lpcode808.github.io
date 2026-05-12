import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const cards = [...html.matchAll(/<article class="card" data-cat="([^"]+)" data-href="([^"]+)">([\s\S]*?)<\/article>/g)];
assert.equal(cards.length, 19, 'renders 19 project cards');
assert.equal((html.match(/<a class="card"/g) || []).length, 0, 'cards are not anchors containing disclosure controls');

for (const [, category, href, body] of cards) {
  assert.match(category, /^(edtech|tools|viz|ux)$/, `valid category: ${category}`);
  assert.match(href, /^https:\/\/lpcode808\.github\.io\//, `card href is a GitHub Pages URL: ${href}`);
  assert.match(body, new RegExp(`<a class="card-link" href="${escapeRegExp(href)}" target="_blank" rel="noopener">`), `card has a direct title link: ${href}`);
  assert.match(body, /<details>\s*<summary>talking points<\/summary>/, `card has native details summary: ${href}`);
}

for (const filter of ['all', 'edtech', 'tools', 'viz', 'ux']) {
  assert.match(html, new RegExp(`<button[^>]+data-filter="${filter}"[^>]+aria-pressed="(true|false)"`), `filter ${filter} exposes pressed state`);
}

assert.match(html, /id="filterStatus" role="status" aria-live="polite"/, 'filter result updates are announced');
assert.match(html, /id="expandToggle" aria-expanded="false"/, 'expand-all button exposes expanded state');
assert.match(html, /try \{ return window\.localStorage\.getItem\(key\); \}/, 'theme storage reads are guarded');
assert.match(html, /window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)/, 'motion preference is checked for scroll animation');
assert.match(html, /dialog\.showModal\(\)/, 'build-story dialog uses native modal behavior');

console.log('Smoke checks passed.');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
