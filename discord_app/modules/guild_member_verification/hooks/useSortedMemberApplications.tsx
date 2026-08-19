// === Module 15839: useSortedMemberApplications ===

// Module 15839 (useSortedMemberApplications)
import noop from "noop" /* 19 */;
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal" /* 7428 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

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