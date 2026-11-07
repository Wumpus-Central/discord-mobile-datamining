// _runtime/metro/05473__.js
import _mod19 from "00019__.js";
import _modDef5456 from "05456__.js";
import _mod5468 from "05468__.js";

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5456;
        previousViewTag.previousViewTag = tmp4(_mod5468.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
