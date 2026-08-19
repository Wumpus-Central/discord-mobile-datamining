// === Module 14347: PremiumPlanSelectSettingScreen ===

// Module 14347 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7385 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 12973 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(BoostPurchaseNitroBannerDefault, {});
};