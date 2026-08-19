// discord_app/modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx
import noop from "../../../../_runtime/00019_noop.js";
import updateSubmittedGuildJoinRequestTotal from "../GuildJoinRequestStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let items = [closure_4];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(selectedJoinRequestId[2]).useStateFromStores(items, () => closure_1_4.getRequestsForUser(guildId, userId), items1);
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
    const found = items.filter((item, index) => item.joinRequestId !== closure_2);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
};