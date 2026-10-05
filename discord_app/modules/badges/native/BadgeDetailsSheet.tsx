// === Module 10893: BadgeDetailsSheet ===

// Module 10893 (BadgeDetailsSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4812 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10892 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 10971 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import UserStore from "UserStore" /* 1377 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, badge, badgeId, children, segments;

let Platform;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
const f105513 = (arr) => arr.some((badge_id) => badge_id.badge_id === closure_1_0);
const f105514 = (badge_id) => badge_id.badge_id;
let react = react_mod;
({ Platform, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ ACTION_SHEET_MAX_WIDTH: c10, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: unpackModuleId } = ActionSheetConstants);
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { flexGrow: 1 }, page: obj2, swipePage: obj3, header: obj4, betaPill: obj5, graphic: obj6, graphicAnimated: obj7, identity: { alignItems: "center" }, centeredText: { textAlign: "center" }, eyebrow: obj8, uppercase: { textTransform: "uppercase" }, accessoryLine: obj9, accessoryDot: size, card: obj10, descriptionGroup: obj11, divider: obj12, notice: obj13, noticeIcon: { marginTop: 2 }, noticeText: { flex: 1 } };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "flex-start", paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj7 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj8 = { marginBottom: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj10 = { flexGrow: 1, gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj11 = { gap: nativeDefault.space.PX_4 };
obj12 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj13 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((segments) => {
  let accessoryDot;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(8);
  segments = segments.segments;
  let tmp2 = closure_15();
  _require = tmp2;
  if (cResult[0] === segments) {
    let tmp4;
    if (cResult[1] === tmp2.accessoryDot) {
      tmp4 = cResult[2];
    }
    if (cResult[5] === tmp2.accessoryLine) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    let obj2 = { style: tmp3, children: tmp4 };
    const tmp10 = closure_12(closure_5, obj2);
    cResult[5] = tmp2.accessoryLine;
    cResult[6] = tmp4;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  if (cResult[3] !== tmp2.accessoryDot) {
    const fn = function l(arg0, arg1) {
      let items;
      let key;
      let node;
      let tmp2 = arg1 > 0;
      ({ key, node } = arg0);
      const Fragment = react.Fragment;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = closure_12(hasOwnProperty, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return map1(Fragment, obj2, key);
    };
    cResult[3] = tmp2.accessoryDot;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = segments.map(tmp5);
  cResult[0] = segments;
  cResult[1] = tmp2.accessoryDot;
  cResult[2] = mapped;
  tmp4 = mapped;
}) : ((segments) => {
  segments = segments.segments;
  const tmp = closure_15();
  const accessoryDot = tmp;
  let obj = {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let items;
      let key;
      let node;
      let tmp2 = index > 0;
      ({ key, node } = item);
      const Fragment = react.Fragment;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = closure_12(hasOwnProperty, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return map1(Fragment, obj2, key);
    })
  };
  return closure_12(closure_5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  children = children.children;
  const tmp4 = closure_15();
  if (cResult[0] !== tmp4.noticeIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp4.noticeIcon };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    const tmp8 = closure_12(CircleInformationIcon, obj2);
    cResult[0] = tmp4.noticeIcon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp9;
    if (cResult[3] === tmp4.noticeText) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.notice) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp4.notice, children: items };
    items = [tmp5, tmp9];
    const tmp14 = map1(hasOwnProperty, obj3);
    cResult[5] = tmp4.notice;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp4.noticeText, children };
  const tmp10 = closure_12(Text_Text.Text, obj4);
  cResult[2] = children;
  cResult[3] = tmp4.noticeText;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((children) => {
  let items;
  children = children.children;
  const tmp = closure_15();
  const obj = { style: tmp.notice, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [closure_12(CircleInformationIcon, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.noticeText, children };
  items[1] = closure_12(Text_Text.Text, obj3);
  return map1(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let Text;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let formatToPlainStringResult;
  let imageUrl;
  let intl;
  let isNitro;
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj16;
  let obj27;
  let obj3;
  let obj34;
  let obj6;
  let pagePosition;
  let targetUsername;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmpResult23;
  let useReducedMotion;
  let viewerBadge;
  let obj = badge(isViewingOtherUser[12]);
  const cResult = obj.c(75);
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
  const tmpResult = badge(isViewingOtherUser[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class D {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let premiumType;
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
        }
        return premiumType;
      }
    }
    cResult[2] = items1;
    cResult[3] = D;
    tmp10 = D;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult14 = badge(isViewingOtherUser[15]);
  const stateFromStores1 = tmpResult14.useStateFromStores(tmp9, tmp10);
  const tmp14 = displayedUserId(isViewingOtherUser[16])(badge.badge_id);
  if (cResult[4] === badge) {
    if (cResult[5] === isViewingOtherUser) {
      let tmp15;
      if (cResult[6] === viewerBadge) {
        tmp15 = cResult[7];
      }
      const tmp16 = displayedUserId(isViewingOtherUser[17])(tmp15);
      if (cResult[8] === badge) {
        let tmp17;
        let tmp71Result4;
        let tmp20;
        if (cResult[9] === isViewingOtherUser) {
          tmp17 = cResult[10];
        }
        const tmp19 = displayedUserId(isViewingOtherUser[18])(tmp17);
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
                                                      tmp20 = cResult[34];
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
        class D {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let premiumType;
            if (currentUser != null) {
              premiumType = currentUser.premiumType;
            }
            return premiumType;
          }
        }
        const displayTier = obj5.getDisplayTier(badge);
        const tmpResult15 = badge(isViewingOtherUser[20]);
        const badgeArtUrls = tmpResult15.getBadgeArtUrls(badge, displayTier, stateFromStores);
        ({ animatedUrl, imageUrl } = badgeArtUrls);
        let rarity;
        if (displayTier != null) {
          rarity = displayTier.rarity;
        }
        if (rarity == null) {
          rarity = badge.rarity;
        }
        const tmpResult16 = badge(isViewingOtherUser[20]);
        const badgeTitle = tmpResult16.getBadgeTitle(badge, displayTier);
        ({ isNitro, eyebrow, displayName } = badgeTitle);
        if (cResult[35] !== badge) {
          const tmpResult17 = badge(isViewingOtherUser[20]);
          const isLegacyDisplayBadgeResult = tmpResult17.isLegacyDisplayBadge(badge);
          class D {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let premiumType;
              if (currentUser != null) {
                premiumType = currentUser.premiumType;
              }
              return premiumType;
            }
          }
          cResult[36] = isLegacyDisplayBadgeResult;
          tmp71Result4 = isLegacyDisplayBadgeResult;
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
        const tmpResult18 = badge(isViewingOtherUser[21]);
        if (!tmpResult18.isNullOrEmpty(badge.info_label)) {
          let tmp29;
          if (cResult[37] !== badge.info_label) {
            let obj2 = { key: "info", node: closure_12(badge(isViewingOtherUser[14]).Text, obj3) };
            obj3 = { variant: "text-md/medium", color: "text-subtle", children: null };
            class D {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[37] = badge.info_label;
            cResult[38] = obj2;
            tmp29 = obj2;
          } else {
            tmp29 = cResult[38];
          }
          items2.push(tmp29);
        }
        if (cResult[39] === badge) {
          let tmp32;
          let tmp34;
          let obj20;
          if (cResult[40] === tmp14) {
            tmp32 = cResult[41];
          }
          if (cResult[42] !== tmp32) {
            let obj4 = { key: "status", node: closure_12(badge(isViewingOtherUser[14]).Text, obj6) };
            obj6 = { variant: "text-md/medium", color: "text-subtle", children: null };
            class D {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[42] = tmp32;
            cResult[43] = obj4;
            tmp34 = obj4;
          } else {
            tmp34 = cResult[43];
          }
          items2.push(tmp34);
          class D {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let premiumType;
              if (currentUser != null) {
                premiumType = currentUser.premiumType;
              }
              return premiumType;
            }
          }
          if (tmp37) {
            const push = items2.push;
            const obj7 = { key: "rarity", node: closure_12(displayedUserId(isViewingOtherUser[23]), tmp39) };
            class D {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            tmp39[0] = rarity;
            push(obj7);
          }
          const tmpResult19 = badge(isViewingOtherUser[20]);
          let result = tmpResult19.isUpgradeableNitroViewer(badge, stateFromStores1);
          const obj8 = { badge, viewerBadge, isViewerOnUpgradeableNitro: result };
          const tmpResult20 = badge(isViewingOtherUser[20]);
          const badgeDescriptionText = tmpResult20.getBadgeDescriptionText(obj8);
          const tmpResult21 = badge(isViewingOtherUser[21]);
          const isNullOrEmptyResult = tmpResult21.isNullOrEmpty(badgeDescriptionText);
          if (cResult[44] !== badge.badge_id) {
            const tmpResult22 = badge(isViewingOtherUser[24]);
            const badgeDetailsCta = tmpResult22.getBadgeDetailsCta(badge.badge_id);
            class D {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let premiumType;
                if (currentUser != null) {
                  premiumType = currentUser.premiumType;
                }
                return premiumType;
              }
            }
            cResult[45] = badgeDetailsCta;
            obj20 = badgeDetailsCta;
          } else {
            obj20 = cResult[45];
          }
          if (cResult[46] === badge) {
            if (cResult[47] === obj20) {
              if (cResult[48] === displayedUserId) {
                let tmp46;
                if (cResult[49] === isViewingOtherUser) {
                  tmp46 = cResult[50];
                }
                const _Symbol = Symbol;
                class D {
                  constructor() {
                    currentUser = currentUser.getCurrentUser();
                    let premiumType;
                    if (currentUser != null) {
                      premiumType = currentUser.premiumType;
                    }
                    return premiumType;
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                  function ce() {
                    const obj = displayedUserId(isViewingOtherUser[26]);
                    obj.hideActionSheet(badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY);
                    const obj2 = badge(isViewingOtherUser[28]);
                    const result = obj2.closeBadgeDirectoryScreen();
                    const obj3 = badge(isViewingOtherUser[28]);
                    const result1 = obj3.openBadgeDirectoryScreen();
                  }
                  cResult[52] = ce;
                  class D {
                    constructor() {
                      currentUser = currentUser.getCurrentUser();
                      let premiumType;
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
                      class D {
                        constructor() {
                          currentUser = currentUser.getCurrentUser();
                          let premiumType;
                          if (currentUser != null) {
                            premiumType = currentUser.premiumType;
                          }
                          return premiumType;
                        }
                      }
                      if (cResult[60] === badge.badge_id) {
                        if (cResult[61] === tmp4.betaPill) {
                          let tmp55;
                          let tmp63;
                          if (cResult[62] === tmp4.uppercase) {
                            tmp55 = cResult[63];
                          }
                          let tmp60Result = null != imageUrl;
                          if (tmp60Result) {
                            const obj9 = { url: imageUrl, height: num36, animated: null != animatedUrl, style: items3 };
                            class D {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            items3 = [tmp4.graphic, null != animatedUrl && tmp4.graphicAnimated];
                            const tmp13Result = displayedUserId(isViewingOtherUser[31]);
                            tmp60Result = closure_12(tmp13Result, obj9);
                          }
                          class D {
                            constructor() {
                              currentUser = currentUser.getCurrentUser();
                              let premiumType;
                              if (currentUser != null) {
                                premiumType = currentUser.premiumType;
                              }
                              return premiumType;
                            }
                          }
                          if (cResult[66] !== items2) {
                            const obj10 = { segments: null };
                            class D {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            const tmp66 = closure_12(closure_16, obj10);
                            cResult[66] = items2;
                            cResult[67] = tmp66;
                            tmp63 = tmp66;
                          } else {
                            tmp63 = cResult[67];
                          }
                          let tmp69 = null != eyebrow;
                          const obj11 = { style: tmp4.identity, children: items5 };
                          if (tmp69) {
                            const obj12 = { variant: "text-md/medium", color: "text-subtle", style: items4, children: eyebrow };
                            items4 = [, ];
                            class D {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            items4[1] = tmp4.eyebrow;
                            tmp69 = closure_12(tmp(tmp2[14]).Text, obj12);
                          }
                          items5 = [tmp69, , ];
                          let str = "display-sm";
                          const Heading = tmp(tmp2[14]).Heading;
                          if (isNitro) {
                            str = "nitro-sm";
                          }
                          const obj13 = { variant: str, color: "text-strong", style: items6, accessibilityLabel: formatToPlainStringResult, accessibilityHint: tmp62, children: displayName };
                          items6 = [tmp4.centeredText, isNitro && tmp4.uppercase];
                          formatToPlainStringResult = undefined;
                          if (null != pagePosition) {
                            const intl2 = tmp(tmp2[30]).intl;
                            const formatToPlainString = intl2.formatToPlainString;
                            const obj14 = { badgeName: null, position: null, total: null };
                            class D {
                              constructor() {
                                currentUser = currentUser.getCurrentUser();
                                let premiumType;
                                if (currentUser != null) {
                                  premiumType = currentUser.premiumType;
                                }
                                return premiumType;
                              }
                            }
                            ({ position: obj32.position, total: obj32.total } = pagePosition);
                            formatToPlainStringResult = formatToPlainString(tmp(tmp2[30]).t.q7PYXq, obj14);
                          }
                          items5[1] = closure_12(Heading, obj13);
                          items5[2] = tmp63;
                          const tmp67Result = closure_13(closure_5, obj11);
                          if (cResult[68] === tmp4.header) {
                            if (cResult[69] === tmp55) {
                              if (cResult[70] === tmp60Result) {
                                let tmp74;
                                let tmp76;
                                if (cResult[71] === tmp67Result) {
                                  tmp74 = cResult[72];
                                }
                                if (cResult[73] !== tmp19) {
                                  let tmp71Result = tmp19;
                                  if (tmp71Result) {
                                    const obj15 = { children: tmp79(badge(isViewingOtherUser[30]).t.Zh44ni, obj16) };
                                    const intl3 = tmp(tmp2[30]).intl;
                                    class D {
                                      constructor() {
                                        currentUser = currentUser.getCurrentUser();
                                        let premiumType;
                                        if (currentUser != null) {
                                          premiumType = currentUser.premiumType;
                                        }
                                        return premiumType;
                                      }
                                    }
                                    obj16 = { onGoToSettings: tmp48 };
                                    tmp71Result = closure_12(closure_17, obj15);
                                  }
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  cResult[74] = tmp71Result;
                                  tmp76 = tmp71Result;
                                } else {
                                  tmp76 = cResult[74];
                                }
                                class D {
                                  constructor() {
                                    currentUser = currentUser.getCurrentUser();
                                    let premiumType;
                                    if (currentUser != null) {
                                      premiumType = currentUser.premiumType;
                                    }
                                    return premiumType;
                                  }
                                }
                                tmp81[0] = tmp74;
                                tmp81[1] = tmp76;
                                if (!tmp16) {
                                  let tmp67Result11;
                                  if (isNullOrEmptyResult) {
                                    tmp67Result11 = tmp54;
                                  }
                                  const obj17 = { children: null };
                                  tmp81[2] = tmp67Result11;
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  const tmp67Result7 = closure_13(closure_14, obj17);
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
                                }
                                let tmp67Result8 = tmp16;
                                const obj18 = { style: tmp4.card, children: items8 };
                                if (tmp67Result8) {
                                  const obj19 = { children: items7 };
                                  const obj21 = { badge, viewerBadge: null };
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  items7 = [closure_12(displayedUserId(isViewingOtherUser[32]), obj21), ];
                                  const obj22 = { style: tmp4.divider };
                                  items7[1] = closure_12(closure_5, obj22);
                                  tmp67Result8 = closure_13(closure_14, obj19);
                                }
                                items8 = [tmp67Result8, , , , ];
                                let tmp67Result9 = tmp44;
                                if (!isNullOrEmptyResult) {
                                  const obj23 = { style: tmp4.descriptionGroup, children: tmp86 };
                                  if (tmp71Result4) {
                                    const obj24 = { variant: "text-sm/medium", color: "text-subtle", children: tmp85(badge(isViewingOtherUser[30]).t["/Gmn3f"]) };
                                    const Text2 = tmp(tmp2[14]).Text;
                                    const intl4 = tmp(tmp2[30]).intl;
                                    class D {
                                      constructor() {
                                        currentUser = currentUser.getCurrentUser();
                                        let premiumType;
                                        if (currentUser != null) {
                                          premiumType = currentUser.premiumType;
                                        }
                                        return premiumType;
                                      }
                                    }
                                    tmp71Result4 = closure_12(Text2, obj24);
                                  }
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp86[0] = tmp71Result4;
                                  const obj25 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
                                  tmp86[1] = closure_12(badge(isViewingOtherUser[14]).Text, obj25);
                                  tmp67Result9 = closure_13(closure_5, obj23);
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
                                  const obj26 = { variant: tmpResult23.getBadgeCtaVariant(tmp88), size: "md", onPress: tmp46, text: obj20.ctaLabel(obj27) };
                                  const Button = tmp(tmp2[33]).Button;
                                  tmpResult23 = badge(isViewingOtherUser[20]);
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp88[0] = isNitro;
                                  tmp88[1] = result;
                                  tmp88[2] = flag;
                                  obj27 = { owned: flag, isViewerOnUpgradeableNitro: result };
                                  tmp71Result5 = closure_12(Button, obj26);
                                }
                                items8[2] = tmp71Result5;
                                if (tmp67Result10) {
                                  let tmp71Result6 = !tmp16 && tmp44;
                                  if (tmp71Result6) {
                                    const obj28 = { style: tmp4.divider };
                                    tmp71Result6 = closure_12(closure_5, obj28);
                                  }
                                  const obj29 = { children: tmp90 };
                                  class D {
                                    constructor() {
                                      currentUser = currentUser.getCurrentUser();
                                      let premiumType;
                                      if (currentUser != null) {
                                        premiumType = currentUser.premiumType;
                                      }
                                      return premiumType;
                                    }
                                  }
                                  tmp90[0] = tmp71Result6;
                                  const obj30 = { badge: tmp52, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
                                  tmp90[1] = closure_12(displayedUserId(isViewingOtherUser[34]), obj30);
                                  tmp67Result10 = closure_13(closure_14, obj29);
                                }
                                items8[3] = tmp67Result10;
                                items8[4] = tmp54;
                                tmp67Result11 = closure_13(closure_5, obj18);
                              }
                            }
                          }
                          const obj31 = { style: tmp4.header, children: items9 };
                          items9 = [tmp55, tmp60Result, tmp67Result];
                          const tmp67Result12 = closure_13(closure_5, obj31);
                          cResult[68] = tmp4.header;
                          cResult[69] = tmp55;
                          cResult[70] = tmp60Result;
                          cResult[71] = tmp67Result;
                          cResult[72] = tmp67Result12;
                          tmp74 = tmp67Result12;
                        }
                      }
                      const tmpResult24 = badge(isViewingOtherUser[19]);
                      let isBetaBadgeIdResult = tmpResult24.isBetaBadgeId(badge.badge_id);
                      if (isBetaBadgeIdResult) {
                        const obj33 = { style: null, children: closure_12(Text, obj34) };
                        class D {
                          constructor() {
                            currentUser = currentUser.getCurrentUser();
                            let premiumType;
                            if (currentUser != null) {
                              premiumType = currentUser.premiumType;
                            }
                            return premiumType;
                          }
                        }
                        obj34 = { variant: "text-xs/bold", color: "text-default", style: tmp4.uppercase, children: intl.string(badge(isViewingOtherUser[30]).t.oW0eUd) };
                        Text = tmp(tmp2[14]).Text;
                        intl = tmp(tmp2[30]).intl;
                        isBetaBadgeIdResult = closure_12(closure_5, obj33);
                      }
                      cResult[60] = badge.badge_id;
                      cResult[61] = tmp4.betaPill;
                      cResult[62] = tmp4.uppercase;
                      cResult[63] = isBetaBadgeIdResult;
                      tmp55 = isBetaBadgeIdResult;
                    }
                  }
                }
                let result1 = isViewerOwnershipKnown;
                if (result1) {
                  const obj35 = { badge, isViewingOtherUser: null, viewerOwnsBadge: flag };
                  const tmpResult25 = badge(isViewingOtherUser[20]);
                  class D {
                    constructor() {
                      currentUser = currentUser.getCurrentUser();
                      let premiumType;
                      if (currentUser != null) {
                        premiumType = currentUser.premiumType;
                      }
                      return premiumType;
                    }
                  }
                  result1 = tmpResult25.shouldShowLegacyUnavailableNotice(obj35);
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
              const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
              trackBadgeDirectoryActionDefault(obj2);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
              obj20.ctaAction();
            }
          }
          cResult[46] = badge;
          cResult[47] = obj20;
          cResult[48] = displayedUserId;
          cResult[49] = isViewingOtherUser;
          cResult[50] = se;
          tmp46 = se;
        }
        const tmpResult26 = badge(isViewingOtherUser[20]);
        const badgeStatusText = tmpResult26.getBadgeStatusText(badge, tmp14);
        cResult[39] = badge;
        cResult[40] = tmp14;
        cResult[41] = badgeStatusText;
        tmp32 = badgeStatusText;
      }
      class D {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let premiumType;
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
  const obj36 = { badge, viewerBadge, isViewingOtherUser };
  cResult[4] = badge;
  cResult[5] = isViewingOtherUser;
  cResult[6] = viewerBadge;
  cResult[7] = obj36;
  tmp15 = obj36;
}) : ((badge) => {
  let Text;
  let Text2;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let formatToPlainStringResult;
  let imageUrl;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let isNitro;
  let isViewerOwnershipKnown;
  let items10;
  let items11;
  let items12;
  let items13;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let num2;
  let obj10;
  let obj13;
  let obj16;
  let obj23;
  let obj34;
  let obj35;
  let obj6;
  let obj8;
  let pagePosition;
  let stringResult;
  let tmp2Result13;
  let tmp2Result20;
  let useReducedMotion;
  let viewerBadge;
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ isViewerOwnershipKnown, pagePosition } = badge);
  let badgeDetailsCta;
  const targetUsername = badge.targetUsername;
  const tmp = closure_15();
  let obj = badge(isViewingOtherUser[15]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = badge(isViewingOtherUser[15]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const tmp7 = displayedUserId(isViewingOtherUser[16])(badge.badge_id);
  const tmp8 = displayedUserId(isViewingOtherUser[17])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[18])({ badge, isViewingOtherUser });
  let obj3 = badge(isViewingOtherUser[19]);
  const displayTier = obj3.getDisplayTier(badge);
  let obj4 = badge(isViewingOtherUser[20]);
  const badgeArtUrls = obj4.getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result = badge(isViewingOtherUser[20]);
  const badgeTitle = tmp2Result.getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tiers = badge.tiers;
  let num;
  const tmp2Result11 = badge(isViewingOtherUser[20]);
  const isLegacyDisplayBadgeResult = tmp2Result11.isLegacyDisplayBadge(badge);
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
  const tmp2Result12 = badge(isViewingOtherUser[21]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const push = items2.push;
    const obj5 = { key: "info", node: closure_12(badge(isViewingOtherUser[14]).Text, obj6) };
    obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    push(obj5);
  }
  const push2 = items2.push;
  const obj7 = { key: "status", node: closure_12(Text, obj8) };
  obj8 = { variant: "text-md/medium", color: "text-subtle", children: tmp2Result13.getBadgeStatusText(badge, tmp7) };
  Text = tmp2(tmp3[14]).Text;
  tmp2Result13 = badge(isViewingOtherUser[20]);
  push2(obj7);
  const tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[22]).BadgeRarity.COMMON;
  if (tmp20) {
    const push3 = items2.push;
    const obj9 = { key: "rarity", node: closure_12(displayedUserId(isViewingOtherUser[23]), obj10) };
    obj10 = { rarity };
    push3(obj9);
  }
  const tmp2Result14 = badge(isViewingOtherUser[20]);
  let result = tmp2Result14.isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result15 = badge(isViewingOtherUser[20]);
  const badgeDescriptionText = tmp2Result15.getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result16 = badge(isViewingOtherUser[21]);
  const isNullOrEmptyResult = tmp2Result16.isNullOrEmpty(badgeDescriptionText);
  const tmp2Result17 = badge(isViewingOtherUser[24]);
  badgeDetailsCta = tmp2Result17.getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = react.useCallback(() => {
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      badgeDetailsCta.ctaAction();
    }
  }, items3);
  const callback1 = react.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[26]);
    obj.hideActionSheet(badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[28]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[29]);
    const obj4 = { screen: constants.DATA_AND_PRIVACY };
    obj3.openUserSettings(obj4);
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = react.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[26]);
    obj.hideActionSheet(badge(isViewingOtherUser[27]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[28]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[28]);
    const result1 = obj3.openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    const tmp2Result18 = badge(isViewingOtherUser[20]);
    result1 = tmp2Result18.shouldShowLegacyUnavailableNotice(obj11);
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
    const obj12 = { children: intl.format(badge(isViewingOtherUser[30]).t.vFekBs, obj13) };
    intl = tmp2(tmp3[30]).intl;
    obj13 = { onViewBadges: callback2 };
    tmp18Result = closure_12(closure_17, obj12);
  }
  const obj14 = { style: tmp.header, children: items4 };
  const tmp2Result19 = badge(isViewingOtherUser[19]);
  let isBetaBadgeIdResult = tmp2Result19.isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: closure_12(Text2, obj16) };
    obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: intl2.string(badge(isViewingOtherUser[30]).t.oW0eUd) };
    Text2 = tmp2(tmp3[14]).Text;
    intl2 = tmp2(tmp3[30]).intl;
    isBetaBadgeIdResult = closure_12(closure_5, obj15);
  }
  items4 = [isBetaBadgeIdResult, , ];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: num2, animated: null != animatedUrl, style: items5 };
    num2 = 120;
    const tmp6Result = displayedUserId(isViewingOtherUser[31]);
    if (null != animatedUrl) {
      num2 = 180;
    }
    items5 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
    tmp18Result7 = closure_12(tmp6Result, obj17);
  }
  items4[1] = tmp18Result7;
  let tmp18Result8 = null != eyebrow;
  const obj18 = { style: tmp.identity, children: items7 };
  if (tmp18Result8) {
    const obj19 = { variant: "text-md/medium", color: "text-subtle", style: items6, children: eyebrow };
    items6 = [, ];
    ({ centeredText: arr8[0], eyebrow: arr8[1] } = tmp);
    tmp18Result8 = closure_12(tmp2(tmp3[14]).Text, obj19);
  }
  items7 = [tmp18Result8, , ];
  let str = "display-sm";
  const Heading = tmp2(tmp3[14]).Heading;
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = { variant: str, color: "text-strong", style: items8, accessibilityLabel: formatToPlainStringResult, accessibilityHint: stringResult, children: displayName };
  items8 = [tmp.centeredText, isNitro && tmp.uppercase];
  formatToPlainStringResult = undefined;
  if (null != pagePosition) {
    const intl3 = tmp2(tmp3[30]).intl;
    const obj21 = { badgeName: displayName, position: null, total: null };
    ({ position: obj32.position, total: obj32.total } = pagePosition);
    formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[30]).t.q7PYXq, obj21);
  }
  stringResult = undefined;
  if (null != pagePosition) {
    const intl4 = tmp2(tmp3[30]).intl;
    stringResult = intl4.string(tmp2(tmp3[30]).t.jK2oto);
  }
  items7[1] = closure_12(Heading, obj20);
  items7[2] = closure_12(closure_16, { segments: items2 });
  items4[2] = closure_13(closure_5, obj18);
  const items9 = [closure_13(closure_5, obj14), , ];
  if (tmp18Result9) {
    const obj22 = { children: intl5.format(badge(isViewingOtherUser[30]).t.Zh44ni, obj23) };
    intl5 = tmp2(tmp3[30]).intl;
    obj23 = { onGoToSettings: callback1 };
    tmp18Result9 = closure_12(closure_17, obj22);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    let tmp34Result6;
    if (isNullOrEmptyResult) {
      tmp34Result6 = tmp18Result;
    }
    const obj24 = { children: items9 };
    items9[2] = tmp34Result6;
    return closure_13(closure_14, obj24);
  }
  let tmp34Result = tmp8;
  const obj25 = { style: tmp.card, children: items11 };
  if (tmp34Result) {
    const obj26 = { children: items10 };
    const obj27 = { badge, viewerBadge };
    items10 = [closure_12(displayedUserId(isViewingOtherUser[32]), obj27), ];
    const obj28 = { style: tmp.divider };
    items10[1] = closure_12(closure_5, obj28);
    tmp34Result = closure_13(closure_14, obj26);
  }
  items11 = [tmp34Result, , , , ];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    const obj29 = { style: tmp.descriptionGroup, children: items12 };
    if (tmp18Result10) {
      const obj30 = { variant: "text-sm/medium", color: "text-subtle", children: intl6.string(badge(isViewingOtherUser[30]).t["/Gmn3f"]) };
      const Text3 = tmp2(tmp3[14]).Text;
      intl6 = tmp2(tmp3[30]).intl;
      tmp18Result10 = closure_12(Text3, obj30);
    }
    items12 = [tmp18Result10, ];
    const obj31 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_12(badge(isViewingOtherUser[14]).Text, obj31);
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
    const obj33 = { variant: tmp2Result20.getBadgeCtaVariant(obj34), size: "md", onPress: callback, text: badgeDetailsCta.ctaLabel(obj35) };
    const Button = tmp2(tmp3[33]).Button;
    obj34 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj35 = { owned: flag, isViewerOnUpgradeableNitro: result };
    tmp2Result20 = badge(isViewingOtherUser[20]);
    tmp18Result11 = closure_12(Button, obj33);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8 && tmp25;
    if (tmp18Result12) {
      const obj36 = { style: tmp.divider };
      tmp18Result12 = closure_12(closure_5, obj36);
    }
    const obj37 = { children: items13 };
    items13 = [tmp18Result12, ];
    const obj38 = { badge: tmp30, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items13[1] = closure_12(displayedUserId(isViewingOtherUser[34]), obj38);
    tmp34Result5 = closure_13(closure_14, obj37);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  tmp34Result6 = closure_13(closure_5, obj25);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeId) => {
  let currentUserId;
  let first;
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let pagePosition;
  let swipePageMinHeight;
  let targetUsername;
  const tmp = badgeId;
  const obj = badgeId(currentUserId[12]);
  const cResult = obj.c(25);
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  currentUserId = badgeId.currentUserId;
  ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition, swipePageMinHeight } = badgeId);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BadgeDirectoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === badgeId) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === displayedUserId) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(currentUserId[15]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[5] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === badgeId) {
      let tmp12;
      let tmp13;
      if (cResult[7] === currentUserId) {
        tmp12 = cResult[8];
        tmp13 = cResult[9];
      }
      const tmpResult2 = tmp(currentUserId[15]);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp12, tmp13);
      let tmp16 = null;
      if (null != stateFromStores) {
        let page;
        if (cResult[10] === tmp4.page) {
          if (cResult[11] === tmp4.swipePage) {
            let tmp17;
            if (cResult[12] === swipePageMinHeight) {
              tmp17 = cResult[13];
            }
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === displayedUserId) {
                if (cResult[16] === isViewerOwnershipKnown) {
                  if (cResult[17] === isViewingOtherUser) {
                    if (cResult[18] === pagePosition) {
                      if (cResult[19] === targetUsername) {
                        let tmp18;
                        if (cResult[20] === stateFromStores1) {
                          tmp18 = cResult[21];
                        }
                        if (cResult[22] === tmp17) {
                          let tmp22;
                          if (cResult[23] === tmp18) {
                            tmp22 = cResult[24];
                          }
                          tmp16 = tmp22;
                        }
                        class O {
                          constructor() {
                            let badgeById;
                            if (null != currentUserId) {
                              badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
                            }
                            return badgeById;
                          }
                        }
                        cResult[22] = tmp17;
                        cResult[23] = tmp18;
                        cResult[24] = tmp25;
                        tmp22 = tmp25;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { badge: stateFromStores, viewerBadge: stateFromStores1, displayedUserId: null, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition };
            class O {
              constructor() {
                let badgeById;
                if (null != currentUserId) {
                  badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
                }
                return badgeById;
              }
            }
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
        if (null != swipePageMinHeight) {
          const items2 = [tmp4.swipePage, ];
          const obj4 = { minHeight: swipePageMinHeight };
          items2[1] = obj4;
          page = items2;
        } else {
          page = tmp4.page;
        }
        cResult[10] = tmp4.page;
        cResult[11] = tmp4.swipePage;
        class O {
          constructor() {
            let badgeById;
            if (null != currentUserId) {
              badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
            }
            return badgeById;
          }
        }
        cResult[13] = page;
        tmp17 = page;
      }
      return tmp16;
    }
    class O {
      constructor() {
        let badgeById;
        if (null != currentUserId) {
          badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
        }
        return badgeById;
      }
    }
    const items3 = [badgeId, currentUserId];
    cResult[6] = badgeId;
    cResult[7] = currentUserId;
    cResult[8] = O;
    cResult[9] = items3;
    tmp13 = items3;
    tmp12 = O;
  }
  const fn = function s() {
    return BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
  };
  const items4 = [badgeId, displayedUserId];
  cResult[1] = badgeId;
  cResult[2] = displayedUserId;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp8 = items4;
  tmp7 = fn;
}) : ((badgeId) => {
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let obj4;
  let pagePosition;
  let targetUsername;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const currentUserId = badgeId.currentUserId;
  const swipePageMinHeight = badgeId.swipePageMinHeight;
  ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition } = badgeId);
  const tmp = closure_15();
  const items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const obj = badgeId(currentUserId[15]);
  const stateFromStores = obj.useStateFromStores(items, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items1);
  badgeId(currentUserId[15]);
  [][0] = BadgeDirectoryStore;
  const items2 = [badgeId, currentUserId];
  let tmp6Result = null;
  if (null != stateFromStores) {
    let page;
    if (null != swipePageMinHeight) {
      const items3 = [tmp.swipePage, ];
      const obj2 = { minHeight: swipePageMinHeight };
      items3[1] = obj2;
      page = items3;
    } else {
      page = tmp.page;
    }
    const obj3 = { style: page, children: closure_12(closure_18, obj4) };
    obj4 = { badge: stateFromStores, viewerBadge: tmp4, displayedUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition };
    tmp6Result = closure_12(closure_5, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeId) => {
  let closure_4;
  let isBadgeDetailsSwipeEnabled;
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let items2;
  let length;
  let num;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp = badgeId;
  const tmp2 = isViewingOtherUser;
  let obj = badgeId(isViewingOtherUser[12]);
  const cResult = obj.c(79);
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  closure_15();
  const bound = Math.max(displayedUserId(isViewingOtherUser[35])().bottom, closure_11);
  const tmp5 = displayedUserId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[0] = 4;
    num = 4;
  } else {
    num = cResult[0];
  }
  const sum = bound + num;
  const bound1 = Math.min(tmp5(tmp2[36])().width, closure_10);
  const tmp9 = targetUsername(react.useState(0), 2);
  react = tmp9[1];
  const first = tmp9[0];
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
  const bound2 = Math.max(first - sum, 0);
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
    tmp14 = V;
    tmp13 = items;
  } else {
    class I {
      constructor(arg0) {
        tmp = closure_4(badgeId.nativeEvent.layout.height);
        return;
      }
    }
    tmp14 = cResult[3];
  }
  const tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
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
    tmp16 = items1;
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
    const tmpResult3 = tmp(tmp2[15]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp16, L, items2);
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
      cResult[9] = tmp19;
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
    const tmpResult4 = tmp(tmp2[37]);
    isBadgeDetailsSwipeEnabled = tmpResult4.useIsBadgeDetailsSwipeEnabled(tmp18);
    if (cResult[10] === displayedUserId) {
      class I {
        constructor(arg0) {
          tmp = closure_4(badgeId.nativeEvent.layout.height);
          return;
        }
      }
    }
    class X {
      constructor() {
        tmp = badgeId;
        if (closure_8) {
          tmp2 = displayedUserId;
          tmp3 = isViewingOtherUser;
          closure_0 = tmp;
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[19]);
          tmp6 = closure_8;
          directoryBadges = obj.getDirectoryBadges(closure_8.getBadges(displayedUserId));
          owned = directoryBadges.owned;
          if (isViewingOtherUser) {
            items = [];
            items[0] = owned;
            items1 = items;
          } else {
            items1 = [, ];
            items1[0] = owned;
            items1[1] = tmp8;
          }
          found = items1.find(() => { /* body not rendered: F105513 */ });
          tmp9 = null;
          if (null != found) {
            mapped = found.map(() => { /* body not rendered: F105514 */ });
          } else {
            mapped = [];
            mapped[0] = tmp;
          }
          items2 = mapped;
        } else {
          items2 = [];
          items2[0] = tmp;
        }
        return items2;
      }
    }
    cResult[10] = displayedUserId;
    cResult[11] = badgeId;
    cResult[12] = isBadgeDetailsSwipeEnabled;
    cResult[13] = isViewingOtherUser;
    cResult[14] = X;
  }
  class L {
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
  cResult[7] = L;
  cResult[8] = items2;
}) : ((badgeId) => {
  let BottomSheetScrollView;
  let _undefined;
  let c4;
  let items9;
  let obj9;
  let tmp23Result;
  let tmp25;
  let tmp6;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  react = undefined;
  let stateFromStores1;
  let isBadgeDetailsSwipeEnabled;
  let first1;
  let closure_11;
  const tmp2 = isViewingOtherUser;
  let tmp = closure_15();
  const sum = Math.max(displayedUserId(isViewingOtherUser[35])().bottom, closure_11) + 4;
  const bound = Math.min(displayedUserId(isViewingOtherUser[36])().width, first1);
  [tmp6, c4] = targetUsername(react.useState(0), 2);
  targetUsername(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const bound1 = Math.max(tmp6 - sum, 0);
  let obj = badgeId(isViewingOtherUser[15]);
  let items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = badgeId(isViewingOtherUser[15]);
  let items1 = [isBadgeDetailsSwipeEnabled];
  let items2 = [stateFromStores, isViewingOtherUser];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp = !isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
      const hasCatalogForResult = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
    }
    return tmp;
  }, items2);
  let obj3 = badgeId(isViewingOtherUser[37]);
  isBadgeDetailsSwipeEnabled = obj3.useIsBadgeDetailsSwipeEnabled({ location: "BadgeDetailsSheet" });
  const first = targetUsername(react.useState(() => {
    let items2;
    if (isBadgeDetailsSwipeEnabled) {
      let items1;
      let mapped;
      let closure_0 = badgeId;
      const obj = BadgeUtils;
      const directoryBadges = obj.getDirectoryBadges(BadgeDirectoryStore.getBadges(displayedUserId));
      const owned = directoryBadges.owned;
      if (isViewingOtherUser) {
        const items = [owned];
        items1 = items;
      } else {
        items1 = [owned, tmp8];
      }
      const found = items1.find(f105513);
      if (null != found) {
        mapped = found.map(f105514);
      } else {
        mapped = [badgeId];
      }
      items2 = mapped;
    } else {
      items2 = [badgeId];
    }
    return items2;
  }), 1)[0];
  const tmp13 = targetUsername(react.useState(badgeId), 2);
  first1 = tmp13[0];
  closure_11 = tmp13[1];
  const items3 = [isBadgeDetailsSwipeEnabled];
  const items4 = [first1, displayedUserId];
  const obj4 = badgeId(isViewingOtherUser[15]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => BadgeDirectoryStore.getBadgeById(first1, displayedUserId), items4);
  const items5 = [first, stateFromStores, displayedUserId, stateFromStores1, isViewingOtherUser, bound1, targetUsername];
  const items6 = [first];
  const memo = react.useMemo(() => {
    let currentUserId;
    let isViewerOwnershipKnown;
    let length;
    let swipePageMinHeight;
    return first.map((badgeId, index) => {
      let obj2;
      let tmp3;
      const obj = { id: "" + badgeId, label: "" + badgeId, page: closure_2_12(closure_2_19, obj2) };
      obj2 = { badgeId, displayedUserId, currentUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition: tmp3, swipePageMinHeight };
      tmp3 = undefined;
      if (length.length > 1) {
        tmp3 = { position: index + 1, total: arr.length };
        const obj3 = { position: index + 1, total: arr.length };
      }
      return obj;
    });
  }, items5);
  const callback1 = react.useCallback((arg0) => {
    if (null != first[arg0]) {
      closure_11(first[arg0]);
    }
  }, items6);
  const useSegmentedControlState = badgeId(isViewingOtherUser[38]).useSegmentedControlState;
  const items7 = [stateFromStores, isViewingOtherUser];
  const tmp18 = badgeId(isViewingOtherUser[38]);
  const obj5 = { items: memo, pageWidth: bound, defaultIndex: Math.max(first.indexOf(badgeId), 0), onPageChange: callback1 };
  const segmentedControlState = useSegmentedControlState(obj5);
  const effect = react.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items7);
  const items8 = [first1, displayedUserId, isViewingOtherUser];
  const effect1 = react.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(first1, displayedUserId);
    if (null != badgeById) {
      const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items8);
  const obj6 = badgeId(isViewingOtherUser[40]);
  const obj7 = { badgeId: first1, enabled: !isViewingOtherUser };
  const dismissBadgeDirectoryBadgeIndicator = obj6.useDismissBadgeDirectoryBadgeIndicator(obj7);
  let name;
  BottomSheet = badgeId(isViewingOtherUser[43]).BottomSheet;
  if (stateFromStores2 != null) {
    name = stateFromStores2.name;
  }
  const obj8 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: name, children: closure_12(BottomSheetScrollView, obj9) };
  obj9 = { contentContainerStyle: items9, onLayout: tmp25, children: tmp23Result };
  items9 = [tmp.content, { paddingBottom: sum }];
  tmp25 = undefined;
  BottomSheetScrollView = tmp9(tmp2[42]).BottomSheetScrollView;
  if (isBadgeDetailsSwipeEnabled) {
    tmp25 = callback;
  }
  if (isBadgeDetailsSwipeEnabled) {
    const obj10 = { state: segmentedControlState };
    tmp23Result = closure_12(tmp9(tmp2[41]).SegmentedControlPages, obj10);
  } else {
    const obj11 = { badgeId, displayedUserId, currentUserId: stateFromStores, isViewingOtherUser, targetUsername, isViewerOwnershipKnown: stateFromStores1 };
    tmp23Result = closure_12(closure_19, obj11);
  }
  return closure_12(BottomSheet, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default tmp6;