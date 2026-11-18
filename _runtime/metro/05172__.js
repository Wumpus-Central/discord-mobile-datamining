// _runtime/metro/05172__.js
import reanimatedWrapper from "../05127_reanimatedWrapper.js";
import resolveInternalConfigProps from "../05154_resolveInternalConfigProps.js";
import _mod5173 from "05173__.js";
import useReanimatedEventHandler from "../05175_useReanimatedEventHandler.js";

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
    jsEventHandler: _mod5173.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
}
