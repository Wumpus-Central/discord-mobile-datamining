// === Module 17599: useGameOrganizationInviteFetch ===

// Module 17599 (useGameOrganizationInviteFetch)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11097 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 17600 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11096 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GAME_ORGANIZATION_INVITE,
  staleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  get(arg0) {
    const invite = GameOrganizationInviteStore.getInvite(arg0);
    let state;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  },
  load: function() {
    return closure_2(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_2 = _asyncToGenerator(async (arg0) => {
  let obj2;
  let closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
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
          const obj5 = { value: obj2.resolveGameOrganizationInvite(closure_0), done: false };
          obj2 = GameOrganizationInviteActionCreatorsDefault;
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
    } catch (tmp7) {
      c1 = 3;
      throw tmp7;
    }
  }
});
const fetchStore = createFetchStore(GameOrganizationInviteStore, obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInviteFetch.tsx");

export const useGameOrganizationInviteFetch = fetchStore;