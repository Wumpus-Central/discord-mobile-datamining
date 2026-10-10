// === Module 17027: useSortedMemberApplications ===

// Module 17027 (useSortedMemberApplications)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4942 */;
import noop from "module_19" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6117 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedMemberApplications(guildId) {
  const cResult = guildId(applicationStatus[3]).c(9);
  guildId = guildId.guildId;
  applicationStatus = guildId.applicationStatus;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationStatus) {
    if (cResult[2] === guildId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[4]).useStateFromStores(first, tmp6, tmp7);
    if (guildId.sortOrder !== tmp(tmp2[5]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
      if (cResult[7] !== stateFromStores) {
        const obj2 = { guildJoinRequests: stateFromStores };
        cResult[7] = stateFromStores;
        cResult[8] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[8];
      }
      return tmp16;
    } else if (cResult[5] !== stateFromStores) {
      const items1 = [];
      HermesBuiltin.arraySpread(stateFromStores, 0);
      const reversed = items1.reverse();
      cResult[5] = stateFromStores;
      cResult[6] = reversed;
    }
    const tmpResult = tmp(tmp2[4]);
  }
  const fn = function u() {
    return GuildJoinRequestStore.getRequests(guildId, applicationStatus);
  };
  const items2 = [applicationStatus, guildId];
  cResult[1] = applicationStatus;
  cResult[2] = guildId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
  const obj = guildId(applicationStatus[3]);
}) : (function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  stateFromStores = guildId(applicationStatus[4]).useStateFromStores(items, () => GuildJoinRequestStore.getRequests(guildId, applicationStatus), items1);
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
});