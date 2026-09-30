// === Module 14501: AccountStandingSetting ===

// Module 14501 (AccountStandingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14502 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["16r9jm"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_STANDING,
    getComponent() {
      return require("SettingsAccountStandingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;