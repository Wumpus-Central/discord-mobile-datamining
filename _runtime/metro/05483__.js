// === Module 5483: ? ===

// Module 5483
import _mod19 from "module_19" /* 19 */;
import _modDef5466 from "module_5466" /* 5466 */;
import _mod5478 from "module_5478" /* 5478 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5466;
        previousViewTag.previousViewTag = tmp4(_mod5478.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}