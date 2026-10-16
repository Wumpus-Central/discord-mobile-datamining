// === Module 16749: DesignSystemsButtonSetting ===

// Module 16749 (DesignSystemsButtonSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Button";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemButton").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;