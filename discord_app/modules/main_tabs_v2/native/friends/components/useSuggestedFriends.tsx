// === Module 16391: useSuggestedFriends ===

// Module 16391 (useSuggestedFriends)
import _modDef12 from "module_12" /* 12 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7344 */;

require = fn;
const SuggestedFriendSource = fn(12378).SuggestedFriendSource;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSuggestedFriends(arg0) {
  let obj = arg0;
  let sorted = dependencyMap;
  const cResult = c.c(15);
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FriendSuggestionStore];
    const fn = function c() {
      return suggestions.getSuggestions();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = useStateFromStores.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = useStateFromStores;
  [arr4, tmp9] = noop.useState(tmp7);
  if (flag == null) {
    flag = true;
  }
  if (flag) {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function p(source) {
        return source.source === constants.USER_SUGGESTIONS;
      };
      cResult[7] = fn2;
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[7];
    }
    const _Symbol2 = Symbol;
    const found = arr4.filter(tmp11);
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          obj = { user: arg0.user, friendSuggestionName: null, source: null, contactNames: null };
          name = arg0.name;
          obj.friendSuggestionName = name;
          obj.source = closure_1_6.USER_SUGGESTIONS;
          obj.contactNames = arg0.contactNames;
          return obj;
        }
      }
      cResult[8] = G;
    } else {
      class G {
        constructor(arg0) {
          obj = { user: arg0.user, friendSuggestionName: null, source: null, contactNames: null };
          name = arg0.name;
          obj.friendSuggestionName = name;
          obj.source = closure_1_6.USER_SUGGESTIONS;
          obj.contactNames = arg0.contactNames;
          return obj;
        }
      }
    }
    const _Symbol3 = Symbol;
    const mapped = stateFromStoresArray.map(G);
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.user.id;
        }
      }
      cResult[9] = C;
    } else {
      class C {
        constructor(arg0) {
          return arg0.user.id;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[7]);
          name = obj.getName(arg0.user);
          obj3 = closure_1_1(closure_1_2[7]);
          return name.localeCompare(obj3.getName(arg1.user));
        }
      }
      cResult[10] = I;
    } else {
      class I {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[7]);
          name = obj.getName(arg0.user);
          obj3 = closure_1_1(closure_1_2[7]);
          return name.localeCompare(obj3.getName(arg1.user));
        }
      }
    }
    sorted = _modDef12.unionBy(found, mapped, C).sort(I);
    cResult[4] = arr4;
    cResult[5] = stateFromStoresArray;
    cResult[6] = sorted;
    const unionByResult = _modDef12.unionBy(found, mapped, C);
  } else {
    class I {
      constructor(arg0, arg1) {
        obj = closure_1_1(closure_1_2[7]);
        name = obj.getName(arg0.user);
        obj3 = closure_1_1(closure_1_2[7]);
        return name.localeCompare(obj3.getName(arg1.user));
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[7]);
          name = obj.getName(arg0.user);
          obj3 = closure_1_1(closure_1_2[7]);
          return name.localeCompare(obj3.getName(arg1.user));
        }
      }
      cResult[3] = tmp10;
    } else {
      class I {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[7]);
          name = obj.getName(arg0.user);
          obj3 = closure_1_1(closure_1_2[7]);
          return name.localeCompare(obj3.getName(arg1.user));
        }
      }
    }
    const tmp20 = flag ? tmp10.length : stateFromStoresArray.length;
    if (cResult[11] === arr4) {
      class I {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[7]);
          name = obj.getName(arg0.user);
          obj3 = closure_1_1(closure_1_2[7]);
          return name.localeCompare(obj3.getName(arg1.user));
        }
      }
    }
    const obj3 = { added: arr4, setAdded: tmp9, friendSuggestions: tmp10, numFriendSuggestions: tmp20 };
    cResult[11] = arr4;
    cResult[12] = tmp10;
    cResult[13] = tmp20;
    cResult[14] = obj3;
  }
  const tmp8 = _slicedToArray(noop.useState(tmp7), 2);
}) : (function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  const items = [FriendSuggestionStore];
  stateFromStoresArray = stateFromStoresArray(flag[6]).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  const tmp = _slicedToArray(noop.useState([]), 2);
  const added = tmp[0];
  if (flag == null) {
    flag = true;
  }
  const items1 = [added, stateFromStoresArray, flag];
  const memo = noop.useMemo(() => {
    if (flag) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user, friendSuggestionName: null, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
        const name = user.name;
        obj.friendSuggestionName = name;
        return obj;
      });
      return _modDef12.unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = added(4923).getName(user.user);
        const obj = added(4923);
        return name.localeCompare(added(4923).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  return { added, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
});