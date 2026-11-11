// === Module 18002: EmailNotificationsSetting ===

// Module 18002 (EmailNotificationsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16784 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17996 */;
import SettingBuilders_mod from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.TPchzM);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["16PQ3M"]);
  },
  screen: {
    route: Constants.UserSettingsSections.EMAILS,
    getComponent() {
      return require("SettingsEmailNotificationsScreen").default;
    }
  }
};
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged = Object.assign(obj);
obj3.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj3.usePredicate = function usePredicate() {
  return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("EmailNotificationsSetting");
};
const route = SettingBuilders.createRoute(obj3);
let SettingBuilders = SettingBuilders_mod;
const obj4 = {};
const merged1 = Object.assign(obj);
obj4.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj4.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignEmailNotificationsSetting");
};
const route1 = SettingBuilders.createRoute(obj4);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailNotificationsSetting.tsx");

export default route;
export const RedesignEmailNotificationsSetting = route1;