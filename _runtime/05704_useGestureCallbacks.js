// === Module 5704: useGestureCallbacks ===

// Module 5704 (useGestureCallbacks)
import isGestureEnabled from "isGestureEnabled" /* 5688 */;
import useGestureEventHandler from "useGestureEventHandler" /* 5705 */;

require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = isGestureEnabled.useMemoizedGestureCallbacks(disableReanimated);
  const obj = isGestureEnabled;
  let reanimatedEventHandler;
  const obj2 = useGestureEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5663).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5707);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: useGestureEventHandler.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};