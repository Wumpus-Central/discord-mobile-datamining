// === Module 15038: PremiumSettingScreen ===

// Module 15038 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1483 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7063 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7067 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7486 */;
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