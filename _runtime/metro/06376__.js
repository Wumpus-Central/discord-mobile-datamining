// _runtime/metro/06376__.js
import _mod19 from "00019__.js";
import _modDef6361 from "06361__.js";

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        previousViewTag.previousViewTag = _modDef6361(previousViewTag.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
