// discord_app/modules/user_settings/premium/native/PremiumSettingScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsPremiumDefault from "UserSettingsPremium.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = useSettingNavigationRoute;
      const settingNavigationRoute = obj2.useSettingNavigationRoute();
      const obj3 = useNavigation;
      const stackNavigation = obj3.useStackNavigation();
      let close;
      if (!stackNavigation.canGoBack()) {
        close = UserSettingsModalActionCreatorsDefault.close;
      }
      if (cResult[0] === close) {
        let tmp6;
        if (cResult[1] === settingNavigationRoute.params) {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
      UserSettingsPremiumDefault;
      const merged = Object.assign(settingNavigationRoute.params);
      const tmp9 = <tmp7 onClose={close} />;
      cResult[0] = close;
      cResult[1] = settingNavigationRoute.params;
      cResult[2] = tmp9;
      tmp6 = tmp9;
    }
  : () => {
      const obj = useSettingNavigationRoute;
      const settingNavigationRoute = obj.useSettingNavigationRoute();
      const obj2 = useNavigation;
      const stackNavigation = obj2.useStackNavigation();
      let close;
      if (!stackNavigation.canGoBack()) {
        close = UserSettingsModalActionCreatorsDefault.close;
      }
      UserSettingsPremiumDefault;
      const merged = Object.assign(settingNavigationRoute.params);
      return <tmp5 onClose={close} />;
    };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default tmp3;
