// === Module 7773: useIsPinotNewChannelPrivate ===

// Module 7773 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7770 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildRoleStore from "GuildRoleStore" /* 4819 */;
import GuildStore from "GuildStore" /* 4784 */;

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