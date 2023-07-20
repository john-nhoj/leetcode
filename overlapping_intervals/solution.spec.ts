import { eraseOverlapIntervals } from './solution'
import { describe, expect, it } from '@jest/globals'

describe("overlapping_intervals", () => {
  it('should return 1', () => {
    const nbOfIntervals = eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])
    expect(nbOfIntervals).toBe(1)
  })

  it('should return 0 for empty intervals', () => {
    const nbOfIntervals = eraseOverlapIntervals([[1, 2], [2, 3]])
    expect(nbOfIntervals).toBe(0)
  })

  it('should return 2', () => {
    const nbOfIntervals = eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])
    expect(nbOfIntervals).toBe(2)
  })

  it('should return 0 for distant intervals', () => {
    const nbOfIntervals = eraseOverlapIntervals([[0, 1], [3, 4], [1, 2]])
    expect(nbOfIntervals).toBe(0)
  })

  it('should return 7 for [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]', () => {
    const nbOfIntervals = eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])
    expect(nbOfIntervals).toBe(7)
  })

  it('should return 9 for [[-3035,30075],[1937,6906],[11834,20971],[44578,45600],[28565,37578],[19621,34415],[32985,36313],[-8144,1080],[-15279,21851],[-27140,-14703],[-12098,16264],[-36057,-16287],[47939,48626],[-15129,-5773],[10508,46685],[-35323,-26257]]', () => {
    const nbOfIntervals = eraseOverlapIntervals([[-3035, 30075], [1937, 6906], [11834, 20971], [44578, 45600], [28565, 37578], [19621, 34415], [32985, 36313], [-8144, 1080], [-15279, 21851], [-27140, -14703], [-12098, 16264], [-36057, -16287], [47939, 48626], [-15129, -5773], [10508, 46685], [-35323, -26257]])
    expect(nbOfIntervals).toBe(9)
  })
})
