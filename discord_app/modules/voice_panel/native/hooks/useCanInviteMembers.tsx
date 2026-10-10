// === Module 17750: useCanInviteMembers ===

// Module 17750 (useCanInviteMembers)
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteMembers(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const channel = ChannelStore.getChannel(closure_0);
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.CONNECT, channel);
      }
      if (canResult) {
        canResult = PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
      }
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp7, tmp8);
}) : (function useCanInviteMembers(arg0) {
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.CONNECT, channel);
    }
    if (canResult) {
      canResult = PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
});