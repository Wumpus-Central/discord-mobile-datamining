// === Module 16042: MessagesItemSuggestedFriend ===

// Module 16042 (MessagesItemSuggestedFriend)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import _mod8874 from "module_8874" /* 8874 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import _mod16041 from "module_16041" /* 16041 */;
import FriendSuggestionUtils from "FriendSuggestionUtils" /* 16043 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16044 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let obj = { container: null, pressable: null, textContainer: null, avatar: null };
obj = { paddingHorizontal: nativeDefault.space.PX_8 };
obj.container = obj;
const createStyles = { borderRadius: nativeDefault.radii.md, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj.pressable = createStyles;
obj.textContainer = { marginRight: nativeDefault.space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
let obj2 = { marginRight: nativeDefault.space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
obj.avatar = { marginRight: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function MessagesItemSuggestedFriendView(height) {
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  ({ addedPressed, setAddedPressed } = height);
  const tmp = closure_11();
  noop = tmp;
  let obj = noop;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = noop.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = closure_4);
    items[2] = { height };
    return items;
  }, items);
  const callback = noop.useCallback(() => {
    asyncRequireImpl(8179, dependencyMap.paths).then((result) => result.default({ userId: suggestedFriend.user.id, localUser: suggestedFriend.user, location: "Messages Tab User Profile" }));
  }, items1);
  let obj1 = height(suggestedFriend[11]);
  const items2 = [RelationshipStore];
  if (!addedPressed) {
    addedPressed = obj1.useStateFromStores(items2, () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = obj.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = util.intl;
        let obj = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(util.t.z7y34b, obj);
      }
      if (null != suggestedFriend.friendSuggestionName) {
        if (suggestedFriend.friendSuggestionName.length > 0) {
          let friendSuggestionName = suggestedFriend.friendSuggestionName;
        }
        const suggestedContactNameForSuggestion = FriendSuggestionUtils.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
        let str2 = "";
        if (null != suggestedContactNameForSuggestion) {
          const _HermesInternal = HermesInternal;
          str2 = " \u00B7 " + suggestedContactNameForSuggestion;
        }
        obj = { userStatusLabel: null, suggestionName: null };
        const _HermesInternal2 = HermesInternal;
        obj.userStatusLabel = "" + formatToPlainStringResult + str2;
        obj.suggestionName = friendSuggestionName;
        return obj;
      }
      friendSuggestionName = UserUtilsDefault.getName(suggestedFriend.user);
    }
    obj = UserUtilsDefault;
    formatToPlainStringResult = obj.getName(suggestedFriend.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions, setAddedPressed];
  const callback1 = obj.useCallback(() => {
    const user = suggestedFriend.user;
    let obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
    obj = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, obj);
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = suggestedFriend;
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== user.user.id));
    setAddedPressed(true);
  }, items4);
  obj = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: null };
  obj = { style: tmp.avatar, user: suggestedFriend.user, guildId: "Array", size: height(suggestedFriend[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  const items5 = [closure_9(height(suggestedFriend[18]).Avatar, obj), , ];
  obj1 = { style: tmp.textContainer, children: null };
  const items6 = [closure_9(height(suggestedFriend[19]).Text, { lineClamp: 1, variant: "redesign/channel-title/semibold", maxFontSizeMultiplier: 2, color: "text-default", children: memo1.suggestionName }), ];
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = closure_9(height(suggestedFriend[19]).Text, { variant: "text-xs/medium", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: userStatusLabel });
  obj1.children = items6;
  items5[1] = closure_10(View, obj1);
  if (addedPressed) {
    const obj2 = { style: { marginHorizontal: 8 } };
    let tmp9Result = closure_9(tmp4(tmp5[21]).SendMessageIcon, obj2);
  } else {
    let obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp4(tmp5[12]).intl;
    obj3.text = intl2.string(tmp4(tmp5[12]).t.OYkgVk);
    obj3.onPress = callback1;
    tmp9Result = closure_9(tmp4(tmp5[20]).Button, obj3);
  }
  items5[2] = tmp9Result;
  obj.children = items5;
  return closure_10(height(suggestedFriend[17]).PressableHighlight, obj);
});
let obj3 = { marginRight: nativeDefault.space.PX_8 };
const memoResult = noop.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = _slicedToArray(noop.useState(false), 2);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return React7(closure_12, obj);
});
const memoResult1 = noop.memo((suggestedFriend) => {
  const items = [suggestedFriend.suggestedFriend.user.id];
  const obj = {};
  [tmp2, tmp3] = _slicedToArray(obj.useRecyclingState(false, items), 2);
  const merged = Object.assign(suggestedFriend);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return React7(closure_12, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const sum = scaleTextLineHeightResult + useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + nativeDefault.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memoResult1;
export const MessagesItemSuggestedFriendLegend = noop.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = _slicedToArray(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return React7(closure_12, obj);
});