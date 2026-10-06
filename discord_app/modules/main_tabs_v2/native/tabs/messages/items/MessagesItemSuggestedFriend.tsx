// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../../_runtime/01987_asyncRequire.js";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import defaultMVCPConfig from "../../../../../../../discord_common/js/packages/flash-list/index.js";
import useScaledTextLineHeight from "../../../../../screen/native/useScaledTextLineHeight.android.tsx";
import LegendList from "../../../../../../../_runtime/16007_LegendList.js";
import FriendSuggestionUtils from "../../../../../friend_suggestions/FriendSuggestionUtils.tsx";
import AddFriendsScreenUtils from "../../../friends/components/AddFriendsScreenUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import Constants from "../../../../../../Constants.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, pressable: obj3, textContainer: obj4, avatar: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = {
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
};
obj4 = {
  marginRight: nativeDefault.space.PX_8,
  flexDirection: "column",
  alignSelf: "center",
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 1,
};
obj5 = { marginRight: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let closure_12 = react.memo(function MessagesItemSuggestedFriendView(height) {
  let addedPressed;
  let closure_4;
  let intl2;
  let items5;
  let items6;
  let setAddedPressed;
  let tmp9Result;
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  ({ addedPressed, setAddedPressed } = height);
  const tmp = closure_11();
  react = tmp;
  let obj = react;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = react.useMemo(() => {
    const items = [, ,];
    ({ container: arr[0], pressable: arr[1] } = closure_4);
    const obj = { height };
    items[2] = obj;
    return items;
  }, items);
  const callback = react.useCallback(() => {
    const promise = asyncRequire(7861, dependencyMap.paths);
    promise.then((result) => {
      const obj = {
        userId: suggestedFriend.user.id,
        localUser: suggestedFriend.user,
        location: "Messages Tab User Profile",
      };
      return result.default(obj);
    });
  }, items1);
  let obj2 = height(suggestedFriend[11]);
  const items2 = [RelationshipStore];
  if (!addedPressed) {
    addedPressed = obj2.useStateFromStores(
      items2,
      () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === metroImportAll.PENDING_OUTGOING,
    );
  }
  const items3 = [suggestedFriend];
  const memo1 = obj.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      let formatToPlainStringResult;
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = intl3.intl;
        const obj2 = { count: suggestedFriend.mutualFriendsCount };
        formatToPlainStringResult = intl.formatToPlainString(intl3.t.z7y34b, obj2);
      }
      if (null != suggestedFriend.friendSuggestionName) {
        let friendSuggestionName;
        if (suggestedFriend.friendSuggestionName.length > 0) {
          friendSuggestionName = suggestedFriend.friendSuggestionName;
        }
        const obj4 = FriendSuggestionUtils;
        const suggestedContactNameForSuggestion = obj4.getSuggestedContactNameForSuggestion(
          friendSuggestionName,
          suggestedFriend,
        );
        let str2 = "";
        if (null != suggestedContactNameForSuggestion) {
          const _HermesInternal = HermesInternal;
          str2 = " \u00B7 " + suggestedContactNameForSuggestion;
        }
        const _HermesInternal2 = HermesInternal;
        const obj5 = { userStatusLabel: "" + formatToPlainStringResult + str2, suggestionName: friendSuggestionName };
        return obj5;
      }
      const obj3 = UserUtilsDefault;
      friendSuggestionName = obj3.getName(suggestedFriend.user);
    }
    const obj = UserUtilsDefault;
    formatToPlainStringResult = obj.getName(suggestedFriend.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions, setAddedPressed];
  const suggestionName = memo1.suggestionName;
  const callback1 = obj.useCallback(() => {
    const user = suggestedFriend.user;
    const obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    obj2.track(metroImportDefault.FRIEND_SUGGESTION_ADDED, obj3);
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(items, arg0, 0)] = suggestedFriend;
      return items;
    });
    onAddFriendSuggestions((arr) => {
      let user;
      return arr.filter((user) => user.user.id !== user.user.id);
    });
    setAddedPressed(true);
  }, items4);
  let obj3 = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: items5 };
  const PressableHighlight = tmp4(tmp5[17]).PressableHighlight;
  let obj4 = {
    style: tmp.avatar,
    user: suggestedFriend.user,
    guildId: "Array",
    size: tmp4(tmp5[18]).AvatarSizes.REFRESH_MEDIUM_32,
  };
  const Avatar = tmp4(tmp5[18]).Avatar;
  items5 = [closure_9(Avatar, obj4), ,];
  let obj5 = { style: tmp.textContainer, children: items6 };
  items6 = [
    closure_9(tmp4(tmp5[19]).Text, {
      lineClamp: 1,
      variant: "redesign/channel-title/semibold",
      maxFontSizeMultiplier: 2,
      color: "text-default",
      children: suggestionName,
    }),
  ];
  const Text = tmp4(tmp5[19]).Text;
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = closure_9(Text, {
    variant: "text-xs/medium",
    color: "text-default",
    lineClamp: 1,
    maxFontSizeMultiplier: 2,
    children: userStatusLabel,
  });
  items5[1] = closure_10(View, obj5);
  if (addedPressed) {
    const obj6 = { style: { marginHorizontal: 8 } };
    tmp9Result = closure_9(tmp4(tmp5[21]).SendMessageIcon, obj6);
  } else {
    const obj7 = {
      variant: "secondary",
      size: "sm",
      text: intl2.string(height(suggestedFriend[12]).t.OYkgVk),
      onPress: callback1,
    };
    const Button = tmp4(tmp5[20]).Button;
    intl2 = tmp4(tmp5[12]).intl;
    tmp9Result = closure_9(Button, obj7);
  }
  items5[2] = tmp9Result;
  return closure_10(PressableHighlight, obj3);
});
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let tmp3;
        let tmp4;
        const obj = react2;
        const cResult = obj.c(3);
        [tmp3, tmp4] = react.useState(false);
        _slicedToArray(react.useState(false), 2);
        if (cResult[0] === tmp3) {
          let tmp5;
          if (cResult[1] === arg0) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj2 = { addedPressed: tmp3, setAddedPressed: tmp4 };
        const merged = Object.assign(arg0);
        const tmp7 = React4(closure_12, obj2);
        cResult[0] = tmp3;
        cResult[1] = arg0;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
    : (arg0) => {
        let tmp2;
        let tmp3;
        const obj = { addedPressed: tmp2, setAddedPressed: tmp3 };
        [tmp2, tmp3] = react.useState(false);
        _slicedToArray(react.useState(false), 2);
        const merged = Object.assign(arg0);
        return React4(closure_12, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo3 = react.memo;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (suggestedFriend) => {
        let tmp4;
        let tmp6;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(6);
        if (cResult[0] !== suggestedFriend.suggestedFriend.user.id) {
          const items = [suggestedFriend.suggestedFriend.user.id];
          cResult[0] = suggestedFriend.suggestedFriend.user.id;
          cResult[1] = items;
          tmp4 = items;
        } else {
          tmp4 = cResult[1];
        }
        const tmpResult = defaultMVCPConfig;
        [tmp6, tmp7] = tmpResult.useRecyclingState(false, tmp4);
        _slicedToArray(tmpResult.useRecyclingState(false, tmp4), 2);
        if (cResult[2] === tmp6) {
          if (cResult[3] === suggestedFriend) {
            let tmp8;
            if (cResult[4] === tmp7) {
              tmp8 = cResult[5];
            }
            return tmp8;
          }
        }
        const obj2 = { addedPressed: tmp6, setAddedPressed: tmp7 };
        const merged = Object.assign(suggestedFriend);
        const tmp10 = React4(closure_12, obj2);
        cResult[2] = tmp6;
        cResult[3] = suggestedFriend;
        cResult[4] = tmp7;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
    : (suggestedFriend) => {
        let tmp2;
        let tmp3;
        const items = [suggestedFriend.suggestedFriend.user.id];
        const obj = defaultMVCPConfig;
        const obj2 = { addedPressed: tmp2, setAddedPressed: tmp3 };
        [tmp2, tmp3] = obj.useRecyclingState(false, items);
        _slicedToArray(obj.useRecyclingState(false, items), 2);
        const merged = Object.assign(suggestedFriend);
        return React4(closure_12, obj2);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let tmp3;
        let tmp4;
        const obj = react2;
        const cResult = obj.c(4);
        const obj2 = LegendList;
        [tmp3, tmp4] = obj2.useRecyclingState(false);
        _slicedToArray(obj2.useRecyclingState(false), 2);
        if (cResult[0] === tmp3) {
          if (cResult[1] === arg0) {
            let tmp5;
            if (cResult[2] === tmp4) {
              tmp5 = cResult[3];
            }
            return tmp5;
          }
        }
        const obj3 = { addedPressed: tmp3, setAddedPressed: tmp4 };
        const merged = Object.assign(arg0);
        const tmp7 = React4(closure_12, obj3);
        cResult[0] = tmp3;
        cResult[1] = arg0;
        cResult[2] = tmp4;
        cResult[3] = tmp7;
        tmp5 = tmp7;
      }
    : (arg0) => {
        let tmp2;
        let tmp3;
        const obj = LegendList;
        const obj2 = { addedPressed: tmp2, setAddedPressed: tmp3 };
        [tmp2, tmp3] = obj.useRecyclingState(false);
        _slicedToArray(obj.useRecyclingState(false), 2);
        const merged = Object.assign(arg0);
        return React4(closure_12, obj2);
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx",
);

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const obj2 = useScaledTextLineHeight;
  const sum = scaleTextLineHeightResult + obj2.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + nativeDefault.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memo2Result;
export const MessagesItemSuggestedFriendLegend = memo3Result;
