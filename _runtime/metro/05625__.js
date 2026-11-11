// === Module 5625: ? ===

// Module 5625
import _mod19 from "module_19" /* 19 */;

let useMemo = _mod19.useMemo;

export function useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated) {
  closure_0 = arg0;
  closure_1 = memoizedGestureCallbacks;
  useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "Array" }), []);
  closure_3 = tmp;
  items = [arg0, memoizedGestureCallbacks, , , , ];
  ({ changeEventCalculator: arr[2], dispatchesAnimatedEvents: arr[3], fillInDefaultValues: arr[4] } = disableReanimated);
  items[5] = tmp;
  return useMemo(() => (arg0) => {
    closure_0(closure_1[1]).eventHandler(closure_1_0, arg0, memoizedGestureCallbacks, disableReanimated.changeEventCalculator, closure_1_3, disableReanimated.dispatchesAnimatedEvents, disableReanimated.fillInDefaultValues);
  }, items);
}