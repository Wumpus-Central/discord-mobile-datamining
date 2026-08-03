// === Module 334: useMergeRefs ===

// Module 334 (useMergeRefs)
import "noop";

require("noop").useCallback;

export default function useMergeRefs() {
  let items = [...arguments];
  const items1 = [...items];
  return items(335)(useCallback((arg0) => {
    const items = arg0;
    let closure_1 = items.map((arg0) => {
      let closure_0 = arg0;
      if (null != arg0) {
        if (typeof arg0 === "fileFinishedImporting") {
          let fn = arg0(closure_0);
          if (typeof fn !== "fileFinishedImporting") {
            fn = () => {
              callback(null);
            };
          }
          return fn;
        } else {
          arg0.current = closure_0;
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