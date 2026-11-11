// === Module 8737: InteractionObserverUtils ===

// Module 8737 (InteractionObserverUtils)
import size from "module_2" /* 2 */;

function __handleIntersections(arr, arg1) {
  closure_0 = arg1;
  const item = arr.forEach((target) => {
    value = weakMap1.get(closure_0);
    let value2;
    if (value != null) {
      value2 = value.get(target.target);
    }
    if (null != value2) {
      const call = value2.call;
      if (typeof call === "unknown") {
        value2(target);
      } else {
        call(null, target);
      }
    }
  });
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/InteractionObserverUtils.tsx");

export function getIntersectionObserver(current) {
  value = weakMap.get(current);
  if (null == value) {
    const intersectionObserver = new globalThis.IntersectionObserver(__handleIntersections, current);
    const result = weakMap.set(current, intersectionObserver);
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
    const result1 = weakMap1.set(intersectionObserver, weakMap);
    value = intersectionObserver;
  }
  return value;
}
export function watch(observe, current, arg2) {
  weakMap = weakMap1.get(observe);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (!weakMap.has(current)) {
    observe.observe(current);
  }
  const result = weakMap.set(current, arg2);
  const result1 = weakMap1.set(observe, weakMap);
}
export function unwatch(unobserve, arg1) {
  weakMap = weakMap1.get(unobserve);
  if (weakMap == null) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (weakMap.has(arg1)) {
    weakMap.delete(arg1);
    unobserve.unobserve(arg1);
    const result = weakMap1.set(unobserve, weakMap);
  }
}