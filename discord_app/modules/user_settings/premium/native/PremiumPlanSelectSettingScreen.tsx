// === Module 15045: PremiumPlanSelectSettingScreen ===

// Module 15045 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7067 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13595 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(PremiumPlanSelectDefault, {});
};