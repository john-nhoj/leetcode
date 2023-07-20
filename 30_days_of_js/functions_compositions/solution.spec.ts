import { describe, expect, it } from '@jest/globals'
import { compose, F } from './solution'

describe('Function Composition', () => {
  it('should return 65', () => {
    // x => 2 * x ==> 8
    // x => x * x ==> 64
    // x => x + 1 ==> 65
    const functions: F[] = [x => x + 1, x => x * x, x => 2 * x]
    const fn = compose(functions)
    const output = fn(4)
    expect(output).toBe(65)
  })
})
