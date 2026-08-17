// discord_app/modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ AnalyticEvents: c5, InstantInviteSources: closure_6, RelationshipTypes: error } = ME);
let closure_9 = { ADD: "add" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = function ContactSuggestionRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const merged = Object.assign(suggestedFriend, Object.create(null));
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    obj1 = suggestedFriend(onAddSuggestion[5]);
    sharedValue = obj1.useSharedValue(false);
    let items = [added, sharedValue];
    const effect = merged.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = merged.useMemo(() => {
      if (added) {
        let items = [];
      } else {
        const obj = { name: null, label: null };
        obj[0] = closure_1_9.ADD;
        const intl = suggestedFriend(onAddSuggestion[6]).intl;
        obj[1] = intl.string(suggestedFriend(onAddSuggestion[6]).t["ed99+i"]);
        items = [obj];
      }
      return items;
    }, items1);
    let obj2 = suggestedFriend(onAddSuggestion[7]);
    const items2 = [sharedValue];
    const stateFromStores = obj2.useStateFromStores(items2, () => sharedValue.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = merged.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === closure_1_9.ADD) {
        const result = sharedValue.set(true);
        onAddSuggestion(suggestedFriend.user);
        return suggestedFriend(onAddSuggestion[8]).addContactSuggestion(suggestedFriend.user);
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
    let obj = {};
    const tmp2Result = suggestedFriend(onAddSuggestion[9]);
    const merged1 = Object.assign(merged);
    obj.user = suggestedFriend.user;
    obj.type = constants.SUGGESTION;
    obj.accessibilityActions = memo;
    obj.onAccessibilityAction = callback;
    obj.labelLineClamp = 1;
    obj.subLabelLineClamp = 1;
    obj.label = friendSuggestionName;
    obj = { actioned: null, label: null, secondaryLabel: null, actionStatus: null, animate: null };
    obj[0] = sharedValue;
    obj[1] = combined;
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
      obj1 = { count: null };
      obj1[0] = str3;
      formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[6]).t.z7y34b, obj1);
    }
    obj[2] = formatToPlainStringResult;
    const intl2 = tmp2(tmp3[6]).intl;
    obj[3] = intl2.string(suggestedFriend(onAddSuggestion[6]).t.Kzyxm9);
    obj[4] = !stateFromStores;
    obj.subLabel = jsx(suggestedFriend(onAddSuggestion[11]).ActionStatusSubLabel, { actioned: null, label: null, secondaryLabel: null, actionStatus: null, animate: null });
    obj2 = { user: null, added: null, onAddSuggestion: null, animate: null };
    obj2[0] = suggestedFriend.user;
    obj2[1] = sharedValue;
    obj2[2] = function onAddSuggestion(id) {
      let obj = added(onAddSuggestion[13]);
      obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: null };
      let ADD_FRIENDS_MODAL = merged.location;
      if (ADD_FRIENDS_MODAL == null) {
        ADD_FRIENDS_MODAL = closure_1_6.ADD_FRIENDS_MODAL;
      }
      obj[2] = ADD_FRIENDS_MODAL;
      obj.track(closure_1_5.FRIEND_SUGGESTION_ADDED, obj);
      onAddSuggestion(id);
    };
    obj2[3] = !stateFromStores;
    obj.trailing = jsx(suggestedFriend(onAddSuggestion[12]).ContactSuggestionActions, { user: null, added: null, onAddSuggestion: null, animate: null });
    return jsx(tmp15(onAddSuggestion[10]), { actioned: null, label: null, secondaryLabel: null, actionStatus: null, animate: null });
  }
  obj = added(onAddSuggestion[4]);
  friendSuggestionName = obj.getName(suggestedFriend.user);
};