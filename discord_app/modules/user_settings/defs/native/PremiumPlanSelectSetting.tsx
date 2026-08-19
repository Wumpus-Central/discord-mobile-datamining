// === Module 14346: route ===

// Module 14346 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return require(14347) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;