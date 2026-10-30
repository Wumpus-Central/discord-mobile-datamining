// === Module 13148: useGameOrganizationCharacterEligibilityFetch ===

// Module 13148 (useGameOrganizationCharacterEligibilityFetch)
import DurationsDefault from "Durations" /* 1090 */;
import isRetryableFetchErrorDefault from "isRetryableFetchError" /* 11617 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 11618 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore" /* 13149 */;

const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1072).QueryIds.GAME_ORGANIZATION_CHARACTER_ELIGIBILITY,
  staleAfter: DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  retryConfig: { retryableErrors: isRetryableFetchErrorDefault },
  get(arg0) {
    let characters = null;
    if (null != arg0) {
      characters = GameOrganizationCharacterEligibilityStore.getCharacters(arg0);
    }
    return characters;
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
      return { value: "HermesInternal", done: null };
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
        } else if (null != closure_0) {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: GameOrganizationInviteActionCreatorsDefault.fetchCharacterEligibility(tmp5), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
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
const fetchStore = initialize.createFetchStore(GameOrganizationCharacterEligibilityStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationCharacterEligibilityFetch.tsx");

export const useGameOrganizationCharacterEligibilityFetch = fetchStore;