// === Module 16647: useGuildsBarBottomRightBadge ===

// Module 16647 (useGuildsBarBottomRightBadge)
import native from "native" /* 1177 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16648 */;
import GuildsBarGuildJoinRequestBadgeDefault from "GuildsBarGuildJoinRequestBadge" /* 16649 */;
import InvitesDisabledBadgeDefault from "InvitesDisabledBadge" /* 16653 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
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
      const obj2 = { position: "bottom-right", containerSize: token, width: first - 2 * native.BADGE_PADDING };
      const tmp20Result = computeGuildsBarCutoutDefault(obj2);
      const obj3 = { badge: null, cutout: null, cutouts: null };
      const obj4 = {
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
      obj3.badge = jsx(native.MaskedBadge, {
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
      obj3.cutout = tmp20Result;
      const items = [tmp20Result];
      obj3.cutouts = items;
      return obj3;
    } else if (null != joinRequestState) {
      const obj5 = { position: "bottom-right", containerSize: token };
      const tmp13 = computeGuildsBarCutoutDefault(obj5);
      const obj6 = { badge: null, cutout: null, cutouts: null };
      const obj7 = { style: memo, joinRequestState: tmp30 };
      obj6.badge = jsx(GuildsBarGuildJoinRequestBadgeDefault, { style: memo, joinRequestState: tmp30 });
      obj6.cutout = tmp13;
      const items1 = [tmp13];
      obj6.cutouts = items1;
      return obj6;
    } else if (flag) {
      const obj = { position: "bottom-right", containerSize: token };
      const tmp5 = computeGuildsBarCutoutDefault(obj);
      const obj8 = { badge: null, cutout: null, cutouts: null };
      const obj9 = { style: memo };
      obj8.badge = jsx(InvitesDisabledBadgeDefault, { style: memo });
      obj8.cutout = tmp5;
      const items2 = [tmp5];
      obj8.cutouts = items2;
      return obj8;
    } else {
      return { badge: null, cutout: "Array", cutouts: "limit" };
    }
  }, items1);
};