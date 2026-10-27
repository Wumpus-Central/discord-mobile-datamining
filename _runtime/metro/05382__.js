// _runtime/metro/05382__.js
import _mod5341 from "05341__.js";
import DEFAULT_PROPS_TRANSFORMER from "../05366_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5383 from "05383__.js";
import _mod5385 from "05385__.js";

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod5341.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod5385;
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
    jsEventHandler: _mod5383.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
};
