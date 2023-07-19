interface ICacheValue {
  key: number,
  value: number,
}

class LRUCache {
  _capacity: number;
  _cache: Array<ICacheValue> = []
  constructor(capacity: number) {
    this._capacity = capacity;
  }

  get(key: number): number {
    let cacheValue = -1
    this._cache = this._cache.reduce<ICacheValue[]>((acc, val) => {
      if (val.key === key) {
        cacheValue = val.value
        acc.splice(0, 0, val)
      } else {
        acc.push(val)
      }
      return acc
    }, [])
    return cacheValue
  }

  put(key: number, value: number): void {
    let updated = false
    const newCache = this._cache.reduce<ICacheValue[]>((acc, val) => {
      if (val.key === key) {
        acc.splice(0, 0, { ...val, value })
        updated = true
      } else {
        acc.push(val)
      }
      return acc
    }, [])
    if (!updated) {
      if (newCache.length === this._capacity) {
        newCache.pop()
      }
      newCache.splice(0, 0, { key, value })
    }
    this._cache = newCache
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
