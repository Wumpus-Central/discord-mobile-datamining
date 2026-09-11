// === Module 15849: DesignSystemsTextInputSetting ===

// Module 15849 (DesignSystemsTextInputSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Text Input";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
    getComponent() {
      return require("UserSettingsDesignSystemTextInput").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;