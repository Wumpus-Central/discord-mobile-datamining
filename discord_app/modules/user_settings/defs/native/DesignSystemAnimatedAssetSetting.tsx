// === Module 17474: DesignSystemAnimatedAssetSetting ===

// Module 17474 (DesignSystemAnimatedAssetSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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