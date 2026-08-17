// discord_app/modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { PremiumPlanSelectSettingScreen } from "../../premium/native/PremiumPlanSelectSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.u95Dt4);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return PremiumPlanSelectSettingScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;