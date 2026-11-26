// === Module 17473: DesignSystemDragHandleSetting ===

// Module 17473 (DesignSystemDragHandleSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Drag Handle";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_DRAG_HANDLE,
    getComponent() {
      return require("UserSettingsDesignSystemDragHandle").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemDragHandleSetting.tsx");

export default route;