// === Module 5325: ? ===

// Module 5325
import _mod19 from "module_19" /* 19 */;
import _modDef5308 from "module_5308" /* 5308 */;
import _mod5320 from "module_5320" /* 5320 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5308;
        previousViewTag.previousViewTag = tmp4(_mod5320.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}