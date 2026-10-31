// _runtime/metro/05387__.js
import _mod5346 from "05346__.js";
import DEFAULT_PROPS_TRANSFORMER from "../05371_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5388 from "05388__.js";
import _mod5390 from "05390__.js";

require = arg1;
const dependencyMap = arg6;

export function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod5346.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod5390;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(
      handlerTag,
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
    jsEventHandler: _mod5388.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
}
