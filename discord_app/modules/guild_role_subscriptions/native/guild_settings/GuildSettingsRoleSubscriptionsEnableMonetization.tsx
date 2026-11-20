// === Module 19871: GuildSettingsRoleSubscriptionsEnableMonetization ===

// Module 19871 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 18055 */;
import PlaceholderDefault from "Placeholder" /* 19807 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4665 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  items = [GuildStore];
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { brightTitle: true, title: null, description: null };
    const intl = tmp(1112).intl;
    obj2.title = intl.string(tmp(1112).t.KeeWp0);
    const intl2 = tmp(1112).intl;
    obj2.description = intl2.string(tmp(1112).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
};