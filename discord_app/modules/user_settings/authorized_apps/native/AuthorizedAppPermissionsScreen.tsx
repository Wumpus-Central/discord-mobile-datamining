// === Module 14685: AuthorizedAppPermissionsScreen ===

// Module 14685 (AuthorizedAppPermissionsScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6611 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 14686 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};