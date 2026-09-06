// === Module 5545: useCurrentUserGuildJoinRequest ===

// Module 5545 (useCurrentUserGuildJoinRequest)
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4382 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  _require = guildId;
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  }, items1);
};