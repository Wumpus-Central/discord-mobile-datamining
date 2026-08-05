// discord_app/modules/hotspot/HotspotActionCreators.tsx
import { AnalyticEvents } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/hotspot/HotspotActionCreators.tsx");

export const hideHotspot = function hideHotspot(GUILD_CAP_INLINE_UPSELL) {
  const importDefault = GUILD_CAP_INLINE_UPSELL;
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { hotspot_location: GUILD_CAP_INLINE_UPSELL };
  obj.track(AnalyticEvents.HOTSPOT_HIDDEN, obj);
  require("../../Dispatcher.tsx").wait(() => {
    let obj = GUILD_CAP_INLINE_UPSELL(outer1_1[2]);
    obj = { type: "HOTSPOT_HIDE", location: GUILD_CAP_INLINE_UPSELL };
    obj.dispatch(obj);
  });
};
export const setHotspotOverride = function setHotspotOverride(location, enabled) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "HOTSPOT_OVERRIDE_SET", location, enabled };
  obj.dispatch(obj);
};
export const clearHotspotOverride = function clearHotspotOverride(location) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "HOTSPOT_OVERRIDE_CLEAR", location };
  obj.dispatch(obj);
};