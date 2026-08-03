// === Module 16014: useCanInviteMembers ===

// Module 16014 (useCanInviteMembers)
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [ensureGuildLoaded, getUncachedChannelPermissions];
  const items1 = [channelId];
  return _require(647).useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_4.CONNECT, channel);
    }
    if (canResult) {
      canResult = outer1_3.can(outer1_4.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};