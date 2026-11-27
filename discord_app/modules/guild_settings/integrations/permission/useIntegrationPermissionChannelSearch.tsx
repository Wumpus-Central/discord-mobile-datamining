// === Module 20083: useIntegrationPermissionChannelSearch ===

// Module 20083 (useIntegrationPermissionChannelSearch)
import util from "util" /* 1112 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionSearchUtils from "IntegrationPermissionSearchUtils" /* 20084 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4973 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;

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
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useIntegrationPermissionChannelSearch.tsx");

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
      })
    ];
    items.push.apply(items1);
    const mapped = items.map((channel) => {
      const obj = { id: channel.channel.id, name: closure_1_0(memo[7]).computeChannelName(channel.channel, closure_1_9, closure_1_8), canManage: closure_1_7.can(constants.MANAGE_ROLES, channel.channel) };
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
    unfilteredCount: memo.length
  };
}