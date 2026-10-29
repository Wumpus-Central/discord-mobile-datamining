// discord_app/modules/hotspot/HotspotActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
