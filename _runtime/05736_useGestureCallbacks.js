// === Module 5736: useGestureCallbacks ===

// Module 5736 (useGestureCallbacks)
import isGestureEnabled from "isGestureEnabled" /* 5720 */;
import useGestureEventHandler from "useGestureEventHandler" /* 5737 */;

require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = isGestureEnabled.useMemoizedGestureCallbacks(disableReanimated);
  const obj = isGestureEnabled;
  let reanimatedEventHandler;
  const obj2 = useGestureEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5695).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5739);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: useGestureEventHandler.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};