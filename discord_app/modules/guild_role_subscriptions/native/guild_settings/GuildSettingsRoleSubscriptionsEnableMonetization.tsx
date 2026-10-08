// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import PlaceholderDefault from "../components/Placeholder.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSubscriptionEnableMonetization(guildId) {
      let tmp2 = dependencyMap;
      const cResult = guildId(576).c(5);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function s() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = guildId(576);
      if (null == tmpResult.useStateFromStores(first, tmp6)) {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          tmp2 = jsx(PlaceholderDefault, {});
          cResult[3] = tmp2;
        }
      } else {
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { brightTitle: true, title: null, description: null };
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.KeeWp0);
          const intl2 = tmp(1126).intl;
          obj2.description = intl2.string(tmp(1126).t["tJLG+L"]);
          const tmp11 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
          cResult[4] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      tmpResult = guildId(504);
    }
  : function GuildSubscriptionEnableMonetization(guildId) {
      guildId = guildId.guildId;
      const items = [GuildStore];
      if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
        let tmp5 = jsx(PlaceholderDefault, {});
      } else {
        const obj2 = { brightTitle: true, title: null, description: null };
        const intl = tmp(1126).intl;
        obj2.title = intl.string(tmp(1126).t.KeeWp0);
        const intl2 = tmp(1126).intl;
        obj2.description = intl2.string(tmp(1126).t["tJLG+L"]);
        tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
      }
      return tmp5;
    };
