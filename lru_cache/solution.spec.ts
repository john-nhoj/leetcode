import { describe, it, expect } from '@jest/globals'
import LRUCache from './solution'

describe('lru_cache', () => {
  it('should put correctly when cache is below max capacity', () => {
    const cache = new LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache._cache).toStrictEqual([{ key: 2, value: 2 }, { key: 1, value: 1 }])
  })
  it('should put correctly when cache is at max capacity', () => {
    const cache = new LRUCache(2)
    cache._cache = [{ key: 1, value: 1 }, { key: 2, value: 2 }]
    cache.put(3, 3)
    expect(cache._cache).toStrictEqual([{ key: 3, value: 3 }, { key: 1, value: 1 }])
  })
  it('should get key when key is defined', () => {
    const cache = new LRUCache(2)
    cache._cache = [{ key: 1, value: 1 }, { key: 2, value: 2 }]
    expect(cache.get(1)).toEqual(1)
  })
  it('should get -1 when key is undefined', () => {
    const cache = new LRUCache(2)
    cache._cache = [{ key: 1, value: 1 }, { key: 2, value: 2 }]
    expect(cache.get(5)).toEqual(-1)
  })
  it('should update cache order on access', () => {
    const cache = new LRUCache(2)
    cache._cache = [{ key: 1, value: 1 }, { key: 2, value: 2 }]
    expect(cache.get(2)).toBe(2)
    expect(cache._cache).toStrictEqual([{ key: 2, value: 2 }, { key: 1, value: 1 }])
  })
  it('should work', () => {
    // LRUCache lRUCache = new LRUCache(2);
    const cache = new LRUCache(2)
    // lRUCache.put(1, 1); // cache is {1=1}
    cache.put(1, 1)
    expect(cache._cache).toStrictEqual([{ key: 1, value: 1 }])
    // lRUCache.put(2, 2); // cache is {1=1, 2=2}
    cache.put(2, 2)
    expect(cache._cache).toStrictEqual([{ key: 2, value: 2 }, { key: 1, value: 1 }])
    // lRUCache.get(1);    // return 1
    expect(cache.get(1)).toEqual(1)
    expect(cache._cache).toStrictEqual([{ key: 1, value: 1 }, { key: 2, value: 2 }])
    // lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    cache.put(3, 3)
    expect(cache._cache).toStrictEqual([{ key: 3, value: 3 }, { key: 1, value: 1 }])
    // lRUCache.get(2);    // returns -1 (not found)
    expect(cache.get(2)).toEqual(-1)
    // lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    cache.put(4, 4)
    expect(cache._cache).toStrictEqual([{ key: 4, value: 4 }, { key: 3, value: 3 }])
    // lRUCache.get(1);    // return -1 (not found)
    expect(cache.get(1)).toEqual(-1)
    // lRUCache.get(3);    // return 3
    expect(cache.get(3)).toEqual(3)
    // lRUCache.get(4);    // return 4
    expect(cache.get(4)).toEqual(4)
  })
})
