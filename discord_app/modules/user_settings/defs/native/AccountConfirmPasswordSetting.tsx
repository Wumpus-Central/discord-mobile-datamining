// === Module 14234: route ===

// Module 14234 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import UserSettingsConfirmPasswordWrapped from "UserSettingsConfirmPasswordWrapped" /* 8668 */;
import createToggle from "createToggle" /* 10516 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7qKDrE"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return UserSettingsConfirmPasswordWrapped.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;