// === Module 14751: AuthorizedAppPermissionsScreen ===

// Module 14751 (AuthorizedAppPermissionsScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6490 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 14752 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  if (cResult[0] !== settingNavigationRoute.params.oauth2Token) {
    const tmp7 = jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
    cResult[0] = settingNavigationRoute.params.oauth2Token;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
});
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default tmp3;