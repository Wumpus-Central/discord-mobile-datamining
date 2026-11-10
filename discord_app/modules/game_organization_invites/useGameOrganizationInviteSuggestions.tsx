// === Module 16127: useGameOrganizationInviteSuggestions ===

// Module 16127 (useGameOrganizationInviteSuggestions)
import InstantInviteUtils from "InstantInviteUtils" /* 9206 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9236 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9219 */;
import RelationshipStore from "RelationshipStore" /* 5084 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
function isUserRow(type) {
  let tmp3 = type.type === InstantInviteUtils.RowTypes.FRIEND;
  if (!tmp3) {
    tmp3 = type.type === InstantInviteUtils.RowTypes.DM;
  }
  return tmp3;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInviteSuggestions.tsx");

export default function useGameOrganizationInviteSuggestions() {
  items = [InviteSuggestionsStore, RelationshipStore, UserStore];
  const users = require("initialize").useStateFromStoresArray(items, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    closure_1 = closure_7;
    const found = inviteSuggestionRows.filter(closure_9);
    const mapped = found.map((item) => item.item);
    return mapped.filter((item) => closure_2_1(closure_2_2[7])(item, id, closure_1));
  });
  const isLoading = _slicedToArray(noop.useState(true), 2);
  _require = isLoading[1];
  const hasNoFriends = _slicedToArray(noop.useState(false), 2);
  closure_1 = hasNoFriends[1];
  dependencyMap = noop.useRef("");
  const search = noop.useCallback((current) => {
    closure_2.current = current;
    const result = InviteSuggestionsActionCreators.searchInviteSuggestions(current);
  }, []);
  const effect = noop.useEffect(() => {
    closure_0 = async function _load() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp42 = tmp4;
              c3 = 2;
              const obj5 = { omitUserIds: null };
              const _Set = Set;
              const set = new Set();
              obj5.omitUserIds = set;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: closure_2_0(9236).loadInviteSuggestions(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            tmp4(false);
            throw tmp31;
          } else if (2 === tmp8) {
            c3 = 0;
            tmp4(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            tmp4(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp42 = tmp42(0 === (function getCurrentInviteRecipients() {
              inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              closure_1 = closure_7;
              const found = inviteSuggestionRows.filter(closure_9);
              const mapped = found.map((item) => item.item);
              return mapped.filter((item) => closure_2_1(closure_2_2[7])(item, id, closure_1));
            })().length);
            c3 = 0;
            tmp4(false);
            if ("" !== tmp31.current) {
              const result = closure_2_0(9236).searchInviteSuggestions(tmp31.current);
              const obj = closure_2_0(9236);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp31) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp31;
          } else if (tmp2 === tmp33) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    !(function load() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  return { users, isLoading: isLoading[0], hasNoFriends: hasNoFriends[0], search };
};