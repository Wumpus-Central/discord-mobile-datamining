// === Module 17215: GuildSubscriptionEnableMonetization ===

// Module 17215 (GuildSubscriptionEnableMonetization)
import noopAll from "noop" /* 19 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16035 */;
import PlaceholderDefault from "Placeholder" /* 17177 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_3];
  if (null == obj.useStateFromStores(items, () => closure_1_3.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    obj = { brightTitle: true, title: null, description: null };
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.KeeWp0);
    const intl2 = tmp(1236).intl;
    obj[2] = intl2.string(tmp(1236).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
    const tmp8 = UnavailableNoticeDefault;
  }
  return tmp5;
};