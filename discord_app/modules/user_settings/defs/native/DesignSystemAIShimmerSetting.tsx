// === Module 17694: DesignSystemAIShimmerSetting ===

// Module 17694 (DesignSystemAIShimmerSetting)
import Constants from "Constants" /* 1084 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "AI Shimmer";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_AI_SHIMMER,
    getComponent() {
      return require("UserSettingsDesignSystemAIShimmer").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAIShimmerSetting.tsx");

export default route;