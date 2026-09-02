// === Module 6071: hideHotspot ===

// Module 6071 (hideHotspot)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = expandEventPropertiesDefault;
  obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  dispatcherDefault.wait(() => {
    let obj = GUILD_CAP_INLINE_UPSELL(closure_1_1[2]);
    obj = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
    obj.dispatch(obj);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  let obj = dispatcherDefault;
  obj = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  let obj = dispatcherDefault;
  obj = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj);
};