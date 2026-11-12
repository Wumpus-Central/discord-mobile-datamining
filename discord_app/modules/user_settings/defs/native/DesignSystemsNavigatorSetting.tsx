// === Module 18327: DesignSystemsNavigatorSetting ===

// Module 18327 (DesignSystemsNavigatorSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Navigator";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_NAVIGATOR,
    getComponent() {
      return require("UserSettingsDesignSystemNavigator").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsNavigatorSetting.tsx");

export default route;