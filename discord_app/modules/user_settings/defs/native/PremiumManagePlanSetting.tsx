// === Module 14341: route ===

// Module 14341 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8jmdON"]);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(14342) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;