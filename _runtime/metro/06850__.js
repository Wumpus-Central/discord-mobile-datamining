// _runtime/metro/06850__.js
import _mod6809 from "06809__.js";
import DEFAULT_PROPS_TRANSFORMER from "../06834_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6851 from "06851__.js";
import _mod6853 from "06853__.js";

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = _mod6809.Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6853;
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
    jsEventHandler: _mod6851.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated),
    reanimatedEventHandler,
    animatedEventHandler,
  };
};
