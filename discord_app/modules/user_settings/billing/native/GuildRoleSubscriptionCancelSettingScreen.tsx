// discord_app/modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsGuildRoleSubscriptionsCancelDefault from "../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx",
);

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsGuildRoleSubscriptionsCancelDefault, {});
}
