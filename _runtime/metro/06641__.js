// _runtime/metro/06641__.js
import _mod6600 from "06600__.js";
import DEFAULT_PROPS_TRANSFORMER from "../06625_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6642 from "06642__.js";
import _mod6644 from "06644__.js";

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6600.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6644;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(
      handlerTag,
      memoizedGestureCallbacks,
      handler,
      disableReanimated.changeEventCalculator,
      disableReanimated.fillInDefaultValues,
    );
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return {
    jsEventHandler: _mod6642.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
};
