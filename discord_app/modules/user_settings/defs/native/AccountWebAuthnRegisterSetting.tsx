// === Module 16296: AccountWebAuthnRegisterSetting ===

// Module 16296 (AccountWebAuthnRegisterSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.vrOCCk);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.WEBAUTHN_REGISTER,
    getComponent() {
      return require("WebAuthnRegisterStep").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnRegisterSetting.tsx");

export default route;