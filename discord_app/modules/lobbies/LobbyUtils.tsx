// === Module 10344: canUnlinkLobbyChannel ===

// Module 10344 (canUnlinkLobbyChannel)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(channel, closure_0) {
  let obj = closure_0;
  if (closure_0 === undefined) {
    obj = getUncachedChannelPermissions;
  }
  let tmp = null != channel;
  if (tmp) {
    let canResult = null != channel.linkedLobby;
    if (canResult) {
      canResult = obj.can(Permissions.MANAGE_CHANNELS, channel);
    }
    if (canResult) {
      canResult = obj.can(Permissions.VIEW_CHANNEL, channel);
    }
    if (canResult) {
      canResult = obj.can(Permissions.SEND_MESSAGES, channel);
    }
    tmp = canResult;
  }
  return tmp;
};
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => {
    if (outer1_2 !== undefined) {
      let tmp3 = null != tmp;
      if (tmp3) {
        let canResult = null != tmp.linkedLobby;
        if (canResult) {
          canResult = obj.can(outer1_3.MANAGE_CHANNELS, tmp);
        }
        if (canResult) {
          canResult = obj.can(outer1_3.VIEW_CHANNEL, tmp);
        }
        if (canResult) {
          canResult = obj.can(outer1_3.SEND_MESSAGES, tmp);
        }
        tmp3 = canResult;
      }
      return tmp3;
    }
  });
};