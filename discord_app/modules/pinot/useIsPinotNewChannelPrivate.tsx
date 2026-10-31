// discord_app/modules/pinot/useIsPinotNewChannelPrivate.tsx
import PinotEligibility from "PinotEligibility.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/useIsPinotNewChannelPrivate.tsx");

export function useIsPinotNewChannelPrivate(guildId, categoryId) {
  _require = guildId;
  dependencyMap = categoryId;
  const items = [ChannelStore, GuildStore, GuildRoleStore];
  const items1 = [guildId, categoryId];
  return require("initialize").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
}
