// === Module 5473: ? ===

// Module 5473
import _mod19 from "module_19" /* 19 */;
import _modDef5456 from "module_5456" /* 5456 */;
import _mod5468 from "module_5468" /* 5468 */;

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