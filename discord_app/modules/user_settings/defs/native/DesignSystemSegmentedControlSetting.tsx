// === Module 16129: DesignSystemSegmentedControlSetting ===

// Module 16129 (DesignSystemSegmentedControlSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Segmented Control";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
    getComponent() {
      return require("UserSettingsDesignSystemSegmentedControl").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;