// _runtime/metro/05136__.js
import _mod19 from "00019__.js";
import _modDef5119 from "05119__.js";
import _mod5131 from "05131__.js";

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5119;
        previousViewTag.previousViewTag = tmp4(_mod5131.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
