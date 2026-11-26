// === Module 16490: PremiumSettingScreen ===

// Module 16490 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1501 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7347 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7350 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9103 */;
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