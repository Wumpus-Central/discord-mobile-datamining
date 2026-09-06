// === Module 16793: you/tracking/Tracking ===

// Module 16793 (you/tracking/Tracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(has_badge) {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: has_badge.isBadged });
};