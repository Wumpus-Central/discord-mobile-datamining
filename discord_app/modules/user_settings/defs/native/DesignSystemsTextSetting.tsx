// === Module 15579: route ===

// Module 15579 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    return "Text";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TEXT,
  getComponent() {
    return require(15580) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;