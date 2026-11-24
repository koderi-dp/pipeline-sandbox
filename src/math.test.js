import test from 'node:test'
import assert from 'node:assert/strict'
import { add, clamp, isEven } from './math.js'
test('add', () => assert.equal(add(1, 2), 3))
test('clamp', () => {
  assert.equal(clamp(5, 0, 3), 3)
  assert.equal(clamp(-1, 0, 3), 0)
  assert.equal(clamp(2, 0, 3), 2)
})
test('isEven', () => {
  assert.equal(isEven(4), true)
  assert.equal(isEven(7), false)
  assert.equal(isEven(0), true)
})
