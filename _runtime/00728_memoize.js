// _runtime/00728_memoize.js
import MapCache from "00729_MapCache.js";
import { MapCache } from "00729_MapCache.js";

function memoize(fn, fn2) {
  const _require = fn;
  dependencyMap = fn2;
  if (typeof fn === "function") {
    function memoized() {
      const self = this;
      if (closure_1) {
        let applyResult = obj(...arguments);
      } else {
        applyResult = arguments[0];
      }
      const cache = memoized.cache;
      if (cache.has(applyResult)) {
        return cache.get(applyResult);
      } else {
        const applyResult1 = callback(...arguments);
        tmp4.cache = cache.set(applyResult, applyResult1) || cache;
        return applyResult1;
      }
      obj = closure_1;
      tmp4 = memoized;
    }
    let Cache = memoized.Cache;
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
