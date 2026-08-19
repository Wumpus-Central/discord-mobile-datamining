// === Module 14936: route ===

// Module 14936 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_MODAL,
  getComponent() {
    return require(14937) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;