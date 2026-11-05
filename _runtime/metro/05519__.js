// === Module 5519: ? ===

// Module 5519
import reanimatedWrapper from "reanimatedWrapper" /* 5474 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5501 */;
import _mod5520 from "module_5520" /* 5520 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5522 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const memoizedGestureCallbacks = resolveInternalConfigProps.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = reanimatedWrapper.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(tmp6);
    }
    const tmpResult = useReanimatedEventHandler;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(arg0, tmp6, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod5520.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
}