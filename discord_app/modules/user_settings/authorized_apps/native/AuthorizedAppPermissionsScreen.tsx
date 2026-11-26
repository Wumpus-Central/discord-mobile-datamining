// === Module 16465: AuthorizedAppPermissionsScreen ===

// Module 16465 (AuthorizedAppPermissionsScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7350 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 16466 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};