// _runtime/metro/05588__.js
import _mod19 from "00019__.js";
import _modDef5571 from "05571__.js";
import _mod5583 from "05583__.js";

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5571;
        previousViewTag.previousViewTag = tmp4(_mod5583.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
