// discord_app/modules/user_settings/premium/native/PremiumSettingScreen.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require("../../core/native/useSettingNavigationRoute.tsx") /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require("../../../../design/components/Navigator/native/useNavigation.native.tsx") /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = require("../../../../actions/UserSettingsModalActionCreators.tsx").close;
  }
  obj = { onClose: close };
  const obj2 = require("../../../../design/components/Navigator/native/useNavigation.native.tsx") /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(require("UserSettingsPremium.tsx"), { onClose: close });
};