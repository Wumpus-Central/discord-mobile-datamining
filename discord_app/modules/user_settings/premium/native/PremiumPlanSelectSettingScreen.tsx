// === Module 14445: PremiumPlanSelectSettingScreen ===

// Module 14445 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7021 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 13016 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(BoostPurchaseNitroBannerDefault, {});
};