// === Module 5645: ? ===

// Module 5645
import _mod19 from "module_19" /* 19 */;
import _modDef5628 from "module_5628" /* 5628 */;
import _mod5640 from "module_5640" /* 5640 */;

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