// === Module 7654: useIsPinotNewChannelPrivate ===

// Module 7654 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7651 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildRoleStore from "GuildRoleStore" /* 4698 */;
import GuildStore from "GuildStore" /* 4663 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/useIsPinotNewChannelPrivate.tsx");

export function useIsPinotNewChannelPrivate(guildId, categoryId) {
  _require = guildId;
  dependencyMap = categoryId;
  items = [ChannelStore, GuildStore, GuildRoleStore];
  const items1 = [guildId, categoryId];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_1) {
      let channel = ChannelStore.getChannel(tmp);
    } else {
      channel = GuildStore.getGuild(closure_0);
    }
    let tmp6 = null != channel;
    if (tmp6) {
      tmp6 = !PinotEligibility.everyoneHasAccess(channel);
    }
    return tmp6;
  }, items1);
}