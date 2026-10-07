// === Module 16967: ContactSuggestionRow ===

// Module 16967 (ContactSuggestionRow)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16010 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["suggestedFriend", "added", "onAddSuggestion"];
const Constants = fn(1085);
({ AnalyticEvents: closure_7, InstantInviteSources: closure_8, RelationshipTypes: closure_9 } = Constants);
const jsx = fn(21).jsx;
const constants4 = { ADD: "add" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = ReactCompilerGating.isReactCompilerEnabled() ? ((suggestedFriend) => {
  const cResult = require("c").c(52);
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
      sharedValue = tmp(4618).useSharedValue(false);
      if (cResult[8] === tmp4) {
        if (cResult[9] === sharedValue) {
          let tmp15 = cResult[10];
          let tmp16 = cResult[11];
        }
        const effect = noop.useEffect(tmp15, tmp16);
        if (cResult[12] !== tmp4) {
          if (tmp4) {
            const items = [];
          } else {
            const obj3 = { name: constants4.ADD, label: null };
            const intl = tmp(1126).intl;
            obj3.label = intl.string(tmp(1126).t["ed99+i"]);
            class F {
              constructor() {
                result = closure_4.set(closure_0);
                return;
              }
            }
            items[0] = obj3;
          }
          cResult[12] = tmp4;
          cResult[13] = items;
        } else {
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [AccessibilityStore];
            class T {
              constructor() {
                return closure_1_6.useReducedMotion;
              }
            }
            cResult[14] = items1;
            class F {
              constructor() {
                result = closure_4.set(closure_0);
                return;
              }
            }
            cResult[15] = T;
            let tmp24 = T;
            let tmp23 = items1;
          } else {
            tmp23 = cResult[14];
            tmp24 = cResult[15];
          }
          class F {
            constructor() {
              result = closure_4.set(closure_0);
              return;
            }
          }
          const stateFromStores = obj5.useStateFromStores(tmp23, tmp24);
          if (cResult[16] === sharedValue) {
            if (cResult[17] === tmp5) {
              class T {
                constructor() {
                  return closure_1_6.useReducedMotion;
                }
              }
              if (tmp30) {
                if (tmp7 != null) {
                  const mutualFriendsCount = tmp7.mutualFriendsCount;
                }
                class T {
                  constructor() {
                    return closure_1_6.useReducedMotion;
                  }
                }
              }
              class F {
                constructor() {
                  result = closure_4.set(closure_0);
                  return;
                }
              }
              const suggestedContactNameForSuggestion = tmp(16009).getSuggestedContactNameForSuggestion(tmp11, tmp7);
              cResult[20] = tmp7;
              cResult[21] = tmp11;
              cResult[22] = suggestedContactNameForSuggestion;
              tmp30 = null != undefined;
              const tmpResult2 = tmp(16009);
            }
          }
          const fn = function h(nativeEvent) {
            if (nativeEvent.nativeEvent.actionName === constants.ADD) {
              const result = sharedValue.set(true);
              closure_1(closure_3.user);
              return AddFriendsScreenUtils.addContactSuggestion(closure_3.user);
            }
          };
          cResult[16] = sharedValue;
          cResult[17] = tmp5;
          cResult[18] = tmp7.user;
          cResult[19] = fn;
        }
      }
      class F {
        constructor() {
          result = closure_4.set(closure_0);
          return;
        }
      }
      const items2 = [tmp4, sharedValue];
      cResult[8] = tmp4;
      cResult[9] = sharedValue;
      cResult[10] = F;
      cResult[11] = items2;
      tmp16 = items2;
      tmp15 = F;
      const tmpResult = tmp(4618);
    }
  }
  if (null == tmp7.friendSuggestionName) {
    let friendSuggestionName = UserUtilsDefault.getName(tmp7.user);
    class T {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[5] = tmp7.friendSuggestionName;
    class F {
      constructor() {
        result = closure_4.set(closure_0);
        return;
      }
    }
    cResult[7] = friendSuggestionName;
  }
  friendSuggestionName = tmp7.friendSuggestionName;
  let obj = require("c");
}) : ((suggestedFriend) => {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const merged = Object.assign(suggestedFriend, Object.assign({ suggestedFriend: 0, added: 0, onAddSuggestion: 0 }));
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    sharedValue = suggestedFriend(onAddSuggestion[8]).useSharedValue(false);
    let items = [added, sharedValue];
    const effect = noop.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = noop.useMemo(() => {
      if (added) {
        let items = [];
      } else {
        const obj = { name: constants.ADD, label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["ed99+i"]);
        items = [obj];
      }
      return items;
    }, items1);
    let obj2 = suggestedFriend(onAddSuggestion[8]);
    const items2 = [AccessibilityStore];
    const stateFromStores = suggestedFriend(onAddSuggestion[10]).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = noop.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === constants.ADD) {
        const result = sharedValue.set(true);
        onAddSuggestion(suggestedFriend.user);
        return AddFriendsScreenUtils.addContactSuggestion(suggestedFriend.user);
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
    const obj3 = suggestedFriend(onAddSuggestion[10]);
    const suggestedContactNameForSuggestion = suggestedFriend(onAddSuggestion[12]).getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      let combined = "" + added(tmp3[7]).getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      let tmp15 = added;
      const obj6 = added(tmp3[7]);
    } else {
      tmp15 = added;
      combined = added(tmp3[7]).getUserTag(suggestedFriend.user);
      const obj5 = added(tmp3[7]);
    }
    const obj4 = {};
    const tmp2Result = suggestedFriend(onAddSuggestion[12]);
    const merged1 = Object.assign(merged);
    obj4.user = suggestedFriend.user;
    obj4.type = constants3.SUGGESTION;
    obj4.accessibilityActions = memo;
    obj4.onAccessibilityAction = callback;
    obj4.labelLineClamp = 1;
    obj4.subLabelLineClamp = 1;
    obj4.label = friendSuggestionName;
    const obj7 = { actioned: sharedValue, label: combined, secondaryLabel: null, actionStatus: null, animate: null };
    let formatToPlainStringResult;
    if (tmp12) {
      let intl = tmp2(tmp3[9]).intl;
      let str3;
      if (suggestedFriend != null) {
        str3 = suggestedFriend.mutualFriendsCount;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj8 = { count: str3 };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[9]).t.z7y34b, obj8);
    }
    obj7.secondaryLabel = formatToPlainStringResult;
    const intl2 = tmp2(tmp3[9]).intl;
    obj7.actionStatus = intl2.string(suggestedFriend(onAddSuggestion[9]).t.Kzyxm9);
    obj7.animate = !stateFromStores;
    obj4.subLabel = jsx(suggestedFriend(onAddSuggestion[13]).ActionStatusSubLabel, { actioned: sharedValue, label: combined, secondaryLabel: null, actionStatus: null, animate: null });
    const obj9 = {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          const obj2 = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: null };
          let ADD_FRIENDS_MODAL = merged.location;
          if (ADD_FRIENDS_MODAL == null) {
            ADD_FRIENDS_MODAL = constants2.ADD_FRIENDS_MODAL;
          }
          obj2.location = ADD_FRIENDS_MODAL;
          AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    };
    obj4.trailing = jsx(suggestedFriend(onAddSuggestion[15]).ContactSuggestionActions, {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          const obj2 = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: null };
          let ADD_FRIENDS_MODAL = merged.location;
          if (ADD_FRIENDS_MODAL == null) {
            ADD_FRIENDS_MODAL = constants2.ADD_FRIENDS_MODAL;
          }
          obj2.location = ADD_FRIENDS_MODAL;
          AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    });
    return jsx(tmp15(onAddSuggestion[16]), {});
  }
  friendSuggestionName = added(onAddSuggestion[7]).getName(suggestedFriend.user);
  let obj = added(onAddSuggestion[7]);
});