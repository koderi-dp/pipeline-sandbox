import test from 'node:test'
import assert from 'node:assert/strict'
import { add, clamp } from './math.js'
test('add', () => assert.equal(add(1, 2), 3))
test('clamp', () => {
  assert.equal(clamp(5, 0, 3), 3)
  assert.equal(clamp(-1, 0, 3), 0)
  assert.equal(clamp(2, 0, 3), 2)
})
