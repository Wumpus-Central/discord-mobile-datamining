// === Module 5107: ? ===

// Module 5107
import _mod19 from "module_19" /* 19 */;
import _modDef5090 from "module_5090" /* 5090 */;
import _mod5102 from "module_5102" /* 5102 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5090;
        previousViewTag.previousViewTag = tmp4(_mod5102.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}