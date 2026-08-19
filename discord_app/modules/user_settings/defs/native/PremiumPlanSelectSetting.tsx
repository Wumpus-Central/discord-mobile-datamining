// discord_app/modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { PremiumPlanSelectSettingScreen } from "../../premium/native/PremiumPlanSelectSettingScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return PremiumPlanSelectSettingScreen /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;