// === Module 5356: ? ===

// Module 5356
import _mod19 from "module_19" /* 19 */;
import _modDef5339 from "module_5339" /* 5339 */;
import _mod5351 from "module_5351" /* 5351 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5339;
        previousViewTag.previousViewTag = tmp4(_mod5351.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}