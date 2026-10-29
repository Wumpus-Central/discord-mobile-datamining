// === Module 7372: HotspotActionCreators ===

// Module 7372 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  AnalyticsUtilsDefault.track(AnalyticEvents.HOTSPOT_HIDDEN, { hotspot_location: GUILD_CAP_INLINE_UPSELL });
  const obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  DispatcherDefault.dispatch({ type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL });
}
export function setHotspotOverride(location, enabled) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location, enabled });
}
export function clearHotspotOverride(location) {
  DispatcherDefault.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location });
}