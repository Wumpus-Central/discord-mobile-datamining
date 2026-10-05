// === Module 14448: CustomizeBadgesSheet ===

// Module 14448 (CustomizeBadgesSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import Card from "Card" /* 5995 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6456 */;
import EyeIcon from "EyeIcon" /* 6458 */;
import ContextMenu from "ContextMenu" /* 7579 */;
import ContextMenuState from "ContextMenuState" /* 7580 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7581 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7862 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import native from "native" /* 8567 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8867 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10881 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12923 */;
import BadgeGrid from "BadgeGrid" /* 14449 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import UserStore from "UserStore" /* 1377 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsPages: c10, AnalyticsSections: closure_11 } = Constants);
let closure_12 = fn(6646).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 1.05;
let c17 = 80;
let c18 = 16.666666666666668;
let createStyles = fn(4890);
let obj = { gridInset: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, grid: null, upsell: null, upsellCard: null, upsellContent: null, upsellCta: null, upsellText: null, message: null, messageText: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj.grid = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
let obj4 = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj.upsell = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj.upsellCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.upsellContent = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.upsellCta = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.upsellText = { textAlign: "center" };
let obj8 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.message = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
obj.messageText = { textAlign: "center" };
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = c.c(16);
  badge = badge.badge;
  ({ index, onSetHidden } = badge);
  const children = badge.children;
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (cResult[0] !== flag) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(flag ? t.RXOPc3 : t.xSWJPo);
    cResult[0] = flag;
    cResult[1] = stringResult;
  } else {
    if (flag) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    if (cResult[2] === badge) {
      if (cResult[3] === flag) {
        if (cResult[4] === onSetHidden) {
          let tmp7 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === EyeSlashIcon) {
            if (cResult[8] === tmp7) {
              let tmp8 = cResult[9];
            }
            if (cResult[10] !== index) {
              const result = index % BadgeGrid.BADGE_GRID_COLUMNS;
              let str = "right";
              if (0 !== result) {
                let str2 = "above";
                if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
                  str2 = "left";
                }
                str = str2;
              }
              cResult[10] = index;
              cResult[11] = str;
              let tmp9 = str;
            } else {
              tmp9 = cResult[11];
            }
            if (cResult[12] === children) {
              if (cResult[13] === tmp8) {
                if (cResult[14] === tmp9) {
                  let tmp11 = cResult[15];
                }
                return tmp11;
              }
            }
            const obj2 = { items: tmp8, align: tmp9, disableGesture: true, triggerOnLongPress: true, children };
            const tmp13 = state(ContextMenu.ContextMenu, obj2);
            cResult[12] = children;
            cResult[13] = tmp8;
            cResult[14] = tmp9;
            cResult[15] = tmp13;
            tmp11 = tmp13;
          }
        }
        const obj3 = { label: tmp4, trailingIndicator: EyeSlashIcon, action: tmp7 };
        const items = [obj3];
        cResult[6] = tmp4;
        cResult[7] = EyeSlashIcon;
        cResult[8] = tmp7;
        cResult[9] = items;
        tmp8 = items;
      }
    }
    const fn = function p() {
      return onSetHidden(badge, !flag);
    };
    cResult[2] = badge;
    cResult[3] = flag;
    cResult[4] = onSetHidden;
    cResult[5] = fn;
    tmp7 = fn;
  }
}) : ((badge) => {
  badge = badge.badge;
  const onSetHidden = badge.onSetHidden;
  let flag = badge.hidden;
  ({ index, children } = badge);
  if (flag == null) {
    flag = false;
  }
  const intl = util.intl;
  const t = util.t;
  const obj = { label: intl.string(flag ? t.RXOPc3 : t.xSWJPo), trailingIndicator: null, action: null };
  if (flag) {
    let EyeSlashIcon = EyeIcon.EyeIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  const obj2 = { items: null, align: null, disableGesture: true, triggerOnLongPress: true, children: null };
  obj.trailingIndicator = EyeSlashIcon;
  obj.action = function action() {
    return onSetHidden(badge, !flag);
  };
  const items = [obj];
  obj2.items = items;
  const result = index % BadgeGrid.BADGE_GRID_COLUMNS;
  let str = "right";
  if (0 !== result) {
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  obj2.align = str;
  obj2.children = children;
  return state(ContextMenu.ContextMenu, obj2);
});
createStyles = fn(4890);
let obj10 = { position: { position: "absolute" }, fill: { flex: 1 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, icon: null, name: null, indicator: null, iconHidden: null };
let obj9 = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
obj10.icon = { marginBottom: nativeDefault.space.PX_12 };
let obj13 = { marginBottom: nativeDefault.space.PX_12 };
obj10.name = { position: "absolute", start: 0, end: 0, bottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" };
let size = { position: "absolute", top: nativeDefault.space.PX_8, end: nativeDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
obj10.indicator = size;
obj10.iconHidden = { opacity: 0.3 };
let closure_21 = createStyles.createStyles(obj10);
function getSlotOffset(arg0, arg1) {
  const point = { x: null, y: null };
  const result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  point.x = result * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  point.y = rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  return point;
}
let obj14 = { position: "absolute", start: 0, end: 0, bottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" };
getSlotOffset.__closure = { BADGE_GRID_COLUMNS: fn(14449).BADGE_GRID_COLUMNS, BADGE_GRID_GAP: fn(14449).BADGE_GRID_GAP };
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = { code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}" };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = c.c(20);
  badge = badge.badge;
  const tmp4 = closure_21();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (badge.alwaysVisible) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
      const tmp15 = state(CircleInformationIcon.CircleInformationIcon, obj2);
      cResult[0] = tmp15;
      let first = tmp15;
    } else {
      first = cResult[0];
    }
  } else {
    let tmp5 = null;
    if (flag) {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const tmp10 = state(EyeSlashIcon2.EyeSlashIcon, obj3);
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      tmp5 = tmp7;
    }
    let iconHidden = flag;
    if (flag) {
      iconHidden = tmp4.iconHidden;
    }
    if (cResult[2] === tmp4.icon) {
      if (cResult[3] === iconHidden) {
        let tmp17 = cResult[4];
      }
      if (cResult[5] === badge) {
        if (cResult[6] === tmp17) {
          let tmp18 = cResult[7];
        }
        let str3 = "text-default";
        if (flag) {
          str3 = "text-muted";
        }
        if (cResult[8] === badge.name) {
          if (cResult[9] === tmp4.name) {
            if (cResult[10] === str3) {
              let tmp23 = cResult[11];
            }
            if (cResult[12] === tmp5) {
              if (cResult[13] === tmp4.indicator) {
                let tmp26 = cResult[14];
              }
              if (cResult[15] === tmp4.card) {
                if (cResult[16] === tmp18) {
                  if (cResult[17] === tmp23) {
                    if (cResult[18] === tmp26) {
                      let tmp30 = cResult[19];
                    }
                    return tmp30;
                  }
                }
              }
              const obj4 = { variant: "secondary", border: "none", radius: 16, style: tmp4.card, children: null };
              const items = [tmp18, tmp23, tmp26];
              obj4.children = items;
              const tmp32 = closure_1_15(Card.Card, obj4);
              cResult[15] = tmp4.card;
              cResult[16] = tmp18;
              cResult[17] = tmp23;
              cResult[18] = tmp26;
              cResult[19] = tmp32;
              tmp30 = tmp32;
            }
            let tmp27 = null != tmp5;
            if (tmp27) {
              const obj5 = { style: tmp4.indicator, "aria-hidden": true, children: tmp5 };
              tmp27 = state(React4, obj5);
            }
            cResult[12] = tmp5;
            cResult[13] = tmp4.indicator;
            cResult[14] = tmp27;
            tmp26 = tmp27;
          }
        }
        const obj6 = { variant: "text-xs/medium", color: str3, lineClamp: 1, style: tmp4.name, "aria-hidden": true, children: badge.name };
        const tmp25 = state(Text_Text.Text, obj6);
        cResult[8] = badge.name;
        cResult[9] = tmp4.name;
        cResult[10] = str3;
        cResult[11] = tmp25;
        tmp23 = tmp25;
      }
      const obj7 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: tmp17 };
      const tmp22 = state(BadgeCatalogIconDefault, obj7);
      cResult[5] = badge;
      cResult[6] = tmp17;
      cResult[7] = tmp22;
      tmp18 = tmp22;
    }
    const items1 = [tmp4.icon, iconHidden];
    cResult[2] = tmp4.icon;
    cResult[3] = iconHidden;
    cResult[4] = items1;
    tmp17 = items1;
  }
}) : ((badge) => {
  badge = badge.badge;
  const tmp = closure_21();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (badge.alwaysVisible) {
    const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    let tmp2 = state(CircleInformationIcon.CircleInformationIcon, obj2);
  } else {
    tmp2 = null;
    if (flag) {
      const obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      tmp2 = state(EyeSlashIcon2.EyeSlashIcon, obj);
    }
  }
  const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  const obj4 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: null };
  const items = [tmp.icon, ];
  let iconHidden = flag;
  if (flag) {
    iconHidden = tmp.iconHidden;
  }
  items[1] = iconHidden;
  obj4.style = items;
  const items1 = [state(BadgeCatalogIconDefault, obj4), , ];
  let str = "text-default";
  if (flag) {
    str = "text-muted";
  }
  items1[1] = state(Text_Text.Text, { variant: "text-xs/medium", color: str, lineClamp: 1, style: tmp.name, "aria-hidden": true, children: badge.name });
  let tmp14Result = null != tmp2;
  if (tmp14Result) {
    const obj6 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp14Result = state(React4, obj6);
  }
  items1[2] = tmp14Result;
  obj3.children = items1;
  return closure_1_15(Card.Card, obj3);
});
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = badge(alwaysVisible[15]).c(26);
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onSetHidden = badge.onSetHidden;
  const tmp4 = closure_21();
  if (cResult[0] === index) {
    if (cResult[1] === tileSize) {
      let tmp5 = cResult[2];
    }
    ({ x, y } = tmp5);
    if (cResult[3] === badge) {
      if (cResult[4] === onPress) {
        let tmp8 = cResult[5];
      }
      closure_4 = tmp8;
      if (cResult[6] === tileSize) {
        if (cResult[7] === x) {
          if (cResult[8] === y) {
            let tmp9 = cResult[9];
          }
          if (cResult[10] === tmp4.position) {
            if (cResult[11] === tmp9) {
              let tmp11 = cResult[12];
            }
            style = tmp11;
            if (cResult[13] === alwaysVisible) {
              if (cResult[14] === badge) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === index) {
                    if (cResult[17] === tmp11) {
                      let tmp12 = cResult[18];
                    }
                    if (!alwaysVisible) {
                      if (null != onSetHidden) {
                        if (cResult[21] === badge) {
                          if (cResult[22] === index) {
                            if (cResult[23] === onSetHidden) {
                              if (cResult[24] === tmp12) {
                                let tmp14 = cResult[25];
                              }
                              return tmp14;
                            }
                          }
                        }
                        class E {
                          constructor(arg0) {
                            closure_0 = badge;
                            tmp = jsx;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            ref = undefined;
                            if (badge != null) {
                              ref = badge.ref;
                            }
                            obj = { ref, accessibilityLabel: null };
                            tmp5 = badge;
                            tmp6 = index;
                            intl = tmp2(tmp3[16]).intl;
                            t = tmp2(tmp3[16]).t;
                            obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                            obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                            tmp7 = alwaysVisible;
                            stringResult = undefined;
                            if (alwaysVisible) {
                              intl2 = tmp2(tmp3[16]).intl;
                              tmp2Result = tmp2(tmp3[24]);
                              stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp8));
                            }
                            obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                            merged = Object.assign(obj5);
                            accessibilityActions = undefined;
                            if (badge != null) {
                              accessibilityActions = badge.accessibilityActions;
                            }
                            obj.accessibilityActions = accessibilityActions;
                            prop = undefined;
                            if (badge != null) {
                              prop = badge.onAccessibilityAction;
                            }
                            obj.onAccessibilityAction = prop;
                            if (tmp7) {
                              onPress = closure_4;
                            } else if (badge != null) {
                              onPress = badge.onPress;
                            }
                            obj.onPress = onPress;
                            fn = undefined;
                            if (null != badge) {
                              fn = (arg0) => {
                                const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
                                onLongPress = onLongPress.onLongPress;
                                if (onLongPress != null) {
                                  onLongPress(arg0);
                                }
                              };
                            }
                            obj.onLongPress = fn;
                            obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                            obj.style = closure_5;
                            obj.children = tmp(f67446, { badge: tmp5, alwaysVisible: tmp7 });
                            return tmp(closure_0(closure_2[25]).PressableScale, obj);
                          }
                        }
                        tmp17[0] = badge;
                        tmp17[1] = index;
                        tmp17[2] = onSetHidden;
                        tmp17[3] = tmp12;
                        const tmp18 = closure_14(closure_20, tmp17);
                        cResult[21] = badge;
                        cResult[22] = index;
                        cResult[23] = onSetHidden;
                        cResult[24] = tmp12;
                        cResult[25] = tmp18;
                        tmp14 = tmp18;
                      }
                    }
                    if (cResult[19] !== tmp12) {
                      const tmp12Result = tmp12(null);
                      class E {
                        constructor(arg0) {
                          closure_0 = badge;
                          tmp = jsx;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          ref = undefined;
                          if (badge != null) {
                            ref = badge.ref;
                          }
                          obj = { ref, accessibilityLabel: null };
                          tmp5 = badge;
                          tmp6 = index;
                          intl = tmp2(tmp3[16]).intl;
                          t = tmp2(tmp3[16]).t;
                          obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                          obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                          tmp7 = alwaysVisible;
                          stringResult = undefined;
                          if (alwaysVisible) {
                            intl2 = tmp2(tmp3[16]).intl;
                            tmp2Result = tmp2(tmp3[24]);
                            stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp8));
                          }
                          obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                          merged = Object.assign(obj5);
                          accessibilityActions = undefined;
                          if (badge != null) {
                            accessibilityActions = badge.accessibilityActions;
                          }
                          obj.accessibilityActions = accessibilityActions;
                          prop = undefined;
                          if (badge != null) {
                            prop = badge.onAccessibilityAction;
                          }
                          obj.onAccessibilityAction = prop;
                          if (tmp7) {
                            onPress = closure_4;
                          } else if (badge != null) {
                            onPress = badge.onPress;
                          }
                          obj.onPress = onPress;
                          fn = undefined;
                          if (null != badge) {
                            fn = (arg0) => {
                              const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
                              onLongPress = onLongPress.onLongPress;
                              if (onLongPress != null) {
                                onLongPress(arg0);
                              }
                            };
                          }
                          obj.onLongPress = fn;
                          obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                          obj.style = closure_5;
                          obj.children = tmp(f67446, { badge: tmp5, alwaysVisible: tmp7 });
                          return tmp(closure_0(closure_2[25]).PressableScale, obj);
                        }
                      }
                      cResult[20] = tmp12Result;
                    }
                    class E {
                      constructor(arg0) {
                        closure_0 = badge;
                        tmp = jsx;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        ref = undefined;
                        if (badge != null) {
                          ref = badge.ref;
                        }
                        obj = { ref, accessibilityLabel: null };
                        tmp5 = badge;
                        tmp6 = index;
                        intl = tmp2(tmp3[16]).intl;
                        t = tmp2(tmp3[16]).t;
                        obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                        tmp7 = alwaysVisible;
                        stringResult = undefined;
                        if (alwaysVisible) {
                          intl2 = tmp2(tmp3[16]).intl;
                          tmp2Result = tmp2(tmp3[24]);
                          stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp8));
                        }
                        obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                        merged = Object.assign(obj5);
                        accessibilityActions = undefined;
                        if (badge != null) {
                          accessibilityActions = badge.accessibilityActions;
                        }
                        obj.accessibilityActions = accessibilityActions;
                        prop = undefined;
                        if (badge != null) {
                          prop = badge.onAccessibilityAction;
                        }
                        obj.onAccessibilityAction = prop;
                        if (tmp7) {
                          onPress = closure_4;
                        } else if (badge != null) {
                          onPress = badge.onPress;
                        }
                        obj.onPress = onPress;
                        fn = undefined;
                        if (null != badge) {
                          fn = (arg0) => {
                            const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
                            onLongPress = onLongPress.onLongPress;
                            if (onLongPress != null) {
                              onLongPress(arg0);
                            }
                          };
                        }
                        obj.onLongPress = fn;
                        obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                        obj.style = closure_5;
                        obj.children = tmp(f67446, { badge: tmp5, alwaysVisible: tmp7 });
                        return tmp(closure_0(closure_2[25]).PressableScale, obj);
                      }
                    }
                  }
                }
              }
            }
            class E {
              constructor(arg0) {
                closure_0 = badge;
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                ref = undefined;
                if (badge != null) {
                  ref = badge.ref;
                }
                obj = { ref, accessibilityLabel: null };
                tmp5 = badge;
                tmp6 = index;
                intl = tmp2(tmp3[16]).intl;
                t = tmp2(tmp3[16]).t;
                obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                tmp7 = alwaysVisible;
                stringResult = undefined;
                if (alwaysVisible) {
                  intl2 = tmp2(tmp3[16]).intl;
                  tmp2Result = tmp2(tmp3[24]);
                  stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp8));
                }
                obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                merged = Object.assign(obj5);
                accessibilityActions = undefined;
                if (badge != null) {
                  accessibilityActions = badge.accessibilityActions;
                }
                obj.accessibilityActions = accessibilityActions;
                prop = undefined;
                if (badge != null) {
                  prop = badge.onAccessibilityAction;
                }
                obj.onAccessibilityAction = prop;
                if (tmp7) {
                  onPress = closure_4;
                } else if (badge != null) {
                  onPress = badge.onPress;
                }
                obj.onPress = onPress;
                fn = undefined;
                if (null != badge) {
                  fn = (arg0) => {
                    const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
                    onLongPress = onLongPress.onLongPress;
                    if (onLongPress != null) {
                      onLongPress(arg0);
                    }
                  };
                }
                obj.onLongPress = fn;
                obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                obj.style = closure_5;
                obj.children = tmp(f67446, { badge: tmp5, alwaysVisible: tmp7 });
                return tmp(closure_0(closure_2[25]).PressableScale, obj);
              }
            }
            cResult[13] = alwaysVisible;
            cResult[14] = badge;
            cResult[15] = tmp8;
            cResult[16] = index;
            cResult[17] = tmp11;
            cResult[18] = E;
            tmp12 = E;
          }
          const items = [, tmp9];
          cResult[10] = tmp4.position;
          cResult[11] = tmp9;
          cResult[12] = items;
          tmp11 = items;
        }
      }
      tmp10[0] = x;
      tmp10[1] = y;
      tmp10[2] = tileSize;
      tmp10[3] = tileSize;
      cResult[6] = tileSize;
      cResult[7] = x;
      cResult[8] = y;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
    let fn = function h() {
      onPress(badge);
    };
    cResult[3] = badge;
    cResult[4] = onPress;
    cResult[5] = fn;
    tmp8 = fn;
  }
  if (typeof getSlotOffset === "function") {
    const point = { x: null, y: null };
    let result = index % tmp(alwaysVisible[13]).BADGE_GRID_COLUMNS;
    point.x = result * (tileSize + tmp(alwaysVisible[13]).BADGE_GRID_GAP);
    class E {
      constructor(arg0) {
        closure_0 = badge;
        tmp = jsx;
        tmp2 = closure_0;
        tmp3 = closure_2;
        ref = undefined;
        if (badge != null) {
          ref = badge.ref;
        }
        obj = { ref, accessibilityLabel: null };
        tmp5 = badge;
        tmp6 = index;
        intl = tmp2(tmp3[16]).intl;
        t = tmp2(tmp3[16]).t;
        obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
        tmp7 = alwaysVisible;
        stringResult = undefined;
        if (alwaysVisible) {
          intl2 = tmp2(tmp3[16]).intl;
          tmp2Result = tmp2(tmp3[24]);
          stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp8));
        }
        obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
        merged = Object.assign(obj5);
        accessibilityActions = undefined;
        if (badge != null) {
          accessibilityActions = badge.accessibilityActions;
        }
        obj.accessibilityActions = accessibilityActions;
        prop = undefined;
        if (badge != null) {
          prop = badge.onAccessibilityAction;
        }
        obj.onAccessibilityAction = prop;
        if (tmp7) {
          onPress = closure_4;
        } else if (badge != null) {
          onPress = badge.onPress;
        }
        obj.onPress = onPress;
        fn = undefined;
        if (null != badge) {
          fn = (arg0) => {
            const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
            onLongPress = onLongPress.onLongPress;
            if (onLongPress != null) {
              onLongPress(arg0);
            }
          };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = closure_5;
        obj.children = tmp(f67446, { badge: tmp5, alwaysVisible: tmp7 });
        return tmp(closure_0(closure_2[25]).PressableScale, obj);
      }
    }
    const _Math = Math;
    const rounded = Math.floor(index / tmp(alwaysVisible[13]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp(alwaysVisible[13]).BADGE_GRID_GAP);
    cResult[0] = index;
    cResult[1] = tileSize;
    cResult[2] = point;
    tmp5 = point;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj = badge(alwaysVisible[15]);
}) : ((badge) => {
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onSetHidden = badge.onSetHidden;
  closure_4 = undefined;
  let items1;
  if (typeof getSlotOffset === "function") {
    function renderTile(ref) {
      let onLongPress = ref;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj = { ref, accessibilityLabel: null };
      const intl = util.intl;
      const t = util.t;
      obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], { badgeName: badge.name, position: index + 1 });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = util.intl;
        stringResult = intl2.string(BadgeUtils.getAlwaysVisibleCopy(tmp8));
        const tmp2Result = BadgeUtils;
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      obj.accessibilityActions = accessibilityActions;
      let prop;
      if (ref != null) {
        prop = ref.onAccessibilityAction;
      }
      obj.onAccessibilityAction = prop;
      if (alwaysVisible) {
        onPress = closure_4;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      obj.onPress = onPress;
      let fn;
      if (null != ref) {
        fn = (arg0) => {
          const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
          onLongPress = onLongPress.onLongPress;
          if (onLongPress != null) {
            onLongPress(arg0);
          }
        };
      }
      obj.onLongPress = fn;
      obj.delayLongPress = ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj.style = items1;
      obj.children = state(closure_23, { badge, alwaysVisible });
      return state(native.PressableScale, obj);
    }
    let result = index % badge(alwaysVisible[13]).BADGE_GRID_COLUMNS;
    const _Math = Math;
    const result1 = result * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    const rounded = Math.floor(index / badge(alwaysVisible[13]).BADGE_GRID_COLUMNS);
    const items = [badge, onPress];
    const result2 = rounded * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    closure_4 = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position, ];
    const size = { left: result1, top: result2, width: tileSize, height: tileSize };
    items1[1] = size;
    if (!alwaysVisible) {
      if (null != onSetHidden) {
        let obj = { badge, index, onSetHidden, children: renderTile };
        let renderTileResult = closure_14(closure_20, obj);
      }
      return renderTileResult;
    }
    renderTileResult = renderTile(null);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}));
const __initData = { code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
const __initData2 = { code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const __initData3 = { code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
const __initData4 = { code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData5 = { code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
const __initData6 = { code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_31 = { code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}}" };
let closure_32 = { code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_33 = { code: "function CustomizeBadgesSheetTsx10(){const{handleStart}=this.__closure;handleStart();}" };
let closure_34 = { code: "function CustomizeBadgesSheetTsx11(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
let closure_35 = { code: "function CustomizeBadgesSheetTsx12(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_36 = { code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
const __initData7 = { code: "function CustomizeBadgesSheetTsx14(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
const __initData8 = { code: "function CustomizeBadgesSheetTsx15(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const __initData9 = { code: "function CustomizeBadgesSheetTsx16(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
const __initData10 = { code: "function CustomizeBadgesSheetTsx17(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData11 = { code: "function CustomizeBadgesSheetTsx18(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
let closure_42 = { code: "function handleStart_CustomizeBadgesSheetTsx19(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_43 = { code: "function handleChange_CustomizeBadgesSheetTsx20(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}" };
let closure_44 = { code: "function handleFinalize_CustomizeBadgesSheetTsx21(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_45 = { code: "function CustomizeBadgesSheetTsx22(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_46 = { code: "function CustomizeBadgesSheetTsx23(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
let closure_47 = { code: "function CustomizeBadgesSheetTsx24(){const{handleStart}=this.__closure;handleStart();}" };
const __initData12 = { code: "function CustomizeBadgesSheetTsx25(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
ReactCompilerGating = fn(558);
let closure_49 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = badge(tileSize[15]).c(75);
  badge = badge.badge;
  let index = badge.index;
  tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  ({ isFirst, isLast, alwaysVisible } = badge);
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let obj = badge(tileSize[15]);
  const position = closure_21();
  const badge_id = badge.badge_id;
  if (cResult[0] === badge) {
    if (cResult[1] === onPress) {
      let tmp5 = cResult[2];
    }
    closure_14 = index(tmp2[26])(tmp5);
    const tmp7 = index(tmp2[26])(tmp5);
    const sharedValue = tmp(tmp2[27]).useSharedValue(false);
    let tmpResult = tmp(tmp2[27]);
    const sharedValue1 = tmp(tmp2[27]).useSharedValue(null);
    if (typeof getSlotOffset === "function") {
      let point = { x: null, y: null };
      let result = index % tmp(tmp2[13]).BADGE_GRID_COLUMNS;
      point.x = result * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
      let _Math = Math;
      let rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
      point.y = rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
      const sharedValue2 = tmp(tmp2[27]).useSharedValue(point.x);
      const tmpResult9 = tmp(tmp2[27]);
      const sharedValue3 = tmp(tmp2[27]).useSharedValue(point.y);
      const tmpResult10 = tmp(tmp2[27]);
      const sharedValue4 = tmp(tmp2[27]).useSharedValue(point);
      const tmpResult11 = tmp(tmp2[27]);
      const sharedValue5 = tmp(tmp2[27]).useSharedValue(1);
      const tmpResult12 = tmp(tmp2[27]);
      class Z {
        constructor() {
          value = orderShared.get();
          index = value.indexOf(badge_id);
          tmp2 = null;
          if (index >= 0) {
            tmp3 = getSlotOffset;
            tmp4 = slotOffset;
            sum = index + slotOffset;
            tmp6 = tileSize;
            if (typeof getSlotOffset === "function") {
              point = { x: null, y: null };
              tmp7 = closure_0;
              tmp8 = closure_2;
              result = sum % closure_0(closure_2[13]).BADGE_GRID_COLUMNS;
              point.x = result * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
              tmp10 = globalThis;
              _Math = Math;
              rounded = Math.floor(sum / closure_0(closure_2[13]).BADGE_GRID_COLUMNS);
              point.y = rounded * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
              tmp2 = point;
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return tmp2;
        }
      }
      let obj2 = { orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize };
      Z.__closure = obj2;
      Z.__workletHash = 6182257637516;
      Z.__initData = __initData;
      class J {
        constructor(arg0, arg1) {
          value = null == badge;
          if (!value) {
            tmp2 = closure_15;
            value = closure_15.get();
          }
          if (!value) {
            tmp3 = arg1;
            x = undefined;
            if (arg1 != null) {
              x = arg1.x;
            }
            if (badge.x !== x) {
              tmp5 = closure_17;
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[28]);
              tmp8 = closure_0;
              tmp9 = closure_2;
              result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[29]).timingStandard));
            }
            y = undefined;
            if (arg1 != null) {
              y = arg1.y;
            }
            if (badge.y !== y) {
              tmp12 = closure_18;
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj2 = closure_0(closure_2[28]);
              tmp15 = closure_0;
              tmp16 = closure_2;
              result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[29]).timingStandard));
            }
          }
          return;
        }
      }
      let obj3 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp(tmp2[28]).withTiming, timingStandard: tmp(tmp2[29]).timingStandard, positionY: sharedValue3 };
      J.__closure = obj3;
      J.__workletHash = 4011295272705;
      J.__initData = __initData2;
      const animatedReaction = tmp(tmp2[27]).useAnimatedReaction(Z, J);
      if (cResult[3] === badge_id) {
        if (cResult[4] === orderShared) {
          if (cResult[5] === sharedValue2) {
            if (cResult[6] === sharedValue3) {
              if (cResult[7] === slotOffset) {
                if (cResult[8] === tileSize) {
                  let tmp22 = cResult[9];
                }
                closure_21 = tmp22;
                function se() {
                  return scrollOffset.get();
                }
                let obj4 = { scrollOffset };
                se.__closure = obj4;
                se.__workletHash = 10993823060256;
                se.__initData = __initData4;
                function ae(arg0, arg1) {
                  value = null != arg1;
                  if (value) {
                    value = sharedValue.get();
                  }
                  if (value) {
                    const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
                    closure_21();
                  }
                }
                let obj5 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot: tmp22 };
                ae.__closure = obj5;
                ae.__workletHash = 9803143874483;
                ae.__initData = __initData5;
                const animatedReaction1 = tmp(tmp2[27]).useAnimatedReaction(se, ae);
                class Z {
                  constructor() {
                    value = orderShared.get();
                    index = value.indexOf(badge_id);
                    tmp2 = null;
                    if (index >= 0) {
                      tmp3 = getSlotOffset;
                      tmp4 = slotOffset;
                      sum = index + slotOffset;
                      tmp6 = tileSize;
                      if (typeof getSlotOffset === "function") {
                        point = { x: null, y: null };
                        tmp7 = closure_0;
                        tmp8 = closure_2;
                        result = sum % closure_0(closure_2[13]).BADGE_GRID_COLUMNS;
                        point.x = result * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
                        tmp10 = globalThis;
                        _Math = Math;
                        rounded = Math.floor(sum / closure_0(closure_2[13]).BADGE_GRID_COLUMNS);
                        point.y = rounded * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
                        tmp2 = point;
                      } else {
                        str = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    return tmp2;
                  }
                }
                function handleStart() {
                  if (!isDragActive.get()) {
                    ReanimatedRexport.runOnJS(ContextMenuState.hideContextMenu)();
                    const result = isDragActive.set(true);
                    const result1 = sharedValue.set(true);
                    const point = { x: sharedValue2.get(), y: sharedValue3.get() };
                    const result2 = sharedValue4.set(point);
                    const measureResult = ReanimatedRexport.measure(scrollRef);
                    let tmp15 = null;
                    if (null != measureResult) {
                      ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
                      tmp15 = { pageY: null, height: null };
                      const obj3 = { pageY: null, height: null };
                    }
                    const result3 = sharedValue1.set(tmp15);
                    const result4 = sharedValue5.set(timing.withTiming(c16, timingPresets.timingStandard));
                    const tmp2Result = timing;
                    const tmp2Result2 = ReanimatedRexport;
                    ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
                    const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
                  }
                }
                let obj6 = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: tmp(tmp2[27]).runOnJS, hideContextMenu: tmp(tmp2[31]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: tmp(tmp2[27]).measure, scrollRef, dragViewport: null, scale: null, withTiming: null, DRAG_SCALE: null, timingStandard: null, triggerHapticFeedback: null, HapticFeedbackTypes: null };
                class J {
                  constructor(arg0, arg1) {
                    value = null == badge;
                    if (!value) {
                      tmp2 = closure_15;
                      value = closure_15.get();
                    }
                    if (!value) {
                      tmp3 = arg1;
                      x = undefined;
                      if (arg1 != null) {
                        x = arg1.x;
                      }
                      if (badge.x !== x) {
                        tmp5 = closure_17;
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj = closure_0(closure_2[28]);
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[29]).timingStandard));
                      }
                      y = undefined;
                      if (arg1 != null) {
                        y = arg1.y;
                      }
                      if (badge.y !== y) {
                        tmp12 = closure_18;
                        tmp13 = closure_0;
                        tmp14 = closure_2;
                        obj2 = closure_0(closure_2[28]);
                        tmp15 = closure_0;
                        tmp16 = closure_2;
                        result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[29]).timingStandard));
                      }
                    }
                    return;
                  }
                }
                obj6.scale = sharedValue5;
                obj6.withTiming = tmp(tmp2[28]).withTiming;
                obj6.DRAG_SCALE = sharedValue1;
                obj6.timingStandard = tmp(tmp2[29]).timingStandard;
                obj6.triggerHapticFeedback = tmp(tmp2[11]).triggerHapticFeedback;
                obj6.HapticFeedbackTypes = tmp(tmp2[11]).HapticFeedbackTypes;
                handleStart.__closure = obj6;
                handleStart.__workletHash = 11005478611755;
                handleStart.__initData = __initData6;
                cResult[10] = sharedValue4;
                class W {
                  constructor() {
                    obj = orderShared;
                    value = orderShared.get();
                    tmp = closure_0;
                    tmp2 = closure_2;
                    sum = tileSize + closure_0(closure_2[13]).BADGE_GRID_GAP;
                    obj2 = closure_0(closure_2[27]);
                    rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
                    clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[13]).BADGE_GRID_COLUMNS - 1);
                    bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
                    obj3 = closure_0(closure_2[27]);
                    clampResult1 = obj3.clamp(bound * closure_0(closure_2[13]).BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
                    obj4 = closure_0(closure_2[30]);
                    result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
                    if (result !== value) {
                      result1 = obj.set(result);
                      tmpResult = tmp(tmp2[27]);
                      runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
                      tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
                    }
                    return;
                  }
                }
                cResult[11] = sharedValue1;
                cResult[12] = isDragActive;
                cResult[13] = sharedValue;
                cResult[14] = sharedValue2;
                cResult[15] = sharedValue3;
                cResult[16] = sharedValue5;
                cResult[17] = scrollRef;
                cResult[18] = handleStart;
                const tmpResult14 = tmp(tmp2[27]);
              }
            }
          }
        }
      }
      class W {
        constructor() {
          obj = orderShared;
          value = orderShared.get();
          tmp = closure_0;
          tmp2 = closure_2;
          sum = tileSize + closure_0(closure_2[13]).BADGE_GRID_GAP;
          obj2 = closure_0(closure_2[27]);
          rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
          clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[13]).BADGE_GRID_COLUMNS - 1);
          bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
          obj3 = closure_0(closure_2[27]);
          clampResult1 = obj3.clamp(bound * closure_0(closure_2[13]).BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
          obj4 = closure_0(closure_2[30]);
          result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
          if (result !== value) {
            result1 = obj.set(result);
            tmpResult = tmp(tmp2[27]);
            runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
            tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
          }
          return;
        }
      }
      const obj7 = { orderShared, tileSize, BADGE_GRID_GAP: tmp(tmp2[13]).BADGE_GRID_GAP, clamp: tmp(tmp2[27]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp(tmp2[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp(tmp2[30]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp(tmp2[27]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes };
      W.__closure = obj7;
      W.__workletHash = 1083237242858;
      W.__initData = __initData3;
      cResult[3] = badge_id;
      cResult[4] = orderShared;
      cResult[5] = sharedValue2;
      cResult[6] = sharedValue3;
      cResult[7] = slotOffset;
      cResult[8] = tileSize;
      cResult[9] = W;
      tmp22 = W;
      const tmpResult13 = tmp(tmp2[27]);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmpResult8 = tmp(tmp2[27]);
  }
  let fn = function n() {
    onPress(badge);
  };
  cResult[0] = badge;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp5 = fn;
  const tmp4 = closure_21();
}) : ((badge) => {
  badge = badge.badge;
  let index = badge.index;
  const tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  const alwaysVisible = badge.alwaysVisible;
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let reslot;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  let items3;
  ({ isFirst, isLast, onSetHidden } = badge);
  const position = reslot();
  const badge_id = badge.badge_id;
  closure_14 = index(tileSize[26])(() => {
    onPress(badge);
  });
  const sharedValue = badge(tileSize[27]).useSharedValue(false);
  let obj = badge(tileSize[27]);
  const sharedValue1 = badge(tileSize[27]).useSharedValue(null);
  if (typeof closure_22 === "function") {
    let point = { x: null, y: null };
    let result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    point.x = result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    let _Math = Math;
    let rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    sharedValue2 = tmp2(tmp[27]).useSharedValue(point.x);
    let tmp2Result = tmp2(tmp[27]);
    sharedValue3 = tmp2(tmp[27]).useSharedValue(point.y);
    const tmp2Result7 = tmp2(tmp[27]);
    sharedValue4 = tmp2(tmp[27]).useSharedValue(point);
    const tmp2Result8 = tmp2(tmp[27]);
    sharedValue5 = tmp2(tmp[27]).useSharedValue(1);
    const tmp2Result9 = tmp2(tmp[27]);
    class R {
      constructor() {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        tmp2 = null;
        if (index >= 0) {
          tmp3 = getSlotOffset;
          tmp4 = slotOffset;
          sum = index + slotOffset;
          tmp6 = tileSize;
          if (typeof getSlotOffset === "function") {
            point = { x: null, y: null };
            tmp7 = closure_0;
            tmp8 = closure_2;
            result = sum % closure_0(closure_2[13]).BADGE_GRID_COLUMNS;
            point.x = result * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
            tmp10 = globalThis;
            _Math = Math;
            rounded = Math.floor(sum / closure_0(closure_2[13]).BADGE_GRID_COLUMNS);
            point.y = rounded * (tmp6 + closure_0(closure_2[13]).BADGE_GRID_GAP);
            tmp2 = point;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        return tmp2;
      }
    }
    let obj3 = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
    R.__closure = obj3;
    R.__workletHash = 5732066311771;
    R.__initData = __initData7;
    let fn = function v(arg0, arg1) {
      value = null == arg0;
      if (!value) {
        value = sharedValue.get();
      }
      if (!value) {
        let x;
        if (arg1 != null) {
          x = arg1.x;
        }
        if (arg0.x !== x) {
          const result = sharedValue2.set(timing.withTiming(arg0.x, timingPresets.timingStandard));
        }
        let y;
        if (arg1 != null) {
          y = arg1.y;
        }
        if (arg0.y !== y) {
          const result1 = sharedValue3.set(timing.withTiming(arg0.y, timingPresets.timingStandard));
        }
      }
    };
    let obj4 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp2(tmp[28]).withTiming, timingStandard: tmp2(tmp[29]).timingStandard, positionY: sharedValue3 };
    fn.__closure = obj4;
    fn.__workletHash = 16081465994486;
    fn.__initData = __initData8;
    const animatedReaction = tmp2(tmp[27]).useAnimatedReaction(R, fn);
    class Y {
      constructor() {
        obj = orderShared;
        value = orderShared.get();
        tmp = closure_0;
        tmp2 = closure_2;
        sum = tileSize + closure_0(closure_2[13]).BADGE_GRID_GAP;
        obj2 = closure_0(closure_2[27]);
        rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
        clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[13]).BADGE_GRID_COLUMNS - 1);
        bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
        obj3 = closure_0(closure_2[27]);
        clampResult1 = obj3.clamp(bound * closure_0(closure_2[13]).BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
        obj4 = closure_0(closure_2[30]);
        result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
        if (result !== value) {
          result1 = obj.set(result);
          tmpResult = tmp(tmp2[27]);
          runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
          tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    let obj5 = { orderShared, tileSize, BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP, clamp: tmp2(tmp[27]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp2(tmp[30]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp2(tmp[27]).runOnJS, triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes };
    Y.__closure = obj5;
    Y.__workletHash = 1742164926393;
    Y.__initData = __initData9;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = slotOffset.useCallback(Y, items);
    const tmp2Result10 = tmp2(tmp[27]);
    class U {
      constructor() {
        return scrollOffset.get();
      }
    }
    let obj6 = { scrollOffset };
    U.__closure = obj6;
    U.__workletHash = 9584962527667;
    U.__initData = __initData10;
    class X {
      constructor(arg0, arg1) {
        value = null != arg1;
        if (value) {
          tmp2 = closure_15;
          value = closure_15.get();
        }
        if (value) {
          tmp3 = badge;
          tmp4 = closure_18;
          result = closure_18.set(closure_18.get() + (badge - arg1));
          tmp6 = closure_21;
          tmp7 = closure_21();
        }
        return;
      }
    }
    const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    X.__closure = obj7;
    X.__workletHash = 959241592972;
    X.__initData = __initData11;
    const animatedReaction1 = tmp2(tmp[27]).useAnimatedReaction(U, X);
    let items1 = [reslot, scrollRef, sharedValue1, autoScrollSpeed, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue5, sharedValue2, sharedValue3, sharedValue4];
    closure_22 = slotOffset.useMemo(() => {
      function handleStart() {
        if (!isDragActive.get()) {
          badge(tileSize[27]).runOnJS(badge(tileSize[31]).hideContextMenu)();
          const result = isDragActive.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: sharedValue2.get(), y: sharedValue3.get() };
          const result2 = sharedValue4.set(point);
          const obj2 = badge(tileSize[27]);
          const measureResult = badge(tileSize[27]).measure(scrollRef);
          let tmp15 = null;
          if (null != measureResult) {
            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
            tmp15 = { pageY: null, height: null };
            const obj3 = { pageY: null, height: null };
          }
          const result3 = closure_1_16.set(tmp15);
          const obj4 = badge(tileSize[27]);
          const result4 = sharedValue5.set(badge(tileSize[28]).withTiming(sharedValue1, badge(tileSize[29]).timingStandard));
          const tmp2Result = badge(tileSize[28]);
          const tmp2Result2 = badge(tileSize[27]);
          badge(tileSize[27]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START);
          const runOnJSResult = badge(tileSize[27]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
        }
      }
      handleStart.__closure = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[27]).runOnJS, hideContextMenu: badge(tileSize[31]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[27]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[28]).withTiming, DRAG_SCALE: sharedValue1, timingStandard: badge(tileSize[29]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleStart.__workletHash = 11781614290100;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = closure_1_17.set(closure_1_17.get() + changeX.changeX);
          const result1 = sharedValue3.set(sharedValue3.get() + changeX.changeY);
          reslot();
          value = sharedValue1.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue2) {
              const result2 = autoScrollSpeed.set(badge(tileSize[27]).clamp(diff, 0, sharedValue2) / sharedValue2 - 1);
              const obj2 = badge(tileSize[27]);
            } else if (diff1 < sharedValue2) {
              const result3 = autoScrollSpeed.set(1 - badge(tileSize[27]).clamp(diff1, 0, sharedValue2) / sharedValue2);
              const obj = badge(tileSize[27]);
            } else {
              const result4 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[27]).runOnJS, hideContextMenu: badge(tileSize[31]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[27]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[28]).withTiming, DRAG_SCALE: sharedValue1, timingStandard: badge(tileSize[29]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleChange.__closure = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue2, autoScrollSpeed, clamp: badge(tileSize[27]).clamp };
      handleChange.__workletHash = 879322197993;
      handleChange.__initData = __initData2;
      function handleFinalize() {
        if (sharedValue.get()) {
          const result = autoScrollSpeed.set(0);
          const result1 = sharedValue1.set(null);
          value = orderShared.get();
          index = value.indexOf(badge_id);
          if (index >= 0) {
            const sum = index + slotOffset;
            if (typeof closure_22 === "function") {
              const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
              const result5 = sharedValue2.set(badge(tileSize[28]).withTiming(result3, badge(tileSize[29]).timingStandard));
              const obj2 = badge(tileSize[28]);
              const result6 = sharedValue3.set(badge(tileSize[28]).withTiming(result4, badge(tileSize[29]).timingStandard));
              const obj3 = badge(tileSize[28]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const result7 = sharedValue5.set(badge(tileSize[28]).withTiming(1, badge(tileSize[29]).timingStandard));
          const result8 = sharedValue.set(false);
          const result9 = isDragActive.set(false);
          const obj4 = badge(tileSize[28]);
          const obj5 = badge(tileSize[27]);
          badge(tileSize[27]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END);
          const runOnJSResult = badge(tileSize[27]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          badge(tileSize[27]).runOnJS(onCommitOrder)(value);
          const obj6 = badge(tileSize[27]);
        }
      }
      let obj2 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue2, autoScrollSpeed, clamp: badge(tileSize[27]).clamp };
      handleFinalize.__closure = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[28]).withTiming, timingStandard: badge(tileSize[29]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[27]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      handleFinalize.__workletHash = 4416604805365;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[32]).Gesture;
      let obj3 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[28]).withTiming, timingStandard: badge(tileSize[29]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[27]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      const PanResult = Gesture.Pan();
      const fn = function s() {
        handleStart();
      };
      fn.__closure = { handleStart };
      fn.__workletHash = 12078596428673;
      fn.__initData = __initData6;
      const minDistanceResult = Gesture.Pan().minDistance(8);
      const fn2 = function n(arg0) {
        handleChange(arg0);
      };
      fn2.__closure = { handleChange };
      fn2.__workletHash = 9495907638982;
      fn2.__initData = __initData5;
      const onStartResult = Gesture.Pan().minDistance(8).onStart(fn);
      const fn3 = function t() {
        handleFinalize();
      };
      fn3.__closure = { handleFinalize };
      fn3.__workletHash = 12861679152071;
      fn3.__initData = __initData4;
      return Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2).onFinalize(fn3);
    }, items1);
    const tmp2Result11 = tmp2(tmp[27]);
    function ae() {
      value = sharedValue.get();
      const point = sharedValue4.get();
      let num = 0;
      if (value) {
        num = 10;
      }
      const rect = { zIndex: num, left: null, top: null, transform: null };
      if (value) {
        let x = point.x;
      } else {
        x = sharedValue2.get();
      }
      rect.left = x;
      if (value) {
        let y = point.y;
      } else {
        y = sharedValue3.get();
      }
      rect.top = y;
      if (value) {
        const obj = { translateX: sharedValue2.get() - point.x };
        const items = [obj, , ];
        const obj2 = { translateY: sharedValue3.get() - point.y };
        items[1] = obj2;
        const obj3 = { scale: sharedValue5.get() };
        items[2] = obj3;
        let items1 = items;
      } else {
        const obj4 = { scale: sharedValue5.get() };
        items1 = [obj4];
      }
      rect.transform = items1;
      return rect;
    }
    const obj8 = { isThisTileDragging: sharedValue, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, scale: sharedValue5 };
    ae.__closure = obj8;
    ae.__workletHash = 10858650842867;
    ae.__initData = __initData12;
    closure_23 = tmp2(tmp[27]).useAnimatedStyle(ae);
    const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_24 = slotOffset.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        if (tmp) {
          num2 = -1;
        }
        const clampResult = ReanimatedRexport.clamp(index + num2, 0, value.length - 1);
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = orderShared.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj3 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.qPHr0x, obj3));
        }
        const tmp4Result = PendingBadgeSettings;
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      const obj9 = { name: "moveup", label: null };
      let intl = tmp2(tmp[16]).intl;
      obj9.label = intl.string(tmp2(tmp[16]).t.eR2XSh);
      items3.push(obj9);
    }
    if (!isLast) {
      const obj10 = { name: "movedown", label: null };
      let intl2 = tmp2(tmp[16]).intl;
      obj10.label = intl2.string(tmp2(tmp[16]).t.wWi0DL);
      items3.push(obj10);
    }
    function renderTile(ref) {
      badge = ref;
      const obj = { gesture, children: null };
      const obj2 = { style: null, children: null };
      const items = [position.position, , ];
      const size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      obj2.style = items;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj3 = { ref, accessible: true, accessibilityLabel: null };
      const intl = tmp2(tileSize[16]).intl;
      const t = tmp2(tileSize[16]).t;
      obj3.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], { badgeName: badge.name, position: index + 1 });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = tmp2(tileSize[16]).intl;
        stringResult = intl2.string(tmp2(tileSize[24]).getAlwaysVisibleCopy(tmp9));
        const tmp2Result = tmp2(tileSize[24]);
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      if (accessibilityActions == null) {
        accessibilityActions = [];
      }
      const items1 = [...items3];
      obj3.accessibilityActions = items1;
      obj3.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if ("moveup" !== actionName) {
          if ("movedown" !== actionName) {
            if (onLongPress != null) {
              const onAccessibilityAction = onLongPress.onAccessibilityAction;
              if (onAccessibilityAction != null) {
                const result = onAccessibilityAction(nativeEvent);
              }
            }
          }
        }
        closure_24(nativeEvent);
      };
      if (alwaysVisible) {
        onPress = closure_14;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      obj3.onPress = onPress;
      let fn;
      if (null != ref) {
        fn = (arg0) => {
          const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
          onLongPress = onLongPress.onLongPress;
          if (onLongPress != null) {
            onLongPress(arg0);
          }
        };
      }
      obj3.onLongPress = fn;
      obj3.delayLongPress = badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj3.style = position.fill;
      obj3.children = closure_14(closure_23, { badge, alwaysVisible });
      obj2.children = closure_14(badge(tileSize[25]).PressableScale, obj3);
      obj.children = closure_14(index(tileSize[27]).View, obj2);
      return closure_14(badge(tileSize[32]).GestureDetector, obj);
    }
    if (alwaysVisible) {
      let renderTileResult = renderTile(null);
    } else {
      const obj11 = { badge, index, onSetHidden, children: renderTile };
      renderTileResult = closure_14(sharedValue5, obj11);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj2 = badge(tileSize[27]);
}));
const __initData13 = { code: "function CustomizeBadgesSheetTsx26({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}" };
const __initData14 = { code: "function CustomizeBadgesSheetTsx27(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}" };
const __initData15 = { code: "function CustomizeBadgesSheetTsx28(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let stateFromStores1;
  analyticsLocations = undefined;
  let context;
  let stateFromStoresArray;
  let hasCatalog;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let memo;
  let fixedBadges;
  let reorderableBadges;
  let hiddenBadges;
  let memo2;
  let sharedValue;
  let onCommitOrder;
  let sharedValue1;
  MS_PER_FRAME_60FPS = undefined;
  let onPress;
  closure_20 = undefined;
  let onSetHidden;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback1;
  let tmp = onPress();
  const tenureBadgeHideable = stateFromStores(stateFromStores1[34]).useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[35])().bottom, reorderableBadges) + 4;
  let obj = stateFromStores(stateFromStores1[34]);
  const items = [hasCatalog];
  stateFromStores = tenureBadgeHideable(stateFromStores1[36]).useStateFromStores(items, () => {
    const currentUser = hasCatalog.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = tenureBadgeHideable(stateFromStores1[36]);
  const items1 = [hasCatalog];
  stateFromStores1 = tenureBadgeHideable(stateFromStores1[36]).useStateFromStores(items1, () => stateFromStores(stateFromStores1[37]).canUsePremiumProfileCustomization(hasCatalog.getCurrentUser()));
  let obj3 = tenureBadgeHideable(stateFromStores1[36]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = stateFromStores(stateFromStores1[38])(analyticsLocations1, tmp2(tmp3[39]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[40]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    if (context != null) {
      context.close();
    }
    const obj2 = { analyticsLocation: { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE, object: constants2.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj2);
    const obj3 = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE, object: constants2.BUTTON_CTA };
  }, items2);
  const obj4 = analyticsLocations;
  const tmp8 = stateFromStores(stateFromStores1[38]);
  const items3 = [pendingBadgeDisplayOrder];
  const items4 = [stateFromStores];
  stateFromStoresArray = tenureBadgeHideable(stateFromStores1[36]).useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(stateFromStores), items4);
  const tmp5Result = tenureBadgeHideable(stateFromStores1[36]);
  const items5 = [pendingBadgeDisplayOrder];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tenureBadgeHideable(stateFromStores1[36]).useStateFromStoresObject(items5, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(stateFromStores);
    }
    return { hasCatalog: hasCatalogForResult, hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores) };
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const effect = analyticsLocations.useEffect(() => {
    const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations });
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      const obj2 = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: null, location_stack: null };
      const obj3 = { page: constants3.USER_SETTINGS, section: constants4.USER_PROFILE };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(stateFromStores) && !BadgeDirectoryStore.isCatalogStaleFor(stateFromStores);
    }
  }, items8);
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[36]);
  const items9 = [stateFromStoresArray];
  const stateFromStoresObject1 = tenureBadgeHideable(stateFromStores1[36]).useStateFromStoresObject(items9, () => {
    const pendingChanges = stateFromStoresArray.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(() => PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items10);
  const items11 = [tenureBadgeHideable];
  analyticsLocations.useMemo(() => BadgeUtils.getUnhideableBadgeIds({ tenureBadgeHideable }), items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => BadgeUtils.groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[36]);
  sharedValue = tenureBadgeHideable(stateFromStores1[27]).useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[26])((arr) => {
    const result = tenureBadgeHideable(stateFromStores1[30]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue1 = tenureBadgeHideable(stateFromStores1[27]).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  MS_PER_FRAME_60FPS = tmp2(tmp3[26])((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({ badgeId: badgeId.badge_id, hidden: false, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.mehuPg, { badgeName: badgeId.name }));
  });
  onPress = tmp2(tmp3[26])((badge_id) => {
    if (hiddenBadges.some((badge_id) => badge_id.badge_id === badge_id.badge_id)) {
      closure_18(badge_id);
    } else if (set.has(badge_id.badge_id)) {
      const obj2 = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj2.key = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = util.intl;
      const obj = ToastActionCreatorsDefault;
      obj2.content = intl.string(BadgeUtils.getAlwaysVisibleCopy(badge_id.badge_id));
      obj.open(obj2);
    }
  });
  closure_20 = tmp2(tmp3[26])((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({ badgeId: badgeId.badge_id, hidden: true, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.q3t0Ht, { count: 1 }));
  });
  onSetHidden = tmp2(tmp3[26])((arg0, arg1) => {
    if (arg1) {
      closure_20(arg0);
    } else {
      closure_18(arg0);
    }
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[27]);
  badgeTileSize = tenureBadgeHideable(stateFromStores1[13]).getBadgeTileSize(tmp2(tmp3[47])().width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[13]);
  animatedRef = tenureBadgeHideable(stateFromStores1[27]).useAnimatedRef();
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[27]);
  scrollViewOffset = tenureBadgeHideable(stateFromStores1[27]).useScrollViewOffset(animatedRef);
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue2 = tenureBadgeHideable(stateFromStores1[27]).useSharedValue(0);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue3 = tenureBadgeHideable(stateFromStores1[27]).useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[27]);
  const fn = function q(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          value2 = sharedValue3.get();
          if (value2 >= c18) {
            const result1 = sharedValue3.set(0);
            const obj2 = ReanimatedRexport;
            const _Math = Math;
            obj2.scrollTo(animatedRef, 0, Math.max(roundToNearestPixelDefault(scrollViewOffset.get() + 700 * value * value2 / 1000), 0), false);
          }
        }
      }
    }
  };
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[27]);
  fn.__closure = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tenureBadgeHideable(stateFromStores1[27]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: stateFromStores(stateFromStores1[48]), scrollOffset: scrollViewOffset };
  fn.__workletHash = 8686394877996;
  fn.__initData = __initData13;
  frameCallback = tmp5Result21.useFrameCallback(fn, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const obj5 = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tenureBadgeHideable(stateFromStores1[27]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: stateFromStores(stateFromStores1[48]), scrollOffset: scrollViewOffset };
  const fn2 = function $() {
    return 0 !== sharedValue2.get();
  };
  fn2.__closure = { autoScrollSpeed: sharedValue2 };
  fn2.__workletHash = 9672319834497;
  fn2.__initData = __initData14;
  class K {
    constructor(arg0, arg1) {
      tmp = null != arg1 && analyticsLocations !== arg1;
      if (tmp) {
        tmp2 = closure_26;
        num = 0;
        result = closure_26.set(0);
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[27]);
        tmp6 = closure_28;
        tmp7 = obj.runOnJS(closure_28)(analyticsLocations);
      }
      return;
    }
  }
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[27]);
  K.__closure = { autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[27]).runOnJS, setAutoScrollerActive: callback1 };
  K.__workletHash = 6850974884902;
  K.__initData = __initData15;
  const animatedReaction = tmp5Result22.useAnimatedReaction(fn2, K);
  if (hasCatalog) {
    const obj7 = { style: tmp.gridInset, children: null };
    let tmp40 = !stateFromStores1;
    if (!stateFromStores1) {
      const obj8 = { style: tmp.upsell, ctaText: null, cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: null, children: null };
      const intl2 = tmp5(tmp3[16]).intl;
      obj8.ctaText = intl2.string(tmp5(tmp3[16]).t.pj0XBN);
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj8.onPress = callback;
      const obj9 = { variant: "text-sm/normal", style: tmp.upsellText, children: null };
      const intl3 = tmp5(tmp3[16]).intl;
      obj9.children = intl3.string(tmp5(tmp3[16]).t.JrOki0);
      obj8.children = memo2(tmp5(tmp3[22]).Text, obj9);
      tmp40 = memo2(tmp2(tmp3[49]), obj8);
      const tmp2Result = tmp2(tmp3[49]);
    }
    const items16 = [tmp40, ];
    const obj10 = { accessibilityRole: "list", style: null, children: null };
    const items17 = [tmp.grid, ];
    const obj11 = { height: num };
    items17[1] = obj11;
    obj10.style = items17;
    const items18 = [
      fixedBadges.map((badge, index) => state(closure_24, { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress }, badge.badge_id)),
      reorderableBadges.map((badge, index) => {
          if (stateFromStores1) {
            const obj2 = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, slotOffset: fixedBadges.length, isFirst: 0 === index, isLast: index === reorderableBadges.length - 1, alwaysVisible: set.has(badge.badge_id), orderShared: sharedValue, isDragActive: sharedValue1, scrollRef: animatedRef, scrollOffset: scrollViewOffset, autoScrollSpeed: sharedValue2, onCommitOrder, onSetHidden, onPress };
            let tmpResult = state(closure_49, obj2, badge.badge_id);
          } else {
            const obj = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onSetHidden };
            tmpResult = state(closure_24, obj, badge.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge, index) => state(closure_24, { badge, index: fixedBadges.length + reorderableBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onSetHidden }, badge.badge_id))
    ];
    obj10.children = items18;
    items16[1] = sharedValue(context, obj10);
    obj7.children = items16;
    let tmp35Result = tmp38(tmp39, obj7);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: null };
      const obj13 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: null };
      let intl = tmp5(tmp3[16]).intl;
      obj13.children = intl.string(tmp5(tmp3[16]).t["rTU7/z"]);
      obj12.children = tmp35(tmp5(tmp3[22]).Text, obj13);
      let obj14 = obj12;
    } else {
      obj14 = { style: tmp.message, children: tmp35(tmp5(tmp3[50]).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp35Result = tmp35(context, obj14);
  }
  const obj15 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl4 = tmp5(tmp3[16]).intl;
  obj15.dismissAccessibilityLabel = intl4.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU);
  const obj16 = { title: null, subtitle: null };
  const intl5 = tmp5(tmp3[16]).intl;
  obj16.title = intl5.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU);
  const intl6 = tmp5(tmp3[16]).intl;
  const t = tmp5(tmp3[16]).t;
  obj16.subtitle = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj15.header = memo2(tenureBadgeHideable(stateFromStores1[52]).BottomSheetTitleHeader, obj16);
  obj15.children = memo2(tenureBadgeHideable(stateFromStores1[53]).BottomSheetScrollView, { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp35Result });
  return memo2(tenureBadgeHideable(stateFromStores1[51]).BottomSheet, obj15);
};