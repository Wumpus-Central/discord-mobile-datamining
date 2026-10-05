// _runtime/00334_useMergeRefs.js
import react2 from "00019_react.js";
import useRefEffectDefault from "00335_useRefEffect.js";

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
}
