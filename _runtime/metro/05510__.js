// _runtime/metro/05510__.js
import reanimatedWrapper from "../05469_reanimatedWrapper.js";
import DEFAULT_PROPS_TRANSFORMER from "../05494_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5511 from "05511__.js";
import useReanimatedEventHandler from "../05513_useReanimatedEventHandler.js";

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
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(
      arg0,
      memoizedGestureCallbacks,
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
    jsEventHandler: _mod5511.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
}
