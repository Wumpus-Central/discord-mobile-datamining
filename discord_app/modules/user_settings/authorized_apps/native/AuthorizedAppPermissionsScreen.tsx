// discord_app/modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx",
);

export default function AuthorizedAppPermissionsScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
}
