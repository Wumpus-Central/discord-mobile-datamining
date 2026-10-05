// discord_app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
import TTITrackerDefault from "../TTITracker.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import PostTTIScheduler from "../../app_startup/PostTTIScheduler/PostTTIScheduler.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let checkFocusedScreen;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checkFocusedScreen) => {
      let tmp4;
      let tmp5;
      let obj = checkFocusedScreen(576);
      const cResult = obj.c(4);
      const tmp = checkFocusedScreen;
      checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
      if (cResult[0] !== checkFocusedScreen) {
        const fn = function u(nativeEvent) {
          if (null != checkFocusedScreen) {
            const obj = RootNavigationRef;
            const rootNavigationRef = obj.getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef != null) {
              currentRoute = rootNavigationRef.getCurrentRoute();
            }
          }
          const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
          firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
          const obj3 = PostTTIScheduler;
          obj3.notifyAboutTTI();
        };
        cResult[0] = checkFocusedScreen;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const tmp7 = jsx(tmp(11508).TTIMeasurementView, { onMeasurement: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : (checkFocusedScreen) => {
      checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
      const items = [checkFocusedScreen];
      const onMeasurement = react.useCallback((nativeEvent) => {
        if (null != checkFocusedScreen) {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          let currentRoute;
          if (rootNavigationRef != null) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
        }
        const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
        firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
        const obj3 = PostTTIScheduler;
        obj3.notifyAboutTTI();
      }, items);
      return jsx(checkFocusedScreen(11508).TTIMeasurementView, { onMeasurement });
    };
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = tmp2;
