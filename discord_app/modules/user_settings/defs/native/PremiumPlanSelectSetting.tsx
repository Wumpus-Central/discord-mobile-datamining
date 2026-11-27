// === Module 16503: PremiumPlanSelectSetting ===

// Module 16503 (PremiumPlanSelectSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.u95Dt4);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.PREMIUM_PLAN_SELECT,
    getComponent() {
      return require("PremiumPlanSelectSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;