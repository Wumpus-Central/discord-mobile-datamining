// === Module 334: useMergeRefs ===

// Module 334 (useMergeRefs)
import react2 from "react" /* 19 */;
import useRefEffectDefault from "useRefEffect" /* 335 */;

let current, fn;

const useCallback = react2.useCallback;

export default function useMergeRefs() {
  const items = [...arguments];
  const items1 = [...items];
  const tmp = useCallback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = items.map((fn) => {
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
      const iter = closure_1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult != null) {
          let nextResultResult = nextResult();
        }
        continue;
      }
    };
  }, items1);
  return useRefEffectDefault(tmp);
};