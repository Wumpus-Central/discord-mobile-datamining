// === Module 10271: LobbyUtils ===

// Module 10271 (LobbyUtils)
import PermissionStore from "PermissionStore" /* 4707 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
function canUnlinkLobbyChannel(channel, arg1) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export { canUnlinkLobbyChannel };
export const useCanUnlinkLobbyChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanUnlinkLobbyChannel(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function b() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useCanUnlinkLobbyChannel(arg0) {
  _require = arg0;
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
});