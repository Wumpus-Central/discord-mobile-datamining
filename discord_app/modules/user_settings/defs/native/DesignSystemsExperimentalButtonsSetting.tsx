// === Module 14908: route ===

// Module 14908 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return require(14909) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;