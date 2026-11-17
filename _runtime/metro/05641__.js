// === Module 5641: ? ===

// Module 5641
import _mod19 from "module_19" /* 19 */;
import _modDef5624 from "module_5624" /* 5624 */;
import _mod5636 from "module_5636" /* 5636 */;

_mod19.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        const tmp4 = _modDef5624;
        previousViewTag.previousViewTag = tmp4(_mod5636.resolveHostInstance(previousViewTag.viewRef));
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}