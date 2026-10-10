// discord_app/modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx
import native from "../../../../design/void/native.tsx";
import computeGuildsBarCutoutDefault from "../utils/computeGuildsBarCutout.tsx";
import GuildsBarGuildJoinRequestBadgeDefault from "../GuildsBarGuildJoinRequestBadge.tsx";
import InvitesDisabledBadgeDefault from "../../../guild/native/InvitesDisabledBadge.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({
  bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildsBarBottomRightBadge(mentionCount) {
      const cResult = mentionCount(576).c(45);
      mentionCount = mentionCount.mentionCount;
      ({ isMentionLowImportance, joinRequestState, shouldShowInvitesDisabled } = mentionCount);
      const tmp4 = closure_6();
      if (cResult[0] !== mentionCount) {
        const fn = function l() {
          if (mentionCount > 0) {
            let BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
          } else {
            BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
          }
          return BADGE_MASK_UNREAD_SIZE;
        };
        cResult[0] = mentionCount;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      [first, dependencyMap] = noop.useState(tmp5);
      const obj = mentionCount(576);
      const token = mentionCount(4818).useToken(first(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmpResult = mentionCount(4818);
      const token1 = mentionCount(4818).useToken(first(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
      const diff = token1 - tmp(1200).BADGE_PADDING;
      if (cResult[2] !== diff) {
        const obj2 = { bottom: diff };
        cResult[2] = diff;
        cResult[3] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.bottomRightBadge) {
        if (cResult[5] === tmp12) {
          let tmp13 = cResult[6];
        }
        if (mentionCount > 0) {
          const diff1 = first - 2 * tmp(1200).BADGE_PADDING;
          if (cResult[7] === token) {
            if (cResult[10] !== first) {
              class L {
                constructor(arg0) {
                  layout = mentionCount.nativeEvent.layout;
                  if (closure_1 !== layout.width) {
                    tmp = closure_2;
                    tmp2 = closure_2(layout.width);
                  }
                  return;
                }
              }
              cResult[10] = first;
              cResult[11] = L;
            } else {
              class L {
                constructor(arg0) {
                  layout = mentionCount.nativeEvent.layout;
                  if (closure_1 !== layout.width) {
                    tmp = closure_2;
                    tmp2 = closure_2(layout.width);
                  }
                  return;
                }
              }
            }
            if (cResult[12] === tmp13) {
              class L {
                constructor(arg0) {
                  layout = mentionCount.nativeEvent.layout;
                  if (closure_1 !== layout.width) {
                    tmp = closure_2;
                    tmp2 = closure_2(layout.width);
                  }
                  return;
                }
              }
            }
            const obj3 = {
              maskStyle: tmp13,
              value: mentionCount,
              isMentionLowImportance,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              onLayout: L,
            };
            const tmp27 = jsx(tmp(1200).MaskedBadge, {
              maskStyle: tmp13,
              value: mentionCount,
              isMentionLowImportance,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              onLayout: L,
            });
            cResult[12] = tmp13;
            cResult[13] = isMentionLowImportance;
            cResult[14] = mentionCount;
            cResult[15] = L;
            cResult[16] = tmp27;
          }
          const obj4 = { position: "bottom-right", containerSize: token, width: diff1 };
          const tmp23 = tmp8(16731)(obj4);
          cResult[7] = token;
          cResult[8] = diff1;
          cResult[9] = tmp23;
        } else {
          class L {
            constructor(arg0) {
              layout = mentionCount.nativeEvent.layout;
              if (closure_1 !== layout.width) {
                tmp = closure_2;
                tmp2 = closure_2(layout.width);
              }
              return;
            }
          }
          if (null == joinRequestState) {
            class L {
              constructor(arg0) {
                layout = mentionCount.nativeEvent.layout;
                if (closure_1 !== layout.width) {
                  tmp = closure_2;
                  tmp2 = closure_2(layout.width);
                }
                return;
              }
            }
          } else {
            class L {
              constructor(arg0) {
                layout = mentionCount.nativeEvent.layout;
                if (closure_1 !== layout.width) {
                  tmp = closure_2;
                  tmp2 = closure_2(layout.width);
                }
                return;
              }
            }
            if (cResult[25] === tmp13) {
              class L {
                constructor(arg0) {
                  layout = mentionCount.nativeEvent.layout;
                  if (closure_1 !== layout.width) {
                    tmp = closure_2;
                    tmp2 = closure_2(layout.width);
                  }
                  return;
                }
              }
              if (cResult[28] !== tmp14) {
                class L {
                  constructor(arg0) {
                    layout = mentionCount.nativeEvent.layout;
                    if (closure_1 !== layout.width) {
                      tmp = closure_2;
                      tmp2 = closure_2(layout.width);
                    }
                    return;
                  }
                }
                tmp19[0] = tmp14;
                cResult[28] = tmp14;
                cResult[29] = tmp19;
              } else {
                class L {
                  constructor(arg0) {
                    layout = mentionCount.nativeEvent.layout;
                    if (closure_1 !== layout.width) {
                      tmp = closure_2;
                      tmp2 = closure_2(layout.width);
                    }
                    return;
                  }
                }
              }
              if (cResult[30] === tmp14) {
                class L {
                  constructor(arg0) {
                    layout = mentionCount.nativeEvent.layout;
                    if (closure_1 !== layout.width) {
                      tmp = closure_2;
                      tmp2 = closure_2(layout.width);
                    }
                    return;
                  }
                }
              }
              const obj5 = { badge: tmp15, cutout: tmp14, cutouts: tmp19 };
              cResult[30] = tmp14;
              cResult[31] = tmp15;
              cResult[32] = tmp19;
              cResult[33] = obj5;
              const tmp20 = obj5;
            }
            const obj6 = { style: tmp13, joinRequestState };
            const tmp17 = jsx(tmp8(16732), { style: tmp13, joinRequestState });
            cResult[25] = tmp13;
            cResult[26] = joinRequestState;
            cResult[27] = tmp17;
          }
          return tmp20;
        }
      }
      const items = [tmp4.bottomRightBadge, tmp12];
      cResult[4] = tmp4.bottomRightBadge;
      cResult[5] = tmp12;
      cResult[6] = items;
      tmp13 = items;
      const tmpResult2 = mentionCount(4818);
    }
  : function useGuildsBarBottomRightBadge(mentionCount) {
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
      const tmp2 = flag(
        noop.useState(() => {
          if (mentionCount > 0) {
            let BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
          } else {
            BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
          }
          return BADGE_MASK_UNREAD_SIZE;
        }),
        2,
      );
      const first = tmp2[0];
      closure_6 = tmp2[1];
      const token = mentionCount(joinRequestState[7]).useToken(
        isMentionLowImportance(joinRequestState[8]).modules.mobile.GUILD_BAR_ITEM_SIZE,
      );
      let obj = mentionCount(joinRequestState[7]);
      const token1 = mentionCount(joinRequestState[7]).useToken(
        isMentionLowImportance(joinRequestState[8]).modules.mobile.GUILD_BAR_ITEM_MARGIN,
      );
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
            },
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
            },
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
          return { badge: null, cutout: "r", cutouts: "toCharArray$esjava$1" };
        }
      }, items1);
    };
