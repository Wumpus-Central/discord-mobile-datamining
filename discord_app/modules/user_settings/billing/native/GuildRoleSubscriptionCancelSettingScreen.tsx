// === Module 15306: GuildRoleSubscriptionCancelSettingScreen ===

// Module 15306 (GuildRoleSubscriptionCancelSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7046 */;
import UserSettingsGuildRoleSubscriptionsCancelDefault from "UserSettingsGuildRoleSubscriptionsCancel" /* 15307 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsGuildRoleSubscriptionsCancelDefault, {});
};