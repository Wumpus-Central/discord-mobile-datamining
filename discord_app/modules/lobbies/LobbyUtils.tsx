// discord_app/modules/lobbies/LobbyUtils.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(channel, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
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
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      let tmp3 = null != linkedLobby;
      if (tmp3) {
        let canResult = null != linkedLobby.linkedLobby;
        if (canResult) {
          canResult = PermissionStore.can(Permissions.MANAGE_CHANNELS, linkedLobby);
        }
        if (canResult) {
          canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, linkedLobby);
        }
        if (canResult) {
          canResult = PermissionStore.can(Permissions.SEND_MESSAGES, linkedLobby);
        }
        tmp3 = canResult;
      }
      return tmp3;
    }
  });
};
