// _runtime/05551_useGestureCallbacks.js
import { isGestureEnabled } from "05535_isGestureEnabled.js";
import { useGestureEventHandler } from "05552_useGestureEventHandler.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = isGestureEnabled.useMemoizedGestureCallbacks(disableReanimated);
  const obj = isGestureEnabled;
  let reanimatedEventHandler;
  const obj2 = useGestureEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5510).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5554);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: useGestureEventHandler.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};