// _runtime/metro/06323__.js
import _mod6282 from "06282__.js";
import DEFAULT_PROPS_TRANSFORMER from "../06307_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6324 from "06324__.js";
import _mod6326 from "06326__.js";

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6282.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6326;
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
    jsEventHandler: _mod6324.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
};
