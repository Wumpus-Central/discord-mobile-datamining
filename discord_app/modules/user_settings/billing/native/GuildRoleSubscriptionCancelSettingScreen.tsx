// === Module 14769: GuildRoleSubscriptionCancelSettingScreen ===

// Module 14769 (GuildRoleSubscriptionCancelSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7093 */;
import WhatYouLoseDefault from "WhatYouLose" /* 14770 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(WhatYouLoseDefault, {});
};