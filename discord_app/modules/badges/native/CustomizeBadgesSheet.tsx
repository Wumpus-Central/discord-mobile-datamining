// discord_app/modules/badges/native/CustomizeBadgesSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import CircleInformationIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import Card_Card from "../../../design/components/Card/native/Card.native.tsx";
import EyeSlashIcon2 from "../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import ContextMenu2 from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuState from "../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import ContextMenuConstants from "../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import UserProfileAnalyticsUtils from "../../user_profile/UserProfileAnalyticsUtils.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import native from "../../../design/components/experimental/native.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import BadgeCatalogIconDefault from "BadgeCatalogIcon.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import PendingBadgeSettings from "../PendingBadgeSettings.tsx";
import BadgeGrid from "BadgeGrid.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, badge, obj1, set, set2, set3, style, tmp3;

let Platform;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_4;
let metroImportAll;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
({ Platform, View: closure_4 } = react_native);
({
  AnalyticEvents: metroImportAll,
  AnalyticsObjects: c9,
  AnalyticsPages: c10,
  AnalyticsSections: unpackModuleId,
} = Constants);
let closure_12 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let c16 = 1.05;
let c17 = 80;
let c18 = 16.666666666666668;
let createStyles = createStyles_mod;
let obj = {
  gridInset: obj2,
  grid: obj3,
  upsell: obj4,
  upsellCard: obj5,
  upsellContent: obj6,
  upsellCta: obj7,
  upsellText: { textAlign: "center" },
  message: obj8,
  messageText: { textAlign: "center" },
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj4 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj6 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj8 = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_32,
};
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badge) => {
      let EyeSlashIcon;
      let index;
      let onSetHidden;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(16);
      badge = badge.badge;
      ({ index, onSetHidden } = badge);
      const children = badge.children;
      let flag = badge.hidden;
      if (flag == null) {
        flag = false;
      }
      if (cResult[0] !== flag) {
        const intl = intl7.intl;
        const string = intl.string;
        const t = intl7.t;
        const stringResult = string(flag ? t.RXOPc3 : t.xSWJPo);
        cResult[0] = flag;
        cResult[1] = stringResult;
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (flag) {
        EyeSlashIcon = EyeIcon.EyeIcon;
      } else {
        EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
      }
      if (cResult[2] === badge) {
        if (cResult[3] === flag) {
          let tmp6;
          if (cResult[4] === onSetHidden) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === tmp4) {
            if (cResult[7] === EyeSlashIcon) {
              let tmp7;
              let tmp8;
              if (cResult[8] === tmp6) {
                tmp7 = cResult[9];
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
                tmp8 = str;
              } else {
                tmp8 = cResult[11];
              }
              if (cResult[12] === children) {
                if (cResult[13] === tmp7) {
                  let tmp10;
                  if (cResult[14] === tmp8) {
                    tmp10 = cResult[15];
                  }
                  return tmp10;
                }
              }
              const obj2 = { items: tmp7, align: tmp8, disableGesture: true, triggerOnLongPress: true, children };
              const tmp12 = authStore2(ContextMenu2.ContextMenu, obj2);
              cResult[12] = children;
              cResult[13] = tmp7;
              cResult[14] = tmp8;
              cResult[15] = tmp12;
              tmp10 = tmp12;
            }
          }
          const items = [{ label: tmp4, trailingIndicator: EyeSlashIcon, action: tmp6 }];
          const obj3 = { label: tmp4, trailingIndicator: EyeSlashIcon, action: tmp6 };
          cResult[6] = tmp4;
          cResult[7] = EyeSlashIcon;
          cResult[8] = tmp6;
          cResult[9] = items;
          tmp7 = items;
        }
      }
      const fn = function p() {
        return onSetHidden(badge, !flag);
      };
      cResult[2] = badge;
      cResult[3] = flag;
      cResult[4] = onSetHidden;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (badge) => {
      let EyeSlashIcon;
      let children;
      let index;
      let items;
      let str;
      badge = badge.badge;
      const onSetHidden = badge.onSetHidden;
      let flag = badge.hidden;
      ({ index, children } = badge);
      if (flag == null) {
        flag = false;
      }
      const ContextMenu = ContextMenu2.ContextMenu;
      let intl = intl7.intl;
      const string = intl.string;
      const t = intl7.t;
      let obj = {
        label: string(flag ? t.RXOPc3 : t.xSWJPo),
        trailingIndicator: EyeSlashIcon,
        action() {
          return onSetHidden(badge, !flag);
        },
      };
      if (flag) {
        EyeSlashIcon = EyeIcon.EyeIcon;
      } else {
        EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
      }
      let obj2 = { items, align: str, disableGesture: true, triggerOnLongPress: true, children };
      items = [obj];
      let result = index % BadgeGrid.BADGE_GRID_COLUMNS;
      str = "right";
      if (0 !== result) {
        let num = 1;
        let str2 = "above";
        if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
          str2 = "left";
        }
        str = str2;
      }
      return authStore2(ContextMenu, obj2);
    };
