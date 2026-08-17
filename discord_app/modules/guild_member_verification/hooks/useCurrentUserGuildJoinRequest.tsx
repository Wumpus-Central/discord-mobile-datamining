// discord_app/modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4198 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const _require = guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return _initialize.useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_2.getRequest(tmp);
    }
    return request;
  }, items1);
};