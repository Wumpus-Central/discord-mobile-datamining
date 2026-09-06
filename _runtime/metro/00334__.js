// === Module 334: ? ===

// Module 334
import _modDef335 from "module_335" /* 335 */;
import noop from "module_19" /* 19 */;

fn(19).useCallback;

export default function useMergeRefs() {
  const items = [...arguments];
  const items1 = [...items];
  return _modDef335(useCallback((current) => {
    dependencyMap = items.map((fn) => {
      current = fn;
      if (null != fn) {
        if (typeof fn === "function") {
          fn = fn(current);
          if (typeof fn !== "function") {
            fn = () => {
              closure_0(null);
            };
          }
          return fn;
        } else {
          fn.current = current;
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