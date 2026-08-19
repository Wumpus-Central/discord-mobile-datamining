// === Module 6427: useViewRefHandler ===

// Module 6427 (useViewRefHandler)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  closure_0 = current;
  closure_1 = detectorUpdater;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        current.previousViewTag = current(detectorUpdater[1])(current.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};