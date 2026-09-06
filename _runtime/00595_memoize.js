// === Module 595: memoize ===

// Module 595 (memoize)
import MapCache from "MapCache" /* 596 */;

function memoize(fn, fn2) {
  closure_0 = fn;
  closure_1 = fn2;
  if (typeof fn === "function") {
    function memoized() {
      const self = this;
      if (closure_1) {
        let applyResult = closure_1(...arguments);
      } else {
        applyResult = arguments[0];
      }
      const cache = memoized.cache;
      if (cache.has(applyResult)) {
        return cache.get(applyResult);
      } else {
        const applyResult1 = closure_0(...arguments);
        memoized.cache = cache.set(applyResult, applyResult1) || cache;
        return applyResult1;
      }
    }
    let Cache = memoize.Cache;
    if (!Cache) {
      Cache = MapCache;
    }
    let cache = new Cache();
    memoized.cache = cache;
    return memoized;
  }
  const typeError = new TypeError("Expected a function");
  throw typeError;
}
memoize.Cache = MapCache;

export default memoize;