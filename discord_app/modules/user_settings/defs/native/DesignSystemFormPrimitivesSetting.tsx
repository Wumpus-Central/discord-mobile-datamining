// === Module 15865: DesignSystemFormPrimitivesSetting ===

// Module 15865 (DesignSystemFormPrimitivesSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Form Primitives";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
    getComponent() {
      return require("UserSettingsDesignSystemFormPrimitives").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;