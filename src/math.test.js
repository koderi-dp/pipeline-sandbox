import test from 'node:test'
import assert from 'node:assert/strict'
import { add } from './math.js'
test('add', () => assert.equal(add(1, 2), 3))
