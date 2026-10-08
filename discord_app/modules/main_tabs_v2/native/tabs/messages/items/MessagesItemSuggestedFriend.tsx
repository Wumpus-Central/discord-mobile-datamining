// === Module 16268: MessagesItemSuggestedFriend ===

// Module 16268 (MessagesItemSuggestedFriend)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import _mod8600 from "module_8600" /* 8600 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10490 */;
import _mod16267 from "module_16267" /* 16267 */;
import FriendSuggestionUtils from "FriendSuggestionUtils" /* 16269 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: { paddingHorizontal: nativeDefault.space.PX_8 }, pressable: null, textContainer: null, avatar: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj.pressable = { borderRadius: nativeDefault.radii.md, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj4 = { borderRadius: nativeDefault.radii.md, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj.textContainer = { marginRight: nativeDefault.space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
let obj5 = { marginRight: nativeDefault.space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
obj.avatar = { marginRight: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function MessagesItemSuggestedFriendView(height) {
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  ({ addedPressed, setAddedPressed } = height);
  const tmp = closure_11();
  noop = tmp;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = noop.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = closure_4);
    items[2] = { height };
    return items;
  }, items);
  const callback = noop.useCallback(() => {
    asyncRequireImpl(8279, dependencyMap.paths).then((result) => result.default({ userId: suggestedFriend.user.id, localUser: suggestedFriend.user, location: "Messages Tab User Profile" }));
  }, items1);
  const items2 = [RelationshipStore];
  if (!addedPressed) {
    addedPressed = obj2.useStateFromStores(items2, () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = obj.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = util.intl;
        const obj2 = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(util.t.z7y34b, obj2);
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
        const obj5 = { userStatusLabel: null, suggestionName: null };
        const _HermesInternal2 = HermesInternal;
        obj5.userStatusLabel = "" + formatToPlainStringResult + str2;
        obj5.suggestionName = friendSuggestionName;
        return obj5;
      }
      friendSuggestionName = UserUtilsDefault.getName(suggestedFriend.user);
    }
    formatToPlainStringResult = UserUtilsDefault.getName(suggestedFriend.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions, setAddedPressed];
  const callback1 = obj.useCallback(() => {
    const user = suggestedFriend.user;
    AddFriendsScreenUtils.addContactSuggestion(user);
    AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" });
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = suggestedFriend;
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== user.user.id));
    setAddedPressed(true);
  }, items4);
  let obj3 = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: null };
  const obj4 = { style: tmp.avatar, user: suggestedFriend.user, guildId: "Array", size: height(suggestedFriend[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  const items5 = [closure_9(height(suggestedFriend[18]).Avatar, obj4), , ];
  let obj5 = { style: tmp.textContainer, children: null };
  const items6 = [closure_9(height(suggestedFriend[19]).Text, { lineClamp: 1, variant: "redesign/channel-title/semibold", maxFontSizeMultiplier: 2, color: "text-default", children: memo1.suggestionName }), ];
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = closure_9(height(suggestedFriend[19]).Text, { variant: "text-xs/medium", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: userStatusLabel });
  obj5.children = items6;
  items5[1] = closure_10(View, obj5);
  if (addedPressed) {
    const obj6 = { style: { marginHorizontal: 8 } };
    let tmp9Result = closure_9(tmp4(tmp5[21]).SendMessageIcon, obj6);
  } else {
    const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp4(tmp5[12]).intl;
    obj7.text = intl2.string(tmp4(tmp5[12]).t.OYkgVk);
    obj7.onPress = callback1;
    tmp9Result = closure_9(tmp4(tmp5[20]).Button, obj7);
  }
  items5[2] = tmp9Result;
  obj3.children = items5;
  return closure_10(height(suggestedFriend[17]).PressableHighlight, obj3);
});
fn(558);
let obj6 = { marginRight: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemSuggestedFriendFast(arg0) {
  const cResult = c.c(3);
  [tmp3, tmp4] = noop.useState(false);
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.addedPressed = tmp3;
  obj2.setAddedPressed = tmp4;
  const tmp7 = options(closure_12, obj2);
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (function MessagesItemSuggestedFriendFast(arg0) {
  const obj = {};
  [tmp2, tmp3] = noop.useState(false);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return options(closure_12, obj);
}));
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemSuggestedFriendFlash(suggestedFriend) {
  const cResult = c.c(6);
  if (cResult[0] !== suggestedFriend.suggestedFriend.user.id) {
    const items = [suggestedFriend.suggestedFriend.user.id];
    cResult[0] = suggestedFriend.suggestedFriend.user.id;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = _mod8600;
  [tmp6, tmp7] = _mod8600.useRecyclingState(false, tmp4);
  if (cResult[2] === tmp6) {
    if (cResult[3] === suggestedFriend) {
      if (cResult[4] === tmp7) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj2 = {};
  const merged = Object.assign(suggestedFriend);
  obj2.addedPressed = tmp6;
  obj2.setAddedPressed = tmp7;
  const tmp10 = options(closure_12, obj2);
  cResult[2] = tmp6;
  cResult[3] = suggestedFriend;
  cResult[4] = tmp7;
  cResult[5] = tmp10;
  tmp8 = tmp10;
  const tmp5 = _slicedToArray(_mod8600.useRecyclingState(false, tmp4), 2);
}) : (function MessagesItemSuggestedFriendFlash(suggestedFriend) {
  const items = [suggestedFriend.suggestedFriend.user.id];
  const obj2 = {};
  [tmp2, tmp3] = _mod8600.useRecyclingState(false, items);
  const merged = Object.assign(suggestedFriend);
  obj2.addedPressed = tmp2;
  obj2.setAddedPressed = tmp3;
  return options(closure_12, obj2);
}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const sum = scaleTextLineHeightResult + useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + nativeDefault.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memoResult1;
export const MessagesItemSuggestedFriendLegend = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemSuggestedFriendLegend(arg0) {
  const cResult = c.c(4);
  [tmp3, tmp4] = _mod16267.useRecyclingState(false);
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      if (cResult[2] === tmp4) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.addedPressed = tmp3;
  obj3.setAddedPressed = tmp4;
  const tmp7 = options(closure_12, obj3);
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : (function MessagesItemSuggestedFriendLegend(arg0) {
  const obj2 = {};
  [tmp2, tmp3] = _mod16267.useRecyclingState(false);
  const merged = Object.assign(arg0);
  obj2.addedPressed = tmp2;
  obj2.setAddedPressed = tmp3;
  return options(closure_12, obj2);
}));