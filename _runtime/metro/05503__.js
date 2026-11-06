// === Module 5503: ? ===

// Module 5503
import _mod19 from "module_19" /* 19 */;
import _modDef5486 from "module_5486" /* 5486 */;
import _mod5498 from "module_5498" /* 5498 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5486;
        previousViewTag.previousViewTag = tmp4(_mod5498.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}