// === Module 17475: DesignSystemAILoaderSetting ===

// Module 17475 (DesignSystemAILoaderSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "AI Loader";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_AI_LOADER,
    getComponent() {
      return require("UserSettingsDesignSystemAILoader").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAILoaderSetting.tsx");

export default route;