// === Module 15140: AuthorizedAppPermissionsScreen ===

// Module 15140 (AuthorizedAppPermissionsScreen)
import c from "c" /* 576 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6681 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 15141 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AuthorizedAppPermissionsScreen() {
  const cResult = c.c(2);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  if (cResult[0] !== settingNavigationRoute.params.oauth2Token) {
    const obj3 = { oauth2Token: settingNavigationRoute.params.oauth2Token };
    const tmp7 = jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
    cResult[0] = settingNavigationRoute.params.oauth2Token;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function AuthorizedAppPermissionsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
});