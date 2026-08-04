import "noop";

require("noop").useCallback;

export default function useMergeRefs() {
  let items = [...arguments];
  const items1 = [...items];
  return items(335)(useCallback((arg0) => {
    const items = arg0;
    let closure_1 = items.map((fn) => {
      let closure_0 = fn;
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
  }, items1));
};