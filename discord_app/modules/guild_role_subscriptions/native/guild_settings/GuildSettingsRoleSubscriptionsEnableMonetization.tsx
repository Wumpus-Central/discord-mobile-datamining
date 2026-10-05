// === Module 17915: GuildSettingsRoleSubscriptionsEnableMonetization ===

// Module 17915 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16490 */;
import PlaceholderDefault from "Placeholder" /* 17877 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp6;
  let tmp7;
  const obj = guildId(576);
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  if (null == tmpResult.useStateFromStores(first, tmp6)) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = jsx(PlaceholderDefault, {});
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp7 = tmp12;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      UnavailableNoticeDefault;
      const intl = tmp(1126).intl;
      const intl2 = tmp(1126).intl;
      const tmp11 = <tmp10 brightTitle title={intl.string(guildId(1126).t.KeeWp0)} description={intl2.string(guildId(1126).t["tJLG+L"])} />;
      cResult[4] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
  }
  return tmp7;
}) : ((guildId) => {
  let tmp5;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    tmp5 = jsx(PlaceholderDefault, {});
  } else {
    UnavailableNoticeDefault;
    const intl = tmp(1126).intl;
    const intl2 = tmp(1126).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1126).t.KeeWp0)} description={intl2.string(guildId(1126).t["tJLG+L"])} />;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default tmp3;