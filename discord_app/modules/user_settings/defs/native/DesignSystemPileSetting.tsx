// === Module 16028: DesignSystemPileSetting ===

// Module 16028 (DesignSystemPileSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Pile";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_PILE,
    getComponent() {
      return require("UserSettingsDesignSystemPile").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;