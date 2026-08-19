// === Module 9949: canUnlinkLobbyChannel ===

// Module 9949 (canUnlinkLobbyChannel)
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(closure_2, closure_0) {
  let obj = closure_0;
  if (closure_0 === undefined) {
    obj = linkedLobby;
  }
  let tmp = null != linkedLobby;
  if (tmp) {
    let canResult = null != linkedLobby.linkedLobby;
    if (canResult) {
      canResult = obj.can(Permissions.MANAGE_CHANNELS, linkedLobby);
    }
    if (canResult) {
      canResult = obj.can(Permissions.VIEW_CHANNEL, linkedLobby);
    }
    if (canResult) {
      canResult = obj.can(Permissions.SEND_MESSAGES, linkedLobby);
    }
    tmp = canResult;
  }
  return tmp;
};
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  const _require = channel;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      let tmp3 = null != linkedLobby;
      if (tmp3) {
        let canResult = null != linkedLobby.linkedLobby;
        if (canResult) {
          canResult = closure_1_2.can(Permissions.MANAGE_CHANNELS, linkedLobby);
        }
        if (canResult) {
          canResult = closure_1_2.can(Permissions.VIEW_CHANNEL, linkedLobby);
        }
        if (canResult) {
          canResult = closure_1_2.can(Permissions.SEND_MESSAGES, linkedLobby);
        }
        tmp3 = canResult;
      }
      return tmp3;
    }
  });
};