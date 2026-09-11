// === Module 15838: DesignSystemsShadowsSetting ===

// Module 15838 (DesignSystemsShadowsSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Shadows";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;