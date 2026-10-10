// === Module 6912: HotspotActionCreators ===

// Module 6912 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  AnalyticsUtilsDefault.track(AnalyticEvents.HOTSPOT_HIDDEN, { hotspot_location: GUILD_CAP_INLINE_UPSELL });
  const obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  DispatcherDefault.dispatch({ type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location, enabled });
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location });
};