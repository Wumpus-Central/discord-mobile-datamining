// discord_app/modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsGuildRoleSubscriptionsCancelDefault from "../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx";
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
      if (cResult[0] !== settingNavigationRoute.params) {
        UserSettingsGuildRoleSubscriptionsCancelDefault;
        const merged = Object.assign(settingNavigationRoute.params);
        const tmp10 = <tmp7 />;
        cResult[0] = settingNavigationRoute.params;
        cResult[1] = tmp10;
        tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = useSettingNavigationRoute;
      const settingNavigationRoute = obj.useSettingNavigationRoute();
      UserSettingsGuildRoleSubscriptionsCancelDefault;
      const merged = Object.assign(settingNavigationRoute.params);
      return <tmp2 />;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx",
);

export default tmp3;
