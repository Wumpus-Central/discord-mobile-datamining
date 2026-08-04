// discord_app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getRootNavigationRef").fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = React.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = checkFocusedScreen(outer1_2[2]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(outer1_2[2]);
    }
    const firstContentfulPaint = outer1_1(outer1_2[3]).firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(outer1_2[4]).notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(10062).TTIMeasurementView, { onMeasurement });
};