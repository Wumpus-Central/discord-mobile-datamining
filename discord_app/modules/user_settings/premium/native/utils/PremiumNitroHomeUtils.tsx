// discord_app/modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ME from "../../../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../../../utils/AnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx");

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
    let obj = expandEventPropertiesDefault;
    obj = { type: null };
    obj[0] = trackedType.trackedType;
    obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
    hasTrackedScrolledToBottom.current = true;
  }
};