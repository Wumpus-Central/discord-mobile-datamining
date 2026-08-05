// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "Text";
import { View } from "PressableBase";
import upsertRelationship from "upsertRelationship";
import ME from "ME";
import jsxProd from "SendMessageIcon";
import createCacheKey from "createCacheKey";
import { toNativeHorizontalOffset } from "../../../../../../../_runtime/15051_toNativeHorizontalOffset.js";
import { noop } from "../../../../../../../discord_common/js/packages/flash-list/index.js";
import { Themes } from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../../screen/native/useScaledTextLineHeight.android.tsx";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ AnalyticEvents: error, RelationshipTypes: metroImportAll } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { container: null, pressable: null, textContainer: null, avatar: null };
obj = { paddingHorizontal: require("Themes").space.PX_8 };
obj[0] = obj;
createCacheKey = { borderRadius: require("Themes").radii.md, flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { marginRight: require("Themes").space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
let obj2 = { marginRight: require("Themes").space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
obj[3] = { marginRight: require("Themes").space.PX_8 };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo(function MessagesItemSuggestedFriendView(height) {
  let addedPressed;
  let setAddedPressed;
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  ({ addedPressed, setAddedPressed } = height);
  let importAllResult;
  const tmp = callback3();
  importAllResult = tmp;
  let obj = importAllResult;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = importAllResult.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = c4);
    items[2] = { height };
    return items;
  }, items);
  const callback = importAllResult.useCallback(() => {
    height(suggestedFriend[10])(suggestedFriend[9], suggestedFriend.paths).then((arg0) => arg0.default({ userId: closure_2.user.id, localUser: closure_2.user, location: "Messages Tab User Profile" }));
  }, items1);
  let obj1 = height(suggestedFriend[11]);
  const items2 = [upsertRelationship];
  if (!addedPressed) {
    addedPressed = obj1.useStateFromStores(items2, () => outer1_6.getRelationshipType(suggestedFriend.user.id) === outer1_8.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = obj.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      if (tmp.mutualFriendsCount > 0) {
        const intl = height(suggestedFriend[12]).intl;
        let obj = { count: null };
        obj[0] = tmp.mutualFriendsCount;
        let formatToPlainStringResult = intl.formatToPlainString(height(suggestedFriend[12]).t.z7y34b, obj);
      }
      if (null != tmp.friendSuggestionName) {
        if (tmp.friendSuggestionName.length > 0) {
          let friendSuggestionName = tmp.friendSuggestionName;
        }
        const suggestedContactNameForSuggestion = height(suggestedFriend[14]).getSuggestedContactNameForSuggestion(friendSuggestionName, tmp);
        let str2 = "";
        if (null != suggestedContactNameForSuggestion) {
          const _HermesInternal = HermesInternal;
          str2 = " \u00B7 " + suggestedContactNameForSuggestion;
        }
        obj = { userStatusLabel: null, suggestionName: null };
        const _HermesInternal2 = HermesInternal;
        obj[0] = "" + formatToPlainStringResult + str2;
        obj[1] = friendSuggestionName;
        return obj;
      }
      friendSuggestionName = onAddFriendSuggestions(suggestedFriend[13]).getName(tmp.user);
      const obj3 = onAddFriendSuggestions(suggestedFriend[13]);
    }
    obj = onAddFriendSuggestions(suggestedFriend[13]);
    formatToPlainStringResult = obj.getName(tmp.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions, setAddedPressed];
  const callback1 = obj.useCallback(() => {
    const user = suggestedFriend.user;
    let obj = height(suggestedFriend[15]);
    obj.addContactSuggestion(user);
    obj = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    onAddFriendSuggestions(suggestedFriend[16]).track(outer1_7.FRIEND_SUGGESTION_ADDED, obj);
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_2;
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== user.user.id));
    setAddedPressed(true);
  }, items4);
  obj = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: null };
  obj = { style: tmp.avatar, user: suggestedFriend.user, guildId: "Array", size: "\u{1F9DB}\u{1F3FE}" };
  obj[3] = height(suggestedFriend[18]).AvatarSizes.REFRESH_MEDIUM_32;
  const items5 = [callback2(height(suggestedFriend[18]).Avatar, obj), , ];
  obj1 = { style: tmp.textContainer, children: null };
  const items6 = [callback2(height(suggestedFriend[19]).Text, { lineClamp: 1, variant: "redesign/channel-title/semibold", maxFontSizeMultiplier: 2, color: "text-default", children: memo1.suggestionName }), ];
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = callback2(height(suggestedFriend[19]).Text, { variant: "text-xs/medium", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: userStatusLabel });
  obj1[1] = items6;
  items5[1] = closure_10(View, obj1);
  if (addedPressed) {
    const obj2 = { style: null };
    obj2[0] = { marginHorizontal: 8 };
    let tmp9Result = tmp9(tmp4(tmp5[21]).SendMessageIcon, obj2);
  } else {
    let obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp4(tmp5[12]).intl;
    obj3[2] = intl2.string(tmp4(tmp5[12]).t.OYkgVk);
    obj3[3] = callback1;
    tmp9Result = tmp9(tmp4(tmp5[20]).Button, obj3);
  }
  items5[2] = tmp9Result;
  obj[4] = items5;
  return closure_10(height(suggestedFriend[17]).PressableHighlight, obj);
});
let obj3 = { marginRight: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo((arg0) => {
  let tmp2;
  let tmp3;
  const obj = {};
  [tmp2, tmp3] = callback(importAllResult.useState(false), 2);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return callback2(closure_12, obj);
});
const memoResult1 = importAllResult.memo((suggestedFriend) => {
  let tmp2;
  let tmp3;
  let obj = noop;
  const items = [suggestedFriend.suggestedFriend.user.id];
  obj = {};
  [tmp2, tmp3] = callback(obj.useRecyclingState(false, items), 2);
  const merged = Object.assign(suggestedFriend);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return callback2(closure_12, obj);
});
const memoResult2 = importAllResult.memo((arg0) => {
  let tmp2;
  let tmp3;
  let obj = toNativeHorizontalOffset;
  obj = {};
  [tmp2, tmp3] = callback(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  obj.addedPressed = tmp2;
  obj.setAddedPressed = tmp3;
  return callback2(closure_12, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const obj = map;
  const scaleTextLineHeightResult = map.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const sum = scaleTextLineHeightResult + map.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + Themes.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memoResult1;
export const MessagesItemSuggestedFriendLegend = memoResult2;