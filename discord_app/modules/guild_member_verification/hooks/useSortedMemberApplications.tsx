// === Module 16402: useSortedMemberApplications ===

// Module 16402 (useSortedMemberApplications)
import closure_2 from "noop" /* 19 */;
import closure_3 from "updateSubmittedGuildJoinRequestTotal" /* 7211 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
  let obj = guildId(applicationStatus[2]);
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getRequests(guildId, applicationStatus), items1);
  obj = {
    guildJoinRequests: sortOrder.useMemo(() => {
      if (sortOrder === guildId(applicationStatus[3]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
        const items = [];
        HermesBuiltin.arraySpread(stateFromStores, 0);
        let reversed = items.reverse();
      } else {
        reversed = stateFromStores;
      }
      return reversed;
    }, items2)
  };
  items2 = [sortOrder, stateFromStores];
  return obj;
};