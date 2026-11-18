// === Module 5136: ? ===

// Module 5136
import _mod19 from "module_19" /* 19 */;
import _modDef5119 from "module_5119" /* 5119 */;
import _mod5131 from "module_5131" /* 5131 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5119;
        previousViewTag.previousViewTag = tmp4(_mod5131.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}