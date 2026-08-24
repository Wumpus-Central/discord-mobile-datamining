// === Module 14995: route ===

// Module 14995 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5b3FNI"]);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(14996) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;