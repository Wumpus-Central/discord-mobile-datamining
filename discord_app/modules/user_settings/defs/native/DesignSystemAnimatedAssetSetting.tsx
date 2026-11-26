// === Module 17467: DesignSystemAnimatedAssetSetting ===

// Module 17467 (DesignSystemAnimatedAssetSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Animated Asset";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_ANIMATED_ASSET,
    getComponent() {
      return require("UserSettingsDesignSystemAnimatedAsset").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAnimatedAssetSetting.tsx");

export default route;