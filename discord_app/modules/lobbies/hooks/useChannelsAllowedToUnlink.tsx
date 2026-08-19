// discord_app/modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
import comparator from "../../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "../../../stores/GuildChannelStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export const getChannelsAllowedToUnlink = function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = closure_4;
  }
  closure_0 = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((item, index) => callback(closure_1_1[2]).canUnlinkLobbyChannel(item.channel, callback));
    items = found.map((item, index) => item.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
};
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
  const _require = id;
  let items = [closure_4, closure_2];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    if (closure_1_2 !== undefined) {
      if (closure_1_4 !== undefined) {
        closure_0 = closure_1_4;
        if (null == tmp) {
          let items = [];
        } else {
          const found = closure_1_2.getChannels(tmp)[closure_1_3].filter((item, index) => callback(closure_1_1[2]).canUnlinkLobbyChannel(item.channel, callback));
          items = found.map((item, index) => item.channel);
          const arr = closure_1_2.getChannels(tmp)[closure_1_3];
        }
        return items;
      }
    }
  });
};