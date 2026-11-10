// === Module 5475: ? ===

// Module 5475
import _mod19 from "module_19" /* 19 */;
import _modDef5458 from "module_5458" /* 5458 */;
import _mod5470 from "module_5470" /* 5470 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5458;
        previousViewTag.previousViewTag = tmp4(_mod5470.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}