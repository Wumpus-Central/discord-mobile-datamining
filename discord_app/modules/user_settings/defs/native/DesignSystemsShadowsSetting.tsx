// === Module 15152: route ===

// Module 15152 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    return "Shadows";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
  getComponent() {
    return require(15150) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;