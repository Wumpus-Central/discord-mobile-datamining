// === Module 15089: route ===

// Module 15089 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(15090) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;