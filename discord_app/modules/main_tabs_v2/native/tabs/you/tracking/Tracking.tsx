// === Module 9677: tracking/Tracking ===

// Module 9677 (tracking/Tracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export function trackYouTabAvatarPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
}
export function trackYouTabCustomStatusPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
}
export function trackYouTabEditProfilePress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
}
export function trackYouTabNitroIconPress() {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
}
export function trackYouTabSettingsIconPress(has_badge) {
  AnalyticsUtilsDefault.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: has_badge.isBadged });
}