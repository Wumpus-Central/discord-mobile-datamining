// === Module 15885: AccountWebAuthnNameSetting ===

// Module 15885 (AccountWebAuthnNameSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["cY/IOu"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.WEBAUTHN_NAME,
    getComponent() {
      return require("WebAuthnNameStep").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnNameSetting.tsx");

export default route;