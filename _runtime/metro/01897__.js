// _runtime/metro/01897__.js
import noop from "00019__.js";

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);

export function useHandler(memoizedGestureCallbacks, items26) {
  _require = memoizedGestureCallbacks;
  const tmp = closure_3(null);
  if (null === tmp.current) {
    tmp.current = { context: "Array", prevHandlers: "flexDirection" };
  }
  const current = tmp.current;
  let obj = require("areDependenciesEqual");
  closure_2(() => {
    current.prevHandlers = prevHandlers;
  });
  const obj2 = {};
  Object.defineProperty(obj2, "context", {
    get: () => {
      if (undefined === current.context) {
        current.context = require("01705__.js").makeShareable({});
        const obj = require("01705__.js");
      }
      return current.context;
    },
    set: undefined,
  });
  obj2.doDependenciesDiffer = !require("areDependenciesEqual").areWorkletHandlersEqual(
    memoizedGestureCallbacks,
    current.prevHandlers,
  );
  return obj2;
}
