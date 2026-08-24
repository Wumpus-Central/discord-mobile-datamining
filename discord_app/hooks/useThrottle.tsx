// discord_app/hooks/useThrottle.tsx
import closure_2 from "../../_runtime/00019_noop.js";

const require = arg1;
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
  let ref;
  ref = React.useRef(require("../../_runtime/00012_apply.js").throttle(callback4, arg1, sharedValue));
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
const result = require("set").fileFinishedImporting("hooks/useThrottle.tsx");

export const useThrottledState = (stateFromStores) => {
  let current = stateFromStores;
  let _require = stateFromStores;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let current2;
  let ref1;
  if (typeof useThrottledFunction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = tmp;
  current2 = arg1;
  if (items === undefined) {
    items = [];
  }
  ref1 = arg3;
  let ref;
  ref = ref1.useRef(_require(current2[1]).throttle(tmp, arg1, arg3));
  const items1 = [tmp, arg1, arg3, ...items];
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
  if (0 !== arg1) {
    current = ref1.current;
  }
  return current;
};
export { useThrottledFunction };