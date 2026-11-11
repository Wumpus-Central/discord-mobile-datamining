// === Module 5588: ? ===

// Module 5588
import _mod19 from "module_19" /* 19 */;
import _modDef5571 from "module_5571" /* 5571 */;
import _mod5583 from "module_5583" /* 5583 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5571;
        previousViewTag.previousViewTag = tmp4(_mod5583.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}