// discord_app/modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
import closure_2 from "../../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "../../../stores/GuildChannelStore.tsx";
import closure_4 from "../../../stores/PermissionStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

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
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => callback(closure_1_1[2]).canUnlinkLobbyChannel(channel.channel, callback));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
};
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
  const _require = id;
  let items = [closure_4, closure_2];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    if (closure_1_2 !== undefined) {
      if (tmp2 !== undefined) {
        closure_0 = tmp2;
        if (null == tmp) {
          let items = [];
        } else {
          const found = closure_1_2.getChannels(tmp)[closure_1_3].filter((channel) => callback(closure_1_1[2]).canUnlinkLobbyChannel(channel.channel, callback));
          items = found.map((channel) => channel.channel);
          const arr = closure_1_2.getChannels(tmp)[closure_1_3];
        }
        return items;
      }
    }
  });
};