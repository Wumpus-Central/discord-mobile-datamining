// discord_app/modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import PremiumPlanSelectDefault from "../../../premium/native/PremiumPlanSelect.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
}
