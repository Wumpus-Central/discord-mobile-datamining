// discord_app/modules/lobbies/LobbyUtils.tsx
import closure_2 from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(channel, closure_0) {
  let obj = closure_0;
  if (closure_0 === undefined) {
    obj = closure_2;
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
  const items = [closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      let tmp3 = null != tmp;
      if (tmp3) {
        let canResult = null != tmp.linkedLobby;
        if (canResult) {
          canResult = obj.can(closure_1_3.MANAGE_CHANNELS, tmp);
        }
        if (canResult) {
          canResult = obj.can(closure_1_3.VIEW_CHANNEL, tmp);
        }
        if (canResult) {
          canResult = obj.can(closure_1_3.SEND_MESSAGES, tmp);
        }
        tmp3 = canResult;
      }
      return tmp3;
    }
  });
};
