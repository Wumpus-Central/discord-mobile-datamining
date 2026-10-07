// === Module 14764: AuthorizedAppScreen ===

// Module 14764 (AuthorizedAppScreen)
import c from "c" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 14765 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  if (cResult[0] === stackNavigation) {
    if (cResult[1] === settingNavigationRoute.params.oauth2Token.application.name) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
    if (cResult[4] !== settingNavigationRoute.params.oauth2Token) {
      const obj4 = { oauth2Token: settingNavigationRoute.params.oauth2Token };
      const tmp12 = jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
      cResult[4] = settingNavigationRoute.params.oauth2Token;
      cResult[5] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const fn = function n() {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  };
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  cResult[0] = stackNavigation;
  cResult[1] = settingNavigationRoute.params.oauth2Token.application.name;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
});