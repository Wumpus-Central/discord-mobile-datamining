// discord_app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
import TTITrackerDefault from "../TTITracker.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import PostTTIScheduler from "../../app_startup/PostTTIScheduler/PostTTIScheduler.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = ReactCompilerGating.isReactCompilerEnabled()
  ? function TTIFirstContentfulPaint(checkFocusedScreen) {
      const cResult = checkFocusedScreen(576).c(4);
      checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
      if (cResult[0] !== checkFocusedScreen) {
        const fn = function u(nativeEvent) {
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
        };
        cResult[0] = checkFocusedScreen;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj2 = { onMeasurement: tmp4 };
        const tmp7 = jsx(checkFocusedScreen(11493).TTIMeasurementView, { onMeasurement: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : function TTIFirstContentfulPaint(checkFocusedScreen) {
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
      return jsx(checkFocusedScreen(11493).TTIMeasurementView, { onMeasurement });
    };
