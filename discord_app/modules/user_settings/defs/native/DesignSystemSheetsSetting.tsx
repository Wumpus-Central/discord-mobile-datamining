// === Module 15863: DesignSystemSheetsSetting ===

// Module 15863 (DesignSystemSheetsSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Sheets";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
    getComponent() {
      return require("UserSettingsDesignSystemSheets").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;