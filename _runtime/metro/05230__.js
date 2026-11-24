// === Module 5230: ? ===

// Module 5230
import _mod19 from "module_19" /* 19 */;
import _modDef5213 from "module_5213" /* 5213 */;
import _mod5225 from "module_5225" /* 5225 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5213;
        previousViewTag.previousViewTag = tmp4(_mod5225.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}