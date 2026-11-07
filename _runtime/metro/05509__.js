// === Module 5509: ? ===

// Module 5509
import reanimatedWrapper from "reanimatedWrapper" /* 5464 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5491 */;
import _mod5510 from "module_5510" /* 5510 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5512 */;

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
  return { jsEventHandler: _mod5510.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
}