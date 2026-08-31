// === Module 12891: useCanSearchForumPostsByChannelId ===

// Module 12891 (useCanSearchForumPostsByChannelId)
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import closure_3 from "getUncachedChannelPermissions" /* 4091 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};