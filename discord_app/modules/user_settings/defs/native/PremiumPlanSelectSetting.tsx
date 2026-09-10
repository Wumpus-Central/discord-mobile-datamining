// === Module 15067: PremiumPlanSelectSetting ===

// Module 15067 (PremiumPlanSelectSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

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