// === Module 17860: useCanInviteMembers ===

// Module 17860 (useCanInviteMembers)
import ChannelStore from "ChannelStore" /* 4643 */;
import PermissionStore from "PermissionStore" /* 4726 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1082).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export function useCanInviteMembers(channelId) {
  _require = channelId;
  items = [ChannelStore, PermissionStore];
  const items1 = [channelId];
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
}