// === Module 14916: route ===

// Module 14916 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return require(14917) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;