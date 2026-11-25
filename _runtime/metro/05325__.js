// _runtime/metro/05325__.js
import _mod19 from "00019__.js";
import _modDef5308 from "05308__.js";
import _mod5320 from "05320__.js";

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5308;
        previousViewTag.previousViewTag = tmp4(_mod5320.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
