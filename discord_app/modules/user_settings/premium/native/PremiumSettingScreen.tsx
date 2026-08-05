// discord_app/modules/user_settings/premium/native/PremiumSettingScreen.tsx
import "noop";
import { jsx } from "jsxProd";
import { dispatcher } from "../../../../actions/UserSettingsModalActionCreators.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { useSettingNavigationRoute } from "../../core/native/useSettingNavigationRoute.tsx";
import { UserSettingsPremium } from "UserSettingsPremium.tsx";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = useSettingNavigationRoute /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = dispatcher.close;
  }
  obj = { onClose: close };
  const obj2 = useNavigation /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremium, { onClose: close });
};