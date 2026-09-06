// _runtime/metro/00908__.js
import _mod904 from "00904__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getNavigationEntry = () => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const _performance = _mod904.WINDOW.performance;
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
