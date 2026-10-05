// discord_app/modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = useSettingNavigationRoute;
      const settingNavigationRoute = obj2.useSettingNavigationRoute();
      if (cResult[0] !== settingNavigationRoute.params.oauth2Token) {
        const tmp7 = jsx(UserSettingsAuthedAppPermissionsDefault, {
          oauth2Token: settingNavigationRoute.params.oauth2Token,
        });
        cResult[0] = settingNavigationRoute.params.oauth2Token;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = useSettingNavigationRoute;
      const settingNavigationRoute = obj.useSettingNavigationRoute();
      return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx",
);

export default tmp3;
