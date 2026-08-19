// === Module 16320: useCanInviteMembers ===

// Module 16320 (useCanInviteMembers)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  const items1 = [channelId];
  return _require(647).useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.CONNECT, channel);
    }
    if (canResult) {
      canResult = closure_1_3.can(Permissions.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};