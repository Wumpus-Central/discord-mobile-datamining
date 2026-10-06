// === Module 16967: ContactSuggestionRow ===

// Module 16967 (ContactSuggestionRow)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16010 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, suggestedFriend;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["suggestedFriend", "added", "onAddSuggestion"];
({ AnalyticEvents: metroImportDefault, InstantInviteSources: metroImportAll, RelationshipTypes: c9 } = Constants);
const jsx = Fragment.jsx;
const constants4 = { ADD: "add" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((suggestedFriend) => {
  let _location;
  let closure_0;
  let closure_1;
  let intl;
  let sharedValue;
  let tmp11;
  let useReducedMotion;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(52);
  if (cResult[0] !== suggestedFriend) {
    suggestedFriend = suggestedFriend.suggestedFriend;
    closure_3 = suggestedFriend;
    const added = suggestedFriend.added;
    _require = added;
    const onAddSuggestion = suggestedFriend.onAddSuggestion;
    importDefault = onAddSuggestion;
    const tmp10 = sharedValue(suggestedFriend, closure_3);
    dependencyMap = tmp10;
    cResult[0] = suggestedFriend;
    cResult[1] = added;
    cResult[2] = onAddSuggestion;
    cResult[3] = tmp10;
    cResult[4] = suggestedFriend;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
    closure_3 = cResult[4];
  }
  if (cResult[5] === tmp7.friendSuggestionName) {
    if (cResult[6] === tmp7.user) {
      tmp11 = cResult[7];
    }
    const tmpResult = tmp(4618);
    sharedValue = tmpResult.useSharedValue(false);
    if (cResult[8] === tmp4) {
      let tmp13;
      let tmp14;
      let tmp21;
      let tmp20;
      if (cResult[9] === sharedValue) {
        tmp13 = cResult[10];
        tmp14 = cResult[11];
      }
      const effect = react.useEffect(tmp13, tmp14);
      if (cResult[12] !== tmp4) {
        let items;
        if (tmp4) {
          items = [];
        } else {
          const obj3 = { name: constants4.ADD, label: intl.string(tmp(1126).t["ed99+i"]) };
          intl = tmp(1126).intl;
          class F {
            constructor() {
              const result = sharedValue.set(closure_0);
            }
          }
          items[0] = obj3;
        }
        cResult[12] = tmp4;
        cResult[13] = items;
      }
      const _Symbol = Symbol;
      class F {
        constructor() {
          const result = sharedValue.set(closure_0);
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class T {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[14] = items1;
        class F {
          constructor() {
            const result = sharedValue.set(closure_0);
          }
        }
        cResult[15] = T;
        tmp21 = T;
        tmp20 = items1;
      } else {
        tmp20 = cResult[14];
        tmp21 = cResult[15];
      }
      const tmpResult3 = tmp(573);
      const stateFromStores = tmpResult3.useStateFromStores(tmp20, tmp21);
      if (cResult[16] === sharedValue) {
        if (cResult[17] === tmp5) {
          class T {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const tmp27 = null != undefined;
          if (tmp27) {
            if (tmp7 != null) {
              const mutualFriendsCount = tmp7.mutualFriendsCount;
            }
            class T {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
          }
          class F {
            constructor() {
              const result = sharedValue.set(closure_0);
            }
          }
          const tmpResult4 = tmp(16009);
          const suggestedContactNameForSuggestion = tmpResult4.getSuggestedContactNameForSuggestion(tmp11, tmp7);
          cResult[20] = tmp7;
          cResult[21] = tmp11;
          cResult[22] = suggestedContactNameForSuggestion;
        }
      }
      const fn = function h(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === constants.ADD) {
          const result = sharedValue.set(true);
          closure_1(closure_3.user);
          const obj = AddFriendsScreenUtils;
          return obj.addContactSuggestion(closure_3.user);
        }
      };
      cResult[16] = sharedValue;
      cResult[17] = tmp5;
      cResult[18] = tmp7.user;
      cResult[19] = fn;
    }
    class F {
      constructor() {
        const result = sharedValue.set(closure_0);
      }
    }
    const items2 = [tmp4, sharedValue];
    cResult[8] = tmp4;
    cResult[9] = sharedValue;
    cResult[10] = F;
    cResult[11] = items2;
    tmp14 = items2;
    tmp13 = F;
  }
  if (null != tmp7.friendSuggestionName) {
    let friendSuggestionName;
    if (tmp7.friendSuggestionName.length > 0) {
      friendSuggestionName = tmp7.friendSuggestionName;
    }
    class T {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[6] = tmp7.user;
    class F {
      constructor() {
        const result = sharedValue.set(closure_0);
      }
    }
    cResult[7] = friendSuggestionName;
    tmp11 = friendSuggestionName;
  }
  const obj2 = UserUtilsDefault;
  friendSuggestionName = obj2.getName(tmp7.user);
}) : ((suggestedFriend) => {
  let useReducedMotion;
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const merged = Object.assign(suggestedFriend, Object.assign({ suggestedFriend: 0, added: 0, onAddSuggestion: 0 }));
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    let friendSuggestionName;
    let combined;
    let tmp15;
    if (suggestedFriend.friendSuggestionName.length > 0) {
      friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    const obj2 = suggestedFriend(onAddSuggestion[8]);
    sharedValue = obj2.useSharedValue(false);
    let items = [added, sharedValue];
    const effect = react.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = react.useMemo(() => {
      let intl;
      let items;
      if (added) {
        items = [];
      } else {
        const obj = { name: constants.ADD, label: intl.string(intl3.t["ed99+i"]) };
        intl = intl3.intl;
        items = [obj];
      }
      return items;
    }, items1);
    const items2 = [AccessibilityStore];
    const obj3 = suggestedFriend(onAddSuggestion[10]);
    const stateFromStores = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = react.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === constants.ADD) {
        const result = sharedValue.set(true);
        onAddSuggestion(suggestedFriend.user);
        const obj = AddFriendsScreenUtils;
        return obj.addContactSuggestion(suggestedFriend.user);
      }
    }, items3);
    if (suggestedFriend != null) {
      mutualFriendsCount = suggestedFriend.mutualFriendsCount;
    }
    let tmp12 = null != mutualFriendsCount;
    if (tmp12) {
      let mutualFriendsCount1;
      if (suggestedFriend != null) {
        mutualFriendsCount1 = suggestedFriend.mutualFriendsCount;
      }
      tmp12 = mutualFriendsCount1 > 0;
    }
    const tmp2Result = suggestedFriend(onAddSuggestion[12]);
    const suggestedContactNameForSuggestion = tmp2Result.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      const obj6 = added(onAddSuggestion[7]);
      combined = "" + obj6.getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      tmp15 = added;
    } else {
      tmp15 = added;
      const obj5 = added(onAddSuggestion[7]);
      combined = obj5.getUserTag(suggestedFriend.user);
    }
    tmp15(onAddSuggestion[16]);
    const merged1 = Object.assign(merged);
    let formatToPlainStringResult;
    const ActionStatusSubLabel = tmp2(tmp3[13]).ActionStatusSubLabel;
    if (tmp12) {
      let intl = tmp2(tmp3[9]).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str3;
      const z7y34b = tmp2(tmp3[9]).t.z7y34b;
      if (suggestedFriend != null) {
        str3 = suggestedFriend.mutualFriendsCount;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj8 = { count: str3 };
      formatToPlainStringResult = formatToPlainString(z7y34b, obj8);
    }
    const intl2 = tmp2(tmp3[9]).intl;
    return <tmp15Result user={suggestedFriend.user} type={constants3.SUGGESTION} accessibilityActions={memo} onAccessibilityAction={callback} labelLineClamp={1} subLabelLineClamp={1} label={friendSuggestionName} subLabel={<ActionStatusSubLabel actioned={sharedValue} label={combined} secondaryLabel={formatToPlainStringResult} actionStatus={intl2.string(suggestedFriend(onAddSuggestion[9]).t.Kzyxm9)} animate={!stateFromStores} />} trailing={jsx(suggestedFriend(onAddSuggestion[15]).ContactSuggestionActions, {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          let ADD_FRIENDS_MODAL;
          const obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: ADD_FRIENDS_MODAL };
          ADD_FRIENDS_MODAL = merged.location;
          const track = AnalyticsUtilsDefault.track;
          const FRIEND_SUGGESTION_ADDED = metroImportDefault.FRIEND_SUGGESTION_ADDED;
          AnalyticsUtilsDefault;
          if (ADD_FRIENDS_MODAL == null) {
            ADD_FRIENDS_MODAL = metroImportAll.ADD_FRIENDS_MODAL;
          }
          track(FRIEND_SUGGESTION_ADDED, obj);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    })} />;
  }
  let obj = added(onAddSuggestion[7]);
  friendSuggestionName = obj.getName(suggestedFriend.user);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = tmp3;