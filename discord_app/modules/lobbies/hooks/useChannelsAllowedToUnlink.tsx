// === Module 19594: useChannelsAllowedToUnlink ===

// Module 19594 (useChannelsAllowedToUnlink)
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import PermissionStore from "PermissionStore" /* 4941 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(4939).GUILD_SELECTABLE_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildChannelStore;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = PermissionStore;
  }
  closure_0 = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => closure_0(dependencyMap[2]).canUnlinkLobbyChannel(channel.channel, closure_0));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
}
export function useChannelsAllowedToUnlink(id) {
  _require = id;
  let items = [PermissionStore, GuildChannelStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (GuildChannelStore !== undefined) {
      if (PermissionStore !== undefined) {
        closure_0 = PermissionStore;
        if (null == tmp) {
          let items = [];
        } else {
          const found = GuildChannelStore.getChannels(tmp)[closure_3].filter((channel) => closure_0(dependencyMap[2]).canUnlinkLobbyChannel(channel.channel, closure_0));
          items = found.map((channel) => channel.channel);
          const arr = GuildChannelStore.getChannels(tmp)[closure_3];
        }
        return items;
      }
    }
  });
}