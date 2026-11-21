// === Module 5226: ? ===

// Module 5226
import _mod19 from "module_19" /* 19 */;
import _modDef5209 from "module_5209" /* 5209 */;
import _mod5221 from "module_5221" /* 5221 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5209;
        previousViewTag.previousViewTag = tmp4(_mod5221.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}