// === Module 6461: useGestureCallbacks ===

// Module 6461 (useGestureCallbacks)
import _mod6420 from "module_6420" /* 6420 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import useGestureEventHandler from "useGestureEventHandler" /* 6462 */;
import n from "n" /* 6464 */;

require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = isGestureEnabled.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6420.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = n;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: useGestureEventHandler.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};