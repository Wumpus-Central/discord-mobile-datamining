// === Module 919: ? ===

// Module 919
import _mod915 from "module_915" /* 915 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getNavigationEntry = (arg0) => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const _performance = _mod915.WINDOW.performance;
  let first;
  if (_performance != null) {
    const getEntriesByType = _performance.getEntriesByType;
    if (getEntriesByType != null) {
      first = getEntriesByType("navigation")[0];
    }
  }
  if (flag) {
    if (first) {
      if (first.responseStart > 0) {
        const _performance2 = performance;
      }
    }
  }
  return first;
};