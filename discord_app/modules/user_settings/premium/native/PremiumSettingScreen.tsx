// === Module 15099: PremiumSettingScreen ===

// Module 15099 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1484 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7100 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7104 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7523 */;
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