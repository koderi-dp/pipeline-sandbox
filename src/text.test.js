import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify, reverse } from './text.js';

test('slugify trims and dashes', () => {
  assert.equal(slugify(' Hello, World! '), 'hello-world');
});
test('slugify collapses runs', () => {
  assert.equal(slugify('a---b   c'), 'a-b-c');
});
test('slugify empty', () => {
  assert.equal(slugify('!!!'), '');
});
test('reverse', () => {
  assert.equal(reverse('ab'), 'ba');
});

import { shout } from './text.js';
test('shout', () => {
  assert.equal(shout('hi'), 'HI!');
});
