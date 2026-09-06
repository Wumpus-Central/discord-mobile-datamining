// discord_app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import LayerScope from "../../../../../design/components/Layers/native/LayerScope.native.tsx";
import useAnalyticsLocations from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import useForLaterCoachmarkDefault from "../../../../saved_messages/native/useForLaterCoachmark.tsx";
import ForLaterOpenActionButtonDefault from "../../../../saved_messages/native/ForLaterOpenActionButton.tsx";
import NotificationCenterActionButtonDefault from "../../../../notification_center/native/NotificationCenterActionButton.tsx";
import NotificationCenterPermissionNudgeDefault from "../../../../notification_center/native/NotificationCenterPermissionNudge.tsx";
import NotificationCenterForYou from "../../../../notification_center/native/NotificationCenterForYou.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
    obj = { zIndex: 1, children: null };
    obj1 = { value: tmp2(closure_1(closure_2[20]).NOTIFICATIONS).analyticsLocations, children: null };
    obj2 = { style: null, children: null };
    items = [,];
    items[0] = tmp.container;
    items[1] = global.style;
    obj2.style = items;
    items1 = [, , ,];
    items1[0] = jsx(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
    items1[1] = jsx(closure_1(closure_2[24]), {});
    items1[2] = jsx(closure_0(closure_2[25]).NotificationCenterForYou, { nestedInLaunchPad: flag });
    items1[3] = jsx(closure_0(closure_2[26]).TTIFirstContentfulPaint, { label: "notifications" });
    obj2.children = items1;
    obj1.children = jsxs(View, obj2);
    obj.children = jsx(closure_0(closure_2[19]).AnalyticsLocationProvider, obj1);
    return jsx(closure_0(closure_2[23]).LayerScope, obj);
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
    items = [, ,];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = closure_3.useMemo(() => {
      if (closure_1) {
        const items = [closure_2.containerOuterTablet];
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
    obj = { style: memo, children: null };
    tmp8 = jsx;
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [,];
    items1[0] = jsx(closure_1(closure_2[30]), { absolute: true });
    obj1 = { gradient: tmp, children: null };
    obj2 = {};
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
    obj2.inNestedNavigator = inNestedNavigator;
    obj1.children = tmp8(tmp9, obj2);
    items1[1] = tmp8(closure_0(closure_2[31]).ThemeContextProvider, obj1);
    obj.children = items1;
    return tmp6(tmp7, obj);
  }
}
const View = fn(17).View;
const YouBarNavigatorScreens = fn(11084).YouBarNavigatorScreens;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = {
  containerOuter: { flex: 1 },
  containerOuterTablet: null,
  container: null,
  headerTitle: null,
  actionButtons: null,
  headerClose: null,
  headerText: null,
  headerBorder: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  flex: 1,
};
obj.containerOuterTablet = obj;
const createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
  flexGrow: 1,
};
obj.container = createStyles;
obj.headerTitle = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj.actionButtons = { flexDirection: "row", gap: 12 };
let size = {
  marginRight: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_32,
  width: nativeDefault.space.PX_32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
};
obj.headerClose = size;
obj.headerText = { flex: 1, marginTop: 2 };
const size1 = {
  left: 0,
  bottom: 0,
  height: 1,
  width: "100%",
  position: "absolute",
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.headerBorder = size1;
let closure_10 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  _require = undefined;
  const tmp = closure_10();
  let obj = require("ForLaterExperiment");
  const isForLaterExperimentOn = obj.useIsForLaterExperimentOn("NativeNotifications");
  const ref = noop.useRef(null);
  const tmp8 = useForLaterCoachmarkDefault(ref);
  _require = tmp8;
  const items = [tmp8];
  const callback = noop.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
  let tmp13 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp13 = !tmp4;
  }
  obj = { top: tmp13, children: null };
  let tmp10Result = null;
  if (!nestedInLaunchPad) {
    obj = { style: tmp.headerTitle, children: null };
    const obj1 = { style: tmp.headerClose, accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp5(1114).intl;
    obj1.accessibilityLabel = intl.string(tmp5(1114).t["13/7kX"]);
    obj1.onPress = goBack;
    obj1.children = closure_7(tmp5(16403).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp5(5123).PressableOpacity, obj1), ,];
    const obj2 = {
      color: "mobile-text-heading-primary",
      variant: "heading-lg/bold",
      style: tmp.headerText,
      maxFontSizeMultiplier: 1.75,
      accessibilityRole: "header",
      children: null,
    };
    const intl2 = tmp5(1114).intl;
    obj2.children = intl2.string(tmp5(1114).t.HcoRu0);
    items1[1] = closure_7(tmp5(4556).Text, obj2);
    const obj3 = { style: tmp.actionButtons, children: null };
    tmp10Result = null;
    if (isForLaterExperimentOn) {
      const obj4 = { children: null };
      const obj5 = { ref, type: null, onOpen: null };
      let tmp2Result = ForLaterOpenActionButtonDefault;
      obj5.type = tmp5(7860).SavedMessageSortTypes.BOOKMARK;
      obj5.onOpen = callback;
      const items2 = [closure_7(tmp2Result, obj5)];
      const obj6 = { type: null, onOpen: null };
      tmp2Result = ForLaterOpenActionButtonDefault;
      obj6.type = tmp5(7860).SavedMessageSortTypes.REMINDER;
      obj6.onOpen = callback;
      items2[1] = closure_7(tmp2Result, obj6);
      obj4.children = items2;
      tmp10Result = closure_9(closure_8, obj4);
    }
    const items3 = [tmp10Result, closure_7(NotificationCenterActionButtonDefault, {})];
    obj3.children = items3;
    items1[2] = closure_9(View, obj3);
    obj.children = items1;
    tmp10Result = closure_9(View, obj);
  }
  const obj7 = { children: null };
  obj.children = tmp10Result;
  const items4 = [closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj)];
  const obj8 = { style: null };
  const items5 = [tmp.headerBorder];
  obj8.style = items5;
  items4[1] = closure_7(View, obj8);
  obj7.children = items4;
  return closure_9(View, obj7);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return React5(ThemedNotifications, { inNestedNavigator: true });
};
