// === Module 5481: ? ===

// Module 5481
import _mod19 from "module_19" /* 19 */;
import _modDef5464 from "module_5464" /* 5464 */;
import _mod5476 from "module_5476" /* 5476 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5464;
        previousViewTag.previousViewTag = tmp4(_mod5476.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}