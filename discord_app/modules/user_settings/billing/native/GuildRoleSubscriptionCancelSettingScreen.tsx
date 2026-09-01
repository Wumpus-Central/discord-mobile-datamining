// discord_app/modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import WhatYouLoseDefault from "../../../guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx",
);

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(WhatYouLoseDefault, {});
}
