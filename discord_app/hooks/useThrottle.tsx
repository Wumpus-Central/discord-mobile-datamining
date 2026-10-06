// === Module 9768: useThrottle ===

// Module 9768 (useThrottle)
import _mod12 from "module_12" /* 12 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function throttleStateFn(arg0) {
  return arg0;
}
let react = react_mod;
function useThrottledFunction(callback4, arg1) {
  let closure_1;
  _require = callback4;
  dependencyMap = arg1;
  let items = cResult;
  if (cResult === undefined) {
    items = [];
  }
  react = sharedValue;
  const useRef = react.useRef;
  const obj = require("module_12");
  const ref = useRef(obj.throttle(callback4, arg1, sharedValue));
  const items1 = [callback4, arg1, sharedValue, ...items];
  const effect = react.useEffect(() => {
    const obj = _mod12;
    ref.current = obj.throttle(closure_0, closure_1, closure_2);
    return () => {
      const current = ref.current;
      if (current != null) {
        current.cancel();
      }
    };
  }, items1);
  return ref.current;
}
const result = size.fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (memo, arg1) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let current = memo;
  _require = memo;
  let items = cResult;
  if (cResult === undefined) {
    items = [];
  }
  let current2;
  let ref1;
  if (typeof useThrottledFunction === "function") {
    _require = tmp2;
    dependencyMap = arg1;
    if (items === undefined) {
      items = [];
    }
    react = arg3;
    const useRef = react.useRef;
    let obj = require("module_12");
    const ref = useRef(obj.throttle(tmp2, arg1, arg3));
    const items1 = [ref, arg1, arg3];
    const useEffect = react.useEffect;
    HermesBuiltin.arraySpread(items1, items, 3);
    const effect = useEffect(() => {
      const obj = _mod12;
      ref.current = obj.throttle(closure_0, closure_1, closure_2);
      return () => {
        const current = ref.current;
        if (current != null) {
          current.cancel();
        }
      };
    }, items1);
    current2 = ref.current;
    ref1 = react.useRef(current);
    const items2 = [current, current2];
    const effect1 = react.useEffect(() => {
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