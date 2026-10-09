// === Module 16768: notifications/Notifications ===

// Module 16768 (notifications/Notifications)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import native from "native" /* 4788 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4933 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6211 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6625 */;
import LayerScope from "LayerScope" /* 6842 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6848 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import ThemedGradientDefault from "ThemedGradient" /* 10196 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11447 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16360 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 16769 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 16771 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 16772 */;
import NotificationCenterPermissionNudgeDefault from "NotificationCenterPermissionNudge" /* 16776 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 16777 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function goBack() {
  const navigation = RootNavigationRef.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
const View = fn(17).View;
const YouBarNavigatorScreens = fn(10602).YouBarNavigatorScreens;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, flex: 1 }, container: null, headerTitle: null, actionButtons: null, headerClose: null, headerText: null, headerBorder: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexGrow: 1 };
obj.headerTitle = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj.actionButtons = { flexDirection: "row", gap: 12 };
let size = { marginRight: nativeDefault.space.PX_16, height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg };
obj.headerClose = size;
obj.headerText = { flex: 1, marginTop: 2 };
const size1 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size1;
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderInner(nestedInLaunchPad) {
  const cResult = require("c").c(17);
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp4 = closure_9();
  const obj = require("c");
  const ref = noop.useRef(null);
  const tmp8 = useForLaterCoachmarkDefault(ref);
  _require = tmp8;
  if (cResult[0] !== tmp8) {
    const fn = function s() {
      return closure_0(ContentDismissActionType.TAKE_ACTION);
    };
    cResult[0] = tmp8;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let tmp10 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp10 = !tmp6;
  }
  if (cResult[2] === nestedInLaunchPad) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === tmp4.actionButtons) {
        if (cResult[5] === tmp4.headerClose) {
          if (cResult[6] === tmp4.headerText) {
            if (cResult[7] === tmp4.headerTitle) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp10) {
              if (cResult[10] === tmp11) {
                let tmp19 = cResult[11];
              }
              if (cResult[12] !== tmp4.headerBorder) {
                const obj2 = { style: tmp4.headerBorder };
                const tmp25 = closure_7(View, obj2);
                cResult[12] = tmp4.headerBorder;
                cResult[13] = tmp25;
                let tmp22 = tmp25;
              } else {
                tmp22 = cResult[13];
              }
              if (cResult[14] === tmp19) {
                if (cResult[15] === tmp22) {
                  let tmp26 = cResult[16];
                }
                return tmp26;
              }
              const obj3 = { children: null };
              const items = [tmp19, tmp22];
              obj3.children = items;
              const tmp29 = closure_8(View, obj3);
              cResult[14] = tmp19;
              cResult[15] = tmp22;
              cResult[16] = tmp29;
              tmp26 = tmp29;
            }
            const obj4 = { top: tmp10, children: tmp11 };
            const tmp21 = closure_7(tmp(6810).SafeAreaPaddingView, obj4);
            cResult[9] = tmp10;
            cResult[10] = tmp11;
            cResult[11] = tmp21;
            tmp19 = tmp21;
          }
        }
      }
    }
  }
  let tmp12 = null;
  if (!nestedInLaunchPad) {
    const obj5 = { style: tmp4.headerTitle, children: null };
    const obj6 = { style: tmp4.headerClose, accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp(1126).intl;
    obj6.accessibilityLabel = intl.string(tmp(1126).t["13/7kX"]);
    obj6.onPress = goBack;
    obj6.children = closure_7(tmp(16770).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp(6191).PressableOpacity, obj6), , ];
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp4.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl2 = tmp(1126).intl;
    obj7.children = intl2.string(tmp(1126).t.HcoRu0);
    items1[1] = closure_7(tmp(5087).Text, obj7);
    const obj8 = { style: tmp4.actionButtons, children: null };
    const obj9 = { ref, type: tmp(9652).SavedMessageSortTypes.BOOKMARK, onOpen: tmp9 };
    const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj9), , ];
    const obj10 = { type: null, onOpen: null };
    const tmp5Result = ForLaterOpenActionButtonDefault;
    obj10.type = tmp(9652).SavedMessageSortTypes.REMINDER;
    obj10.onOpen = tmp9;
    items2[1] = closure_7(ForLaterOpenActionButtonDefault, obj10);
    items2[2] = closure_7(NotificationCenterActionButtonDefault, {});
    obj8.children = items2;
    items1[2] = closure_8(View, obj8);
    obj5.children = items1;
    tmp12 = closure_8(View, obj5);
    const tmp5Result2 = ForLaterOpenActionButtonDefault;
  }
  cResult[2] = nestedInLaunchPad;
  cResult[3] = tmp9;
  cResult[4] = tmp4.actionButtons;
  cResult[5] = tmp4.headerClose;
  cResult[6] = tmp4.headerText;
  cResult[7] = tmp4.headerTitle;
  cResult[8] = tmp12;
  tmp11 = tmp12;
  tmp6 = useIsWindowLargeDefault();
}) : (function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp = closure_9();
  const ref = noop.useRef(null);
  const tmp6 = useForLaterCoachmarkDefault(ref);
  _require = tmp6;
  const items = [tmp6];
  const callback = noop.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
  let tmp12 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp12 = !tmp4;
  }
  const obj = { top: tmp12, children: null };
  let tmp8Result = null;
  if (!nestedInLaunchPad) {
    const obj2 = { style: tmp.headerTitle, children: null };
    const obj3 = { style: tmp.headerClose, accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp11(1126).intl;
    obj3.accessibilityLabel = intl.string(tmp11(1126).t["13/7kX"]);
    obj3.onPress = goBack;
    obj3.children = closure_7(tmp11(16770).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp11(6191).PressableOpacity, obj3), , ];
    const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl2 = tmp11(1126).intl;
    obj4.children = intl2.string(tmp11(1126).t.HcoRu0);
    items1[1] = closure_7(tmp11(5087).Text, obj4);
    const obj5 = { style: tmp.actionButtons, children: null };
    const obj6 = { ref, type: tmp11(9652).SavedMessageSortTypes.BOOKMARK, onOpen: callback };
    const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj6), , ];
    const obj7 = { type: null, onOpen: null };
    const tmp2Result = ForLaterOpenActionButtonDefault;
    obj7.type = tmp11(9652).SavedMessageSortTypes.REMINDER;
    obj7.onOpen = callback;
    items2[1] = closure_7(ForLaterOpenActionButtonDefault, obj7);
    items2[2] = closure_7(NotificationCenterActionButtonDefault, {});
    obj5.children = items2;
    items1[2] = closure_8(View, obj5);
    obj2.children = items1;
    tmp8Result = closure_8(View, obj2);
    const tmp2Result2 = ForLaterOpenActionButtonDefault;
  }
  const obj8 = { children: null };
  obj.children = tmp8Result;
  const items3 = [closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj), closure_7(View, { style: tmp.headerBorder })];
  obj8.children = items3;
  return closure_8(View, obj8);
}));
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Notifications(arg0) {
  const cResult = c.c(20);
  ({ style, nestedInLaunchPad, inNestedNavigator } = arg0);
  const tmp6 = closure_9();
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return require("TTIAnalyticsUtils").trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const layoutEffect = noop.useLayoutEffect(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      const navigation = require("RootNavigationRef").getRootNavigationRef();
      if (null != navigation) {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate("guilds");
        }
      }
      return true;
    };
    cResult[2] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(tmp12);
  if (cResult[3] === style) {
    if (cResult[4] === tmp6.container) {
      let tmp14 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp4) {
        let tmp15 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React5(NotificationCenterPermissionNudgeDefault, {});
        cResult[9] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== tmp4) {
        const obj2 = { nestedInLaunchPad: tmp4 };
        const tmp24 = React5(NotificationCenterForYou.NotificationCenterForYou, obj2);
        cResult[10] = tmp4;
        cResult[11] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = React5(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" });
        cResult[12] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] === tmp14) {
        if (cResult[14] === tmp15) {
          if (cResult[15] === tmp22) {
            let tmp28 = cResult[16];
          }
          if (cResult[17] === analyticsLocations) {
            if (cResult[18] === tmp28) {
              let tmp32 = cResult[19];
            }
            return tmp32;
          }
          const obj3 = { zIndex: 1, children: null };
          const obj4 = { value: analyticsLocations, children: tmp28 };
          obj3.children = React5(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
          const tmp34 = React5(LayerScope.LayerScope, obj3);
          cResult[17] = analyticsLocations;
          cResult[18] = tmp28;
          cResult[19] = tmp34;
          tmp32 = tmp34;
        }
      }
      const obj5 = { style: tmp14, children: null };
      const items1 = [tmp15, tmp19, tmp22, tmp25];
      obj5.children = items1;
      const tmp31 = closure_1_8(View, obj5);
      cResult[13] = tmp14;
      cResult[14] = tmp15;
      cResult[15] = tmp22;
      cResult[16] = tmp31;
      tmp28 = tmp31;
    }
    const obj6 = { nestedInLaunchPad: tmp4, inNestedNavigator: tmp5 };
    const tmp18 = React5(closure_11, obj6);
    cResult[6] = tmp5;
    cResult[7] = tmp4;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const items2 = [tmp6.container, style];
  cResult[3] = style;
  cResult[4] = tmp6.container;
  cResult[5] = items2;
  tmp14 = items2;
  const tmpResult = useNavigatorBackPressHandler;
}) : (function Notifications(nestedInLaunchPad) {
  let flag = nestedInLaunchPad.nestedInLaunchPad;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = nestedInLaunchPad.inNestedNavigator;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_9();
  const layoutEffect = noop.useLayoutEffect(() => require("TTIAnalyticsUtils").trackAppUIViewed(), []);
  const callback = noop.useCallback(() => {
    const navigation = require("RootNavigationRef").getRootNavigationRef();
    if (null != navigation) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate("guilds");
      }
    }
    return true;
  }, []);
  const tmp2 = useAnalyticsLocationsDefault;
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(callback);
  const obj2 = { zIndex: 1, children: null };
  const obj3 = { value: tmp2(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations, children: null };
  const obj4 = { style: null, children: null };
  const items = [tmp.container, nestedInLaunchPad.style];
  obj4.style = items;
  const items1 = [React5(closure_11, { nestedInLaunchPad: flag, inNestedNavigator: flag2 }), React5(NotificationCenterPermissionNudgeDefault, {}), React5(NotificationCenterForYou.NotificationCenterForYou, { nestedInLaunchPad: flag }), React5(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" })];
  obj4.children = items1;
  obj3.children = closure_1_8(View, obj4);
  obj2.children = React5(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
  return React5(LayerScope.LayerScope, obj2);
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedNotifications(route) {
  const cResult = c.c(15);
  const tmp5 = useColorThemeBackgroundDefault();
  let containerOuter = useSafeAreaInsetsDefault().top;
  const tmp6 = useIsWindowLargeDefault();
  let containerOuterTablet = closure_9();
  if (cResult[0] === tmp6) {
    if (cResult[1] === containerOuter) {
      if (cResult[2] === containerOuterTablet.containerOuter) {
        if (cResult[3] === containerOuterTablet.containerOuterTablet) {
          const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = React5(ThemedGradientDefault, { absolute: true });
            cResult[5] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[5];
          }
          route = route.route;
          let inNestedNavigator;
          if (route != null) {
            const params = route.params;
            if (params != null) {
              inNestedNavigator = params.inNestedNavigator;
            }
          }
          if (cResult[6] === route) {
            if (cResult[7] === inNestedNavigator) {
              let tmp17 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp17) {
                let tmp24 = cResult[11];
              }
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp24) {
                  let tmp27 = cResult[14];
                }
                return tmp27;
              }
              const obj2 = { style: tmp7, children: null };
              const items = [tmp11, tmp24];
              obj2.children = items;
              const tmp30 = closure_1_8(View, obj2);
              cResult[12] = tmp7;
              cResult[13] = tmp24;
              cResult[14] = tmp30;
              tmp27 = tmp30;
            }
            const obj3 = { gradient: tmp5, children: tmp17 };
            const tmp26 = React5(native.ThemeContextProvider, obj3);
            cResult[9] = tmp5;
            cResult[10] = tmp17;
            cResult[11] = tmp26;
            tmp24 = tmp26;
          }
          const obj4 = {};
          const merged = Object.assign(route);
          obj4.inNestedNavigator = inNestedNavigator;
          const tmp23 = React5(closure_12, obj4);
          cResult[6] = route;
          cResult[7] = inNestedNavigator;
          cResult[8] = tmp23;
          tmp17 = tmp23;
          const tmpResult = TabsPerformanceTracker;
        }
      }
    }
  }
  if (tmp6) {
    const items1 = [containerOuterTablet.containerOuterTablet, ];
    const obj5 = { paddingTop: containerOuter };
    items1[1] = obj5;
    let containerOuter2 = items1;
  } else {
    containerOuter2 = containerOuterTablet.containerOuter;
  }
  cResult[0] = tmp6;
  cResult[1] = containerOuter;
  containerOuter = containerOuterTablet.containerOuter;
  cResult[2] = containerOuter;
  containerOuterTablet = containerOuterTablet.containerOuterTablet;
  cResult[3] = containerOuterTablet;
  cResult[4] = containerOuter2;
}) : (function ThemedNotifications(route) {
  const top = useSafeAreaInsetsDefault().top;
  const tmp2 = useIsWindowLargeDefault();
  closure_1 = tmp2;
  const tmp3 = closure_9();
  closure_2 = tmp3;
  let items = [tmp3, tmp2, top];
  const memo = noop.useMemo(() => {
    if (closure_1) {
      const items = [closure_2.containerOuterTablet, ];
      const obj = { paddingTop: top };
      items[1] = obj;
      let containerOuter = items;
    } else {
      containerOuter = closure_2.containerOuter;
    }
    return containerOuter;
  }, items);
  const tmp = useColorThemeBackgroundDefault();
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
  const obj2 = { style: memo, children: null };
  const items1 = [React5(ThemedGradientDefault, { absolute: true }), ];
  const obj3 = { gradient: tmp, children: null };
  const obj4 = {};
  const merged = Object.assign(route);
  route = route.route;
  let inNestedNavigator;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  obj4.inNestedNavigator = inNestedNavigator;
  obj3.children = React5(closure_12, obj4);
  items1[1] = React5(native.ThemeContextProvider, obj3);
  obj2.children = items1;
  return closure_1_8(View, obj2);
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexGrow: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default tmp3;
export { goBack };
export const ThemedNotifications = tmp4;
export const ThemedNotificationsModal = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedNotificationsModal() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = React5(closure_13, { inNestedNavigator: true });
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ThemedNotificationsModal() {
  return React5(closure_13, { inNestedNavigator: true });
});