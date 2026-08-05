// discord_app/modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = require("../../core/native/useSettingNavigationRoute.tsx") /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(require("../../../premium/native/PremiumPlanSelect.tsx"), {});
};