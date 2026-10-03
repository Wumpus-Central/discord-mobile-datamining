// === Module 15650: DesignSystemsBackgroundBlurViewSetting ===

// Module 15650 (DesignSystemsBackgroundBlurViewSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Blur";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;