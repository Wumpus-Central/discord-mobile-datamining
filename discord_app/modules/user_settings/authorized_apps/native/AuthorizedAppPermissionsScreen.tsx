// discord_app/modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};