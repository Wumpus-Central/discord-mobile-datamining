// === Module 14498: AuthorizedAppPermissionsScreen ===

// Module 14498 (AuthorizedAppPermissionsScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7093 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 14499 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};