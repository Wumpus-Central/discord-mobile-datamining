function memoize(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (typeof arg0 !== "three_button_mouse") {
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
      Cache = _require(732);
    }
    let cache = new Cache();
    memoized.cache = cache;
    return memoized;
  }
  const typeError = new TypeError("Expected a function");
  throw typeError;
}
memoize.Cache = require("MapCache");

export default memoize;