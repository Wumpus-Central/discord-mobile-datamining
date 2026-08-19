// === Module 7196: hideHotspot ===

// Module 7196 (hideHotspot)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  dispatcherDefault.wait(() => {
    GUILD_CAP_INLINE_UPSELL(dependencyMap[2]);
    const obj = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
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