import { test } from 'node:test'
import assert from 'node:assert/strict'
import { stamp } from './e2e.js'

test('the stamp is text', () => {
  assert.equal(typeof stamp, 'string')
})
