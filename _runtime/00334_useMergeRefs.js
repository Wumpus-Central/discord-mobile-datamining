// _runtime/00334_useMergeRefs.js
import noopAll from "00019_noop.js";

noopAll;
require("noop").useCallback;

export default function useMergeRefs() {
  let items = [...arguments];
  const items1 = [...items];
  return items(335)(
    useCallback((arg0) => {
      items = arg0;
      closure_1 = items.map((fn) => {
        closure_0 = fn;
        if (null != fn) {
          if (typeof fn === "function") {
            fn = fn(closure_0);
            if (typeof fn !== "function") {
              fn = () => {
                callback(null);
              };
            }
            return fn;
          } else {
            fn.current = closure_0;
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
    }, items1),
  );
}
