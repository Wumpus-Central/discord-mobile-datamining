// === Module 7182: InteractionObserverUtils ===

// Module 7182 (InteractionObserverUtils)
import size from "module_2" /* 2 */;

let set;

function __handleIntersections(arr, arg1) {
  let closure_0 = arg1;
  const item = arr.forEach((target) => {
    const value = weakMap1.get(closure_0);
    let value2;
    if (value != null) {
      value2 = value.get(target.target);
    }
    if (null != value2) {
      value2.call(null, target);
    }
  });
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/InteractionObserverUtils.tsx");

export const getIntersectionObserver = function getIntersectionObserver(current) {
  let value = weakMap.get(current);
  const obj = weakMap;
  if (null == value) {
    const self = this;
    const self2 = this;
    const intersectionObserver = new globalThis.IntersectionObserver(__handleIntersections, current);
    const result = obj.set(current, intersectionObserver);
    const _WeakMap = WeakMap;
    const self3 = this;
    const self4 = this;
    set = weakMap1.set;
    weakMap = new WeakMap();
    const result1 = set(intersectionObserver, weakMap);
    value = intersectionObserver;
  }
  return value;
};
export const watch = function watch(current2, current, arg2) {
  weakMap = weakMap1.get(current2);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    const self = this;
    const self2 = this;
    weakMap = new WeakMap();
  }
  if (!weakMap.has(current)) {
    current2.observe(current);
  }
  const result = weakMap.set(current, arg2);
  const result1 = weakMap1.set(current2, weakMap);
};
export const unwatch = function unwatch(current2, current) {
  weakMap = weakMap1.get(current2);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    const self = this;
    const self2 = this;
    weakMap = new WeakMap();
  }
  if (weakMap.has(current)) {
    weakMap.delete(current);
    current2.unobserve(current);
    const result = weakMap1.set(current2, weakMap);
  }
};