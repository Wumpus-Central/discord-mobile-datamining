// _runtime/metro/05645__.js
import _mod19 from "00019__.js";
import _modDef5628 from "05628__.js";
import _mod5640 from "05640__.js";

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5628;
        previousViewTag.previousViewTag = tmp4(_mod5640.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
