// discord_app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
import TTITrackerDefault from "../TTITracker.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import PostTTIScheduler from "../../app_startup/PostTTIScheduler/PostTTIScheduler.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
