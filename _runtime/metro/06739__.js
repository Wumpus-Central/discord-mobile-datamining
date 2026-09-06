// === Module 6739: ? ===

// Module 6739
import _mod6698 from "module_6698" /* 6698 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
import _mod6740 from "module_6740" /* 6740 */;
import _mod6742 from "module_6742" /* 6742 */;

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6698.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6742;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod6740.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};