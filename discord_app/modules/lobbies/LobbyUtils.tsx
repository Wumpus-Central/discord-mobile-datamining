// === Module 10670: LobbyUtils ===

// Module 10670 (LobbyUtils)
import Constants from "Constants" /* 1085 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
function canUnlinkLobbyChannel(channel, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  let tmp = null != channel;
  if (tmp) {
    tmp = null != channel.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, channel) && obj.can(Permissions.VIEW_CHANNEL, channel) && obj.can(Permissions.SEND_MESSAGES, channel);
    const canResult = null != channel.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, channel) && obj.can(Permissions.VIEW_CHANNEL, channel) && obj.can(Permissions.SEND_MESSAGES, channel);
  }
  return tmp;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let linkedLobby;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function t() {
      if (PermissionStore !== undefined) {
        let tmp3 = null != linkedLobby;
        if (tmp3) {
          tmp3 = null != linkedLobby.linkedLobby && PermissionStore.can(Permissions.MANAGE_CHANNELS, linkedLobby) && PermissionStore.can(Permissions.VIEW_CHANNEL, linkedLobby) && PermissionStore.can(Permissions.SEND_MESSAGES, linkedLobby);
          const canResult = null != linkedLobby.linkedLobby && PermissionStore.can(Permissions.MANAGE_CHANNELS, linkedLobby) && PermissionStore.can(Permissions.VIEW_CHANNEL, linkedLobby) && PermissionStore.can(Permissions.SEND_MESSAGES, linkedLobby);
        }
        return tmp3;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let linkedLobby;
  _require = arg0;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      let tmp3 = null != linkedLobby;
      if (tmp3) {
        tmp3 = null != linkedLobby.linkedLobby && PermissionStore.can(Permissions.MANAGE_CHANNELS, linkedLobby) && PermissionStore.can(Permissions.VIEW_CHANNEL, linkedLobby) && PermissionStore.can(Permissions.SEND_MESSAGES, linkedLobby);
        const canResult = null != linkedLobby.linkedLobby && PermissionStore.can(Permissions.MANAGE_CHANNELS, linkedLobby) && PermissionStore.can(Permissions.VIEW_CHANNEL, linkedLobby) && PermissionStore.can(Permissions.SEND_MESSAGES, linkedLobby);
      }
      return tmp3;
    }
  });
});
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export { canUnlinkLobbyChannel };
export const useCanUnlinkLobbyChannel = tmp2;