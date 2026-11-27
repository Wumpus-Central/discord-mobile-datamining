// discord_app/modules/guild_settings/integrations/permission/useIntegrationPermissionChannelSearch.tsx
import util from "../../../../intl/index.native.tsx";
import ApplicationCommandUtils from "../../../application_commands/ApplicationCommandUtils.tsx";
import IntegrationPermissionSearchUtils from "IntegrationPermissionSearchUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore_mod from "../../../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function channelTerms(id) {
  const obj = { id: id.id, names: null };
  items = [id.name];
  obj.names = items;
  return obj;
}
let GuildChannelStore = fn(4973);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/useIntegrationPermissionChannelSearch.tsx",
);

export function useIntegrationPermissionChannelSearch(arg0) {
  closure_0 = arg0;
  items = [arg0];
  const memo = noop.useMemo(() => {
    const channels = GuildChannelStore.getChannels(closure_0);
    items = [...channels[closure_2_4]];
    const items1 = [
      ...channels[hasOwnProperty].filter((channel) => {
        channel = channel.channel;
        return channel.isGuildVocal();
      }),
    ];
    items.push.apply(items1);
    const mapped = items.map((channel) => {
      const obj = {
        id: channel.channel.id,
        name: closure_1_0(memo[7]).computeChannelName(channel.channel, closure_1_9, closure_1_8),
        canManage: closure_1_7.can(constants.MANAGE_ROLES, channel.channel),
      };
      return obj;
    });
    let obj = { id: ApplicationCommandUtils.allChannelsSentinel(closure_0), name: null, canManage: true };
    const intl = util.intl;
    obj.name = intl.string(util.t["7YqSGx"]);
    mapped.unshift(obj);
    return mapped;
  }, items);
  const tmp = query(noop.useState(""), 2);
  query = tmp[0];
  let items1 = [memo, query];
  return {
    query,
    results: noop.useMemo(() => {
      let substr = first;
      if (first.startsWith("#")) {
        substr = first.substr(1);
      }
      return IntegrationPermissionSearchUtils.filterPermissionSearchItems(memo, channelTerms, substr);
    }, items1),
    setQuery: tmp[1],
    unfilteredCount: memo.length,
  };
}
