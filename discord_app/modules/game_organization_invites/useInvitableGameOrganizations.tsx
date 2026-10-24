// === Module 11314: useInvitableGameOrganizations ===

// Module 11314 (useInvitableGameOrganizations)
import DurationsDefault from "Durations" /* 1104 */;
import isRetryableFetchErrorDefault from "isRetryableFetchError" /* 11316 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 11317 */;
import useCanInviteGuildIdsDefault from "useCanInviteGuildIds" /* 11318 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import InvitableGameOrganizationStore from "InvitableGameOrganizationStore" /* 11315 */;

const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1087).QueryIds.INVITABLE_GAME_ORGANIZATIONS,
  staleAfter: DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  retryConfig: { retryableErrors: isRetryableFetchErrorDefault },
  get(guildIds) {
    return InvitableGameOrganizationStore.getInvitableGameOrganizations(guildIds);
  },
  load: null
};
let closure_2 = asyncGeneratorStep(async (arg0) => {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: GameOrganizationInviteActionCreatorsDefault.fetchInvitableGameOrganizations(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
});
obj2.load = function load() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const fetchStore = initialize.createFetchStore(InvitableGameOrganizationStore, obj2);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/game_organization_invites/useInvitableGameOrganizations.tsx");

export default function useInvitableGameOrganizations(arg0) {
  return fetchStore(useCanInviteGuildIdsDefault(arg0));
};
export const useInvitableGameOrganizationsFetch = fetchStore;