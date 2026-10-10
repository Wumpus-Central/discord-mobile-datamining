// === Module 16127: DesignSystemsBackgroundBlurViewSetting ===

// Module 16127 (DesignSystemsBackgroundBlurViewSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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