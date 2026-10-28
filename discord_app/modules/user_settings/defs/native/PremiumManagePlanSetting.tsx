// === Module 16546: PremiumManagePlanSetting ===

// Module 16546 (PremiumManagePlanSetting)
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8jmdON"]);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  screen: {
    route: Constants.UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;