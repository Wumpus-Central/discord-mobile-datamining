// === Module 13999: route ===

// Module 13999 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(14000) /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;