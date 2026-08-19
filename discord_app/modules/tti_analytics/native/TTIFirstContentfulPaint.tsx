// discord_app/modules/tti_analytics/native/TTIFirstContentfulPaint.tsx
import serializeDefault from "../TTITracker.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = React.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = checkFocusedScreen(dependencyMap[2]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(dependencyMap[2]);
    }
    const firstContentfulPaint = serializeDefault.firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(dependencyMap[4]).notifyAboutTTI();
    const obj3 = checkFocusedScreen(dependencyMap[4]);
  }, items);
  return jsx(checkFocusedScreen(11076).TTIMeasurementView, { onMeasurement });
};