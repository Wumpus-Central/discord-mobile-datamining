// === Module 14995: route ===

// Module 14995 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(14996) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;