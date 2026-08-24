// _runtime/06427_useViewRefHandler.js
import noop from "00019_noop.js";

noop.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  closure_0 = current;
  closure_1 = detectorUpdater;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        tmp.previousViewTag = current(detectorUpdater[1])(tmp.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};