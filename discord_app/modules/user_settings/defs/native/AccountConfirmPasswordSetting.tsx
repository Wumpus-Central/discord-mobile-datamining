// === Module 14136: route ===

// Module 14136 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import UserSettingsConfirmPasswordWrapped from "UserSettingsConfirmPasswordWrapped" /* 8623 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return UserSettingsConfirmPasswordWrapped.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;