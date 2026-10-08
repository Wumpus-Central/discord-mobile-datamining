// === Module 15929: DesignSystemsTextSetting ===

// Module 15929 (DesignSystemsTextSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Text";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_TEXT,
    getComponent() {
      return require("UserSettingsDesignSystemText").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;