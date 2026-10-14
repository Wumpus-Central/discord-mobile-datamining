// === Module 15371: AccountStandingSetting ===

// Module 15371 (AccountStandingSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 15372 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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