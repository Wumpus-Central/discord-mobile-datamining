// discord_app/modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import BoostPurchaseNitroBannerDefault from "../../../premium/native/PremiumPlanSelect.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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