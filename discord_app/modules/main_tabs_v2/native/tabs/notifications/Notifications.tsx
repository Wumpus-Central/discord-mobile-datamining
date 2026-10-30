// discord_app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import LayerScope from "../../../../../design/components/Layers/native/LayerScope.native.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import useAnalyticsLocations from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
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
    tmp = closure_9();
    tmp2 = closure_1(closure_2[18]);
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
    obj = closure_0(closure_2[21]);
    navigatorBackPressHandler = obj.useNavigatorBackPressHandler(callback);
    obj1 = { zIndex: 1, children: null };
    obj5 = { value: tmp2(closure_1(closure_2[19]).NOTIFICATIONS).analyticsLocations, children: null };
    obj6 = { style: null, children: null };
    items = [,];
    items[0] = tmp.container;
    items[1] = global.style;
    obj6.style = items;
    items1 = [, , ,];
    items1[0] = jsx(closure_11, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
    items1[1] = jsx(closure_1(closure_2[23]), {});
    items1[2] = jsx(closure_0(closure_2[24]).NotificationCenterForYou, { nestedInLaunchPad: flag });
    items1[3] = jsx(closure_0(closure_2[25]).TTIFirstContentfulPaint, { label: "notifications" });
    obj6.children = items1;
    obj5.children = jsxs(View, obj6);
    obj1.children = jsx(closure_0(closure_2[18]).AnalyticsLocationProvider, obj5);
    return jsx(closure_0(closure_2[22]).LayerScope, obj1);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = closure_1(closure_2[26])();
    top = closure_1(closure_2[27])().top;
    tmp2 = closure_1(closure_2[8])();
    closure_1 = tmp2;
    tmp3 = closure_9();
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
    obj = closure_0(closure_2[28]);
    trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    obj1 = { style: memo, children: null };
    tmp8 = jsx;
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [,];
    items1[0] = jsx(closure_1(closure_2[29]), { absolute: true });
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
    items1[1] = tmp8(closure_0(closure_2[30]).ThemeContextProvider, obj5);
    obj1.children = items1;
    return tmp6(tmp7, obj1);
  }
}
const View = fn(17).View;
const YouBarNavigatorScreens = fn(11479).YouBarNavigatorScreens;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  containerOuter: { flex: 1 },
  containerOuterTablet: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    paddingHorizontal: nativeDefault.space.PX_8,
    flex: 1,
  },
  container: null,
  headerTitle: null,
  actionButtons: null,
  headerClose: null,
  headerText: null,
  headerBorder: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  flex: 1,
};
obj.container = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
  flexGrow: 1,
};
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
const React7 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function HeaderInner(nestedInLaunchPad) {
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
    const intl = tmp11(1114).intl;
    obj3.accessibilityLabel = intl.string(tmp11(1114).t["13/7kX"]);
    obj3.onPress = goBack;
    obj3.children = closure_7(tmp11(18422).LeftBackIconWithBadge, {});
    const items1 = [closure_7(tmp11(6974).PressableOpacity, obj3), ,];
    const obj4 = {
      color: "mobile-text-heading-primary",
      variant: "heading-lg/bold",
      style: tmp.headerText,
      maxFontSizeMultiplier: 1.75,
      accessibilityRole: "header",
      children: null,
    };
    const intl2 = tmp11(1114).intl;
    obj4.children = intl2.string(tmp11(1114).t.HcoRu0);
    items1[1] = closure_7(tmp11(5619).Text, obj4);
    const obj5 = { style: tmp.actionButtons, children: null };
    const obj6 = { ref, type: tmp11(10172).SavedMessageSortTypes.BOOKMARK, onOpen: callback };
    const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj6), ,];
    const obj7 = { type: null, onOpen: null };
    const tmp2Result = ForLaterOpenActionButtonDefault;
    obj7.type = tmp11(10172).SavedMessageSortTypes.REMINDER;
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
  const items3 = [
    closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj),
    closure_7(View, { style: tmp.headerBorder }),
  ];
  obj8.children = items3;
  return closure_8(View, obj8);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export function ThemedNotificationsModal() {
  return React5(ThemedNotifications, { inNestedNavigator: true });
}
