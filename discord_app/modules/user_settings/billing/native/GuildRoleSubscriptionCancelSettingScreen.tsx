// discord_app/modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = require("../../core/native/useSettingNavigationRoute.tsx") /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(require("../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx"), {});
};