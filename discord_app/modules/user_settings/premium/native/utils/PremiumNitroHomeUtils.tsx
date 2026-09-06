// === Module 13438: PremiumNitroHomeUtils ===

// Module 13438 (PremiumNitroHomeUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx");

export const trackIfScrolledToBottom = function trackIfScrolledToBottom(trackedType) {
  ({ nativeEvent, hasTrackedScrolledToBottom } = trackedType);
  let current = hasTrackedScrolledToBottom.current;
  if (!current) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.ceil(tmp.height);
    const _Math3 = Math;
    const sum = rounded + Math.ceil(tmp2.y);
    current = sum < Math.floor(tmp3.height);
  }
  if (!current) {
    const obj = { type: trackedType.trackedType };
    obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
    hasTrackedScrolledToBottom.current = true;
  }
};