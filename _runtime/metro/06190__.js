// === Module 6190: ? ===

// Module 6190
import _mod19 from "module_19" /* 19 */;
import _modDef6175 from "module_6175" /* 6175 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        previousViewTag.previousViewTag = _modDef6175(previousViewTag.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};