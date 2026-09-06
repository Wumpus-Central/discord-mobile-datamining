// discord_app/modules/guild_member_verification/hooks/useSortedMemberApplications.tsx
import MemberVerificationTypes from "../MemberVerificationTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildJoinRequestStore from "../GuildJoinRequestStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
  let obj = guildId(applicationStatus[2]);
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  stateFromStores = obj.useStateFromStores(
    items,
    () => GuildJoinRequestStore.getRequests(guildId, applicationStatus),
    items1,
  );
  obj = { guildJoinRequests: null };
  const items2 = [sortOrder, stateFromStores];
  obj.guildJoinRequests = sortOrder.useMemo(() => {
    if (sortOrder === MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
      const items = [];
      HermesBuiltin.arraySpread(stateFromStores, 0);
      let reversed = items.reverse();
    } else {
      reversed = stateFromStores;
    }
    return reversed;
  }, items2);
  return obj;
};
