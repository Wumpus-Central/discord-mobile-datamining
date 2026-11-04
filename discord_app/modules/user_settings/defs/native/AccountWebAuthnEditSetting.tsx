// === Module 16944: AccountWebAuthnEditSetting ===

// Module 16944 (AccountWebAuthnEditSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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