// === Module 334: useMergeRefs ===

// Module 334 (useMergeRefs)
import noopAll from "noop" /* 19 */;

noopAll;
require("noop").useCallback;

export default function useMergeRefs() {
  let items = [...arguments];
  const items1 = [...items];
  return items(335)(useCallback((arg0) => {
    items = arg0;
    closure_1 = items.map((item, index) => {
      closure_0 = item;
      if (null != item) {
        if (typeof item === "function") {
          let fn = item(closure_0);
          if (typeof fn !== "function") {
            fn = () => {
              item(null);
            };
          }
          return fn;
        } else {
          item.current = closure_0;
          return () => {
            closure_0.current = null;
          };
        }
      }
    });
    return () => {
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult != null) {
          let nextResultResult = nextResult();
        }
        continue;
      }
    };
  }, items1));
};