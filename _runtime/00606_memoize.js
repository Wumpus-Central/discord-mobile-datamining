// === Module 606: memoize ===

// Module 606 (memoize)
import MapCache from "MapCache" /* 607 */;

function memoize(fn, fn2) {
  let closure_0 = fn;
  let closure_1 = fn2;
  if (typeof fn === "function") {
    function memoized() {
      let applyResult;
      const self = this;
      if (closure_1) {
        applyResult = closure_1(...arguments);
      } else {
        applyResult = arguments[0];
      }
      const cache = memoized.cache;
      if (cache.has(applyResult)) {
        return cache.get(applyResult);
      } else {
        const applyResult1 = closure_0(...arguments);
        memoized.cache = cache.set(applyResult, applyResult1) || cache;
        cache.set(applyResult, applyResult1) || cache;
        return applyResult1;
      }
    }
    const Cache = memoize.Cache || MapCache;
    let self = this;
    const self2 = this;
    let cache = new Cache();
    memoized.cache = cache;
    return memoized;
  }
  const typeError = new TypeError("Expected a function");
  throw typeError;
}
memoize.Cache = MapCache;

export default memoize;