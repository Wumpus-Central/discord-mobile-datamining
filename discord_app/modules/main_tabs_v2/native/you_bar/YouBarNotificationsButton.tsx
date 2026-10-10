// === Module 16830: YouBarNotificationsButton ===

// Module 16830 (YouBarNotificationsButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import BellIcon from "BellIcon" /* 8772 */;
import useNotificationsTabBadgeDefault from "useNotificationsTabBadge" /* 16831 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;

const ReanimatedRexportDefault = tmp5(4850);
require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15350);
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: closure_7, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION } };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const __initData2 = { code: "function YouBarNotificationsButtonTsx2(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarNotificationsButton(hasNameplate) {
  const cResult = c.c(32);
  hasNameplate = hasNameplate.hasNameplate;
  const tmp4 = closure_10();
  value = useNotificationsTabBadgeDefault().value;
  const require = value;
  const fn = function s() {
    let num = 0;
    if (value > 0) {
      num = 1;
    }
    const obj2 = { transform: null, marginLeft: null, opacity: null };
    const items = [{ scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) }];
    obj2.transform = items;
    const obj3 = { scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) };
    let num2 = 0;
    if (value > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    obj2.marginLeft = spring.withSpring(num2, YOU_BAR_SPRING_CONFIG);
    const tmpResult = spring;
    let num3 = 0;
    if (value > 0) {
      num3 = 1;
    }
    obj2.opacity = spring.withSpring(num3, YOU_BAR_SPRING_CONFIG);
    return obj2;
  };
  let obj2 = ReanimatedRexport;
  fn.__closure = { withSpring: spring.withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: nativeDefault };
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SavedMessagesStore];
    const fn2 = function _() {
      return overdueMessageReminderCount.getOverdueMessageReminderCount();
    };
    cResult[0] = items;
    cResult[1] = fn2;
    tmp7 = items;
    tmp8 = fn2;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj3 = { withSpring: spring.withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: nativeDefault };
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const result = value(5057).triggerHapticFeedback(value(5057).HapticFeedbackTypes.SOFT);
      const obj = value(5057);
      value(12643).showForLaterModal(value(9681).SavedMessageSortTypes.BOOKMARK);
    };
    cResult[2] = fn3;
    let tmp12 = fn3;
  } else {
    tmp12 = cResult[2];
  }
  importDefault = tmp12;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { name: "open-bookmarks", label: null };
    const intl = tmp(1126).intl;
    obj4.label = intl.string(tmp(1126).t["2pAkDA"]);
    const items1 = [obj4];
    cResult[3] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w(nativeEvent) {
      if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
        closure_1();
      }
    };
    cResult[4] = fn4;
    let tmp14 = fn4;
  } else {
    tmp14 = cResult[4];
  }
  let str;
  if (hasNameplate) {
    str = "white";
  }
  if (cResult[5] === tmp4.icon) {
    if (cResult[6] === str) {
      let tmp15 = cResult[7];
    }
    if (cResult[8] !== value) {
      const intl2 = tmp(1126).intl;
      const obj5 = { count: value };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.kedGua, obj5);
      cResult[8] = value;
      cResult[9] = formatToPlainStringResult;
      let tmp17 = formatToPlainStringResult;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp17) {
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === tmp11) {
          let tmp19 = cResult[13];
        }
        let str4 = "secondary-overlay";
        if (!hasNameplate) {
          let str5 = "tertiary";
          if (value > 0) {
            str5 = "secondary";
          }
          str4 = str5;
        }
        if (cResult[14] === tmp15) {
          if (cResult[15] === tmp11) {
            if (cResult[16] === tmp4.overdueReminderDot) {
              let tmp21 = cResult[17];
            }
            if (cResult[18] !== value) {
              const obj6 = { value };
              const tmp26 = closure_8(tmp(1200).Badge, obj6);
              cResult[18] = value;
              cResult[19] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[19];
            }
            if (cResult[20] === animatedStyle) {
              if (cResult[21] === tmp24) {
                let tmp27 = cResult[22];
              }
              if (cResult[23] === tmp4.iconContainer) {
                if (cResult[24] === tmp21) {
                  if (cResult[25] === tmp27) {
                    let tmp30 = cResult[26];
                  }
                  const _Symbol = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    class H {
                      constructor() {
                        obj = value(closure_1_2[20]);
                        rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          str = "notifications";
                          navigateResult = rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                        return;
                      }
                    }
                    cResult[27] = H;
                  } else {
                    class H {
                      constructor() {
                        obj = value(closure_1_2[20]);
                        rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          str = "notifications";
                          navigateResult = rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                        return;
                      }
                    }
                  }
                  if (cResult[28] === tmp19) {
                    class H {
                      constructor() {
                        obj = value(closure_1_2[20]);
                        rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          str = "notifications";
                          navigateResult = rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                        return;
                      }
                    }
                  }
                  const obj7 = { children: null };
                  const obj9 = { accessibilityLabel: tmp19, accessibilityActions: tmp13, onAccessibilityAction: tmp14, variant: str4, size: "sm", icon: tmp30, onPress: H, onLongPress: tmp12, hitSlop };
                  obj7.children = closure_8(tmp(7573).IconButton, obj9);
                  const tmp38 = closure_8(tmp(16829).YouBarButtonContainer, obj7);
                  cResult[28] = tmp19;
                  cResult[29] = str4;
                  cResult[30] = tmp30;
                  cResult[31] = tmp38;
                }
              }
              const obj10 = { style: tmp4.iconContainer, children: null };
              const items2 = [tmp21, tmp27];
              obj10.children = items2;
              const tmp33 = closure_9(View, obj10);
              cResult[23] = tmp4.iconContainer;
              cResult[24] = tmp21;
              cResult[25] = tmp27;
              cResult[26] = tmp33;
              tmp30 = tmp33;
            }
            const obj11 = { style: animatedStyle, children: tmp24 };
            const tmp29 = closure_8(ReanimatedRexportDefault.View, obj11);
            cResult[20] = animatedStyle;
            cResult[21] = tmp24;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
        }
        const obj12 = { icon: tmp15, hasBadge: tmp11, badgeStyle: tmp4.overdueReminderDot };
        const tmp23 = closure_8(tmp(16829).YouBarButtonIcon, obj12);
        cResult[14] = tmp15;
        cResult[15] = tmp11;
        cResult[16] = tmp4.overdueReminderDot;
        cResult[17] = tmp23;
        tmp21 = tmp23;
      }
    }
    let combined = tmp17;
    if (tmp11) {
      class H {
        constructor() {
          obj = value(closure_1_2[20]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            str = "notifications";
            navigateResult = rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
          }
          return;
        }
      }
      const obj13 = { count: stateFromStores };
      const _HermesInternal = HermesInternal;
      combined = "" + tmp17 + ", " + obj8.formatToPlainString(tmp(1126).t.yBmFPA, obj13);
    }
    cResult[10] = tmp17;
    cResult[11] = stateFromStores;
    cResult[12] = tmp11;
    cResult[13] = combined;
    tmp19 = combined;
  }
  const tmp16 = closure_8(BellIcon.BellIcon, { size: "custom", style: tmp4.icon, color: str });
  cResult[5] = tmp4.icon;
  cResult[6] = str;
  cResult[7] = tmp16;
  tmp15 = tmp16;
  const obj14 = { size: "custom", style: tmp4.icon, color: str };
  let tmpResult = initialize;
}) : (function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  value = onLongPress(16831)().value;
  _require = value;
  const fn = function u() {
    let num = 0;
    if (c0 > 0) {
      num = 1;
    }
    const obj2 = { transform: null, marginLeft: null, opacity: null };
    const items = [{ scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) }];
    obj2.transform = items;
    const obj3 = { scaleX: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) };
    let num2 = 0;
    if (c0 > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    obj2.marginLeft = spring.withSpring(num2, YOU_BAR_SPRING_CONFIG);
    const tmpResult = spring;
    let num3 = 0;
    if (c0 > 0) {
      num3 = 1;
    }
    obj2.opacity = spring.withSpring(num3, YOU_BAR_SPRING_CONFIG);
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  const tmp2 = onLongPress;
  fn.__closure = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: onLongPress(587) };
  fn.__workletHash = 14846757226483;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: onLongPress(587) };
  let items = [SavedMessagesStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  onLongPress = noop.useCallback(() => {
    const result = _undefined(5057).triggerHapticFeedback(_undefined(5057).HapticFeedbackTypes.SOFT);
    const obj = _undefined(5057);
    _undefined(12643).showForLaterModal(_undefined(9681).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items1 = [onLongPress];
  const memo = noop.useMemo(() => {
    const obj = { name: "open-bookmarks", label: null };
    const intl = _undefined(1126).intl;
    obj.label = intl.string(_undefined(1126).t["2pAkDA"]);
    const items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items1);
  const obj4 = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj4.color = str;
  let obj3 = require("initialize");
  let intl = tmp4(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("util").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1126).intl;
    const obj5 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1126).t.yBmFPA, obj5);
  }
  const obj6 = { accessibilityLabel: combined, accessibilityActions: memo, onAccessibilityAction: callback1, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str4 = "secondary-overlay";
  if (!hasNameplate) {
    let str5 = "tertiary";
    if (value > 0) {
      str5 = "secondary";
    }
    str4 = str5;
  }
  const obj7 = { children: null };
  obj6.variant = str4;
  const obj8 = { style: tmp.iconContainer, children: null };
  const tmp11Result = closure_8(require("BellIcon").BellIcon, obj4);
  const items2 = [closure_8(require("YouBarButton").YouBarButtonIcon, { icon: closure_8(require("BellIcon").BellIcon, obj4), hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot }), ];
  const obj9 = { icon: closure_8(require("BellIcon").BellIcon, obj4), hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot };
  items2[1] = closure_8(tmp2(4850).View, { style: animatedStyle, children: closure_8(require("native").Badge, { value }) });
  obj8.children = items2;
  obj6.icon = closure_9(View, obj8);
  obj6.onPress = function onPress() {
    const rootNavigationRef = _undefined(4977).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj6.onLongPress = onLongPress;
  obj6.hitSlop = hitSlop;
  obj7.children = closure_8(require("IconButton").IconButton, obj6);
  return closure_8(require("YouBarButton").YouBarButtonContainer, obj7);
}));