// === Module 15073: PremiumSettingScreen ===

// Module 15073 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1483 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7093 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7097 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7516 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  const obj3 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};