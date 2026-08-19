// === Module 12628: throttleStateFn ===

// Module 12628 (throttleStateFn)
import noop from "noop" /* 19 */;

const require = fn;
function throttleStateFn(arg0) {
  return arg0;
}
function useThrottledFunction(callback4, arg1, items4, sharedValue) {
  const _require = callback4;
  dependencyMap = arg1;
  let items = items4;
  if (items4 === undefined) {
    items = [];
  }
  const React = sharedValue;
  const ref = React.useRef(_require(12).throttle(callback4, arg1, sharedValue));
  const items1 = [callback4, arg1, sharedValue, ...items];
  const effect = React.useEffect(() => {
    ref.current = callback(current2[1]).throttle(callback, current2, ref1);
    return () => {
      const current = ref.current;
      if (current != null) {
        current.cancel();
      }
    };
  }, items1);
  return ref.current;
}
const result = require("obj132").fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (memo, throttleDurationForChannel, items5) => {
  let current = memo;
  let _require = memo;
  let items = items5;
  if (items5 === undefined) {
    items = [];
  }
  let current2;
  let ref1;
  if (typeof useThrottledFunction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = tmp;
  current2 = throttleDurationForChannel;
  if (items === undefined) {
    items = [];
  }
  ref1 = arg3;
  const ref = ref1.useRef(_require(current2[1]).throttle(tmp, throttleDurationForChannel, arg3));
  const items1 = [tmp, throttleDurationForChannel, arg3, ...items];
  const effect = ref1.useEffect(() => {
    ref.current = callback(current2[1]).throttle(callback, current2, ref1);
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
  if (0 !== throttleDurationForChannel) {
    current = ref1.current;
  }
  return current;
};
export { useThrottledFunction };