// discord_app/modules/guild_member_verification/hooks/useSortedMemberApplications.tsx
import MemberVerificationTypes from "../MemberVerificationTypes.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildJoinRequestStore from "../GuildJoinRequestStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let guildId;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let applicationStatus;
      let first;
      const obj = guildId(applicationStatus[3]);
      const cResult = obj.c(9);
      guildId = guildId.guildId;
      applicationStatus = guildId.applicationStatus;
      const sortOrder = guildId.sortOrder;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildJoinRequestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === applicationStatus) {
        let tmp7;
        let tmp8;
        let tmp16;
        if (cResult[2] === guildId) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmp2Result = guildId(applicationStatus[4]);
        const stateFromStores = tmp2Result.useStateFromStores(first, tmp7, tmp8);
        let tmp10 = stateFromStores;
        if (sortOrder === guildId(applicationStatus[5]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
          let tmp11;
          if (cResult[5] !== stateFromStores) {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, stateFromStores, 0);
            const reversed = items1.reverse();
            cResult[5] = stateFromStores;
            cResult[6] = reversed;
            tmp11 = reversed;
          } else {
            tmp11 = cResult[6];
          }
          tmp10 = tmp11;
        }
        if (cResult[7] !== tmp10) {
          const obj2 = { guildJoinRequests: tmp10 };
          cResult[7] = tmp10;
          cResult[8] = obj2;
          tmp16 = obj2;
        } else {
          tmp16 = cResult[8];
        }
        return tmp16;
      }
      const fn = function u() {
        return GuildJoinRequestStore.getRequests(guildId, applicationStatus);
      };
      const items2 = [applicationStatus, guildId];
      cResult[1] = applicationStatus;
      cResult[2] = guildId;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp8 = items2;
      tmp7 = fn;
    }
  : (guildId) => {
      let items2;
      guildId = guildId.guildId;
      const applicationStatus = guildId.applicationStatus;
      const sortOrder = guildId.sortOrder;
      let stateFromStores;
      let items = [stateFromStores];
      const items1 = [applicationStatus, guildId];
      const obj = guildId(applicationStatus[4]);
      stateFromStores = obj.useStateFromStores(
        items,
        () => GuildJoinRequestStore.getRequests(guildId, applicationStatus),
        items1,
      );
      const obj2 = {
        guildJoinRequests: sortOrder.useMemo(() => {
          let reversed;
          if (sortOrder === MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
            const items = [];
            HermesBuiltin.arraySpread(items, stateFromStores, 0);
            reversed = items.reverse();
          } else {
            reversed = stateFromStores;
          }
          return reversed;
        }, items2),
      };
      items2 = [sortOrder, stateFromStores];
      return obj2;
    };
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = tmp2;
