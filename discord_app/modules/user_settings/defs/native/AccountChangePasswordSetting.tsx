// === Module 14132: route ===

// Module 14132 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["CIGa+7"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require(14133).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;