// discord_app/modules/game_organization_invites/useGameOrganizationInviteFetch.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GameOrganizationInviteStore from "GameOrganizationInviteStore.tsx";

const constants = fn(10462).GameOrganizationInviteStates;
const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1085).QueryIds.GAME_ORGANIZATION_INVITE,
  staleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  get(arg0) {
    const invite = GameOrganizationInviteStore.getInvite(arg0);
    state = undefined;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  },
  load: null,
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
          const obj5 = {
            value: GameOrganizationInviteActionCreatorsDefault.resolveGameOrganizationInvite(closure_0),
            done: false,
          };
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
const fetchStore = initialize.createFetchStore(GameOrganizationInviteStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInviteFetch.tsx");

export const useGameOrganizationInviteFetch = fetchStore;
