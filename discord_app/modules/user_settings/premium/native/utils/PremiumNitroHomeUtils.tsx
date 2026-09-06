// discord_app/modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx
import Constants from "../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
