// discord_app/modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let React;
  let first;
  let callback;
  let token;
  let token1;
  let memo;
  const tmp = callback();
  React = tmp;
  const tmp2 = flag(React.useState(() => {
    if (mentionCount > 0) {
      let BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[4]).BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[4]).BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  first = tmp2[0];
  callback = tmp2[1];
  token = mentionCount(joinRequestState[5]).useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = mentionCount(joinRequestState[5]);
  token1 = mentionCount(joinRequestState[5]).useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp.bottomRightBadge, token1];
  memo = React.useMemo(() => {
    const items = [bottomRightBadge.bottomRightBadge, { bottom: token1 - mentionCount(joinRequestState[4]).BADGE_PADDING }];
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token];
  return React.useMemo(() => {
    if (mentionCount > 0) {
      let obj = { position: "bottom-right", containerSize: null, width: null };
      obj[1] = token;
      obj[2] = first - 2 * mentionCount(joinRequestState[4]).BADGE_PADDING;
      const tmp20Result = isMentionLowImportance(joinRequestState[7])(obj);
      obj = { badge: null, cutout: null, cutouts: null };
      obj1 = { maskStyle: null, value: null, isMentionLowImportance: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", onLayout: null };
      obj1[0] = memo;
      obj1[1] = tmp;
      obj1[2] = isMentionLowImportance;
      obj1[5] = function onLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        if (closure_5 !== layout.width) {
          callback(layout.width);
        }
      };
      obj[0] = first(mentionCount(joinRequestState[4]).MaskedBadge, obj1);
      obj[1] = tmp20Result;
      const items = [tmp20Result];
      obj[2] = items;
      return obj;
    } else if (null != joinRequestState) {
      const obj2 = { position: "bottom-right", containerSize: null };
      obj2[1] = token;
      const tmp13 = isMentionLowImportance(joinRequestState[7])(obj2);
      const obj3 = { badge: null, cutout: null, cutouts: null };
      const obj4 = { style: null, joinRequestState: null };
      obj4[0] = memo;
      obj4[1] = tmp30;
      obj3[0] = first(isMentionLowImportance(joinRequestState[8]), obj4);
      obj3[1] = tmp13;
      const items1 = [tmp13];
      obj3[2] = items1;
      return obj3;
    } else if (flag) {
      obj = { position: "bottom-right", containerSize: null };
      obj[1] = token;
      const tmp5 = isMentionLowImportance(joinRequestState[7])(obj);
      const obj5 = { badge: null, cutout: null, cutouts: null };
      const obj6 = { style: null };
      obj6[0] = memo;
      obj5[0] = first(isMentionLowImportance(joinRequestState[9]), obj6);
      obj5[1] = tmp5;
      const items2 = [tmp5];
      obj5[2] = items2;
      return obj5;
    } else {
      return { badge: null, cutout: "Array", cutouts: "accessibilityLabel" };
    }
  }, items1);
};