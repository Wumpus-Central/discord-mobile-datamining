// === Module 5651: ? ===

// Module 5651
import _mod19 from "module_19" /* 19 */;
import _modDef5634 from "module_5634" /* 5634 */;
import _mod5646 from "module_5646" /* 5646 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5634;
        previousViewTag.previousViewTag = tmp4(_mod5646.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}