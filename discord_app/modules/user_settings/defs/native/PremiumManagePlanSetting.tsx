// discord_app/modules/user_settings/defs/native/PremiumManagePlanSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { PremiumPlanSelectSettingScreen } from "../../premium/native/PremiumManagePlanScreen.tsx";

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
    return PremiumPlanSelectSettingScreen /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;