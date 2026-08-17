// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import PlaceholderDefault from "../components/Placeholder.tsx";
import closure_3 from "../../../../stores/GuildStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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