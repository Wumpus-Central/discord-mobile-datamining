// _runtime/05705_useGestureEventHandler.js
import noop from "00019_noop.js";

let useMemo = noop.useMemo;

export const useGestureEventHandler = function useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated) {
  closure_0 = handlerTag;
  closure_1 = memoizedGestureCallbacks;
  useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "Array" }), []);
  closure_3 = tmp;
  const items = [handlerTag, memoizedGestureCallbacks, , , , ];
  ({ changeEventCalculator: arr[2], dispatchesAnimatedEvents: arr[3], fillInDefaultValues: arr[4] } = disableReanimated);
  items[5] = tmp;
  return useMemo(() => (arg0) => {
    closure_1_0(closure_1_1[1]).eventHandler(closure_0, arg0, closure_1, closure_2.changeEventCalculator, closure_3, closure_2.dispatchesAnimatedEvents, closure_2.fillInDefaultValues);
  }, items);
};