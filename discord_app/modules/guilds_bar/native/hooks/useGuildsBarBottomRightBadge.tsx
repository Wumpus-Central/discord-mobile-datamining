// === Module 16277: useGuildsBarBottomRightBadge ===

// Module 16277 (useGuildsBarBottomRightBadge)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16278 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let mentionCount;

let react = react_mod;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((mentionCount) => {
  let closure_2;
  let first;
  let isMentionLowImportance;
  let joinRequestState;
  let shouldShowInvitesDisabled;
  let tmp12;
  let tmp5;
  const obj = mentionCount(576);
  const cResult = obj.c(45);
  mentionCount = mentionCount.mentionCount;
  ({ isMentionLowImportance, joinRequestState, shouldShowInvitesDisabled } = mentionCount);
  const tmp4 = closure_6();
  if (cResult[0] !== mentionCount) {
    const fn = function l() {
      let BADGE_MASK_UNREAD_SIZE;
      if (mentionCount > 0) {
        BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
      } else {
        BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
      }
      return BADGE_MASK_UNREAD_SIZE;
    };
    cResult[0] = mentionCount;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [first, dependencyMap] = react.useState(tmp5);
  const tmpResult = mentionCount(4586);
  const token = tmpResult.useToken(first(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmpResult2 = mentionCount(4586);
  const token1 = tmpResult2.useToken(first(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const diff = token1 - tmp(1188).BADGE_PADDING;
  if (cResult[2] !== diff) {
    const obj2 = { bottom: diff };
    cResult[2] = diff;
    cResult[3] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.bottomRightBadge) {
    let tmp13;
    let tmp20;
    if (cResult[5] === tmp12) {
      tmp13 = cResult[6];
    }
    if (mentionCount > 0) {
      const diff1 = first - 2 * tmp(1188).BADGE_PADDING;
      if (cResult[7] === token) {
        if (cResult[10] !== first) {
          class L {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              if (first !== layout.width) {
                closure_2(layout.width);
              }
            }
          }
          cResult[10] = first;
          cResult[11] = L;
        } else {
          class L {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              if (first !== layout.width) {
                closure_2(layout.width);
              }
            }
          }
        }
        if (cResult[12] === tmp13) {
          class L {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              if (first !== layout.width) {
                closure_2(layout.width);
              }
            }
          }
        }
        cResult[12] = tmp13;
        cResult[13] = isMentionLowImportance;
        cResult[14] = mentionCount;
        cResult[15] = L;
        cResult[16] = jsx(mentionCount(1188).MaskedBadge, { maskStyle: tmp13, value: mentionCount, isMentionLowImportance, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", onLayout: L });
        const tmp27 = jsx(mentionCount(1188).MaskedBadge, { maskStyle: tmp13, value: mentionCount, isMentionLowImportance, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", onLayout: L });
      }
      const obj4 = { position: "bottom-right", containerSize: token, width: diff1 };
      cResult[7] = token;
      cResult[8] = diff1;
      cResult[9] = first(16278)(obj4);
      const tmp23 = first(16278)(obj4);
    } else {
      class L {
        constructor(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          if (first !== layout.width) {
            closure_2(layout.width);
          }
        }
      }
      if (null == joinRequestState) {
        class L {
          constructor(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            if (first !== layout.width) {
              closure_2(layout.width);
            }
          }
        }
      } else {
        class L {
          constructor(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            if (first !== layout.width) {
              closure_2(layout.width);
            }
          }
        }
        if (cResult[25] === tmp13) {
          class L {
            constructor(nativeEvent) {
              const layout = nativeEvent.nativeEvent.layout;
              if (first !== layout.width) {
                closure_2(layout.width);
              }
            }
          }
          if (cResult[28] !== tmp14) {
            class L {
              constructor(nativeEvent) {
                const layout = nativeEvent.nativeEvent.layout;
                if (first !== layout.width) {
                  closure_2(layout.width);
                }
              }
            }
            tmp19[0] = tmp14;
            cResult[28] = tmp14;
            cResult[29] = tmp19;
          } else {
            class L {
              constructor(nativeEvent) {
                const layout = nativeEvent.nativeEvent.layout;
                if (first !== layout.width) {
                  closure_2(layout.width);
                }
              }
            }
          }
          if (cResult[30] === tmp14) {
            class L {
              constructor(nativeEvent) {
                const layout = nativeEvent.nativeEvent.layout;
                if (first !== layout.width) {
                  closure_2(layout.width);
                }
              }
            }
          }
          const obj5 = { badge: tmp15, cutout: tmp14, cutouts: tmp19 };
          cResult[30] = tmp14;
          cResult[31] = tmp15;
          cResult[32] = tmp19;
          cResult[33] = obj5;
          tmp20 = obj5;
        }
        cResult[25] = tmp13;
        cResult[26] = joinRequestState;
        cResult[27] = jsx(first(16279), { style: tmp13, joinRequestState });
        const tmp17 = jsx(first(16279), { style: tmp13, joinRequestState });
      }
    }
    return tmp20;
  }
  const items = [tmp4.bottomRightBadge, tmp12];
  cResult[4] = tmp4.bottomRightBadge;
  cResult[5] = tmp12;
  cResult[6] = items;
  tmp13 = items;
}) : ((mentionCount) => {
  let bottomRightBadge;
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  closure_6 = undefined;
  const tmp = closure_6();
  react = tmp;
  const tmp2 = flag(react.useState(() => {
    let BADGE_MASK_UNREAD_SIZE;
    if (mentionCount > 0) {
      BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  let obj = mentionCount(joinRequestState[7]);
  const token = obj.useToken(isMentionLowImportance(joinRequestState[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = mentionCount(joinRequestState[7]);
  const token1 = obj2.useToken(isMentionLowImportance(joinRequestState[8]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp.bottomRightBadge, token1];
  const memo = react.useMemo(() => {
    const items = [bottomRightBadge.bottomRightBadge, { bottom: token1 - native.BADGE_PADDING }];
    ({ bottom: token1 - native.BADGE_PADDING });
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token];
  return react.useMemo(() => {
    let items;
    let items1;
    let items2;
    if (mentionCount > 0) {
      const obj2 = { position: "bottom-right", containerSize: token, width: first - 2 * native.BADGE_PADDING };
      const tmp20 = computeGuildsBarCutoutDefault;
      const tmp20Result = tmp20(obj2);
      const obj3 = { badge: null, cutout: tmp20Result, cutouts: items };
      items = [tmp20Result];
      return obj3;
    } else if (null != joinRequestState) {
      const obj5 = { position: "bottom-right", containerSize: token };
      const tmp13 = computeGuildsBarCutoutDefault(obj5);
      const obj6 = { badge: null, cutout: tmp13, cutouts: items1 };
      items1 = [tmp13];
      return obj6;
    } else if (flag) {
      const obj = { position: "bottom-right", containerSize: token };
      const tmp5 = computeGuildsBarCutoutDefault(obj);
      const obj8 = { badge: null, cutout: tmp5, cutouts: items2 };
      items2 = [tmp5];
      return obj8;
    } else {
      return { badge: null, cutout: "Array", cutouts: "parent" };
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default tmp2;