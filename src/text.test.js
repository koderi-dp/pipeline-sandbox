import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify, capitalize } from './text.js';

test('slugify trims and dashes', () => {
  assert.equal(slugify(' Hello, World! '), 'hello-world');
});
test('slugify collapses runs', () => {
  assert.equal(slugify('a---b   c'), 'a-b-c');
});
test('slugify empty', () => {
  assert.equal(slugify('!!!'), '');
});
test('capitalize first letter', () => {
  assert.equal(capitalize('hello'), 'Hello');
});
test('capitalize empty', () => {
  assert.equal(capitalize(''), '');
});
