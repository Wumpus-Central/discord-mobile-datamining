// === Module 14808: PremiumSettingScreen ===

// Module 14808 (PremiumSettingScreen)
import c from "c" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 6930 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  if (cResult[0] === close) {
    if (cResult[1] === settingNavigationRoute.params) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj4 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  const tmp9 = jsx(UserSettingsPremiumDefault, { onClose: close });
  cResult[0] = close;
  cResult[1] = settingNavigationRoute.params;
  cResult[2] = tmp9;
  tmp6 = tmp9;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  const obj3 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
});