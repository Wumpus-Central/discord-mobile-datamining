// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import PlaceholderDefault from "../components/Placeholder.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx",
);

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
}
