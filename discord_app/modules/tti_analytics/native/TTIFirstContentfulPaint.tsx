// === Module 11896: TTIFirstContentfulPaint ===

// Module 11896 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import PostTTIScheduler from "PostTTIScheduler" /* 7667 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = noop.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    PostTTIScheduler.notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(11897).TTIMeasurementView, { onMeasurement });
};