// discord_app/modules/user_settings/premium/native/PremiumSettingScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsPremiumDefault from "UserSettingsPremium.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumScreen() {
      const cResult = c.c(3);
      const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
      const stackNavigation = useNavigation.useStackNavigation();
      let close;
      if (!stackNavigation.canGoBack()) {
        close = UserSettingsModalActionCreatorsDefault.close;
      }
      if (cResult[0] === close) {
        if (cResult[1] === settingNavigationRoute.params) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      const obj4 = { onClose: close };
      const merged = Object.assign(settingNavigationRoute.params);
      const tmp9 = jsx(UserSettingsPremiumDefault, { onClose: close });
      cResult[0] = close;
      cResult[1] = settingNavigationRoute.params;
      cResult[2] = tmp9;
      tmp6 = tmp9;
    }
  : function PremiumScreen() {
      const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
      const stackNavigation = useNavigation.useStackNavigation();
      let close;
      if (!stackNavigation.canGoBack()) {
        close = UserSettingsModalActionCreatorsDefault.close;
      }
      const obj3 = { onClose: close };
      const merged = Object.assign(settingNavigationRoute.params);
      return jsx(UserSettingsPremiumDefault, { onClose: close });
    };
