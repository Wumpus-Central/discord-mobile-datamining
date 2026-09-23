// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../../_runtime/01980_asyncRequireImpl.js";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import _mod9073 from "../../../../../../../discord_common/js/packages/flash-list/index.js";
import useScaledTextLineHeight from "../../../../../screen/native/useScaledTextLineHeight.android.tsx";
import _mod16444 from "../../../../../../../_runtime/metro/16444__.js";
import FriendSuggestionUtils from "../../../../../friend_suggestions/FriendSuggestionUtils.tsx";
import AddFriendsScreenUtils from "../../../friends/components/AddFriendsScreenUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4827);
let obj = {
  container: { paddingHorizontal: nativeDefault.space.PX_8 },
  pressable: null,
  textContainer: null,
  avatar: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj.pressable = {
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
};
const obj4 = {
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
};
obj.textContainer = {
  marginRight: nativeDefault.space.PX_8,
  flexDirection: "column",
  alignSelf: "center",
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 1,
};
let obj5 = {
  marginRight: nativeDefault.space.PX_8,
  flexDirection: "column",
  alignSelf: "center",
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 1,
};
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
    const items = [, ,];
    ({ container: arr[0], pressable: arr[1] } = closure_4);
    items[2] = { height };
    return items;
  }, items);
  const callback = noop.useCallback(() => {
    asyncRequireImpl(8523, dependencyMap.paths).then((result) =>
      result.default({
        userId: suggestedFriend.user.id,
        localUser: suggestedFriend.user,
        location: "Messages Tab User Profile",
      }),
    );
  }, items1);
  const items2 = [RelationshipStore];
  if (!addedPressed) {
    addedPressed = obj2.useStateFromStores(
      items2,
      () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING,
    );
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
        const suggestedContactNameForSuggestion = FriendSuggestionUtils.getSuggestedContactNameForSuggestion(
          friendSuggestionName,
          suggestedFriend,
        );
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
    AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, {
      suggested_user_id: user.id,
      suggestion_source: suggestedFriend.source,
      location: "Messages Tab",
    });
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = suggestedFriend;
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== user.user.id));
    setAddedPressed(true);
  }, items4);
  let obj3 = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: null };
  obj2 = height(suggestedFriend[11]);
  const items5 = [
    closure_9(height(suggestedFriend[18]).Avatar, {
      style: tmp.avatar,
      user: suggestedFriend.user,
      guildId: "Array",
      size: height(suggestedFriend[18]).AvatarSizes.REFRESH_MEDIUM_32,
    }),
    ,
  ];
  let obj5 = { style: tmp.textContainer, children: null };
  const items6 = [
    closure_9(height(suggestedFriend[19]).Text, {
      lineClamp: 1,
      variant: "redesign/channel-title/semibold",
      maxFontSizeMultiplier: 2,
      color: "text-default",
      children: memo1.suggestionName,
    }),
  ];
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = closure_9(height(suggestedFriend[19]).Text, {
    variant: "text-xs/medium",
    color: "text-default",
    lineClamp: 1,
    maxFontSizeMultiplier: 2,
    children: userStatusLabel,
  });
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
let obj6 = { marginRight: nativeDefault.space.PX_8 };
const memoResult = noop.memo((arg0) => {
  const obj = {};
  [tmp2, tmp3] = noop.useState(false);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return React7(closure_12, obj);
});
const memoResult1 = noop.memo((suggestedFriend) => {
  const items = [suggestedFriend.suggestedFriend.user.id];
  const obj2 = {};
  [tmp2, tmp3] = _mod9073.useRecyclingState(false, items);
  const merged = Object.assign(suggestedFriend);
  obj2.addedPressed = tmp2;
  obj2.setAddedPressed = tmp3;
  return React7(closure_12, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx",
);

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight(
    "redesign/channel-title/semibold",
    fontScale,
  );
  const sum = scaleTextLineHeightResult + useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + nativeDefault.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memoResult1;
export const MessagesItemSuggestedFriendLegend = noop.memo((arg0) => {
  const obj2 = {};
  [tmp2, tmp3] = _mod16444.useRecyclingState(false);
  const merged = Object.assign(arg0);
  obj2.addedPressed = tmp2;
  obj2.setAddedPressed = tmp3;
  return React7(closure_12, obj2);
});
