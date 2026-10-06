// === Module 15058: GuildRoleSubscriptionCancelSettingScreen ===

// Module 15058 (GuildRoleSubscriptionCancelSettingScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import UserSettingsGuildRoleSubscriptionsCancelDefault from "UserSettingsGuildRoleSubscriptionsCancel" /* 15059 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  UserSettingsGuildRoleSubscriptionsCancelDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  return <tmp2 />;
});
const result = size.fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default tmp3;