// === Module 7216: HotspotActionCreators ===

// Module 7216 (HotspotActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  DispatcherDefault.wait(() => {
    const obj = { type: "HOTSPOT_HIDE", location: _location };
    obj.dispatch(obj);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  const obj = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  const obj = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj);
};