// === Module 17524: useChannelsAllowedToUnlink ===

// Module 17524 (useChannelsAllowedToUnlink)
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
let closure_3 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export const getChannelsAllowedToUnlink = function getChannelsAllowedToUnlink(arg0) {
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
};
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
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
};