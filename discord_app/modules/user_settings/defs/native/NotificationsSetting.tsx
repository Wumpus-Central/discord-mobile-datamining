// === Module 17043: NotificationsSetting ===

// Module 17043 (NotificationsSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import BellIcon from "BellIcon" /* 8555 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15802 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: {
    route: Constants.UserSettingsSections.NOTIFICATIONS,
    getComponent() {
      return require("SettingsNotificationScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;