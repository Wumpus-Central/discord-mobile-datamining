// _runtime/metro/06289__.js
import _mod19 from "00019__.js";
import _modDef6274 from "06274__.js";

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        previousViewTag.previousViewTag = _modDef6274(previousViewTag.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
