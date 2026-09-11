// === Module 15853: DesignSystemsCoachmarkSetting ===

// Module 15853 (DesignSystemsCoachmarkSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Coachmark";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_COACHMARK,
    getComponent() {
      return require("UserSettingsDesignSystemCoachmark").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;