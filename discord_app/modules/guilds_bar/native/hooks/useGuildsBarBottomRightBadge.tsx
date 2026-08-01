// === Module 14971: useGuildsBarBottomRightBadge ===

// Module 14971 (useGuildsBarBottomRightBadge)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let prop = mentionCount.lurkerPreviewExpiresAt;
  if (prop === undefined) {
    prop = null;
  }
  let c5;
  let hasExpired;
  let first;
  let closure_8;
  let token;
  let token1;
  let memo;
  const tmp2 = hasExpired();
  c5 = tmp2;
  hasExpired = mentionCount(joinRequestState[4]).useHasExpired(prop);
  const tmp4 = flag(prop.useState(() => {
    if (mentionCount > 0) {
      let BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  first = tmp4[0];
  closure_8 = tmp4[1];
  let obj = mentionCount(joinRequestState[4]);
  token = mentionCount(joinRequestState[6]).useToken(isMentionLowImportance(joinRequestState[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = mentionCount(joinRequestState[6]);
  token1 = mentionCount(joinRequestState[6]).useToken(isMentionLowImportance(joinRequestState[7]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp2.bottomRightBadge, token1];
  memo = prop.useMemo(() => {
    const items = [_undefined.bottomRightBadge, { bottom: token1 - mentionCount(joinRequestState[5]).BADGE_PADDING }];
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token, prop, hasExpired];
  return prop.useMemo(() => {
    if (mentionCount > 0) {
      let obj = { position: "bottom-right", containerSize: null, width: null };
      obj[1] = token;
      obj[2] = first - 2 * mentionCount(joinRequestState[5]).BADGE_PADDING;
      const tmp29Result = isMentionLowImportance(joinRequestState[8])(obj);
      obj = { badge: null, cutout: null, cutouts: null };
      const obj1 = { maskStyle: null, value: null, isMentionLowImportance: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", onLayout: null };
      obj1[0] = memo;
      obj1[1] = tmp;
      obj1[2] = isMentionLowImportance;
      obj1[5] = function onLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        if (closure_7 !== layout.width) {
          callback(layout.width);
        }
      };
      obj[0] = _undefined(mentionCount(joinRequestState[5]).MaskedBadge, obj1);
      obj[1] = tmp29Result;
      const items = [tmp29Result];
      obj[2] = items;
      return obj;
    } else if (null != joinRequestState) {
      const obj2 = { position: "bottom-right", containerSize: null };
      obj2[1] = token;
      const tmp22 = isMentionLowImportance(joinRequestState[8])(obj2);
      const obj3 = { badge: null, cutout: null, cutouts: null };
      const obj4 = { style: null, joinRequestState: null };
      obj4[0] = memo;
      obj4[1] = tmp39;
      obj3[0] = _undefined(isMentionLowImportance(joinRequestState[9]), obj4);
      obj3[1] = tmp22;
      const items1 = [tmp22];
      obj3[2] = items1;
      return obj3;
    } else if (flag) {
      const obj5 = { position: "bottom-right", containerSize: null };
      obj5[1] = token;
      const tmp14 = isMentionLowImportance(joinRequestState[8])(obj5);
      const obj6 = { badge: null, cutout: null, cutouts: null };
      const obj7 = { style: null };
      obj7[0] = memo;
      obj6[0] = _undefined(isMentionLowImportance(joinRequestState[10]), obj7);
      obj6[1] = tmp14;
      const items2 = [tmp14];
      obj6[2] = items2;
      return obj6;
    } else {
      if (null != prop) {
        if (!hasExpired) {
          obj = { position: "bottom-right", containerSize: null };
          obj[1] = token;
          const tmp6 = isMentionLowImportance(joinRequestState[8])(obj);
          const obj8 = { badge: null, cutout: null, cutouts: null };
          const obj9 = { style: null, expiresAt: null };
          obj9[0] = memo;
          obj9[1] = tmp2;
          obj8[0] = _undefined(isMentionLowImportance(joinRequestState[4]), obj9);
          obj8[1] = tmp6;
          const items3 = [tmp6];
          obj8[2] = items3;
          return obj8;
        }
      }
      return { badge: null, cutout: "Array", cutouts: "padding" };
    }
  }, items1);
};