// discord_app/modules/user_settings/defs/native/PremiumManagePlanSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { PremiumPlanSelectSettingScreen } from "../../premium/native/PremiumManagePlanScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8jmdON"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PREMIUM,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return PremiumPlanSelectSettingScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;