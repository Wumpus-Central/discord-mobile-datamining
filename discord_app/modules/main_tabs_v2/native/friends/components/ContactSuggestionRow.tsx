// === Module 17227: ContactSuggestionRow ===

// Module 17227 (ContactSuggestionRow)
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16377 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, InstantInviteSources: metroRequire, RelationshipTypes: closure_7 } = Constants);
const jsx = fn(21).jsx;
let closure_9 = { ADD: "add" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = function ContactSuggestionRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const merged = Object.assign(suggestedFriend, Object.assign({ suggestedFriend: 0, added: 0, onAddSuggestion: 0 }));
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    sharedValue = suggestedFriend(onAddSuggestion[5]).useSharedValue(false);
    let items = [added, sharedValue];
    const effect = merged.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = merged.useMemo(() => {
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
    let obj2 = suggestedFriend(onAddSuggestion[5]);
    const items2 = [sharedValue];
    const stateFromStores = suggestedFriend(onAddSuggestion[7]).useStateFromStores(items2, () => sharedValue.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = merged.useCallback((nativeEvent) => {
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
    const obj3 = suggestedFriend(onAddSuggestion[7]);
    const suggestedContactNameForSuggestion = suggestedFriend(onAddSuggestion[9]).getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      let combined = "" + added(tmp3[4]).getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      let tmp15 = added;
      const obj6 = added(tmp3[4]);
    } else {
      tmp15 = added;
      combined = added(tmp3[4]).getUserTag(suggestedFriend.user);
      const obj5 = added(tmp3[4]);
    }
    const obj4 = {};
    const tmp2Result = suggestedFriend(onAddSuggestion[9]);
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
      let intl = tmp2(tmp3[6]).intl;
      let str3;
      if (suggestedFriend != null) {
        str3 = suggestedFriend.mutualFriendsCount;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj8 = { count: str3 };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[6]).t.z7y34b, obj8);
    }
    obj7.secondaryLabel = formatToPlainStringResult;
    const intl2 = tmp2(tmp3[6]).intl;
    obj7.actionStatus = intl2.string(suggestedFriend(onAddSuggestion[6]).t.Kzyxm9);
    obj7.animate = !stateFromStores;
    obj4.subLabel = jsx(suggestedFriend(onAddSuggestion[11]).ActionStatusSubLabel, { actioned: sharedValue, label: combined, secondaryLabel: null, actionStatus: null, animate: null });
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
    obj4.trailing = jsx(suggestedFriend(onAddSuggestion[12]).ContactSuggestionActions, {
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
    return jsx(tmp15(onAddSuggestion[10]), {});
  }
  friendSuggestionName = added(onAddSuggestion[4]).getName(suggestedFriend.user);
  let obj = added(onAddSuggestion[4]);
};