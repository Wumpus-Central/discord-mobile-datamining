// === Module 15758: SecureFramesVerifiedDevicesSetting ===

// Module 15758 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5b3FNI"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
    getComponent() {
      return require("SettingsSecureFramesVerificationsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;