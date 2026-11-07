// === Module 18814: notifications/Notifications ===

// Module 18814 (notifications/Notifications)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import native from "native" /* 5199 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5310 */;
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import LayerScope from "LayerScope" /* 5738 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7070 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import ThemedGradientDefault from "ThemedGradient" /* 10855 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13567 */;
import useAppFrameDefault from "useAppFrame" /* 18375 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 18395 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 18815 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 18816 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 18817 */;
import NotificationCenterPermissionNudgeDefault from "NotificationCenterPermissionNudge" /* 18821 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 18822 */;
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
    tmp = closure_9();
    tmp3 = closure_2;
    tmp2 = closure_1;
    obj = { enabled: !flag };
    tmp4 = closure_1(closure_2[19]);
    layoutEffect = closure_3.useLayoutEffect(() => require("TTIAnalyticsUtils").trackAppUIViewed(), []);
    tmp7 = closure_0;
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
    obj2 = closure_0(closure_2[22]);
    navigatorBackPressHandler = obj2.useNavigatorBackPressHandler(callback);
    tmp9 = jsx;
    obj1 = { value: tmp4(closure_1(closure_2[20]).NOTIFICATIONS).analyticsLocations, children: null };
    items = [, , , ];
    items[0] = tmp.container;
    containerInLaunchPad = flag;
    tmp10 = jsxs;
    tmp11 = View;
    if (flag) {
      containerInLaunchPad = tmp.containerInLaunchPad;
    }
    obj6 = { zIndex: 1, children: null };
    obj7 = { style: items, children: null };
    items[1] = containerInLaunchPad;
    items[2] = closure_1(closure_2[18])(obj).styles.topBorder;
    items[3] = global.style;
    items1 = [, , , ];
    items1[0] = tmp9(closure_11, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
    items1[1] = tmp9(tmp2(tmp3[24]), {});
    items1[2] = tmp9(tmp7(tmp3[25]).NotificationCenterForYou, { nestedInLaunchPad: flag });
    items1[3] = tmp9(tmp7(tmp3[26]).TTIFirstContentfulPaint, { label: "notifications" });
    obj7.children = items1;
    obj1.children = tmp10(tmp11, obj7);
    obj6.children = tmp9(closure_0(closure_2[19]).AnalyticsLocationProvider, obj1);
    return tmp9(closure_0(closure_2[23]).LayerScope, obj6);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = closure_1(closure_2[27])();
    top = closure_1(closure_2[28])().top;
    tmp2 = closure_1(closure_2[8])();
    closure_1 = tmp2;
    tmp3 = closure_9();
    closure_2 = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = closure_3.useMemo(() => {
      if (closure_1) {
        items = [closure_2.containerOuterTablet, ];
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
const YouBarNavigatorScreens = fn(11659).YouBarNavigatorScreens;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 }, container: null, containerInLaunchPad: null, headerTitle: null, actionButtons: null, headerClose: null, headerText: null, headerBorder: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 };
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1 };
obj.containerInLaunchPad = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.headerTitle = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj.actionButtons = { flexDirection: "row", gap: 12 };
let size = { marginRight: nativeDefault.space.PX_16, height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg };
obj.headerClose = size;
obj.headerText = { flex: 1, marginTop: 2 };
const size1 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size1;
const React6 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp = closure_9();
  const ref = noop.useRef(null);
  const tmp6 = useForLaterCoachmarkDefault(ref);
  _require = tmp6;
  items = [tmp6];
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
    const intl = tmp11(1113).intl;
    obj3.accessibilityLabel = intl.string(tmp11(1113).t["13/7kX"]);
    obj3.onPress = goBack;
    obj3.children = closure_7(tmp11(16880).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp11(7043).PressableOpacity, obj3), , ];
    const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl2 = tmp11(1113).intl;
    obj4.children = intl2.string(tmp11(1113).t.HcoRu0);
    items1[1] = closure_7(tmp11(5751).Text, obj4);
    const obj5 = { style: tmp.actionButtons, children: null };
    const obj6 = { ref, type: tmp11(10311).SavedMessageSortTypes.BOOKMARK, onOpen: callback };
    const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj6), , ];
    const obj7 = { type: null, onOpen: null };
    const tmp2Result = ForLaterOpenActionButtonDefault;
    obj7.type = tmp11(10311).SavedMessageSortTypes.REMINDER;
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
});
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export function ThemedNotificationsModal() {
  return metroImportDefault(ThemedNotifications, { inNestedNavigator: true });
}