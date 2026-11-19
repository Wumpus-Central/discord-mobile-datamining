// === Module 5105: ? ===

// Module 5105
import _mod19 from "module_19" /* 19 */;
import _modDef5088 from "module_5088" /* 5088 */;
import _mod5100 from "module_5100" /* 5100 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5088;
        previousViewTag.previousViewTag = tmp4(_mod5100.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}