// === Module 6343: ? ===

// Module 6343
import _mod6302 from "module_6302" /* 6302 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6327 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6346 from "module_6346" /* 6346 */;

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6302.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6346;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod6344.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};