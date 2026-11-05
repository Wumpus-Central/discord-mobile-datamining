// _runtime/metro/05519__.js
import reanimatedWrapper from "../05474_reanimatedWrapper.js";
import resolveInternalConfigProps from "../05501_resolveInternalConfigProps.js";
import _mod5520 from "05520__.js";
import useReanimatedEventHandler from "../05522_useReanimatedEventHandler.js";

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
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(
      arg0,
      tmp6,
      handler,
      disableReanimated.changeEventCalculator,
      disableReanimated.fillInDefaultValues,
    );
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return {
    jsEventHandler: _mod5520.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
}
