// === Module 16996: useSortedMemberApplications ===

// Module 16996 (useSortedMemberApplications)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4651 */;
import noop from "module_19" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5845 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  stateFromStores = guildId(applicationStatus[2]).useStateFromStores(items, () => GuildJoinRequestStore.getRequests(guildId, applicationStatus), items1);
  const obj2 = { guildJoinRequests: null };
  const items2 = [sortOrder, stateFromStores];
  obj2.guildJoinRequests = sortOrder.useMemo(() => {
    if (sortOrder === MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
      const items = [];
      HermesBuiltin.arraySpread(stateFromStores, 0);
      let reversed = items.reverse();
    } else {
      reversed = stateFromStores;
    }
    return reversed;
  }, items2);
  return obj2;
};