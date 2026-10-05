// discord_app/modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx
import Constants from "../../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(isBadged) {
  isBadged = isBadged.isBadged;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: isBadged });
};
