// === Module 6716: HotspotActionCreators ===

// Module 6716 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

let importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  let _location;
  importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = AnalyticsUtilsDefault;
  let obj2 = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj2);
  const obj3 = DispatcherDefault;
  obj3.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "HOTSPOT_HIDE", location: _location };
    obj.dispatch(obj2);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj2);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  const obj = DispatcherDefault;
  const obj2 = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj2);
};