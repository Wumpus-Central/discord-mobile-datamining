// discord_app/modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../../../../utils/AnalyticsUtils.tsx";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  expandEventProperties.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  expandEventProperties.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  expandEventProperties.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  expandEventProperties.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(has_badge) {
  expandEventProperties.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: has_badge.isBadged });
};