createStyles = createStyles_mod;
let obj9 = {
  position: { position: "absolute" },
  fill: { flex: 1 },
  card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 },
  icon: obj10,
  name: obj11,
  indicator: size,
  iconHidden: { opacity: 0.3 },
};
obj10 = { marginBottom: nativeDefault.space.PX_12 };
const createStyles2 = createStyles.createStyles;
obj11 = {
  position: "absolute",
  start: 0,
  end: 0,
  bottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  textAlign: "center",
};
size = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  end: nativeDefault.space.PX_8,
  width: 32,
  height: 32,
  alignItems: "flex-end",
  justifyContent: "flex-start",
};
let closure_21 = createStyles2(obj9);
function getSlotOffset(arg0, arg1) {
  let result;
  let rounded;
  const point = { x: result * (arg1 + BadgeGrid.BADGE_GRID_GAP), y: rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP) };
  result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  return point;
}
let obj12 = { BADGE_GRID_COLUMNS: BadgeGrid.BADGE_GRID_COLUMNS, BADGE_GRID_GAP: BadgeGrid.BADGE_GRID_GAP };
getSlotOffset.__closure = obj12;
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = {
  code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badge) => {
      let items;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(20);
      badge = badge.badge;
      const alwaysVisible = badge.alwaysVisible;
      const tmp4 = closure_21();
      let flag = badge.hidden;
      if (flag == null) {
        flag = false;
      }
      if (alwaysVisible) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
          const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
          const tmp15 = authStore2(CircleInformationIcon, obj2);
          cResult[0] = tmp15;
          first = tmp15;
        } else {
          first = cResult[0];
        }
        tmp5 = first;
      } else {
        tmp5 = null;
        if (flag) {
          let tmp7;
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
            const EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
            const tmp10 = authStore2(EyeSlashIcon, obj3);
            cResult[1] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[1];
          }
          tmp5 = tmp7;
        }
      }
      if (cResult[2] === tmp4.icon) {
        let tmp17;
        if (cResult[3] === (flag && tmp4.iconHidden)) {
          tmp17 = cResult[4];
        }
        if (cResult[5] === badge) {
          let tmp18;
          if (cResult[6] === tmp17) {
            tmp18 = cResult[7];
          }
          let str3 = "text-default";
          if (flag) {
            str3 = "text-muted";
          }
          if (cResult[8] === badge.name) {
            if (cResult[9] === tmp4.name) {
              let tmp23;
              if (cResult[10] === str3) {
                tmp23 = cResult[11];
              }
              if (cResult[12] === tmp5) {
                let tmp26;
                if (cResult[13] === tmp4.indicator) {
                  tmp26 = cResult[14];
                }
                if (cResult[15] === tmp4.card) {
                  if (cResult[16] === tmp18) {
                    if (cResult[17] === tmp23) {
                      let tmp30;
                      if (cResult[18] === tmp26) {
                        tmp30 = cResult[19];
                      }
                      return tmp30;
                    }
                  }
                }
                const obj4 = { variant: "secondary", border: "none", radius: 16, style: tmp4.card, children: items };
                items = [tmp18, tmp23, tmp26];
                const tmp32 = closure_15(Card_Card.Card, obj4);
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
                tmp27 = authStore2(React3, obj5);
              }
              cResult[12] = tmp5;
              cResult[13] = tmp4.indicator;
              cResult[14] = tmp27;
              tmp26 = tmp27;
            }
          }
          const obj6 = {
            variant: "text-xs/medium",
            color: str3,
            lineClamp: 1,
            style: tmp4.name,
            "aria-hidden": true,
            children: badge.name,
          };
          const tmp25 = authStore2(Text_Text.Text, obj6);
          cResult[8] = badge.name;
          cResult[9] = tmp4.name;
          cResult[10] = str3;
          cResult[11] = tmp25;
          tmp23 = tmp25;
        }
        const obj7 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: tmp17 };
        const tmp21 = BadgeCatalogIconDefault;
        const tmp22 = authStore2(tmp21, obj7);
        cResult[5] = badge;
        cResult[6] = tmp17;
        cResult[7] = tmp22;
        tmp18 = tmp22;
      }
      const items1 = [tmp4.icon, flag && tmp4.iconHidden];
      cResult[2] = tmp4.icon;
      cResult[3] = flag && tmp4.iconHidden;
      cResult[4] = items1;
      tmp17 = items1;
    }
  : (badge) => {
      let items;
      let items1;
      let tmp2;
      badge = badge.badge;
      const alwaysVisible = badge.alwaysVisible;
      const tmp = closure_21();
      let flag = badge.hidden;
      if (flag == null) {
        flag = false;
      }
      if (alwaysVisible) {
        const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
        const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
        tmp2 = authStore2(CircleInformationIcon, obj2);
      } else {
        tmp2 = null;
        if (flag) {
          const obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
          const EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
          tmp2 = authStore2(EyeSlashIcon, obj);
        }
      }
      const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: items1 };
      const Card = Card_Card.Card;
      const obj4 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: items };
      items = [tmp.icon, flag && tmp.iconHidden];
      const tmp15 = BadgeCatalogIconDefault;
      items1 = [authStore2(tmp15, obj4), ,];
      let str = "text-default";
      const Text = Text_Text.Text;
      if (flag) {
        str = "text-muted";
      }
      const obj5 = {
        variant: "text-xs/medium",
        color: str,
        lineClamp: 1,
        style: tmp.name,
        "aria-hidden": true,
        children: badge.name,
      };
      items1[1] = authStore2(Text, obj5);
      let tmp14Result = null != tmp2;
      if (tmp14Result) {
        const obj6 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
        tmp14Result = authStore2(React3, obj6);
      }
      items1[2] = tmp14Result;
      return closure_15(Card, obj3);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (badge) => {
        let alwaysVisible;
        let result;
        let rounded;
        let tileSize;
        let tmp5;
        let x;
        let y;
        let obj = badge(alwaysVisible[15]);
        const cResult = obj.c(26);
        badge = badge.badge;
        const index = badge.index;
        ({ tileSize, alwaysVisible } = badge);
        let onPress = badge.onPress;
        const onSetHidden = badge.onSetHidden;
        const tmp4 = closure_21();
        if (cResult[0] === index) {
          if (cResult[1] === tileSize) {
            tmp5 = cResult[2];
          }
          ({ x, y } = tmp5);
          if (cResult[3] === badge) {
            let tmp8;
            if (cResult[4] === onPress) {
              tmp8 = cResult[5];
            }
            let closure_4 = tmp8;
            if (cResult[6] === tileSize) {
              if (cResult[7] === x) {
                let tmp9;
                if (cResult[8] === y) {
                  tmp9 = cResult[9];
                }
                if (cResult[10] === tmp4.position) {
                  let tmp11;
                  if (cResult[11] === tmp9) {
                    tmp11 = cResult[12];
                  }
                  style = tmp11;
                  if (cResult[13] === alwaysVisible) {
                    if (cResult[14] === badge) {
                      if (cResult[15] === tmp8) {
                        if (cResult[16] === index) {
                          let tmp12;
                          if (cResult[17] === tmp11) {
                            tmp12 = cResult[18];
                          }
                          if (!alwaysVisible) {
                            let tmp14;
                            if (null != onSetHidden) {
                              if (cResult[21] === badge) {
                                if (cResult[22] === index) {
                                  if (cResult[23] === onSetHidden) {
                                    if (cResult[24] === tmp12) {
                                      tmp14 = cResult[25];
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
                                  PressableScale = closure_0(closure_2[25]).PressableScale;
                                  if (badge != null) {
                                    ref = badge.ref;
                                  }
                                  obj = { ref, accessibilityLabel: null };
                                  tmp5 = badge;
                                  tmp6 = index;
                                  intl = tmp2(tmp3[16]).intl;
                                  formatToPlainString = intl.formatToPlainString;
                                  hidden = badge.hidden;
                                  t = tmp2(tmp3[16]).t;
                                  obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                                  obj.accessibilityLabel = formatToPlainString(
                                    hidden ? t["dXg/Dl"] : t["21W3EN"],
                                    obj1,
                                  );
                                  tmp7 = alwaysVisible;
                                  stringResult = undefined;
                                  if (alwaysVisible) {
                                    intl2 = tmp2(tmp3[16]).intl;
                                    string = intl2.string;
                                    tmp2Result = tmp2(tmp3[24]);
                                    stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
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
                                      const obj = badge(alwaysVisible[11]);
                                      const result = obj.triggerHapticFeedback(
                                        badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC,
                                      );
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
                                  return tmp(PressableScale, obj);
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
                            return tmp14;
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
                                PressableScale = closure_0(closure_2[25]).PressableScale;
                                if (badge != null) {
                                  ref = badge.ref;
                                }
                                obj = { ref, accessibilityLabel: null };
                                tmp5 = badge;
                                tmp6 = index;
                                intl = tmp2(tmp3[16]).intl;
                                formatToPlainString = intl.formatToPlainString;
                                hidden = badge.hidden;
                                t = tmp2(tmp3[16]).t;
                                obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                                obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                                tmp7 = alwaysVisible;
                                stringResult = undefined;
                                if (alwaysVisible) {
                                  intl2 = tmp2(tmp3[16]).intl;
                                  string = intl2.string;
                                  tmp2Result = tmp2(tmp3[24]);
                                  stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
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
                                    const obj = badge(alwaysVisible[11]);
                                    const result = obj.triggerHapticFeedback(
                                      badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC,
                                    );
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
                                return tmp(PressableScale, obj);
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
                              PressableScale = closure_0(closure_2[25]).PressableScale;
                              if (badge != null) {
                                ref = badge.ref;
                              }
                              obj = { ref, accessibilityLabel: null };
                              tmp5 = badge;
                              tmp6 = index;
                              intl = tmp2(tmp3[16]).intl;
                              formatToPlainString = intl.formatToPlainString;
                              hidden = badge.hidden;
                              t = tmp2(tmp3[16]).t;
                              obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                              obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                              tmp7 = alwaysVisible;
                              stringResult = undefined;
                              if (alwaysVisible) {
                                intl2 = tmp2(tmp3[16]).intl;
                                string = intl2.string;
                                tmp2Result = tmp2(tmp3[24]);
                                stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
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
                                  const obj = badge(alwaysVisible[11]);
                                  const result = obj.triggerHapticFeedback(
                                    badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC,
                                  );
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
                              return tmp(PressableScale, obj);
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
                      PressableScale = closure_0(closure_2[25]).PressableScale;
                      if (badge != null) {
                        ref = badge.ref;
                      }
                      obj = { ref, accessibilityLabel: null };
                      tmp5 = badge;
                      tmp6 = index;
                      intl = tmp2(tmp3[16]).intl;
                      formatToPlainString = intl.formatToPlainString;
                      hidden = badge.hidden;
                      t = tmp2(tmp3[16]).t;
                      obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
                      obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                      tmp7 = alwaysVisible;
                      stringResult = undefined;
                      if (alwaysVisible) {
                        intl2 = tmp2(tmp3[16]).intl;
                        string = intl2.string;
                        tmp2Result = tmp2(tmp3[24]);
                        stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
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
                          const obj = badge(alwaysVisible[11]);
                          const result = obj.triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
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
                      return tmp(PressableScale, obj);
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
          const point = {
            x: result * (tileSize + tmp(alwaysVisible[13]).BADGE_GRID_GAP),
            y: rounded * (tileSize + tmp(alwaysVisible[13]).BADGE_GRID_GAP),
          };
          result = index % tmp(alwaysVisible[13]).BADGE_GRID_COLUMNS;
          class E {
            constructor(arg0) {
              closure_0 = badge;
              tmp = jsx;
              tmp2 = closure_0;
              tmp3 = closure_2;
              ref = undefined;
              PressableScale = closure_0(closure_2[25]).PressableScale;
              if (badge != null) {
                ref = badge.ref;
              }
              obj = { ref, accessibilityLabel: null };
              tmp5 = badge;
              tmp6 = index;
              intl = tmp2(tmp3[16]).intl;
              formatToPlainString = intl.formatToPlainString;
              hidden = badge.hidden;
              t = tmp2(tmp3[16]).t;
              obj1 = { badgeName: tmp5.name, position: tmp6 + 1 };
              obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
              tmp7 = alwaysVisible;
              stringResult = undefined;
              if (alwaysVisible) {
                intl2 = tmp2(tmp3[16]).intl;
                string = intl2.string;
                tmp2Result = tmp2(tmp3[24]);
                stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
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
                  const obj = badge(alwaysVisible[11]);
                  const result = obj.triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
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
              return tmp(PressableScale, obj);
            }
          }
          const _Math = Math;
          rounded = Math.floor(index / tmp(alwaysVisible[13]).BADGE_GRID_COLUMNS);
          cResult[0] = index;
          cResult[1] = tileSize;
          cResult[2] = point;
          tmp5 = point;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    : (badge) => {
        let alwaysVisible;
        let tileSize;
        badge = badge.badge;
        const index = badge.index;
        ({ tileSize, alwaysVisible } = badge);
        let onPress = badge.onPress;
        const onSetHidden = badge.onSetHidden;
        let closure_4;
        let items1;
        if (typeof getSlotOffset === "function") {
          function renderTile(ref) {
            let accessibilityActions;
            let fn;
            let formatToPlainString;
            let hidden;
            let obj2;
            let prop;
            let t;
            let closure_0 = ref;
            ref = undefined;
            const PressableScale = native.PressableScale;
            if (ref != null) {
              ref = ref.ref;
            }
            let obj = {
              ref,
              accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj2),
              accessibilityActions,
              onAccessibilityAction: prop,
              onPress,
              onLongPress: fn,
              delayLongPress: ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS,
              style: items1,
              children: authStore2(closure_23, { badge, alwaysVisible }),
            };
            const intl = intl7.intl;
            formatToPlainString = intl.formatToPlainString;
            hidden = badge.hidden;
            t = intl7.t;
            let stringResult;
            obj2 = { badgeName: badge.name, position: index + 1 };
            if (alwaysVisible) {
              const intl2 = intl7.intl;
              const string = intl2.string;
              const tmp2Result = BadgeUtils;
              stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
            }
            const obj3 = { accessibilityRole: "button", accessibilityHint: stringResult };
            const merged = Object.assign(obj3);
            accessibilityActions = undefined;
            if (ref != null) {
              accessibilityActions = ref.accessibilityActions;
            }
            prop = undefined;
            if (ref != null) {
              prop = ref.onAccessibilityAction;
            }
            if (alwaysVisible) {
              onPress = closure_4;
            } else if (ref != null) {
              onPress = ref.onPress;
            }
            fn = undefined;
            if (null != ref) {
              fn = (arg0) => {
                const obj = badge(alwaysVisible[11]);
                const result = obj.triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
                onLongPress = onLongPress.onLongPress;
                if (onLongPress != null) {
                  onLongPress(arg0);
                }
              };
            }
            return authStore2(PressableScale, obj);
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
          items1 = [tmp.position];
          size = { left: result1, top: result2, width: tileSize, height: tileSize };
          items1[1] = size;
          if (!alwaysVisible) {
            let renderTileResult;
            if (null != onSetHidden) {
              let obj = { badge, index, onSetHidden, children: renderTile };
              renderTileResult = closure_14(closure_20, obj);
            }
            return renderTileResult;
          }
          renderTileResult = renderTile(null);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
);
const __initData = {
  code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}",
};
const __initData2 = {
  code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}",
};
const __initData3 = {
  code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}",
};
const __initData4 = {
  code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}",
};
const __initData5 = {
  code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}",
};
const __initData6 = {
  code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}",
};
let closure_31 = {
  code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}}",
};
let closure_32 = {
  code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}",
};
let closure_33 = { code: "function CustomizeBadgesSheetTsx10(){const{handleStart}=this.__closure;handleStart();}" };
let closure_34 = {
  code: "function CustomizeBadgesSheetTsx11(event_0){const{handleChange}=this.__closure;handleChange(event_0);}",
};
let closure_35 = {
  code: "function CustomizeBadgesSheetTsx12(){const{handleFinalize}=this.__closure;handleFinalize();}",
};
let closure_36 = {
  code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}",
};
const __initData7 = {
  code: "function CustomizeBadgesSheetTsx14(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}",
};
const __initData8 = {
  code: "function CustomizeBadgesSheetTsx15(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}",
};
const __initData9 = {
  code: "function CustomizeBadgesSheetTsx16(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}",
};
const __initData10 = {
  code: "function CustomizeBadgesSheetTsx17(){const{scrollOffset}=this.__closure;return scrollOffset.get();}",
};
const __initData11 = {
  code: "function CustomizeBadgesSheetTsx18(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}",
};
let closure_42 = {
  code: "function handleStart_CustomizeBadgesSheetTsx19(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}",
};
let closure_43 = {
  code: "function handleChange_CustomizeBadgesSheetTsx20(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}",
};
let closure_44 = {
  code: "function handleFinalize_CustomizeBadgesSheetTsx21(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}",
};
let closure_45 = {
  code: "function CustomizeBadgesSheetTsx22(){const{handleFinalize}=this.__closure;handleFinalize();}",
};
let closure_46 = {
  code: "function CustomizeBadgesSheetTsx23(event_0){const{handleChange}=this.__closure;handleChange(event_0);}",
};
let closure_47 = { code: "function CustomizeBadgesSheetTsx24(){const{handleStart}=this.__closure;handleStart();}" };
const __initData12 = {
  code: "function CustomizeBadgesSheetTsx25(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}",
};
let memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_49 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (badge) => {
        let alwaysVisible;
        let args;
        let gesture;
        let isFirst;
        let isLast;
        let result;
        let rounded;
        let tileSize;
        let tmp2 = tileSize;
        let obj = badge(tileSize[15]);
        const cResult = obj.c(75);
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
        const tmp4 = closure_21();
        const position = tmp4;
        const badge_id = badge.badge_id;
        if (cResult[0] === badge) {
          let tmp5;
          if (cResult[1] === onPress) {
            tmp5 = cResult[2];
          }
          let closure_14 = index(tmp2[26])(tmp5);
          const tmp7 = index(tmp2[26])(tmp5);
          let tmpResult = tmp(tmp2[27]);
          const sharedValue = tmpResult.useSharedValue(false);
          const tmp9 = null;
          const tmpResult8 = badge(tmp2[27]);
          const sharedValue1 = tmpResult8.useSharedValue(null);
          if (typeof getSlotOffset === "function") {
            let point = {
              x: result * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP),
              y: rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP),
            };
            result = index % tmp(tmp2[13]).BADGE_GRID_COLUMNS;
            let _Math = Math;
            rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
            const tmpResult9 = badge(tmp2[27]);
            const sharedValue2 = tmpResult9.useSharedValue(point.x);
            const tmpResult10 = badge(tmp2[27]);
            const sharedValue3 = tmpResult10.useSharedValue(point.y);
            const tmpResult11 = badge(tmp2[27]);
            const sharedValue4 = tmpResult11.useSharedValue(point);
            let num = 1;
            const tmpResult12 = badge(tmp2[27]);
            const sharedValue5 = tmpResult12.useSharedValue(1);
            const tmpResult13 = badge(tmp2[27]);
            class Z {
              constructor() {
                let result;
                let rounded;
                const value = orderShared.get();
                index = value.indexOf(badge_id);
                let tmp2 = null;
                if (index >= 0) {
                  const sum = index + slotOffset;
                  if (typeof getSlotOffset === "function") {
                    const point = {
                      x: result * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                      y: rounded * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                    };
                    result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
                    const _Math = Math;
                    rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
                    tmp2 = point;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                return tmp2;
              }
            }
            let obj2 = { orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize };
            Z.__closure = obj2;
            let num2 = 6182257637516;
            Z.__workletHash = 6182257637516;
            Z.__initData = __initData;
            class J {
              constructor(arg0, arg1) {
                const value = null == arg0 || sharedValue.get();
                if (!value) {
                  let x1;
                  const x = arg0.x;
                  if (arg1 != null) {
                    x1 = arg1.x;
                  }
                  if (x !== x1) {
                    set = sharedValue2.set;
                    const obj = timing;
                    const result = set(obj.withTiming(arg0.x, timingPresets.timingStandard));
                  }
                  let y1;
                  const y = arg0.y;
                  if (arg1 != null) {
                    y1 = arg1.y;
                  }
                  if (y !== y1) {
                    set2 = sharedValue3.set;
                    const obj2 = timing;
                    set2(obj2.withTiming(arg0.y, timingPresets.timingStandard));
                  }
                }
              }
            }
            let obj3 = {
              isThisTileDragging: sharedValue,
              positionX: sharedValue2,
              withTiming: tmp(tmp2[28]).withTiming,
              timingStandard: tmp(tmp2[29]).timingStandard,
              positionY: sharedValue3,
            };
            const useAnimatedReaction = tmpResult13.useAnimatedReaction;
            J.__closure = obj3;
            J.__workletHash = 4011295272705;
            J.__initData = __initData2;
            const animatedReaction = useAnimatedReaction(Z, J);
            if (cResult[3] === badge_id) {
              if (cResult[4] === orderShared) {
                if (cResult[5] === sharedValue2) {
                  if (cResult[6] === sharedValue3) {
                    if (cResult[7] === slotOffset) {
                      let tmp23;
                      if (cResult[8] === tileSize) {
                        tmp23 = cResult[9];
                      }
                      closure_21 = tmp23;
                      function se() {
                        return scrollOffset.get();
                      }
                      let obj4 = { scrollOffset };
                      se.__closure = obj4;
                      se.__workletHash = 10993823060256;
                      se.__initData = __initData4;
                      function ae(arg0, arg1) {
                        const value = null != arg1 && sharedValue.get();
                        if (value) {
                          const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
                          closure_21();
                        }
                      }
                      let obj5 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot: tmp23 };
                      ae.__closure = obj5;
                      ae.__workletHash = 9803143874483;
                      ae.__initData = __initData5;
                      const tmpResult14 = badge(tmp2[27]);
                      const animatedReaction1 = tmpResult14.useAnimatedReaction(se, ae);
                      class Z {
                        constructor() {
                          let result;
                          let rounded;
                          const value = orderShared.get();
                          index = value.indexOf(badge_id);
                          let tmp2 = null;
                          if (index >= 0) {
                            const sum = index + slotOffset;
                            if (typeof getSlotOffset === "function") {
                              const point = {
                                x: result * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                                y: rounded * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                              };
                              result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
                              const _Math = Math;
                              rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
                              tmp2 = point;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          return tmp2;
                        }
                      }
                      function handleStart() {
                        if (!isDragActive.get()) {
                          const obj2 = ReanimatedRexport;
                          obj2.runOnJS(ContextMenuState.hideContextMenu)();
                          const result = isDragActive.set(true);
                          const result1 = sharedValue.set(true);
                          const point = { x: sharedValue2.get(), y: sharedValue3.get() };
                          set = sharedValue4.set;
                          const result2 = set(point);
                          const obj4 = ReanimatedRexport;
                          const measureResult = obj4.measure(scrollRef);
                          let tmp15 = null;
                          set2 = sharedValue1.set;
                          if (null != measureResult) {
                            const obj3 = { pageY: null, height: null };
                            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
                            tmp15 = obj3;
                          }
                          set2(tmp15);
                          set3 = sharedValue5.set;
                          const tmp2Result = timing;
                          set3(tmp2Result.withTiming(c16, timingPresets.timingStandard));
                          const tmp2Result2 = ReanimatedRexport;
                          const runOnJSResult = tmp2Result2.runOnJS(HapticUtils.triggerHapticFeedback);
                          runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
                        }
                      }
                      let obj6 = {
                        isAnyDragActive: isDragActive,
                        isThisTileDragging: sharedValue,
                        runOnJS: tmp(tmp2[27]).runOnJS,
                        hideContextMenu: tmp(tmp2[31]).hideContextMenu,
                        dragOrigin: sharedValue4,
                        positionX: sharedValue2,
                        positionY: sharedValue3,
                        measure: tmp(tmp2[27]).measure,
                        scrollRef,
                        dragViewport: null,
                        scale: sharedValue5,
                        withTiming: tmp(tmp2[28]).withTiming,
                        DRAG_SCALE: sharedValue1,
                        timingStandard: tmp(tmp2[29]).timingStandard,
                        triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback,
                        HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes,
                      };
                      class J {
                        constructor(arg0, arg1) {
                          const value = null == arg0 || sharedValue.get();
                          if (!value) {
                            let x1;
                            const x = arg0.x;
                            if (arg1 != null) {
                              x1 = arg1.x;
                            }
                            if (x !== x1) {
                              set = sharedValue2.set;
                              const obj = timing;
                              const result = set(obj.withTiming(arg0.x, timingPresets.timingStandard));
                            }
                            let y1;
                            const y = arg0.y;
                            if (arg1 != null) {
                              y1 = arg1.y;
                            }
                            if (y !== y1) {
                              set2 = sharedValue3.set;
                              const obj2 = timing;
                              set2(obj2.withTiming(arg0.y, timingPresets.timingStandard));
                            }
                          }
                        }
                      }
                      handleStart.__closure = obj6;
                      handleStart.__workletHash = 11005478611755;
                      handleStart.__initData = __initData6;
                      cResult[10] = sharedValue4;
                      class W {
                        constructor() {
                          const value = orderShared.get();
                          const sum = tileSize + BadgeGrid.BADGE_GRID_GAP;
                          const clamp = ReanimatedRexport.clamp;
                          ReanimatedRexport;
                          const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
                          const clampResult = clamp(rounded, 0, BadgeGrid.BADGE_GRID_COLUMNS - 1);
                          const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
                          const obj2 = ReanimatedRexport;
                          const clampResult1 = obj2.clamp(
                            bound * BadgeGrid.BADGE_GRID_COLUMNS + clampResult - slotOffset,
                            0,
                            value.length - 1,
                          );
                          const obj3 = PendingBadgeSettings;
                          const result = obj3.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
                          if (result !== value) {
                            const result1 = orderShared.set(result);
                            const tmpResult = ReanimatedRexport;
                            const runOnJSResult = tmpResult.runOnJS(HapticUtils.triggerHapticFeedback);
                            runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
                          }
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
                    }
                  }
                }
              }
            }
            class W {
              constructor() {
                const value = orderShared.get();
                const sum = tileSize + BadgeGrid.BADGE_GRID_GAP;
                const clamp = ReanimatedRexport.clamp;
                ReanimatedRexport;
                const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
                const clampResult = clamp(rounded, 0, BadgeGrid.BADGE_GRID_COLUMNS - 1);
                const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
                const obj2 = ReanimatedRexport;
                const clampResult1 = obj2.clamp(
                  bound * BadgeGrid.BADGE_GRID_COLUMNS + clampResult - slotOffset,
                  0,
                  value.length - 1,
                );
                const obj3 = PendingBadgeSettings;
                const result = obj3.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
                if (result !== value) {
                  const result1 = orderShared.set(result);
                  const tmpResult = ReanimatedRexport;
                  const runOnJSResult = tmpResult.runOnJS(HapticUtils.triggerHapticFeedback);
                  runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
                }
              }
            }
            W.__closure = {
              orderShared,
              tileSize,
              BADGE_GRID_GAP: badge(tmp2[13]).BADGE_GRID_GAP,
              clamp: badge(tmp2[27]).clamp,
              positionX: sharedValue2,
              BADGE_GRID_COLUMNS: badge(tmp2[13]).BADGE_GRID_COLUMNS,
              positionY: sharedValue3,
              slotOffset,
              moveBadgeInDisplayOrder: badge(tmp2[30]).moveBadgeInDisplayOrder,
              badgeId: badge_id,
              runOnJS: badge(tmp2[27]).runOnJS,
              triggerHapticFeedback: badge(tmp2[11]).triggerHapticFeedback,
              HapticFeedbackTypes: badge(tmp2[11]).HapticFeedbackTypes,
            };
            W.__workletHash = 1083237242858;
            W.__initData = __initData3;
            cResult[3] = badge_id;
            cResult[4] = orderShared;
            cResult[5] = sharedValue2;
            cResult[6] = sharedValue3;
            cResult[7] = slotOffset;
            cResult[8] = tileSize;
            cResult[9] = W;
            tmp23 = W;
            const obj7 = {
              orderShared,
              tileSize,
              BADGE_GRID_GAP: badge(tmp2[13]).BADGE_GRID_GAP,
              clamp: badge(tmp2[27]).clamp,
              positionX: sharedValue2,
              BADGE_GRID_COLUMNS: badge(tmp2[13]).BADGE_GRID_COLUMNS,
              positionY: sharedValue3,
              slotOffset,
              moveBadgeInDisplayOrder: badge(tmp2[30]).moveBadgeInDisplayOrder,
              badgeId: badge_id,
              runOnJS: badge(tmp2[27]).runOnJS,
              triggerHapticFeedback: badge(tmp2[11]).triggerHapticFeedback,
              HapticFeedbackTypes: badge(tmp2[11]).HapticFeedbackTypes,
            };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        let fn = function n() {
          onPress(badge);
        };
        cResult[0] = badge;
        cResult[1] = onPress;
        cResult[2] = fn;
        tmp5 = fn;
      }
    : (badge) => {
        let intl;
        let intl2;
        let isFirst;
        let isLast;
        let onSetHidden;
        let result;
        let rounded;
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
        let closure_22;
        closure_23 = undefined;
        closure_24 = undefined;
        let items3;
        ({ isFirst, isLast, onSetHidden } = badge);
        const position = reslot();
        const badge_id = badge.badge_id;
        let closure_14 = index(tileSize[26])(() => {
          onPress(badge);
        });
        let tmp2 = badge;
        let obj = badge(tileSize[27]);
        const sharedValue = obj.useSharedValue(false);
        let obj2 = badge(tileSize[27]);
        const sharedValue1 = obj2.useSharedValue(null);
        if (typeof closure_22 === "function") {
          let renderTileResult;
          let point = {
            x: result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP),
            y: rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP),
          };
          result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
          let _Math = Math;
          rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
          let tmp2Result = tmp2(tmp[27]);
          sharedValue2 = tmp2Result.useSharedValue(point.x);
          const tmp2Result7 = tmp2(tileSize[27]);
          sharedValue3 = tmp2Result7.useSharedValue(point.y);
          const tmp2Result8 = tmp2(tileSize[27]);
          sharedValue4 = tmp2Result8.useSharedValue(point);
          let num = 1;
          const tmp2Result9 = tmp2(tileSize[27]);
          sharedValue5 = tmp2Result9.useSharedValue(1);
          const tmp2Result10 = tmp2(tileSize[27]);
          class R {
            constructor() {
              let result;
              let rounded;
              const value = orderShared.get();
              index = value.indexOf(badge_id);
              let tmp2 = null;
              if (index >= 0) {
                const sum = index + slotOffset;
                if (typeof getSlotOffset === "function") {
                  const point = {
                    x: result * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                    y: rounded * (tileSize + BadgeGrid.BADGE_GRID_GAP),
                  };
                  result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
                  const _Math = Math;
                  rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
                  tmp2 = point;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return tmp2;
            }
          }
          let obj3 = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
          R.__closure = obj3;
          let num2 = 5732066311771;
          R.__workletHash = 5732066311771;
          R.__initData = __initData7;
          let fn = function v(arg0, arg1) {
            const value = null == arg0 || sharedValue.get();
            if (!value) {
              let x1;
              const x = arg0.x;
              if (arg1 != null) {
                x1 = arg1.x;
              }
              if (x !== x1) {
                set = sharedValue2.set;
                const obj = timing;
                const result = set(obj.withTiming(arg0.x, timingPresets.timingStandard));
              }
              let y1;
              const y = arg0.y;
              if (arg1 != null) {
                y1 = arg1.y;
              }
              if (y !== y1) {
                set2 = sharedValue3.set;
                const obj2 = timing;
                set2(obj2.withTiming(arg0.y, timingPresets.timingStandard));
              }
            }
          };
          let obj4 = {
            isThisTileDragging: sharedValue,
            positionX: sharedValue2,
            withTiming: tmp2(tmp[28]).withTiming,
            timingStandard: tmp2(tmp[29]).timingStandard,
            positionY: sharedValue3,
          };
          const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
          fn.__closure = obj4;
          fn.__workletHash = 16081465994486;
          fn.__initData = __initData8;
          const animatedReaction = useAnimatedReaction(R, fn);
          class Y {
            constructor() {
              const value = orderShared.get();
              const sum = tileSize + BadgeGrid.BADGE_GRID_GAP;
              const clamp = ReanimatedRexport.clamp;
              ReanimatedRexport;
              const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
              const clampResult = clamp(rounded, 0, BadgeGrid.BADGE_GRID_COLUMNS - 1);
              const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
              const obj2 = ReanimatedRexport;
              const clampResult1 = obj2.clamp(
                bound * BadgeGrid.BADGE_GRID_COLUMNS + clampResult - slotOffset,
                0,
                value.length - 1,
              );
              const obj3 = PendingBadgeSettings;
              const result = obj3.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
              if (result !== value) {
                const result1 = orderShared.set(result);
                const tmpResult = ReanimatedRexport;
                const runOnJSResult = tmpResult.runOnJS(HapticUtils.triggerHapticFeedback);
                runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
              }
            }
          }
          let obj5 = {
            orderShared,
            tileSize,
            BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP,
            clamp: tmp2(tmp[27]).clamp,
            positionX: sharedValue2,
            BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS,
            positionY: sharedValue3,
            slotOffset,
            moveBadgeInDisplayOrder: tmp2(tmp[30]).moveBadgeInDisplayOrder,
            badgeId: badge_id,
            runOnJS: tmp2(tmp[27]).runOnJS,
            triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback,
            HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes,
          };
          const useCallback = slotOffset.useCallback;
          Y.__closure = obj5;
          Y.__workletHash = 1742164926393;
          Y.__initData = __initData9;
          let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
          reslot = useCallback(Y, items);
          const tmp2Result11 = tmp2(tileSize[27]);
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
              const value = null != arg1 && sharedValue.get();
              if (value) {
                const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
                callback();
              }
            }
          }
          const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
          X.__closure = obj7;
          X.__workletHash = 959241592972;
          X.__initData = __initData11;
          const animatedReaction1 = tmp2Result11.useAnimatedReaction(U, X);
          let items1 = [
            reslot,
            scrollRef,
            sharedValue1,
            autoScrollSpeed,
            badge_id,
            tileSize,
            slotOffset,
            orderShared,
            isDragActive,
            onCommitOrder,
            sharedValue,
            sharedValue5,
            sharedValue2,
            sharedValue3,
            sharedValue4,
          ];
          closure_22 = slotOffset.useMemo(() => {
            function handleStart() {
              if (!isDragActive.get()) {
                const obj2 = badge(tileSize[27]);
                obj2.runOnJS(badge(tileSize[31]).hideContextMenu)();
                const result = isDragActive.set(true);
                const result1 = sharedValue.set(true);
                const point = { x: sharedValue2.get(), y: sharedValue3.get() };
                const result2 = set(point);
                const obj4 = badge(tileSize[27]);
                const measureResult = obj4.measure(scrollRef);
                let tmp15 = null;
                set2 = set.set.set;
                if (null != measureResult) {
                  const obj3 = { pageY: null, height: null };
                  ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
                  tmp15 = obj3;
                }
                set2(tmp15);
                set3 = sharedValue5.set;
                const tmp2Result = badge(tileSize[28]);
                set3(tmp2Result.withTiming(sharedValue1, badge(tileSize[29]).timingStandard));
                const tmp2Result2 = badge(tileSize[27]);
                const runOnJSResult = tmp2Result2.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
                runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START);
              }
            }
            let obj = {
              isAnyDragActive: isDragActive,
              isThisTileDragging: sharedValue,
              runOnJS: badge(tileSize[27]).runOnJS,
              hideContextMenu: badge(tileSize[31]).hideContextMenu,
              dragOrigin: sharedValue4,
              positionX: sharedValue2,
              positionY: sharedValue3,
              measure: badge(tileSize[27]).measure,
              scrollRef,
              dragViewport: sharedValue1,
              scale: sharedValue5,
              withTiming: badge(tileSize[28]).withTiming,
              DRAG_SCALE: sharedValue1,
              timingStandard: badge(tileSize[29]).timingStandard,
              triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
              HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
            };
            handleStart.__closure = obj;
            handleStart.__workletHash = 11781614290100;
            handleStart.__initData = __initData;
            function handleChange(changeX) {
              if (sharedValue.get()) {
                const result = closure_1_17.set(closure_1_17.get() + changeX.changeX);
                const result1 = sharedValue3.set(sharedValue3.get() + changeX.changeY);
                reslot();
                const value = sharedValue1.get();
                if (null != value) {
                  const diff = changeX.absoluteY - value.pageY;
                  const diff1 = value.pageY + value.height - changeX.absoluteY;
                  if (diff < sharedValue2) {
                    set2 = autoScrollSpeed.set;
                    const obj2 = badge(tileSize[27]);
                    set2(obj2.clamp(diff, 0, sharedValue2) / sharedValue2 - 1);
                  } else if (diff1 < sharedValue2) {
                    set = autoScrollSpeed.set;
                    const obj = badge(tileSize[27]);
                    const result2 = set(1 - obj.clamp(diff1, 0, sharedValue2) / sharedValue2);
                  } else {
                    const result3 = autoScrollSpeed.set(0);
                  }
                }
              }
            }
            let obj2 = {
              isThisTileDragging: sharedValue,
              positionX: sharedValue2,
              positionY: sharedValue3,
              reslot,
              dragViewport: sharedValue1,
              AUTO_SCROLL_EDGE_SIZE: sharedValue2,
              autoScrollSpeed,
              clamp: badge(tileSize[27]).clamp,
            };
            handleChange.__closure = obj2;
            handleChange.__workletHash = 879322197993;
            handleChange.__initData = __initData2;
            function handleFinalize() {
              if (sharedValue.get()) {
                const result = autoScrollSpeed.set(0);
                const result1 = sharedValue1.set(null);
                const value = orderShared.get();
                index = value.indexOf(badge_id);
                if (index >= 0) {
                  const sum = index + slotOffset;
                  if (typeof closure_22 === "function") {
                    const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
                    const _Math = Math;
                    const result3 = result2 * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
                    const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
                    const result4 = rounded * (handleFinalize + badge(tileSize[13]).BADGE_GRID_GAP);
                    set = sharedValue2.set;
                    const obj2 = badge(tileSize[28]);
                    const result5 = set(obj2.withTiming(result3, badge(tileSize[29]).timingStandard));
                    set2 = sharedValue3.set;
                    const obj3 = badge(tileSize[28]);
                    set2(obj3.withTiming(result4, badge(tileSize[29]).timingStandard));
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                set3 = sharedValue5.set;
                const obj4 = badge(tileSize[28]);
                set3(obj4.withTiming(1, badge(tileSize[29]).timingStandard));
                const result6 = sharedValue.set(false);
                const result7 = isDragActive.set(false);
                const obj5 = badge(tileSize[27]);
                const runOnJSResult = obj5.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
                runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END);
                const obj6 = badge(tileSize[27]);
                obj6.runOnJS(onCommitOrder)(value);
              }
            }
            let obj3 = {
              isThisTileDragging: sharedValue,
              autoScrollSpeed,
              dragViewport: sharedValue1,
              orderShared,
              badgeId: badge_id,
              getSlotOffset,
              slotOffset,
              tileSize: handleFinalize,
              positionX: sharedValue2,
              withTiming: badge(tileSize[28]).withTiming,
              timingStandard: badge(tileSize[29]).timingStandard,
              positionY: sharedValue3,
              scale: sharedValue5,
              isAnyDragActive: isDragActive,
              runOnJS: badge(tileSize[27]).runOnJS,
              triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback,
              HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes,
              onCommitOrder,
            };
            handleFinalize.__closure = obj3;
            handleFinalize.__workletHash = 4416604805365;
            handleFinalize.__initData = __initData3;
            const Gesture = badge(tileSize[32]).Gesture;
            const fn = function s() {
              handleStart();
            };
            fn.__closure = { handleStart };
            fn.__workletHash = 12078596428673;
            fn.__initData = __initData6;
            const PanResult = Gesture.Pan();
            const fn2 = function n(arg0) {
              handleChange(arg0);
            };
            fn2.__closure = { handleChange };
            fn2.__workletHash = 9495907638982;
            fn2.__initData = __initData5;
            const minDistanceResult = PanResult.minDistance(8);
            const fn3 = function t() {
              handleFinalize();
            };
            fn3.__closure = { handleFinalize };
            fn3.__workletHash = 12861679152071;
            fn3.__initData = __initData4;
            const onStartResult = minDistanceResult.onStart(fn);
            const onChangeResult = onStartResult.onChange(fn2);
            return onChangeResult.onFinalize(fn3);
          }, items1);
          function ae() {
            let items1;
            let x;
            let y;
            const value = sharedValue.get();
            const point = sharedValue4.get();
            let num = 0;
            if (value) {
              num = 10;
            }
            const rect = { zIndex: num, left: x, top: y, transform: items1 };
            if (value) {
              x = point.x;
            } else {
              x = sharedValue2.get();
            }
            if (value) {
              y = point.y;
            } else {
              y = sharedValue3.get();
            }
            if (value) {
              const items = [{ translateX: sharedValue2.get() - point.x }, ,];
              const obj = { translateX: sharedValue2.get() - point.x };
              items[1] = { translateY: sharedValue3.get() - point.y };
              const obj2 = { translateY: sharedValue3.get() - point.y };
              items[2] = { scale: sharedValue5.get() };
              items1 = items;
              const obj3 = { scale: sharedValue5.get() };
            } else {
              items1 = [{ scale: sharedValue5.get() }];
              const obj4 = { scale: sharedValue5.get() };
            }
            return rect;
          }
          const obj8 = {
            isThisTileDragging: sharedValue,
            dragOrigin: sharedValue4,
            positionX: sharedValue2,
            positionY: sharedValue3,
            scale: sharedValue5,
          };
          ae.__closure = obj8;
          ae.__workletHash = 10858650842867;
          ae.__initData = __initData12;
          const tmp2Result12 = tmp2(tileSize[27]);
          closure_23 = tmp2Result12.useAnimatedStyle(ae);
          const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
          closure_24 = slotOffset.useCallback((nativeEvent) => {
            const actionName = nativeEvent.nativeEvent.actionName;
            if ("moveup" === actionName) {
              const value = orderShared.get();
              index = value.indexOf(badge_id);
              let num2 = 1;
              const clamp = ReanimatedRexport.clamp;
              ReanimatedRexport;
              if ("moveup" === actionName) {
                num2 = -1;
              }
              const clampResult = clamp(index + num2, 0, value.length - 1);
              const tmp4Result = PendingBadgeSettings;
              const result = tmp4Result.moveBadgeInDisplayOrder(value, index, clampResult);
              if (result !== value) {
                const result1 = orderShared.set(result);
                onCommitOrder(result);
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = intl7.intl;
                const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
                announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
              }
            }
          }, items2);
          items3 = [];
          if (!isFirst) {
            const push = items3.push;
            const obj9 = { name: "moveup", label: intl.string(tmp2(tileSize[16]).t.eR2XSh) };
            intl = tmp2(tmp[16]).intl;
            push(obj9);
          }
          if (!isLast) {
            const push2 = items3.push;
            const obj10 = { name: "movedown", label: intl2.string(tmp2(tileSize[16]).t.wWi0DL) };
            intl2 = tmp2(tmp[16]).intl;
            push2(obj10);
          }
          function renderTile(ref) {
            let PressableScale;
            let View;
            let fn;
            let formatToPlainString;
            let hidden;
            let items;
            let items1;
            let obj2;
            let obj3;
            let obj4;
            let t;
            badge = ref;
            let obj = { gesture, children: closure_14(View, obj2) };
            const GestureDetector = badge(tileSize[32]).GestureDetector;
            obj2 = { style: items, children: closure_14(PressableScale, obj3) };
            items = [position.position, ,];
            size = { width: tileSize, height: tileSize };
            items[1] = size;
            items[2] = closure_23;
            View = index(tileSize[27]).View;
            ref = undefined;
            PressableScale = badge(tileSize[25]).PressableScale;
            if (ref != null) {
              ref = ref.ref;
            }
            obj3 = {
              ref,
              accessible: true,
              accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj4),
              accessibilityActions: items1,
              onAccessibilityAction(nativeEvent) {
                const actionName = nativeEvent.nativeEvent.actionName;
                if ("moveup" !== actionName) {
                  if ("movedown" !== actionName) {
                    if (ref != null) {
                      const onAccessibilityAction = ref.onAccessibilityAction;
                      if (onAccessibilityAction != null) {
                        const result = onAccessibilityAction(nativeEvent);
                      }
                    }
                  }
                }
                closure_24(nativeEvent);
              },
              onPress,
              onLongPress: fn,
              delayLongPress: badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS,
              style: position.fill,
              children: closure_14(closure_23, { badge, alwaysVisible }),
            };
            const intl = tmp2(tileSize[16]).intl;
            formatToPlainString = intl.formatToPlainString;
            hidden = badge.hidden;
            t = tmp2(tileSize[16]).t;
            let stringResult;
            obj4 = { badgeName: badge.name, position: index + 1 };
            if (alwaysVisible) {
              const intl2 = tmp2(tileSize[16]).intl;
              const string = intl2.string;
              const tmp2Result = badge(tileSize[24]);
              stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp9));
            }
            const obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
            const merged = Object.assign(obj5);
            let accessibilityActions;
            if (ref != null) {
              accessibilityActions = ref.accessibilityActions;
            }
            if (accessibilityActions == null) {
              accessibilityActions = [];
            }
            items1 = [...items3];
            if (alwaysVisible) {
              onPress = closure_14;
            } else if (ref != null) {
              onPress = ref.onPress;
            }
            fn = undefined;
            if (null != ref) {
              fn = (arg0) => {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                const onLongPress = ref.onLongPress;
                if (onLongPress != null) {
                  onLongPress(arg0);
                }
              };
            }
            return closure_14(GestureDetector, obj);
          }
          if (alwaysVisible) {
            renderTileResult = renderTile(null);
          } else {
            const obj11 = { badge, index, onSetHidden, children: renderTile };
            renderTileResult = closure_14(sharedValue5, obj11);
          }
          return renderTileResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
);
const __initData13 = {
  code: "function CustomizeBadgesSheetTsx26({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}",
};
const __initData14 = {
  code: "function CustomizeBadgesSheetTsx27(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}",
};
const __initData15 = {
  code: "function CustomizeBadgesSheetTsx28(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}",
};
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  let BottomSheetTitleHeader;
  let Text;
  let Text2;
  let closure_18;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items16;
  let items17;
  let items18;
  let obj13;
  let obj16;
  let obj17;
  let obj9;
  let string;
  let t;
  let tmp35Result;
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
  set = undefined;
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
  let tmp2 = stateFromStores;
  let obj = stateFromStores(stateFromStores1[34]);
  const tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[35])().bottom, reorderableBadges) + 4;
  let obj2 = tenureBadgeHideable(stateFromStores1[36]);
  const items = [hasCatalog];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = hasCatalog.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(stateFromStores1[36]);
  const items1 = [hasCatalog];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const obj = stateFromStores(stateFromStores1[37]);
    return obj.canUsePremiumProfileCustomization(hasCatalog.getCurrentUser());
  });
  const tmp8 = stateFromStores(stateFromStores1[38]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp8(analyticsLocations1, tmp2(tmp3[39]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[40]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj3;
    if (context != null) {
      context.close();
    }
    const obj2 = {
      analyticsLocation: obj3,
      analyticsLocations,
      premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
    };
    obj3 = { page: set.USER_SETTINGS, section: unpackModuleId.USER_PROFILE, object: memo.BUTTON_CTA };
    const tmp2 = openPremiumModalDefault;
    tmp2(obj2);
  }, items2);
  const items3 = [pendingBadgeDisplayOrder];
  const items4 = [stateFromStores];
  const tmp5Result = tenureBadgeHideable(stateFromStores1[36]);
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(
    items3,
    () => BadgeDirectoryStore.getBadges(stateFromStores),
    items4,
  );
  const items5 = [pendingBadgeDisplayOrder];
  const items6 = [stateFromStores];
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[36]);
  const stateFromStoresObject = tmp5Result12.useStateFromStoresObject(
    items5,
    () => {
      const hasCatalogForResult = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(stateFromStores);
      const obj = {
        hasCatalog: hasCatalogForResult,
        hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores),
      };
      return obj;
    },
    items6,
  );
  hasCatalog = stateFromStoresObject.hasCatalog;
  const hasCatalogError = stateFromStoresObject.hasCatalogError;
  const effect = analyticsLocations.useEffect(() => {
    const obj = UserProfileAnalyticsUtils;
    const obj2 = { action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations };
    const result = obj.trackUserProfileAction(obj2);
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = analyticsLocations.useEffect(() => {
    let obj3;
    const tmp = !stateFromStores1 && hasCatalog;
    if (tmp) {
      const obj2 = {
        type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL,
        location: obj3,
        location_stack: analyticsLocations,
      };
      obj3 = { page: set.USER_SETTINGS, section: unpackModuleId.USER_PROFILE };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      const tmp2 =
        BadgeDirectoryStore.hasCatalogFor(stateFromStores) && !BadgeDirectoryStore.isCatalogStaleFor(stateFromStores);
      if (!tmp2) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items8);
  const items9 = [stateFromStoresArray];
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[36]);
  const stateFromStoresObject1 = tmp5Result13.useStateFromStoresObject(items9, () => {
    const pendingChanges = stateFromStoresArray.getPendingChanges();
    return {
      pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder,
      pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges,
    };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj2);
  }, items10);
  const items11 = [tenureBadgeHideable];
  set = analyticsLocations.useMemo(() => {
    const obj = BadgeUtils;
    const obj2 = { tenureBadgeHideable };
    return obj.getUnhideableBadgeIds(obj2);
  }, items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => {
    const obj = BadgeUtils;
    return obj.groupCustomizableBadges(memo);
  }, items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue = tmp5Result14.useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[26])((arr) => {
    const obj = tenureBadgeHideable(stateFromStores1[30]);
    const result = obj.setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue1 = tmp5Result15.useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  MS_PER_FRAME_60FPS = tmp2(tmp3[26])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = {
      badgeId: badgeId.badge_id,
      hidden: false,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder: stateFromStores1,
    };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    const obj3 = { badgeName: badgeId.name };
    announce(intl.formatToPlainString(intl7.t.mehuPg, obj3));
  });
  onPress = tmp2(tmp3[26])((badge_id) => {
    let obj2;
    let string;
    let closure_0 = badge_id;
    if (hiddenBadges.some((badge_id) => badge_id.badge_id === badge_id.badge_id)) {
      closure_18(badge_id);
    } else if (set.has(badge_id.badge_id)) {
      const _HermesInternal = HermesInternal;
      const obj = {
        key: "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id,
        content: string(obj2.getAlwaysVisibleCopy(badge_id.badge_id)),
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      const intl = intl7.intl;
      string = intl.string;
      obj2 = BadgeUtils;
      open(obj);
    }
  });
  closure_20 = tmp2(tmp3[26])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = {
      badgeId: badgeId.badge_id,
      hidden: true,
      reorderableBadgeIds: memo2,
      hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id),
      canReorder: stateFromStores1,
    };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.formatToPlainString(intl7.t.q3t0Ht, { count: 1 }));
  });
  onSetHidden = tmp2(tmp3[26])((arg0, arg1) => {
    const tmp = arg1;
    if (tmp) {
      closure_20(arg0);
    } else {
      closure_18(arg0);
    }
  });
  const width = tmp2(tmp3[47])().width;
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[13]);
  badgeTileSize = tmp5Result16.getBadgeTileSize(width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  const obj4 = analyticsLocations;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[27]);
  animatedRef = tmp5Result17.useAnimatedRef();
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[27]);
  scrollViewOffset = tmp5Result18.useScrollViewOffset(animatedRef);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue2 = tmp5Result19.useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[27]);
  sharedValue3 = tmp5Result20.useSharedValue(0);
  const fn = function q(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    const value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          const value2 = sharedValue3.get();
          if (value2 >= c18) {
            const result1 = sharedValue3.set(0);
            const _Math = Math;
            const scrollTo = ReanimatedRexport.scrollTo;
            const tmp13 = roundToNearestPixelDefault;
            scrollTo(animatedRef, 0, max(tmp13(scrollViewOffset.get() + (700 * value * value2) / 1000), 0), false);
          }
        }
      }
    }
  };
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[27]);
  fn.__closure = {
    autoScrollSpeed: sharedValue2,
    autoScrollElapsed: sharedValue3,
    MS_PER_FRAME_60FPS,
    AUTO_SCROLL_PIXELS_PER_SECOND: 700,
    scrollTo: tenureBadgeHideable(stateFromStores1[27]).scrollTo,
    scrollRef: animatedRef,
    roundToNearestPixel: tmp2(stateFromStores1[48]),
    scrollOffset: scrollViewOffset,
  };
  fn.__workletHash = 8686394877996;
  fn.__initData = __initData13;
  ({
    autoScrollSpeed: sharedValue2,
    autoScrollElapsed: sharedValue3,
    MS_PER_FRAME_60FPS,
    AUTO_SCROLL_PIXELS_PER_SECOND: 700,
    scrollTo: tenureBadgeHideable(stateFromStores1[27]).scrollTo,
    scrollRef: animatedRef,
    roundToNearestPixel: tmp2(stateFromStores1[48]),
    scrollOffset: scrollViewOffset,
  });
  frameCallback = tmp5Result21.useFrameCallback(fn, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const fn2 = function $() {
    return 0 !== sharedValue2.get();
  };
  fn2.__closure = { autoScrollSpeed: sharedValue2 };
  fn2.__workletHash = 9672319834497;
  fn2.__initData = __initData14;
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[27]);
  class K {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        const result = sharedValue3.set(0);
        const obj = ReanimatedRexport;
        obj.runOnJS(callback1)(arg0);
      }
    }
  }
  K.__closure = {
    autoScrollElapsed: sharedValue3,
    runOnJS: tenureBadgeHideable(stateFromStores1[27]).runOnJS,
    setAutoScrollerActive: callback1,
  };
  K.__workletHash = 6850974884902;
  K.__initData = __initData15;
  ({
    autoScrollElapsed: sharedValue3,
    runOnJS: tenureBadgeHideable(stateFromStores1[27]).runOnJS,
    setAutoScrollerActive: callback1,
  });
  const animatedReaction = tmp5Result22.useAnimatedReaction(fn2, K);
  if (hasCatalog) {
    let tmp40 = !stateFromStores1;
    const obj7 = { style: tmp.gridInset, children: items16 };
    if (tmp40) {
      const obj8 = {
        style: tmp.upsell,
        ctaText: intl2.string(tenureBadgeHideable(stateFromStores1[16]).t.pj0XBN),
        cardStyle: null,
        contentStyle: null,
        ctaStyle: null,
        showLinearGradient: true,
        onPress: callback,
        children: memo2(Text2, obj9),
      };
      const tmp2Result = tmp2(stateFromStores1[49]);
      intl2 = tmp5(tmp3[16]).intl;
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj9 = {
        variant: "text-sm/normal",
        style: tmp.upsellText,
        children: intl3.string(tenureBadgeHideable(stateFromStores1[16]).t.JrOki0),
      };
      Text2 = tmp5(tmp3[22]).Text;
      intl3 = tmp5(tmp3[16]).intl;
      tmp40 = memo2(tmp2Result, obj8);
    }
    items16 = [tmp40];
    const obj10 = { accessibilityRole: "list", style: items17, children: items18 };
    items17 = [tmp.grid];
    const obj11 = { height: num };
    items17[1] = obj11;
    items18 = [
      fixedBadges.map((badge, index) => {
        const obj = { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress };
        return authStore2(closure_24, obj, badge.badge_id);
      }),
      reorderableBadges.map((badge, index) => {
        let tmpResult;
        if (stateFromStores1) {
          const obj2 = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            slotOffset: fixedBadges.length,
            isFirst: 0 === index,
            isLast: index === reorderableBadges.length - 1,
            alwaysVisible: set.has(badge.badge_id),
            orderShared: sharedValue,
            isDragActive: sharedValue1,
            scrollRef: animatedRef,
            scrollOffset: scrollViewOffset,
            autoScrollSpeed: sharedValue2,
            onCommitOrder,
            onSetHidden,
            onPress,
          };
          tmpResult = authStore2(closure_49, obj2, badge.badge_id);
        } else {
          const obj = {
            badge,
            index: fixedBadges.length + index,
            tileSize: badgeTileSize,
            alwaysVisible: set.has(badge.badge_id),
            onPress,
            onSetHidden,
          };
          tmpResult = authStore2(closure_24, obj, badge.badge_id);
        }
        return tmpResult;
      }),
      hiddenBadges.map((badge, index) => {
        const obj = {
          badge,
          index: fixedBadges.length + reorderableBadges.length + index,
          tileSize: badgeTileSize,
          alwaysVisible: set.has(badge.badge_id),
          onPress,
          onSetHidden,
        };
        return authStore2(closure_24, obj, badge.badge_id);
      }),
    ];
    items16[1] = sharedValue(context, obj10);
    tmp35Result = tmp38(tmp39, obj7);
  } else {
    let obj14;
    const tmp36 = context;
    if (hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: memo2(Text, obj13) };
      obj13 = {
        variant: "text-md/normal",
        color: "text-muted",
        style: tmp.messageText,
        children: intl.string(tenureBadgeHideable(stateFromStores1[16]).t["rTU7/z"]),
      };
      Text = tmp5(tmp3[22]).Text;
      intl = tmp5(tmp3[16]).intl;
      obj14 = obj12;
    } else {
      obj14 = {
        style: tmp.message,
        children: memo2(tmp5(tmp3[50]).ActivityIndicator, { animating: true, size: "large" }),
      };
    }
    tmp35Result = tmp35(tmp36, obj14);
  }
  const obj15 = {
    startExpanded: true,
    scrollable: true,
    dismissAccessibilityLabel: intl4.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU),
    header: memo2(BottomSheetTitleHeader, obj16),
    children: memo2(tenureBadgeHideable(stateFromStores1[53]).BottomSheetScrollView, obj17),
  };
  BottomSheet = tmp5(tmp3[51]).BottomSheet;
  intl4 = tmp5(tmp3[16]).intl;
  obj16 = {
    title: intl5.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU),
    subtitle: string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp),
  };
  BottomSheetTitleHeader = tmp5(tmp3[52]).BottomSheetTitleHeader;
  intl5 = tmp5(tmp3[16]).intl;
  const intl6 = tmp5(tmp3[16]).intl;
  string = intl6.string;
  t = tmp5(tmp3[16]).t;
  obj17 = { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp35Result };
  return memo2(BottomSheet, obj15);
}
