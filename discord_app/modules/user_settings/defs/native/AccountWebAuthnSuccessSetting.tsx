// === Module 15870: AccountWebAuthnSuccessSetting ===

// Module 15870 (AccountWebAuthnSuccessSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7wPZln"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.WEBAUTHN_SUCCESS,
    getComponent() {
      return require("WebAuthnSuccessStep").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnSuccessSetting.tsx");

export default route;