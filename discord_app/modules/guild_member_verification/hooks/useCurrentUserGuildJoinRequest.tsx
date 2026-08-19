// === Module 8539: useCurrentUserGuildJoinRequest ===

// Module 8539 (useCurrentUserGuildJoinRequest)
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate" /* 4198 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const _require = guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_2.getRequest(tmp);
    }
    return request;
  }, items1);
};