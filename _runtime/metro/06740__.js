// _runtime/metro/06740__.js
import _mod19 from "00019__.js";

let useMemo = _mod19.useMemo;

export const useGestureEventHandler = function useGestureEventHandler(
  handlerTag,
  memoizedGestureCallbacks,
  disableReanimated,
) {
  closure_0 = handlerTag;
  closure_1 = memoizedGestureCallbacks;
  useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "Array" }), []);
  closure_3 = tmp;
  const items = [handlerTag, memoizedGestureCallbacks, , , ,];
  ({
    changeEventCalculator: arr[2],
    dispatchesAnimatedEvents: arr[3],
    fillInDefaultValues: arr[4],
  } = disableReanimated);
  items[5] = tmp;
  return useMemo(
    () => (arg0) => {
      closure_0(closure_1[1]).eventHandler(
        handlerTag,
        arg0,
        memoizedGestureCallbacks,
        disableReanimated.changeEventCalculator,
        closure_1_3,
        disableReanimated.dispatchesAnimatedEvents,
        disableReanimated.fillInDefaultValues,
      );
    },
    items,
  );
};
