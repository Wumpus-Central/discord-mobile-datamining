// _runtime/06225_react.js
import react from "00019_react.js";

let useMemo = react.useMemo;

export const useGestureEventHandler = function useGestureEventHandler(
  handlerTag,
  memoizedGestureCallbacks,
  disableReanimated,
) {
  let closure_0 = handlerTag;
  let closure_1 = memoizedGestureCallbacks;
  useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "r" }), []);
  let closure_3 = tmp;
  const items = [handlerTag, memoizedGestureCallbacks, , , ,];
  ({
    changeEventCalculator: arr[2],
    dispatchesAnimatedEvents: arr[3],
    fillInDefaultValues: arr[4],
  } = disableReanimated);
  items[5] = tmp;
  return useMemo(
    () => (arg0) => {
      const obj = closure_0(closure_1[1]);
      obj.eventHandler(
        closure_1_0,
        arg0,
        closure_1_1,
        disableReanimated.changeEventCalculator,
        closure_1_3,
        disableReanimated.dispatchesAnimatedEvents,
        disableReanimated.fillInDefaultValues,
      );
    },
    items,
  );
};
