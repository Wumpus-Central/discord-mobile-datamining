// === Module 6224: ? ===

// Module 6224
import _mod6183 from "module_6183" /* 6183 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6208 */;
import _mod6225 from "module_6225" /* 6225 */;
import _mod6227 from "module_6227" /* 6227 */;

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6183.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6227;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod6225.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};