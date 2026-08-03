// === Module 15541: useOtherGuildJoinRequestsForUser ===

// Module 15541 (useOtherGuildJoinRequestsForUser)
import noop from "noop";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let stateFromStores;
  let items = [updateSubmittedGuildJoinRequestTotal];
  const items1 = [guildId, userId];
  stateFromStores = guildId(selectedJoinRequestId[2]).useStateFromStores(items, () => outer1_4.getRequestsForUser(guildId, userId), items1);
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const guildJoinRequestsForUser = userId(selectedJoinRequestId[3]).fetchGuildJoinRequestsForUser(guildId, userId);
      const obj = userId(selectedJoinRequestId[3]);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const found = items.filter((joinRequestId) => joinRequestId.joinRequestId !== closure_2);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
};