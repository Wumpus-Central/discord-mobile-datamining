// discord_app/modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = react2;
      const cResult = obj.c(6);
      const obj2 = useSettingNavigationRoute;
      const settingNavigationRoute = obj2.useSettingNavigationRoute();
      const obj3 = useNavigation;
      const stackNavigation = obj3.useStackNavigation();
      if (cResult[0] === stackNavigation) {
        let tmp5;
        let tmp6;
        let tmp9;
        if (cResult[1] === settingNavigationRoute.params.oauth2Token.application.name) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
        if (cResult[4] !== settingNavigationRoute.params.oauth2Token) {
          const tmp12 = jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
          cResult[4] = settingNavigationRoute.params.oauth2Token;
          cResult[5] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const fn = function n() {
        const obj = { title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true };
        stackNavigation.setOptions(obj);
      };
      const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
      cResult[0] = stackNavigation;
      cResult[1] = settingNavigationRoute.params.oauth2Token.application.name;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : () => {
      let obj = useSettingNavigationRoute;
      const settingNavigationRoute = obj.useSettingNavigationRoute();
      const obj2 = useNavigation;
      const stackNavigation = obj2.useStackNavigation();
      const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
      const layoutEffect = react.useLayoutEffect(() => {
        const obj = { title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true };
        stackNavigation.setOptions(obj);
      }, items);
      return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
    };
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default tmp2;
