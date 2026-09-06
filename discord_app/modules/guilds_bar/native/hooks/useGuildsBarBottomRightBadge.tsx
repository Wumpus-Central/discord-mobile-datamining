// === Module 16296: useGuildsBarBottomRightBadge ===

// Module 16296 (useGuildsBarBottomRightBadge)
import native from "native" /* 1178 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16297 */;
import GuildsBarGuildJoinRequestBadgeDefault from "GuildsBarGuildJoinRequestBadge" /* 16298 */;
import InvitesDisabledBadgeDefault from "InvitesDisabledBadge" /* 16302 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  closure_6 = undefined;
  const tmp = closure_6();
  noop = tmp;
  const tmp2 = flag(noop.useState(() => {
    if (mentionCount > 0) {
      let BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  const token = mentionCount(joinRequestState[5]).useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = mentionCount(joinRequestState[5]);
  const token1 = mentionCount(joinRequestState[5]).useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp.bottomRightBadge, token1];
  const memo = noop.useMemo(() => {
    const items = [bottomRightBadge.bottomRightBadge, { bottom: token1 - native.BADGE_PADDING }];
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token];
  return noop.useMemo(() => {
    if (mentionCount > 0) {
      let obj = { position: "bottom-right", containerSize: token, width: first - 2 * native.BADGE_PADDING };
      const tmp20Result = computeGuildsBarCutoutDefault(obj);
      obj = { badge: null, cutout: null, cutouts: null };
      const obj1 = {
        maskStyle: memo,
        value: tmp,
        isMentionLowImportance,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        onLayout(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            if (first !== layout.width) {
              closure_1_6(layout.width);
            }
          }
      };
      obj.badge = jsx(native.MaskedBadge, {
        maskStyle: memo,
        value: tmp,
        isMentionLowImportance,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        onLayout(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            if (first !== layout.width) {
              closure_1_6(layout.width);
            }
          }
      });
      obj.cutout = tmp20Result;
      const items = [tmp20Result];
      obj.cutouts = items;
      return obj;
    } else if (null != joinRequestState) {
      const obj2 = { position: "bottom-right", containerSize: token };
      const tmp13 = computeGuildsBarCutoutDefault(obj2);
      const obj3 = { badge: null, cutout: null, cutouts: null };
      const obj4 = { style: memo, joinRequestState: tmp30 };
      obj3.badge = jsx(GuildsBarGuildJoinRequestBadgeDefault, { style: memo, joinRequestState: tmp30 });
      obj3.cutout = tmp13;
      const items1 = [tmp13];
      obj3.cutouts = items1;
      return obj3;
    } else if (flag) {
      obj = { position: "bottom-right", containerSize: token };
      const tmp5 = computeGuildsBarCutoutDefault(obj);
      const obj5 = { badge: null, cutout: null, cutouts: null };
      const obj6 = { style: memo };
      obj5.badge = jsx(InvitesDisabledBadgeDefault, { style: memo });
      obj5.cutout = tmp5;
      const items2 = [tmp5];
      obj5.cutouts = items2;
      return obj5;
    } else {
      return { badge: null, cutout: "Array", cutouts: "isArray" };
    }
  }, items1);
};