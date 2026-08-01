// === Module 5986: __handleIntersections ===

// Module 5986 (__handleIntersections)
function __handleIntersections(arr) {
  let closure_0 = arg1;
  const item = arr.forEach((target) => {
    let value = outer1_1.get(closure_0);
    value = undefined;
    if (value != null) {
      value = value.get(target.target);
    }
    if (null != value) {
      const call = value.call;
      if (typeof call === "unknown") {
        value(target);
      } else {
        call(null, target);
      }
    }
  });
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/InteractionObserverUtils.tsx");

export const getIntersectionObserver = function getIntersectionObserver(current) {
  let value = weakMap.get(current);
  if (null == value) {
    const intersectionObserver = new globalThis.IntersectionObserver(__handleIntersections, current);
    const result = weakMap.set(current, intersectionObserver);
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
    const result1 = weakMap1.set(intersectionObserver, weakMap);
    value = intersectionObserver;
  }
  return value;
};
export const watch = function watch(current2, current, current2) {
  let weakMap = weakMap1.get(current2);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (!weakMap.has(current)) {
    current2.observe(current);
  }
  const result = weakMap.set(current, current2);
  const result1 = weakMap1.set(current2, weakMap);
};
export const unwatch = function unwatch(current2, current) {
  let weakMap = weakMap1.get(current2);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (weakMap.has(current)) {
    weakMap.delete(current);
    current2.unobserve(current);
    const result = weakMap1.set(current2, weakMap);
  }
};