// discord_app/modules/user_settings/premium/native/PremiumSettingScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import UserSettingsPremiumDefault from "UserSettingsPremium.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import dispatcherDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = dispatcherDefault.close;
  }
  obj = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};