// === Module 15609: DesignSystemBackdropSetting ===

// Module 15609 (DesignSystemBackdropSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 7590 */;
import SettingBuilders from "SettingBuilders" /* 11215 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Backdrop";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
    getComponent() {
      return require("UserSettingsDesignSystemBackdrop").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;