// === Module 11075: TTIFirstContentfulPaint ===

// Module 11075 (TTIFirstContentfulPaint)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = React.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = checkFocusedScreen(closure_1_2[2]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(closure_1_2[2]);
    }
    const firstContentfulPaint = closure_1_1(closure_1_2[3]).firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(closure_1_2[4]).notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(11076).TTIMeasurementView, { onMeasurement });
};