// === Module 10432: TTIFirstContentfulPaint ===

// Module 10432 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import PostTTIScheduler from "PostTTIScheduler" /* 8367 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  items = [checkFocusedScreen];
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
  return jsx(checkFocusedScreen(10433).TTIMeasurementView, { onMeasurement });
}