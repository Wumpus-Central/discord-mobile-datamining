// === Module 10072: useThrottle ===

// Module 10072 (useThrottle)
import _mod12 from "module_12" /* 12 */;
import noop from "module_19" /* 19 */;

require = fn;
function throttleStateFn(arg0) {
  return arg0;
}
function useThrottledFunction(callback4, arg1, items4, sharedValue) {
  _require = callback4;
  dependencyMap = arg1;
  let items = items4;
  if (items4 === undefined) {
    items = [];
  }
  noop = sharedValue;
  const ref = noop.useRef(require("module_12").throttle(callback4, arg1, sharedValue));
  const items1 = [callback4, arg1, sharedValue, ...items];
  const effect = noop.useEffect(() => {
    ref.current = _mod12.throttle(closure_0, current2, ref1);
    return () => {
      const current = ref.current;
      if (current != null) {
        current.cancel();
      }
    };
  }, items1);
  return ref.current;
}
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (set, arg1) => {
  let current = set;
  _require = set;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let current2;
  let ref1;
  if (typeof useThrottledFunction === "function") {
    _require = tmp;
    current2 = arg1;
    if (items === undefined) {
      items = [];
    }
    ref1 = arg3;
    const ref = ref1.useRef(require("module_12").throttle(tmp, arg1, arg3));
    const items1 = [tmp, arg1, arg3];
    HermesBuiltin.arraySpread(items, 3);
    const effect = ref1.useEffect(() => {
      ref.current = _mod12.throttle(closure_0, current2, ref1);
      return () => {
        const current = ref.current;
        if (current != null) {
          current.cancel();
        }
      };
    }, items1);
    current2 = ref.current;
    ref1 = ref1.useRef(current);
    const items2 = [current, current2];
    const effect1 = ref1.useEffect(() => {
      ref1.current = current2(closure_0);
    }, items2);
    if (0 !== arg1) {
      current = ref1.current;
    }
    return current;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useThrottledFunction };