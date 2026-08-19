// === Module 12702: useCanSearchForumPostsByChannelId ===

// Module 12702 (useCanSearchForumPostsByChannelId)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};