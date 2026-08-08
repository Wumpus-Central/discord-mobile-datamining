// _runtime/05512_useGestureEventHandler.js
import { useMemo } from "noop";


export const useGestureEventHandler = function useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated) {
  let closure_0 = handlerTag;
  let closure_1 = memoizedGestureCallbacks;
  const useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "sa" }), []);
  let closure_3 = tmp;
  const items = [handlerTag, memoizedGestureCallbacks, , , , ];
  ({ changeEventCalculator: arr[2], dispatchesAnimatedEvents: arr[3], fillInDefaultValues: arr[4] } = disableReanimated);
  items[5] = tmp;
  return useMemo(() => (arg0) => {
    outer1_0(outer1_1[1]).eventHandler(closure_0, arg0, closure_1, closure_2.changeEventCalculator, closure_3, closure_2.dispatchesAnimatedEvents, closure_2.fillInDefaultValues);
  }, items);
};