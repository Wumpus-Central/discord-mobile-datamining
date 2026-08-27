// === Module 14538: PremiumScreen ===

// Module 14538 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1500 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7090 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7093 */;
import dispatcherDefault from "dispatcher" /* 7695 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = dispatcherDefault.close;
  }
  obj = { onClose: close };
  const obj2 = useNavigation;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};