// === Module 15614: route ===

// Module 15614 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    return "Coachmark";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_COACHMARK,
  getComponent() {
    return require(15615) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;