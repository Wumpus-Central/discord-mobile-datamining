// discord_app/modules/badges/native/BadgeDetailsSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1085).UserSettingsSections;
const ActionSheetConstants = fn(6830);
({ ACTION_SHEET_MAX_WIDTH: c10, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_11 } = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  content: { flexGrow: 1 },
  page: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
  swipePage: null,
  header: null,
  betaPill: null,
  graphic: null,
  graphicAnimated: null,
  identity: null,
  centeredText: null,
  eyebrow: null,
  uppercase: null,
  accessoryLine: null,
  accessoryDot: null,
  card: null,
  descriptionGroup: null,
  divider: null,
  notice: null,
  noticeIcon: null,
  noticeText: null,
};
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.swipePage = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj2.betaPill = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let obj6 = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.graphic = { marginBottom: nativeDefault.space.PX_12 };
let obj7 = { marginBottom: nativeDefault.space.PX_12 };
obj2.graphicAnimated = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.identity = { alignItems: "center" };
obj2.centeredText = { textAlign: "center" };
let obj8 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.eyebrow = { marginBottom: nativeDefault.space.PX_4 };
obj2.uppercase = { textTransform: "uppercase" };
let obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj2.accessoryLine = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_6,
};
let size = {
  width: 3,
  height: 3,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_SUBTLE,
};
obj2.accessoryDot = size;
let obj10 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_6,
};
obj2.card = {
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let obj11 = {
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.descriptionGroup = { gap: nativeDefault.space.PX_4 };
let obj12 = { gap: nativeDefault.space.PX_4 };
obj2.divider = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj13 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.notice = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.noticeIcon = { marginTop: 2 };
obj2.noticeText = { flex: 1 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeAccessoryLine(segments) {
      const cResult = require("c").c(8);
      segments = segments.segments;
      let tmp2 = closure_15();
      _require = tmp2;
      if (cResult[0] === segments) {
        if (cResult[1] === tmp2.accessoryDot) {
          if (cResult[5] === tmp2.accessoryLine) {
            if (cResult[6] === tmp4) {
              let tmp7 = cResult[7];
            }
            return tmp7;
          }
          let obj2 = { style: tmp3, children: cResult[2] };
          const tmp10 = closure_12(closure_5, obj2);
          cResult[5] = tmp2.accessoryLine;
          cResult[6] = cResult[2];
          cResult[7] = tmp10;
          tmp7 = tmp10;
        }
      }
      if (cResult[3] !== tmp2.accessoryDot) {
        const fn = function l(arg0, arg1) {
          let tmp2 = arg1 > 0;
          ({ key, node } = arg0);
          if (tmp2) {
            const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
            tmp2 = __initData(hasOwnProperty, obj);
          }
          const obj2 = { children: null };
          const items = [tmp2, node];
          obj2.children = items;
          return __initData2(noop.Fragment, obj2, key);
        };
        cResult[3] = tmp2.accessoryDot;
        cResult[4] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const mapped = segments.map(tmp5);
      cResult[0] = segments;
      segments = tmp2.accessoryDot;
      cResult[1] = segments;
      cResult[2] = mapped;
      let obj = require("c");
    }
  : function BadgeAccessoryLine(segments) {
      segments = segments.segments;
      const tmp = closure_15();
      const accessoryDot = tmp;
      return closure_12(closure_5, {
        style: tmp.accessoryLine,
        children: segments.map((item, index) => {
          let tmp2 = index > 0;
          ({ key, node } = item);
          if (tmp2) {
            const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
            tmp2 = __initData(hasOwnProperty, obj);
          }
          const obj2 = { children: null };
          const items = [tmp2, node];
          obj2.children = items;
          return __initData2(noop.Fragment, obj2, key);
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function InfoNotice(children) {
      const cResult = c.c(9);
      children = children.children;
      const tmp4 = closure_15();
      if (cResult[0] !== tmp4.noticeIcon) {
        const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp4.noticeIcon };
        const tmp8 = __initData(CircleInformationIcon.CircleInformationIcon, obj2);
        cResult[0] = tmp4.noticeIcon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp4.noticeText) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.notice) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp9) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const obj3 = { style: tmp4.notice, children: null };
        const items = [tmp5, tmp9];
        obj3.children = items;
        const tmp14 = __initData2(hasOwnProperty, obj3);
        cResult[5] = tmp4.notice;
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = __initData(Text_Text.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        style: tmp4.noticeText,
        children,
      });
      cResult[2] = children;
      cResult[3] = tmp4.noticeText;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp4.noticeText, children };
    }
  : function InfoNotice(children) {
      const tmp = closure_15();
      const obj = { style: tmp.notice, children: null };
      const items = [
        __initData(CircleInformationIcon.CircleInformationIcon, {
          size: "xs",
          color: nativeDefault.colors.ICON_FEEDBACK_INFO,
          style: tmp.noticeIcon,
        }),
        __initData(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          style: tmp.noticeText,
          children: children.children,
        }),
      ];
      obj.children = items;
      return __initData2(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeDetailsSheetContent(badge) {
      const cResult = badge(isViewingOtherUser[12]).c(75);
      badge = badge.badge;
      ({ viewerBadge, displayedUserId } = badge);
      isViewingOtherUser = badge.isViewingOtherUser;
      ({ targetUsername, isViewerOwnershipKnown, pagePosition } = badge);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function s() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = badge(isViewingOtherUser[12]);
      const stateFromStores = badge(isViewingOtherUser[15]).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class E {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            premiumType = undefined;
            if (currentUser != null) {
              premiumType = currentUser.premiumType;
            }
            return premiumType;
          }
        }
        cResult[2] = items1;
        cResult[3] = E;
        let tmp10 = E;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = badge(isViewingOtherUser[15]);
      const stateFromStores1 = badge(isViewingOtherUser[15]).useStateFromStores(tmp9, tmp10);
      const tmp14 = displayedUserId(isViewingOtherUser[16])(badge.badge_id);
      if (cResult[4] === badge) {
        if (cResult[5] === isViewingOtherUser) {
          if (cResult[6] === viewerBadge) {
            let tmp15 = cResult[7];
          }
          const tmp16 = displayedUserId(tmp2[17])(tmp15);
          if (cResult[8] === badge) {
            if (cResult[9] === isViewingOtherUser) {
              let tmp17 = cResult[10];
            }
            const tmp19 = displayedUserId(tmp2[18])(tmp17);
            if (cResult[11] === badge) {
              if (cResult[12] === displayedUserId) {
                if (cResult[13] === stateFromStores) {
                  if (cResult[14] === isViewerOwnershipKnown) {
                    if (cResult[15] === isViewingOtherUser) {
                      if (cResult[16] === tmp14) {
                        if (cResult[17] === pagePosition) {
                          if (cResult[18] === tmp19) {
                            if (cResult[19] === tmp16) {
                              if (cResult[20] === tmp4.betaPill) {
                                if (cResult[21] === tmp4.card) {
                                  if (cResult[22] === tmp4.centeredText) {
                                    if (cResult[23] === tmp4.descriptionGroup) {
                                      if (cResult[24] === tmp4.divider) {
                                        if (cResult[25] === tmp4.eyebrow) {
                                          if (cResult[26] === tmp4.graphic) {
                                            if (cResult[27] === tmp4.graphicAnimated) {
                                              if (cResult[28] === tmp4.header) {
                                                if (cResult[29] === tmp4.identity) {
                                                  if (cResult[30] === tmp4.uppercase) {
                                                    if (cResult[31] === targetUsername) {
                                                      if (cResult[32] === viewerBadge) {
                                                        if (cResult[33] === stateFromStores1) {
                                                          let tmp20 = cResult[34];
                                                        }
                                                        return tmp20;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class E {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                premiumType = undefined;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            const displayTier = obj5.getDisplayTier(badge);
            const badgeArtUrls = tmp(tmp2[20]).getBadgeArtUrls(badge, displayTier, stateFromStores);
            ({ animatedUrl, imageUrl } = badgeArtUrls);
            let rarity;
            if (displayTier != null) {
              rarity = displayTier.rarity;
            }
            if (rarity == null) {
              rarity = badge.rarity;
            }
            const tmpResult15 = tmp(tmp2[20]);
            const badgeTitle = tmp(tmp2[20]).getBadgeTitle(badge, displayTier);
            ({ isNitro, eyebrow, displayName } = badgeTitle);
            if (cResult[35] !== badge) {
              const isLegacyDisplayBadgeResult = tmp(tmp2[20]).isLegacyDisplayBadge(badge);
              class E {
                constructor() {
                  currentUser = closure_1_7.getCurrentUser();
                  premiumType = undefined;
                  if (currentUser != null) {
                    premiumType = currentUser.premiumType;
                  }
                  return premiumType;
                }
              }
              cResult[36] = isLegacyDisplayBadgeResult;
              let tmp71Result4 = isLegacyDisplayBadgeResult;
              const tmpResult17 = tmp(tmp2[20]);
            } else {
              tmp71Result4 = cResult[36];
            }
            const tiers = badge.tiers;
            let num10;
            if (tiers != null) {
              num10 = tiers.length;
            }
            if (num10 == null) {
              num10 = 0;
            }
            let tmp67Result10 = num10 > 0;
            let flag;
            if (viewerBadge != null) {
              flag = viewerBadge.owned;
            }
            if (flag == null) {
              flag = false;
            }
            const items2 = [];
            const tmpResult16 = tmp(tmp2[20]);
            if (tmpResult18.isNullOrEmpty(badge.info_label)) {
              if (cResult[39] === badge) {
                if (cResult[40] === tmp14) {
                  let tmp32 = cResult[41];
                }
                if (cResult[42] !== tmp32) {
                  let obj2 = { key: "status", node: null };
                  class E {
                    constructor() {
                      currentUser = closure_1_7.getCurrentUser();
                      premiumType = undefined;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                  obj2.node = closure_12(tmp(tmp2[14]).Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: null,
                  });
                  cResult[42] = tmp32;
                  cResult[43] = obj2;
                  let tmp34 = obj2;
                  let obj3 = { variant: "text-md/medium", color: "text-subtle", children: null };
                } else {
                  tmp34 = cResult[43];
                }
                items2.push(tmp34);
                class E {
                  constructor() {
                    currentUser = closure_1_7.getCurrentUser();
                    premiumType = undefined;
                    if (currentUser != null) {
                      premiumType = currentUser.premiumType;
                    }
                    return premiumType;
                  }
                }
                if (tmp37) {
                  const obj4 = { key: "rarity", node: null };
                  class E {
                    constructor() {
                      currentUser = closure_1_7.getCurrentUser();
                      premiumType = undefined;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                  tmp39[0] = rarity;
                  obj4.node = closure_12(displayedUserId(tmp2[23]), tmp39);
                  items2.push(obj4);
                }
                let result = tmp(tmp2[20]).isUpgradeableNitroViewer(badge, stateFromStores1);
                const tmpResult19 = tmp(tmp2[20]);
                const obj6 = { badge, viewerBadge, isViewerOnUpgradeableNitro: result };
                const badgeDescriptionText = tmp(tmp2[20]).getBadgeDescriptionText(obj6);
                const tmpResult20 = tmp(tmp2[20]);
                const isNullOrEmptyResult = tmp(tmp2[21]).isNullOrEmpty(badgeDescriptionText);
                if (cResult[44] !== badge.badge_id) {
                  const badgeDetailsCta = tmp(tmp2[24]).getBadgeDetailsCta(badge.badge_id);
                  class E {
                    constructor() {
                      currentUser = closure_1_7.getCurrentUser();
                      premiumType = undefined;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                  cResult[45] = badgeDetailsCta;
                  let obj20 = badgeDetailsCta;
                  const tmpResult22 = tmp(tmp2[24]);
                } else {
                  obj20 = cResult[45];
                }
                if (cResult[46] === badge) {
                  if (cResult[47] === obj20) {
                    if (cResult[48] === displayedUserId) {
                      if (cResult[49] === isViewingOtherUser) {
                        let tmp46 = cResult[50];
                      }
                      const _Symbol = Symbol;
                      class E {
                        constructor() {
                          currentUser = closure_1_7.getCurrentUser();
                          premiumType = undefined;
                          if (currentUser != null) {
                            premiumType = currentUser.premiumType;
                          }
                          return premiumType;
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                        function ce() {
                          displayedUserId(isViewingOtherUser[26]).hideActionSheet(
                            badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY,
                          );
                          const obj = displayedUserId(isViewingOtherUser[26]);
                          const result = badge(isViewingOtherUser[28]).closeBadgeDirectoryScreen();
                          const obj2 = badge(isViewingOtherUser[28]);
                          const result1 = badge(isViewingOtherUser[28]).openBadgeDirectoryScreen();
                        }
                        cResult[52] = ce;
                        class E {
                          constructor() {
                            currentUser = closure_1_7.getCurrentUser();
                            premiumType = undefined;
                            if (currentUser != null) {
                              premiumType = currentUser.premiumType;
                            }
                            return premiumType;
                          }
                        }
                      }
                      if (cResult[53] === badge) {
                        if (cResult[54] === isViewerOwnershipKnown) {
                          if (cResult[55] === isViewingOtherUser) {
                            let tmp52 = badge;
                            if (!isViewingOtherUser) {
                              let tmp53 = viewerBadge;
                              if (viewerBadge == null) {
                                tmp53 = badge;
                              }
                              tmp52 = tmp53;
                            }
                            class E {
                              constructor() {
                                currentUser = closure_1_7.getCurrentUser();
                                premiumType = undefined;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            if (cResult[60] === badge.badge_id) {
                              if (cResult[61] === tmp4.betaPill) {
                                if (cResult[62] === tmp4.uppercase) {
                                  let tmp55 = cResult[63];
                                }
                                let tmp60Result = null != imageUrl;
                                if (tmp60Result) {
                                  const obj7 = { url: imageUrl, height: null, animated: null, style: null };
                                  class E {
                                    constructor() {
                                      currentUser = closure_1_7.getCurrentUser();
                                      premiumType = undefined;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  obj7.height = num35;
                                  obj7.animated = null != animatedUrl;
                                  const items3 = [tmp4.graphic, null != animatedUrl && tmp4.graphicAnimated];
                                  obj7.style = items3;
                                  tmp60Result = closure_12(displayedUserId(tmp2[31]), obj7);
                                  const tmp13Result = displayedUserId(tmp2[31]);
                                }
                                class E {
                                  constructor() {
                                    currentUser = closure_1_7.getCurrentUser();
                                    premiumType = undefined;
                                    if (currentUser != null) {
                                      premiumType = currentUser.premiumType;
                                    }
                                    return premiumType;
                                  }
                                }
                                if (cResult[66] !== items2) {
                                  class E {
                                    constructor() {
                                      currentUser = closure_1_7.getCurrentUser();
                                      premiumType = undefined;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  const tmp66 = closure_12(closure_16, { segments: null });
                                  cResult[66] = items2;
                                  cResult[67] = tmp66;
                                  let tmp63 = tmp66;
                                  const obj8 = { segments: null };
                                } else {
                                  tmp63 = cResult[67];
                                }
                                const obj9 = { style: tmp4.identity, children: null };
                                let tmp69 = null != eyebrow;
                                if (tmp69) {
                                  const obj10 = {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    style: null,
                                    children: null,
                                  };
                                  const items4 = [,];
                                  class E {
                                    constructor() {
                                      currentUser = closure_1_7.getCurrentUser();
                                      premiumType = undefined;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  items4[1] = tmp4.eyebrow;
                                  obj10.style = items4;
                                  obj10.children = eyebrow;
                                  tmp69 = closure_12(tmp(tmp2[14]).Text, obj10);
                                }
                                const items5 = [tmp69, ,];
                                let str = "display-sm";
                                if (isNitro) {
                                  str = "nitro-sm";
                                }
                                const obj11 = {
                                  variant: str,
                                  color: "text-strong",
                                  style: null,
                                  accessibilityLabel: null,
                                  accessibilityHint: null,
                                  children: null,
                                };
                                const items6 = [tmp4.centeredText];
                                let uppercase = isNitro;
                                if (isNitro) {
                                  uppercase = tmp4.uppercase;
                                }
                                items6[1] = uppercase;
                                obj11.style = items6;
                                let formatToPlainStringResult;
                                if (null != pagePosition) {
                                  const intl2 = tmp(tmp2[30]).intl;
                                  class E {
                                    constructor() {
                                      currentUser = closure_1_7.getCurrentUser();
                                      premiumType = undefined;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  ({ position: obj32.position, total: obj32.total } = pagePosition);
                                  formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[30]).t.q7PYXq, {
                                    badgeName: null,
                                    position: null,
                                    total: null,
                                  });
                                  const obj12 = { badgeName: null, position: null, total: null };
                                }
                                obj11.accessibilityLabel = formatToPlainStringResult;
                                obj11.accessibilityHint = tmp62;
                                obj11.children = displayName;
                                items5[1] = closure_12(tmp(tmp2[14]).Heading, obj11);
                                items5[2] = tmp63;
                                obj9.children = items5;
                                const tmp67Result = closure_13(closure_5, obj9);
                                if (cResult[68] === tmp4.header) {
                                  if (cResult[69] === tmp55) {
                                    if (cResult[70] === tmp60Result) {
                                      if (cResult[71] === tmp67Result) {
                                        let tmp74 = cResult[72];
                                      }
                                      if (cResult[73] !== tmp19) {
                                        let tmp71Result = tmp19;
                                        if (tmp19) {
                                          const obj13 = { children: null };
                                          class E {
                                            constructor() {
                                              currentUser = closure_1_7.getCurrentUser();
                                              premiumType = undefined;
                                              if (currentUser != null) {
                                                premiumType = currentUser.premiumType;
                                              }
                                              return premiumType;
                                            }
                                          }
                                          const obj14 = { onGoToSettings: tmp48 };
                                          obj13.children = tmp79(tmp(tmp2[30]).t.Zh44ni, obj14);
                                          tmp71Result = closure_12(closure_17, obj13);
                                        }
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        cResult[74] = tmp71Result;
                                        let tmp76 = tmp71Result;
                                      } else {
                                        tmp76 = cResult[74];
                                      }
                                      class E {
                                        constructor() {
                                          currentUser = closure_1_7.getCurrentUser();
                                          premiumType = undefined;
                                          if (currentUser != null) {
                                            premiumType = currentUser.premiumType;
                                          }
                                          return premiumType;
                                        }
                                      }
                                      tmp81[0] = tmp74;
                                      tmp81[1] = tmp76;
                                      if (!tmp16) {
                                        if (isNullOrEmptyResult) {
                                          let tmp67Result11 = tmp54;
                                        }
                                        tmp81[2] = tmp67Result11;
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        const tmp67Result7 = closure_13(closure_14, { children: null });
                                        cResult[11] = badge;
                                        cResult[12] = displayedUserId;
                                        cResult[13] = stateFromStores;
                                        cResult[14] = isViewerOwnershipKnown;
                                        cResult[15] = isViewingOtherUser;
                                        cResult[16] = tmp14;
                                        cResult[17] = pagePosition;
                                        cResult[18] = tmp19;
                                        cResult[19] = tmp16;
                                        cResult[20] = tmp4.betaPill;
                                        cResult[21] = tmp4.card;
                                        cResult[22] = tmp4.centeredText;
                                        cResult[23] = tmp4.descriptionGroup;
                                        cResult[24] = tmp4.divider;
                                        cResult[25] = tmp4.eyebrow;
                                        cResult[26] = tmp4.graphic;
                                        cResult[27] = tmp4.graphicAnimated;
                                        cResult[28] = tmp4.header;
                                        cResult[29] = tmp4.identity;
                                        cResult[30] = tmp4.uppercase;
                                        cResult[31] = targetUsername;
                                        cResult[32] = viewerBadge;
                                        cResult[33] = stateFromStores1;
                                        cResult[34] = tmp67Result7;
                                        tmp20 = tmp67Result7;
                                        const obj15 = { children: null };
                                      }
                                      const obj16 = { style: tmp4.card, children: null };
                                      let tmp67Result8 = tmp16;
                                      if (tmp16) {
                                        const obj17 = { children: null };
                                        const obj18 = { badge, viewerBadge: null };
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        const items7 = [closure_12(displayedUserId(tmp2[32]), obj18)];
                                        const obj19 = { style: tmp4.divider };
                                        items7[1] = closure_12(closure_5, obj19);
                                        obj17.children = items7;
                                        tmp67Result8 = closure_13(closure_14, obj17);
                                      }
                                      const items8 = [tmp67Result8, , , ,];
                                      let tmp67Result9 = tmp44;
                                      if (!isNullOrEmptyResult) {
                                        const obj21 = { style: tmp4.descriptionGroup, children: null };
                                        if (tmp71Result4) {
                                          const obj22 = {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: null,
                                          };
                                          class E {
                                            constructor() {
                                              currentUser = closure_1_7.getCurrentUser();
                                              premiumType = undefined;
                                              if (currentUser != null) {
                                                premiumType = currentUser.premiumType;
                                              }
                                              return premiumType;
                                            }
                                          }
                                          obj22.children = tmp85(tmp(tmp2[30]).t["/Gmn3f"]);
                                          tmp71Result4 = closure_12(tmp(tmp2[14]).Text, obj22);
                                        }
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        tmp86[0] = tmp71Result4;
                                        const obj23 = {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          children: badgeDescriptionText,
                                        };
                                        tmp86[1] = closure_12(tmp(tmp2[14]).Text, obj23);
                                        obj21.children = tmp86;
                                        tmp67Result9 = closure_13(closure_5, obj21);
                                      }
                                      items8[1] = tmp67Result9;
                                      let tmp71Result5 = tmp44;
                                      if (!isNullOrEmptyResult) {
                                        tmp71Result5 = null != obj20;
                                      }
                                      if (tmp71Result5) {
                                        tmp71Result5 = isViewerOwnershipKnown;
                                      }
                                      if (tmp71Result5) {
                                        const obj24 = { variant: null, size: "md", onPress: null, text: null };
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        tmp88[0] = isNitro;
                                        tmp88[1] = result;
                                        tmp88[2] = flag;
                                        obj24.variant = tmp(tmp2[20]).getBadgeCtaVariant(tmp88);
                                        obj24.onPress = tmp46;
                                        const obj25 = { owned: flag, isViewerOnUpgradeableNitro: result };
                                        obj24.text = obj20.ctaLabel(obj25);
                                        tmp71Result5 = closure_12(tmp(tmp2[33]).Button, obj24);
                                        const tmpResult23 = tmp(tmp2[20]);
                                      }
                                      items8[2] = tmp71Result5;
                                      if (tmp67Result10) {
                                        let tmp71Result6 = !tmp16;
                                        if (!tmp16) {
                                          tmp71Result6 = tmp44;
                                        }
                                        if (tmp71Result6) {
                                          const obj26 = { style: tmp4.divider };
                                          tmp71Result6 = closure_12(closure_5, obj26);
                                        }
                                        class E {
                                          constructor() {
                                            currentUser = closure_1_7.getCurrentUser();
                                            premiumType = undefined;
                                            if (currentUser != null) {
                                              premiumType = currentUser.premiumType;
                                            }
                                            return premiumType;
                                          }
                                        }
                                        const items9 = [tmp71Result6];
                                        const obj27 = {
                                          badge: tmp52,
                                          isViewingOtherUser,
                                          targetUsername,
                                          isViewerOnUpgradeableNitro: result,
                                        };
                                        items9[1] = closure_12(displayedUserId(tmp2[34]), obj27);
                                        tmp90[0] = items9;
                                        tmp67Result10 = closure_13(closure_14, tmp90);
                                      }
                                      items8[3] = tmp67Result10;
                                      items8[4] = tmp54;
                                      obj16.children = items8;
                                      tmp67Result11 = closure_13(closure_5, obj16);
                                    }
                                  }
                                }
                                const obj28 = { style: tmp4.header, children: null };
                                const items10 = [tmp55, tmp60Result, tmp67Result];
                                obj28.children = items10;
                                const tmp67Result12 = closure_13(closure_5, obj28);
                                cResult[68] = tmp4.header;
                                cResult[69] = tmp55;
                                cResult[70] = tmp60Result;
                                cResult[71] = tmp67Result;
                                cResult[72] = tmp67Result12;
                                tmp74 = tmp67Result12;
                              }
                            }
                            let isBetaBadgeIdResult = tmp(tmp2[19]).isBetaBadgeId(badge.badge_id);
                            if (isBetaBadgeIdResult) {
                              const obj29 = { style: null, children: null };
                              class E {
                                constructor() {
                                  currentUser = closure_1_7.getCurrentUser();
                                  premiumType = undefined;
                                  if (currentUser != null) {
                                    premiumType = currentUser.premiumType;
                                  }
                                  return premiumType;
                                }
                              }
                              const obj30 = {
                                variant: "text-xs/bold",
                                color: "text-default",
                                style: tmp4.uppercase,
                                children: null,
                              };
                              const intl = tmp(tmp2[30]).intl;
                              obj30.children = intl.string(tmp(tmp2[30]).t.oW0eUd);
                              obj29.children = closure_12(tmp(tmp2[14]).Text, obj30);
                              isBetaBadgeIdResult = closure_12(closure_5, obj29);
                            }
                            cResult[60] = badge.badge_id;
                            cResult[61] = tmp4.betaPill;
                            cResult[62] = tmp4.uppercase;
                            cResult[63] = isBetaBadgeIdResult;
                            tmp55 = isBetaBadgeIdResult;
                            const tmpResult24 = tmp(tmp2[19]);
                          }
                        }
                      }
                      let result1 = isViewerOwnershipKnown;
                      if (isViewerOwnershipKnown) {
                        const obj31 = { badge, isViewingOtherUser: null, viewerOwnsBadge: null };
                        class E {
                          constructor() {
                            currentUser = closure_1_7.getCurrentUser();
                            premiumType = undefined;
                            if (currentUser != null) {
                              premiumType = currentUser.premiumType;
                            }
                            return premiumType;
                          }
                        }
                        obj31.viewerOwnsBadge = flag;
                        result1 = tmp(tmp2[20]).shouldShowLegacyUnavailableNotice(obj31);
                        const tmpResult25 = tmp(tmp2[20]);
                      }
                      cResult[53] = badge;
                      cResult[54] = isViewerOwnershipKnown;
                      cResult[55] = isViewingOtherUser;
                      cResult[56] = flag;
                      cResult[57] = result1;
                    }
                  }
                }
                function se() {
                  if (null != obj20) {
                    const obj2 = {
                      actionName: "primary_badge_action_clicked",
                      badge,
                      displayedUserId,
                      isSociallyNavigated: isViewingOtherUser,
                    };
                    trackBadgeDirectoryActionDefault(obj2);
                    ActionSheetActionCreatorsDefault.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
                    obj20.ctaAction();
                  }
                }
                cResult[46] = badge;
                cResult[47] = obj20;
                cResult[48] = displayedUserId;
                cResult[49] = isViewingOtherUser;
                cResult[50] = se;
                tmp46 = se;
                const tmpResult21 = tmp(tmp2[21]);
              }
              const badgeStatusText = tmp(tmp2[20]).getBadgeStatusText(badge, tmp14);
              class E {
                constructor() {
                  currentUser = closure_1_7.getCurrentUser();
                  premiumType = undefined;
                  if (currentUser != null) {
                    premiumType = currentUser.premiumType;
                  }
                  return premiumType;
                }
              }
              cResult[39] = badge;
              cResult[40] = tmp14;
              cResult[41] = badgeStatusText;
              tmp32 = badgeStatusText;
              const tmpResult26 = tmp(tmp2[20]);
            } else {
              if (cResult[37] !== badge.info_label) {
                const obj33 = { key: "info", node: null };
                class E {
                  constructor() {
                    currentUser = closure_1_7.getCurrentUser();
                    premiumType = undefined;
                    if (currentUser != null) {
                      premiumType = currentUser.premiumType;
                    }
                    return premiumType;
                  }
                }
                obj33.node = closure_12(tmp(tmp2[14]).Text, {
                  variant: "text-md/medium",
                  color: "text-subtle",
                  children: null,
                });
                cResult[37] = badge.info_label;
                cResult[38] = obj33;
                let tmp29 = obj33;
                const obj34 = { variant: "text-md/medium", color: "text-subtle", children: null };
              } else {
                tmp29 = cResult[38];
              }
              items2.push(tmp29);
            }
            tmpResult18 = tmp(tmp2[21]);
          }
          class E {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              premiumType = undefined;
              if (currentUser != null) {
                premiumType = currentUser.premiumType;
              }
              return premiumType;
            }
          }
          tmp18[0] = badge;
          tmp18[1] = isViewingOtherUser;
          cResult[8] = badge;
          cResult[9] = isViewingOtherUser;
          cResult[10] = tmp18;
          tmp17 = tmp18;
        }
      }
      const obj35 = { badge, viewerBadge, isViewingOtherUser };
      cResult[4] = badge;
      cResult[5] = isViewingOtherUser;
      cResult[6] = viewerBadge;
      cResult[7] = obj35;
      tmp15 = obj35;
      const tmpResult14 = badge(isViewingOtherUser[15]);
    }
  : function BadgeDetailsSheetContent(badge) {
      badge = badge.badge;
      ({ viewerBadge, displayedUserId } = badge);
      const isViewingOtherUser = badge.isViewingOtherUser;
      ({ isViewerOwnershipKnown, pagePosition } = badge);
      let badgeDetailsCta;
      const tmp = closure_15();
      const items = [AccessibilityStore];
      const stateFromStores = badge(isViewingOtherUser[15]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
      );
      let obj = badge(isViewingOtherUser[15]);
      const items1 = [UserStore];
      const stateFromStores1 = badge(isViewingOtherUser[15]).useStateFromStores(items1, () => {
        currentUser = currentUser.getCurrentUser();
        let premiumType;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return premiumType;
      });
      let obj2 = badge(isViewingOtherUser[15]);
      const tmp8 = displayedUserId(isViewingOtherUser[17])({ badge, viewerBadge, isViewingOtherUser });
      let tmp18Result9 = displayedUserId(isViewingOtherUser[18])({ badge, isViewingOtherUser });
      const tmp7 = displayedUserId(isViewingOtherUser[16])(badge.badge_id);
      const displayTier = badge(isViewingOtherUser[19]).getDisplayTier(badge);
      let obj3 = badge(isViewingOtherUser[19]);
      const badgeArtUrls = badge(isViewingOtherUser[20]).getBadgeArtUrls(badge, displayTier, stateFromStores);
      ({ animatedUrl, imageUrl } = badgeArtUrls);
      let rarity;
      if (displayTier != null) {
        rarity = displayTier.rarity;
      }
      if (rarity == null) {
        rarity = badge.rarity;
      }
      const obj4 = badge(isViewingOtherUser[20]);
      const badgeTitle = badge(isViewingOtherUser[20]).getBadgeTitle(badge, displayTier);
      ({ isNitro, eyebrow, displayName } = badgeTitle);
      const tmp2Result = badge(isViewingOtherUser[20]);
      const isLegacyDisplayBadgeResult = badge(isViewingOtherUser[20]).isLegacyDisplayBadge(badge);
      const tiers = badge.tiers;
      let num;
      if (tiers != null) {
        num = tiers.length;
      }
      if (num == null) {
        num = 0;
      }
      let tmp34Result5 = num > 0;
      let flag;
      if (viewerBadge != null) {
        flag = viewerBadge.owned;
      }
      if (flag == null) {
        flag = false;
      }
      const items2 = [];
      const tmp2Result11 = badge(isViewingOtherUser[20]);
      if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
        const obj5 = { key: "info", node: null };
        const obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
        obj5.node = closure_12(tmp2(tmp3[14]).Text, obj6);
        items2.push(obj5);
      }
      const obj7 = { key: "status", node: null };
      const obj8 = { variant: "text-md/medium", color: "text-subtle", children: null };
      tmp2Result12 = badge(isViewingOtherUser[21]);
      obj8.children = badge(isViewingOtherUser[20]).getBadgeStatusText(badge, tmp7);
      obj7.node = closure_12(badge(isViewingOtherUser[14]).Text, obj8);
      items2.push(obj7);
      const tmp2Result13 = badge(isViewingOtherUser[20]);
      if (tmp20) {
        const obj9 = { key: "rarity", node: null };
        const obj10 = { rarity };
        obj9.node = closure_12(displayedUserId(tmp3[23]), obj10);
        items2.push(obj9);
      }
      tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[22]).BadgeRarity.COMMON;
      let result = badge(isViewingOtherUser[20]).isUpgradeableNitroViewer(badge, stateFromStores1);
      const tmp2Result14 = badge(isViewingOtherUser[20]);
      const badgeDescriptionText = badge(isViewingOtherUser[20]).getBadgeDescriptionText({
        badge,
        viewerBadge,
        isViewerOnUpgradeableNitro: result,
      });
      const tmp2Result15 = badge(isViewingOtherUser[20]);
      const isNullOrEmptyResult = badge(isViewingOtherUser[21]).isNullOrEmpty(badgeDescriptionText);
      const tmp2Result16 = badge(isViewingOtherUser[21]);
      badgeDetailsCta = badge(isViewingOtherUser[24]).getBadgeDetailsCta(badge.badge_id);
      const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
      const callback = noop.useCallback(() => {
        if (null != badgeDetailsCta) {
          const obj2 = {
            actionName: "primary_badge_action_clicked",
            badge,
            displayedUserId,
            isSociallyNavigated: isViewingOtherUser,
          };
          trackBadgeDirectoryActionDefault(obj2);
          ActionSheetActionCreatorsDefault.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
          badgeDetailsCta.ctaAction();
        }
      }, items3);
      const callback1 = noop.useCallback(() => {
        displayedUserId(isViewingOtherUser[26]).hideActionSheet(badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY);
        const obj = displayedUserId(isViewingOtherUser[26]);
        const result = badge(isViewingOtherUser[28]).closeBadgeDirectoryScreen();
        const obj2 = badge(isViewingOtherUser[28]);
        badge(isViewingOtherUser[29]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
      }, []);
      let result1 = isViewerOwnershipKnown;
      const callback2 = noop.useCallback(() => {
        displayedUserId(isViewingOtherUser[26]).hideActionSheet(badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY);
        const obj = displayedUserId(isViewingOtherUser[26]);
        const result = badge(isViewingOtherUser[28]).closeBadgeDirectoryScreen();
        const obj2 = badge(isViewingOtherUser[28]);
        const result1 = badge(isViewingOtherUser[28]).openBadgeDirectoryScreen();
      }, []);
      if (isViewerOwnershipKnown) {
        const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
        result1 = tmp2(tmp3[20]).shouldShowLegacyUnavailableNotice(obj11);
        const tmp2Result18 = tmp2(tmp3[20]);
      }
      let tmp30 = badge;
      if (!isViewingOtherUser) {
        let tmp31 = viewerBadge;
        if (viewerBadge == null) {
          tmp31 = badge;
        }
        tmp30 = tmp31;
      }
      let tmp18Result = null;
      if (result1) {
        const obj12 = { children: null };
        const intl = tmp2(tmp3[30]).intl;
        const obj13 = { onViewBadges: callback2 };
        obj12.children = intl.format(tmp2(tmp3[30]).t.vFekBs, obj13);
        tmp18Result = closure_12(closure_17, obj12);
      }
      const obj14 = { style: tmp.header, children: null };
      const tmp2Result17 = badge(isViewingOtherUser[24]);
      let isBetaBadgeIdResult = badge(isViewingOtherUser[19]).isBetaBadgeId(badge.badge_id);
      if (isBetaBadgeIdResult) {
        const obj15 = { style: tmp.betaPill, children: null };
        const obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: null };
        const intl2 = tmp2(tmp3[30]).intl;
        obj16.children = intl2.string(tmp2(tmp3[30]).t.oW0eUd);
        obj15.children = closure_12(tmp2(tmp3[14]).Text, obj16);
        isBetaBadgeIdResult = closure_12(closure_5, obj15);
      }
      const items4 = [isBetaBadgeIdResult, ,];
      let tmp18Result7 = null != imageUrl;
      if (tmp18Result7) {
        const obj17 = { url: imageUrl, height: null, animated: null, style: null };
        let num2 = 120;
        if (null != animatedUrl) {
          num2 = 180;
        }
        obj17.height = num2;
        obj17.animated = null != animatedUrl;
        const items5 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
        obj17.style = items5;
        tmp18Result7 = closure_12(displayedUserId(tmp3[31]), obj17);
        const tmp6Result = displayedUserId(tmp3[31]);
      }
      items4[1] = tmp18Result7;
      const obj18 = { style: tmp.identity, children: null };
      let tmp18Result8 = null != eyebrow;
      if (tmp18Result8) {
        const obj19 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
        const items6 = [,];
        ({ centeredText: arr8[0], eyebrow: arr8[1] } = tmp);
        obj19.style = items6;
        obj19.children = eyebrow;
        tmp18Result8 = closure_12(tmp2(tmp3[14]).Text, obj19);
      }
      const items7 = [tmp18Result8, ,];
      let str = "display-sm";
      if (isNitro) {
        str = "nitro-sm";
      }
      const obj20 = {
        variant: str,
        color: "text-strong",
        style: null,
        accessibilityLabel: null,
        accessibilityHint: null,
        children: null,
      };
      const items8 = [tmp.centeredText];
      let uppercase = isNitro;
      if (isNitro) {
        uppercase = tmp.uppercase;
      }
      items8[1] = uppercase;
      obj20.style = items8;
      let formatToPlainStringResult;
      if (null != pagePosition) {
        const intl3 = tmp2(tmp3[30]).intl;
        const obj21 = { badgeName: displayName, position: null, total: null };
        ({ position: obj32.position, total: obj32.total } = pagePosition);
        formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[30]).t.q7PYXq, obj21);
      }
      obj20.accessibilityLabel = formatToPlainStringResult;
      let stringResult;
      if (null != pagePosition) {
        const intl4 = tmp2(tmp3[30]).intl;
        stringResult = intl4.string(tmp2(tmp3[30]).t.jK2oto);
      }
      obj20.accessibilityHint = stringResult;
      obj20.children = displayName;
      items7[1] = closure_12(badge(isViewingOtherUser[14]).Heading, obj20);
      items7[2] = closure_12(closure_16, { segments: items2 });
      obj18.children = items7;
      items4[2] = closure_13(closure_5, obj18);
      obj14.children = items4;
      const items9 = [closure_13(closure_5, obj14), ,];
      if (tmp18Result9) {
        const obj22 = { children: null };
        const intl5 = tmp2(tmp3[30]).intl;
        const obj23 = { onGoToSettings: callback1 };
        obj22.children = intl5.format(tmp2(tmp3[30]).t.Zh44ni, obj23);
        tmp18Result9 = closure_12(closure_17, obj22);
      }
      items9[1] = tmp18Result9;
      if (!tmp8) {
        if (isNullOrEmptyResult) {
          let tmp34Result6 = tmp18Result;
        }
        const obj24 = { children: null };
        items9[2] = tmp34Result6;
        obj24.children = items9;
        return closure_13(closure_14, obj24);
      }
      const obj25 = { style: tmp.card, children: null };
      let tmp34Result = tmp8;
      if (tmp8) {
        const obj26 = { children: null };
        const obj27 = { badge, viewerBadge };
        const items10 = [closure_12(displayedUserId(tmp3[32]), obj27)];
        const obj28 = { style: tmp.divider };
        items10[1] = closure_12(closure_5, obj28);
        obj26.children = items10;
        tmp34Result = closure_13(closure_14, obj26);
      }
      const items11 = [tmp34Result, , , ,];
      let tmp34Result4 = tmp25;
      if (!isNullOrEmptyResult) {
        const obj29 = { style: tmp.descriptionGroup, children: null };
        let tmp18Result10 = isLegacyDisplayBadgeResult;
        if (isLegacyDisplayBadgeResult) {
          const obj30 = { variant: "text-sm/medium", color: "text-subtle", children: null };
          const intl6 = tmp2(tmp3[30]).intl;
          obj30.children = intl6.string(tmp2(tmp3[30]).t["/Gmn3f"]);
          tmp18Result10 = closure_12(tmp2(tmp3[14]).Text, obj30);
        }
        const items12 = [tmp18Result10];
        const obj31 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
        items12[1] = closure_12(tmp2(tmp3[14]).Text, obj31);
        obj29.children = items12;
        tmp34Result4 = closure_13(closure_5, obj29);
      }
      items11[1] = tmp34Result4;
      let tmp18Result11 = tmp25;
      if (!isNullOrEmptyResult) {
        tmp18Result11 = null != badgeDetailsCta;
      }
      if (tmp18Result11) {
        tmp18Result11 = isViewerOwnershipKnown;
      }
      if (tmp18Result11) {
        const obj33 = { variant: null, size: "md", onPress: null, text: null };
        const obj34 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
        obj33.variant = tmp2(tmp3[20]).getBadgeCtaVariant(obj34);
        obj33.onPress = callback;
        const obj35 = { owned: flag, isViewerOnUpgradeableNitro: result };
        obj33.text = badgeDetailsCta.ctaLabel(obj35);
        tmp18Result11 = closure_12(tmp2(tmp3[33]).Button, obj33);
        const tmp2Result20 = tmp2(tmp3[20]);
      }
      items11[2] = tmp18Result11;
      if (tmp34Result5) {
        let tmp18Result12 = !tmp8;
        if (!tmp8) {
          tmp18Result12 = tmp25;
        }
        if (tmp18Result12) {
          const obj36 = { style: tmp.divider };
          tmp18Result12 = closure_12(closure_5, obj36);
        }
        const obj37 = { children: null };
        const items13 = [tmp18Result12];
        const obj38 = {
          badge: tmp30,
          isViewingOtherUser,
          targetUsername: badge.targetUsername,
          isViewerOnUpgradeableNitro: result,
        };
        items13[1] = closure_12(displayedUserId(tmp3[34]), obj38);
        obj37.children = items13;
        tmp34Result5 = closure_13(closure_14, obj37);
      }
      items11[3] = tmp34Result5;
      items11[4] = tmp18Result;
      obj25.children = items11;
      tmp34Result6 = closure_13(closure_5, obj25);
      const tmp2Result19 = badge(isViewingOtherUser[19]);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeDetailsPage(badgeId) {
      const cResult = badgeId(currentUserId[12]).c(25);
      badgeId = badgeId.badgeId;
      const displayedUserId = badgeId.displayedUserId;
      currentUserId = badgeId.currentUserId;
      ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition, swipePageMinHeight } = badgeId);
      swipePage = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BadgeDirectoryStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === badgeId) {
        if (cResult[2] === displayedUserId) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(tmp2[15]).useStateFromStores(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [BadgeDirectoryStore];
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === badgeId) {
          if (cResult[7] === currentUserId) {
            let tmp11 = cResult[8];
            let tmp12 = cResult[9];
          }
          const stateFromStores1 = tmp(tmp2[15]).useStateFromStores(tmp9, tmp11, tmp12);
          if (null == stateFromStores) {
            return null;
          } else {
            if (cResult[10] === swipePage.page) {
              if (cResult[11] === swipePage.swipePage) {
                if (cResult[12] === swipePageMinHeight) {
                  if (cResult[14] === stateFromStores) {
                    if (cResult[15] === displayedUserId) {
                      if (cResult[16] === isViewerOwnershipKnown) {
                        if (cResult[17] === isViewingOtherUser) {
                          if (cResult[18] === pagePosition) {
                            if (cResult[19] === targetUsername) {
                              if (cResult[20] === stateFromStores1) {
                                let tmp18 = cResult[21];
                              }
                              if (cResult[22] === tmp16) {
                              }
                              const obj2 = { style: tmp16, children: tmp18 };
                              class D {
                                constructor() {
                                  badgeById = undefined;
                                  if (null != currentUserId) {
                                    tmp3 = closure_8;
                                    tmp4 = badgeId;
                                    badgeById = closure_8.getBadgeById(badgeId, tmp);
                                  }
                                  return badgeById;
                                }
                              }
                              cResult[22] = tmp16;
                              cResult[23] = tmp18;
                              cResult[24] = tmp25;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {
                    badge: stateFromStores,
                    viewerBadge: stateFromStores1,
                    displayedUserId: null,
                    isViewingOtherUser: null,
                    targetUsername: null,
                    isViewerOwnershipKnown: null,
                    pagePosition: null,
                  };
                  class D {
                    constructor() {
                      badgeById = undefined;
                      if (null != currentUserId) {
                        tmp3 = closure_8;
                        tmp4 = badgeId;
                        badgeById = closure_8.getBadgeById(badgeId, tmp);
                      }
                      return badgeById;
                    }
                  }
                  obj3.isViewingOtherUser = isViewingOtherUser;
                  obj3.targetUsername = targetUsername;
                  obj3.isViewerOwnershipKnown = isViewerOwnershipKnown;
                  obj3.pagePosition = pagePosition;
                  const tmp21 = closure_12(closure_18, obj3);
                  cResult[14] = stateFromStores;
                  cResult[15] = displayedUserId;
                  cResult[16] = isViewerOwnershipKnown;
                  cResult[17] = isViewingOtherUser;
                  cResult[18] = pagePosition;
                  cResult[19] = targetUsername;
                  cResult[20] = stateFromStores1;
                  cResult[21] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
            if (null != swipePageMinHeight) {
              const items2 = [swipePage.swipePage];
              const obj4 = { minHeight: swipePageMinHeight };
              items2[1] = obj4;
              let page = items2;
            } else {
              page = swipePage.page;
            }
            ({ page: tmp3[10], swipePage } = swipePage);
            cResult[11] = swipePage;
            class D {
              constructor() {
                badgeById = undefined;
                if (null != currentUserId) {
                  tmp3 = closure_8;
                  tmp4 = badgeId;
                  badgeById = closure_8.getBadgeById(badgeId, tmp);
                }
                return badgeById;
              }
            }
            cResult[12] = swipePageMinHeight;
            cResult[13] = page;
          }
          const tmpResult2 = tmp(tmp2[15]);
        }
        class D {
          constructor() {
            badgeById = undefined;
            if (null != currentUserId) {
              tmp3 = closure_8;
              tmp4 = badgeId;
              badgeById = closure_8.getBadgeById(badgeId, tmp);
            }
            return badgeById;
          }
        }
        const items3 = [badgeId, currentUserId];
        cResult[6] = badgeId;
        cResult[7] = currentUserId;
        cResult[8] = D;
        cResult[9] = items3;
        tmp12 = items3;
        tmp11 = D;
        const tmpResult = tmp(tmp2[15]);
      }
      const fn = function s() {
        return BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
      };
      const items4 = [badgeId, displayedUserId];
      cResult[1] = badgeId;
      cResult[2] = displayedUserId;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp7 = items4;
      tmp6 = fn;
      const obj = badgeId(currentUserId[12]);
    }
  : function BadgeDetailsPage(badgeId) {
      badgeId = badgeId.badgeId;
      const displayedUserId = badgeId.displayedUserId;
      const currentUserId = badgeId.currentUserId;
      const swipePageMinHeight = badgeId.swipePageMinHeight;
      ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition } = badgeId);
      let obj = closure_15();
      const items = [BadgeDirectoryStore];
      const items1 = [badgeId, displayedUserId];
      const stateFromStores = badgeId(currentUserId[15]).useStateFromStores(
        items,
        () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
        items1,
      );
      badgeId(currentUserId[15]);
      [][0] = BadgeDirectoryStore;
      const items2 = [badgeId, currentUserId];
      if (null == stateFromStores) {
        return null;
      } else {
        if (null != swipePageMinHeight) {
          const items3 = [obj.swipePage];
          const obj3 = { minHeight: swipePageMinHeight };
          items3[1] = obj3;
          let page = items3;
        } else {
          page = obj.page;
        }
        obj = { style: page, children: null };
        const obj4 = {
          badge: stateFromStores,
          viewerBadge: tmp3,
          displayedUserId,
          isViewingOtherUser,
          targetUsername,
          isViewerOwnershipKnown,
          pagePosition,
        };
        obj.children = closure_12(closure_18, obj4);
        closure_12(closure_5, obj);
      }
      const obj2 = badgeId(currentUserId[15]);
    };
ReactCompilerGating = fn(558);
let obj14 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeDetailsSheet(badgeId) {
      const cResult = badgeId(isViewingOtherUser[12]).c(81);
      badgeId = badgeId.badgeId;
      const displayedUserId = badgeId.displayedUserId;
      isViewingOtherUser = badgeId.isViewingOtherUser;
      const targetUsername = badgeId.targetUsername;
      closure_15();
      const bound = Math.max(displayedUserId(isViewingOtherUser[35])().bottom, closure_11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[0] = 4;
        let num = 4;
      } else {
        num = cResult[0];
      }
      const sum = bound + num;
      const bound1 = Math.min(displayedUserId(tmp2[36])().width, closure_10);
      const tmp9 = targetUsername(noop.useState(0), 2);
      noop = tmp9[1];
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
        cResult[1] = I;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
      }
      const bound2 = Math.max(tmp9[0] - sum, 0);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
        let items = [UserStore];
        class V {
          constructor() {
            currentUser = closure_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[2] = items;
        cResult[3] = V;
        let tmp13 = V;
        const tmp12 = items;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
        tmp13 = cResult[3];
      }
      let obj = badgeId(isViewingOtherUser[12]);
      const stateFromStores = badgeId(isViewingOtherUser[15]).useStateFromStores(tmp12, tmp13);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
        let items1 = [isBadgeDetailsSwipeEnabled];
        class V {
          constructor() {
            currentUser = closure_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[4] = items1;
        const tmp15 = items1;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
      }
      if (cResult[5] === stateFromStores) {
        class I {
          constructor(arg0) {
            tmp = closure_4(badgeId.nativeEvent.layout.height);
            return;
          }
        }
        const stateFromStores1 = tmp(tmp2[15]).useStateFromStores(tmp15, K, items2);
        class V {
          constructor() {
            currentUser = closure_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              tmp = closure_4(badgeId.nativeEvent.layout.height);
              return;
            }
          }
          cResult[9] = tmp18;
          class V {
            constructor() {
              currentUser = closure_7.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
        } else {
          class I {
            constructor(arg0) {
              tmp = closure_4(badgeId.nativeEvent.layout.height);
              return;
            }
          }
        }
        const tmpResult4 = tmp(tmp2[15]);
        isBadgeDetailsSwipeEnabled = tmp(tmp2[37]).useIsBadgeDetailsSwipeEnabled(tmp17);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              tmp = closure_4(badgeId.nativeEvent.layout.height);
              return;
            }
          }
          cResult[10] = tmp21;
          class V {
            constructor() {
              currentUser = closure_7.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
        } else {
          class I {
            constructor(arg0) {
              tmp = closure_4(badgeId.nativeEvent.layout.height);
              return;
            }
          }
        }
        const tmpResult5 = tmp(tmp2[37]);
        const isBadgeDirectoryUpdatesEnabled = tmp(tmp2[37]).useIsBadgeDirectoryUpdatesEnabled(tmp20);
        if (cResult[11] === displayedUserId) {
          class I {
            constructor(arg0) {
              tmp = closure_4(badgeId.nativeEvent.layout.height);
              return;
            }
          }
        }
        const fn = function z() {
          if (isBadgeDetailsSwipeEnabled) {
            closure_0 = badgeId;
            const directoryBadges = BadgeUtils.getDirectoryBadges(BadgeDirectoryStore.getBadges(displayedUserId));
            const owned = directoryBadges.owned;
            if (isViewingOtherUser) {
              const items = [owned];
              let items1 = items;
            } else {
              items1 = [owned, tmp8];
            }
            const found = items1.find((arr) => arr.some((badge_id) => badge_id.badge_id === closure_1_0));
            if (null != found) {
              let mapped = found.map((badge_id) => badge_id.badge_id);
            } else {
              mapped = [badgeId];
            }
          } else {
            const items2 = [badgeId];
            return items2;
          }
        };
        cResult[11] = displayedUserId;
        cResult[12] = badgeId;
        cResult[13] = isBadgeDetailsSwipeEnabled;
        cResult[14] = isViewingOtherUser;
        cResult[15] = fn;
        const tmpResult6 = tmp(tmp2[37]);
      }
      class K {
        constructor() {
          tmp = !isViewingOtherUser;
          if (isViewingOtherUser) {
            tmp3 = null;
            hasCatalogForResult = null != closure_6;
            if (hasCatalogForResult) {
              tmp5 = closure_8;
              hasCatalogForResult = closure_8.hasCatalogFor(tmp2);
            }
            tmp = hasCatalogForResult;
          }
          return tmp;
        }
      }
      items2 = [stateFromStores, isViewingOtherUser];
      cResult[5] = stateFromStores;
      cResult[6] = isViewingOtherUser;
      cResult[7] = K;
      cResult[8] = items2;
      const tmpResult = badgeId(isViewingOtherUser[15]);
    }
  : function BadgeDetailsSheet(badgeId) {
      badgeId = badgeId.badgeId;
      const displayedUserId = badgeId.displayedUserId;
      const isViewingOtherUser = badgeId.isViewingOtherUser;
      const targetUsername = badgeId.targetUsername;
      noop = undefined;
      let stateFromStores1;
      let isBadgeDetailsSwipeEnabled;
      let first1;
      closure_11 = undefined;
      const sum = Math.max(displayedUserId(isViewingOtherUser[35])().bottom, closure_11) + 4;
      const bound = Math.min(displayedUserId(isViewingOtherUser[36])().width, first1);
      let tmp = closure_15();
      [tmp6, c4] = targetUsername(noop.useState(0), 2);
      const callback = noop.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.height);
      }, []);
      const bound1 = Math.max(tmp6 - sum, 0);
      const tmp5 = targetUsername(noop.useState(0), 2);
      let items = [stateFromStores1];
      const stateFromStores = badgeId(isViewingOtherUser[15]).useStateFromStores(items, () => {
        const currentUser = stateFromStores1.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      let obj = badgeId(isViewingOtherUser[15]);
      let items1 = [isBadgeDetailsSwipeEnabled];
      let items2 = [stateFromStores, isViewingOtherUser];
      stateFromStores1 = badgeId(isViewingOtherUser[15]).useStateFromStores(
        items1,
        () => {
          let tmp = !isViewingOtherUser;
          if (isViewingOtherUser) {
            let hasCatalogForResult = null != stateFromStores;
            if (hasCatalogForResult) {
              hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp2);
            }
            tmp = hasCatalogForResult;
          }
          return tmp;
        },
        items2,
      );
      let obj2 = badgeId(isViewingOtherUser[15]);
      isBadgeDetailsSwipeEnabled = badgeId(isViewingOtherUser[37]).useIsBadgeDetailsSwipeEnabled({
        location: "BadgeDetailsSheet",
      });
      let obj3 = badgeId(isViewingOtherUser[37]);
      const isBadgeDirectoryUpdatesEnabled = badgeId(isViewingOtherUser[37]).useIsBadgeDirectoryUpdatesEnabled({
        location: "BadgeDetailsSheet",
      });
      const first = targetUsername(
        noop.useState(() => {
          if (isBadgeDetailsSwipeEnabled) {
            closure_0 = badgeId;
            const directoryBadges = BadgeUtils.getDirectoryBadges(BadgeDirectoryStore.getBadges(displayedUserId));
            const owned = directoryBadges.owned;
            if (isViewingOtherUser) {
              const items = [owned];
              let items1 = items;
            } else {
              items1 = [owned, tmp8];
            }
            const found = items1.find((arr) => arr.some((badge_id) => badge_id.badge_id === closure_1_0));
            if (null != found) {
              let mapped = found.map((badge_id) => badge_id.badge_id);
            } else {
              mapped = [badgeId];
            }
          } else {
            const items2 = [badgeId];
            return items2;
          }
        }),
        1,
      )[0];
      const tmp14 = targetUsername(noop.useState(badgeId), 2);
      first1 = tmp14[0];
      closure_11 = tmp14[1];
      const obj4 = badgeId(isViewingOtherUser[37]);
      const items3 = [isBadgeDetailsSwipeEnabled];
      const items4 = [first1, displayedUserId];
      const stateFromStores2 = badgeId(isViewingOtherUser[15]).useStateFromStores(
        items3,
        () => BadgeDirectoryStore.getBadgeById(first1, displayedUserId),
        items4,
      );
      const items5 = [
        first,
        stateFromStores,
        displayedUserId,
        stateFromStores1,
        isViewingOtherUser,
        bound1,
        targetUsername,
      ];
      const items6 = [first];
      const memo = noop.useMemo(
        () =>
          first.map((badgeId, index) => {
            const obj = { id: "" + badgeId, label: "" + badgeId, page: null };
            const obj2 = {
              badgeId,
              displayedUserId,
              currentUserId,
              isViewingOtherUser,
              targetUsername,
              isViewerOwnershipKnown,
              pagePosition: null,
              swipePageMinHeight: null,
            };
            let tmp3;
            if (length.length > 1) {
              const obj3 = { position: index + 1, total: arr.length };
              tmp3 = obj3;
            }
            obj2.pagePosition = tmp3;
            obj2.swipePageMinHeight = swipePageMinHeight;
            obj.page = closure_2_12(closure_2_19, obj2);
            return obj;
          }),
        items5,
      );
      const callback1 = noop.useCallback((arg0) => {
        if (null != first[arg0]) {
          closure_11(tmp);
        }
      }, items6);
      const obj5 = badgeId(isViewingOtherUser[15]);
      const obj6 = badgeId(isViewingOtherUser[38]);
      const items7 = [stateFromStores, isViewingOtherUser];
      const segmentedControlState = obj6.useSegmentedControlState({
        items: memo,
        pageWidth: bound,
        defaultIndex: Math.max(first.indexOf(badgeId), 0),
        onPageChange: callback1,
      });
      const effect = noop.useEffect(() => {
        let tmp = isViewingOtherUser;
        if (isViewingOtherUser) {
          tmp = null != stateFromStores;
        }
        if (tmp) {
          if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
            const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
          }
        }
      }, items7);
      const items8 = [first1, displayedUserId, isViewingOtherUser];
      const effect1 = noop.useEffect(() => {
        const badgeById = BadgeDirectoryStore.getBadgeById(first1, displayedUserId);
        if (null != badgeById) {
          const obj = {
            actionName: "badge_detail_viewed",
            badge: badgeById,
            displayedUserId,
            isSociallyNavigated: isViewingOtherUser,
          };
          trackBadgeDirectoryActionDefault(obj);
        }
      }, items8);
      const obj7 = {
        items: memo,
        pageWidth: bound,
        defaultIndex: Math.max(first.indexOf(badgeId), 0),
        onPageChange: callback1,
      };
      const dismissBadgeDirectoryBadgeIndicator = badgeId(
        isViewingOtherUser[40],
      ).useDismissBadgeDirectoryBadgeIndicator({ badgeId: first1, enabled: !isViewingOtherUser });
      let tmp24 = isBadgeDirectoryUpdatesEnabled;
      if (isBadgeDirectoryUpdatesEnabled) {
        tmp24 = !isBadgeDetailsSwipeEnabled;
      }
      const obj10 = { startExpanded: !tmp24, scrollable: true, dismissAccessibilityLabel: null, children: null };
      let name;
      if (stateFromStores2 != null) {
        name = stateFromStores2.name;
      }
      obj10.dismissAccessibilityLabel = name;
      const obj11 = { contentContainerStyle: null, onLayout: null, children: null };
      const items9 = [tmp.content, { paddingBottom: sum }];
      obj11.contentContainerStyle = items9;
      let tmp26;
      if (isBadgeDetailsSwipeEnabled) {
        tmp26 = callback;
      }
      obj11.onLayout = tmp26;
      if (isBadgeDetailsSwipeEnabled) {
        const obj12 = { state: segmentedControlState };
        let tmp23Result = closure_12(tmp9(tmp2[41]).SegmentedControlPages, obj12);
      } else {
        const obj13 = {
          badgeId,
          displayedUserId,
          currentUserId: stateFromStores,
          isViewingOtherUser,
          targetUsername,
          isViewerOwnershipKnown: stateFromStores1,
        };
        tmp23Result = closure_12(closure_19, obj13);
      }
      obj11.children = tmp23Result;
      obj10.children = closure_12(badgeId(isViewingOtherUser[42]).BottomSheetScrollView, obj11);
      return closure_12(badgeId(isViewingOtherUser[43]).BottomSheet, obj10);
    };
