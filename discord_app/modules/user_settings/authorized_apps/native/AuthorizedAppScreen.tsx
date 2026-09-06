// discord_app/modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({
      title: settingNavigationRoute.params.oauth2Token.application.name,
      headerShown: true,
    });
  }, items);
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
}
