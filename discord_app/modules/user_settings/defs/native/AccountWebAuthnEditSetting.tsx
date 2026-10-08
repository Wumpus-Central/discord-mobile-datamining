// === Module 14878: AccountWebAuthnEditSetting ===

// Module 14878 (AccountWebAuthnEditSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.UBBwwF);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.WEBAUTHN_EDIT,
    getComponent() {
      return require("WebAuthnEditStep").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnEditSetting.tsx");

export default route;