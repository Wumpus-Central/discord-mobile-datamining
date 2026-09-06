// === Module 17718: GuildSettingsRoleSubscriptionsEnableMonetization ===

// Module 17718 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 16534 */;
import PlaceholderDefault from "Placeholder" /* 17680 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    obj = { brightTitle: true, title: null, description: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t.KeeWp0);
    const intl2 = tmp(1114).intl;
    obj.description = intl2.string(tmp(1114).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
};