// === Module 16035: useGameOrganizationInviteSuggestions ===

// Module 16035 (useGameOrganizationInviteSuggestions)
import InstantInviteUtils from "InstantInviteUtils" /* 9265 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9295 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9278 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
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
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(closure_9);
    const mapped = found.map((item) => item.item);
    return mapped.filter((item) => closure_1(dependencyMap[8])(item, id, RelationshipStore));
  });
  const isLoading = _slicedToArray(noop.useState(true), 2);
  _require = isLoading[1];
  closure_1 = noop.useRef("");
  const search = noop.useCallback((current) => {
    closure_1.current = current;
    const result = InviteSuggestionsActionCreators.searchInviteSuggestions(current);
  }, []);
  const effect = noop.useEffect(() => {
    closure_0 = async function _load() {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 2;
              const obj5 = { omitUserIds: null };
              const _Set = Set;
              const set = new Set();
              obj5.omitUserIds = set;
              ref = 3;
              c4 = 1;
              const obj6 = { value: closure_2_0(9295).loadInviteSuggestions(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            tmp4(false);
            throw closure_2;
          } else if (2 === tmp8) {
            c3 = 0;
            tmp4(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            tmp4(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c3 = 0;
            tmp4(false);
            if ("" !== ref.current) {
              const result = closure_2_0(9295).searchInviteSuggestions(ref.current);
              const obj = closure_2_0(9295);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp36) {
          closure_2 = tmp36;
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp36;
          } else if (tmp2 === tmp38) {
            ref = tmp2;
          } else {
            ref = tmp;
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
  return { users, isLoading: isLoading[0], search };
};