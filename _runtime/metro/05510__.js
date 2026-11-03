// === Module 5510: ? ===

// Module 5510
import reanimatedWrapper from "reanimatedWrapper" /* 5469 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5494 */;
import _mod5511 from "module_5511" /* 5511 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5513 */;

require = arg1;
const dependencyMap = arg6;

export function useGestureCallbacks(arg0, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = reanimatedWrapper.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = useReanimatedEventHandler;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(arg0, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod5511.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
}