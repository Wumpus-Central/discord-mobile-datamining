// === Module 15061: PremiumSettingScreen ===

// Module 15061 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1483 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7042 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7046 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7465 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  obj = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};