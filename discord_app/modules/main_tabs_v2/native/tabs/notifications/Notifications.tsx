// === Module 16658: notifications/Notifications ===

// Module 16658 (notifications/Notifications)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4432 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4575 */;
import RootNavigationRef from "RootNavigationRef" /* 4580 */;
import ThemedGradientDefault from "ThemedGradient" /* 5294 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5800 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7139 */;
import LayerScope from "LayerScope" /* 7352 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7358 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7378 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12140 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16271 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 16659 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 16661 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 16663 */;
import NotificationCenterPermissionNudgeDefault from "NotificationCenterPermissionNudge" /* 16667 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 16668 */;
import noop from "module_19" /* 19 */;

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
class Notifications {
  constructor(arg0) {
    flag = global.nestedInLaunchPad;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.inNestedNavigator;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = closure_10();
    tmp2 = closure_1(closure_2[19]);
    layoutEffect = closure_3.useLayoutEffect(() => require("TTIAnalyticsUtils").trackAppUIViewed(), []);
    callback = closure_3.useCallback(() => {
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
    obj = closure_0(closure_2[22]);
    navigatorBackPressHandler = obj.useNavigatorBackPressHandler(callback);
    obj1 = { zIndex: 1, children: null };
    obj5 = { value: tmp2(closure_1(closure_2[20]).NOTIFICATIONS).analyticsLocations, children: null };
    obj6 = { style: null, children: null };
    items = [, ];
    items[0] = tmp.container;
    items[1] = global.style;
    obj6.style = items;
    items1 = [, , , ];
    items1[0] = jsx(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
    items1[1] = jsx(closure_1(closure_2[24]), {});
    items1[2] = jsx(closure_0(closure_2[25]).NotificationCenterForYou, { nestedInLaunchPad: flag });
    items1[3] = jsx(closure_0(closure_2[26]).TTIFirstContentfulPaint, { label: "notifications" });
    obj6.children = items1;
    obj5.children = jsxs(View, obj6);
    obj1.children = jsx(closure_0(closure_2[19]).AnalyticsLocationProvider, obj5);
    return jsx(closure_0(closure_2[23]).LayerScope, obj1);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = closure_1(closure_2[27])();
    top = closure_1(closure_2[28])().top;
    tmp2 = closure_1(closure_2[8])();
    closure_1 = tmp2;
    tmp3 = closure_10();
    closure_2 = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = closure_3.useMemo(() => {
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
    obj = closure_0(closure_2[29]);
    trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    obj1 = { style: memo, children: null };
    tmp8 = jsx;
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [, ];
    items1[0] = jsx(closure_1(closure_2[30]), { absolute: true });
    obj5 = { gradient: tmp, children: null };
    obj6 = {};
    tmp9 = Notifications;
    merged = Object.assign(global);
    route = global.route;
    inNestedNavigator = undefined;
    if (route != null) {
      params = route.params;
      if (params != null) {
        inNestedNavigator = params.inNestedNavigator;
      }
    }
    obj6.inNestedNavigator = inNestedNavigator;
    obj5.children = tmp8(tmp9, obj6);
    items1[1] = tmp8(closure_0(closure_2[31]).ThemeContextProvider, obj5);
    obj1.children = items1;
    return tmp6(tmp7, obj1);
  }
}
const View = fn(17).View;
const YouBarNavigatorScreens = fn(11338).YouBarNavigatorScreens;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
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
let closure_10 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  _require = undefined;
  const tmp = closure_10();
  const tmp4 = useIsWindowLargeDefault();
  const isForLaterExperimentOn = require("ForLaterExperiment").useIsForLaterExperimentOn("NativeNotifications");
  const ref = noop.useRef(null);
  const tmp8 = useForLaterCoachmarkDefault(ref);
  _require = tmp8;
  const items = [tmp8];
  const callback = noop.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
  let tmp13 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp13 = !tmp4;
  }
  const obj2 = { top: tmp13, children: null };
  let tmp10Result2 = null;
  if (!nestedInLaunchPad) {
    const obj3 = { style: tmp.headerTitle, children: null };
    const obj4 = { style: tmp.headerClose, accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp5(1115).intl;
    obj4.accessibilityLabel = intl.string(tmp5(1115).t["13/7kX"]);
    obj4.onPress = goBack;
    obj4.children = closure_7(tmp5(16660).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp5(5292).PressableOpacity, obj4), , ];
    const obj5 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl2 = tmp5(1115).intl;
    obj5.children = intl2.string(tmp5(1115).t.HcoRu0);
    items1[1] = closure_7(tmp5(4718).Text, obj5);
    const obj6 = { style: tmp.actionButtons, children: null };
    let tmp10Result = null;
    if (isForLaterExperimentOn) {
      const obj7 = { children: null };
      const obj8 = { ref, type: tmp5(8064).SavedMessageSortTypes.BOOKMARK, onOpen: callback };
      const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj8), ];
      const obj9 = { type: null, onOpen: null };
      const tmp2Result = ForLaterOpenActionButtonDefault;
      obj9.type = tmp5(8064).SavedMessageSortTypes.REMINDER;
      obj9.onOpen = callback;
      items2[1] = closure_7(ForLaterOpenActionButtonDefault, obj9);
      obj7.children = items2;
      tmp10Result = closure_9(closure_8, obj7);
      const tmp2Result2 = ForLaterOpenActionButtonDefault;
    }
    const items3 = [tmp10Result, closure_7(NotificationCenterActionButtonDefault, {})];
    obj6.children = items3;
    items1[2] = closure_9(View, obj6);
    obj3.children = items1;
    tmp10Result2 = closure_9(View, obj3);
  }
  const obj10 = { children: null };
  obj2.children = tmp10Result2;
  const items4 = [closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj2), ];
  const obj11 = { style: null };
  const items5 = [tmp.headerBorder];
  obj11.style = items5;
  items4[1] = closure_7(View, obj11);
  obj10.children = items4;
  return closure_9(View, obj10);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return React5(ThemedNotifications, { inNestedNavigator: true });
};