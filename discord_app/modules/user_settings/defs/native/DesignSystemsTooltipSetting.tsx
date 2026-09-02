// === Module 15612: route ===

// Module 15612 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
  getComponent() {
    return require(15613) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;