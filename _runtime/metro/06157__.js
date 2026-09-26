// === Module 6157: ? ===

// Module 6157
import _mod6116 from "module_6116" /* 6116 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6158 from "module_6158" /* 6158 */;
import _mod6160 from "module_6160" /* 6160 */;

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6116.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6160;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod6158.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};