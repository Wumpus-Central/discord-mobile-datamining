// === Module 1844: ? ===

// Module 1844
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export default function _default() {
  const items = [...arguments];
  return useCallback((current) => {
    for (const item10007 of items) {
      let tmp = item10007;
      if (item10007) {
        if (typeof tmp === "function") {
          let tmpResult = tmp(arg0);
        } else {
          tmp.current = arg0;
        }
      }
      continue;
    }
  }, items);
};