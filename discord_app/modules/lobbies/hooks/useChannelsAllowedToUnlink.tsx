import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";

let require = arg1;
const result = require("canUnlinkLobbyChannel").fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export const getChannelsAllowedToUnlink = function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = comparator;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = getUncachedChannelPermissions;
  }
  const require = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => tmp2(outer1_1[2]).canUnlinkLobbyChannel(channel.channel, tmp2));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
};
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
  const _require = id;
  let items = [getUncachedChannelPermissions, comparator];
  return _require(589).useStateFromStoresArray(items, () => {
    if (outer1_2 !== undefined) {
      if (tmp2 !== undefined) {
        let closure_0 = tmp2;
        if (null == tmp) {
          let items = [];
        } else {
          const found = outer1_2.getChannels(tmp)[outer1_3].filter((channel) => tmp2(outer1_1[2]).canUnlinkLobbyChannel(channel.channel, tmp2));
          items = found.map((channel) => channel.channel);
          const arr = outer1_2.getChannels(tmp)[outer1_3];
        }
        return items;
      }
    }
  });
};