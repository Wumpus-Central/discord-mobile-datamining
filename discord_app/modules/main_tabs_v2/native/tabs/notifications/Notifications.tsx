// discord_app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
import importAllResult from "context";
import { View } from "SavedMessageSortTypes";
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "getDeviceMetadata";
import createCacheKey from "createCacheKey";
import { SafeAreaPaddingView } from "../../../../../components_native/common/SafeAreaView.tsx";
import { ForLaterFreemiumConfig } from "../../../../saved_messages/ForLaterExperiment.tsx";
import { CoachmarkImg } from "../../../../saved_messages/native/useForLaterCoachmark.tsx";
import { getRootNavigationRef } from "../../../RootNavigationRef.native.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function goBack() {
  const navigation = getRootNavigationRef /* getRootNavigationRef */.getRootNavigationRef();
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
    tmp = jsxs();
    tmp2 = require("context");
    layoutEffect = defineProperty.useLayoutEffect(() => callback(6843).trackAppUIViewed(), []);
    callback = defineProperty.useCallback(() => {
      const navigation = callback(4137).getRootNavigationRef();
      if (null != navigation) {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate("guilds");
        }
      }
      return true;
    }, []);
    obj = require("useNavigatorBackPressHandler");
    navigatorBackPressHandler = obj.useNavigatorBackPressHandler(callback);
    obj = { zIndex: 1, children: null };
    obj1 = { value: tmp2(require("QUICK_SWITCHER").NOTIFICATIONS).analyticsLocations, children: null };
    obj2 = { style: items, children: null };
    items = [, ];
    items[0] = tmp.container;
    items[1] = global.style;
    items1 = [, , , ];
    items1[0] = jsx(HeaderInner, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
    items1[1] = jsx(require("NotificationCenterBannerImpl"), {});
    items1[2] = jsx(require("YouBarNavigatorScreens").NotificationCenterForYou, { nestedInLaunchPad: flag });
    items1[3] = jsx(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "notifications" });
    obj2[1] = items1;
    obj1[1] = jsxs(View, obj2);
    obj[1] = jsx(require("context").AnalyticsLocationProvider, obj1);
    return jsx(require("Layer").LayerScope, obj);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = require("getGuildThemeName")();
    top = require("useSafeAreaInsets")().top;
    tmp2 = require("useIsWindowLarge")();
    closure_1 = tmp2;
    tmp3 = jsxs();
    closure_2 = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = defineProperty.useMemo(() => {
      if (closure_1) {
        const items = [tmp.containerOuterTablet, ];
        const obj = { paddingTop: null };
        obj[0] = top;
        items[1] = obj;
        let containerOuter = items;
      } else {
        containerOuter = tmp.containerOuter;
      }
      return containerOuter;
    }, items);
    obj = require("trackTabPressed");
    trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    obj = { style: memo, children: null };
    tmp8 = jsx;
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [, ];
    items1[0] = jsx(require("getMixedGradientColor"), { absolute: true });
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
    obj1[1] = tmp8(tmp9, obj2);
    items1[1] = tmp8(require("ManaContext").ThemeContextProvider, obj1);
    obj[1] = items1;
    return tmp6(tmp7, obj);
  }
}
let c3 = importAllResult;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: null, container: null, headerTitle: null, actionButtons: null, headerClose: null, headerText: null, headerBorder: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: require("Themes").space.PX_8, flex: 1 };
obj[1] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm, flexGrow: 1 };
obj[2] = createCacheKey;
obj[3] = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj[4] = { flexDirection: "row", gap: 12 };
obj[5] = { marginRight: require("Themes").space.PX_16, height: require("Themes").space.PX_32, width: require("Themes").space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg };
obj[6] = { flex: 1, marginTop: 2 };
let obj2 = { marginRight: require("Themes").space.PX_16, height: require("Themes").space.PX_32, width: require("Themes").space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg };
obj[7] = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let closure_10 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  let _require;
  const tmp = callback3();
  let obj = _ForLaterFreemiumConfig;
  const isForLaterExperimentOn = obj.useIsForLaterExperimentOn("NativeNotifications");
  const ref = importAllResult.useRef(null);
  const tmp8 = CoachmarkImg(ref);
  _require = tmp8;
  const items = [tmp8];
  const callback = importAllResult.useCallback(() => _undefined(outer1_6.TAKE_ACTION), items);
  let tmp13 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp13 = !tmp4;
  }
  obj = { top: tmp13, children: null };
  let tmp10Result = null;
  if (!nestedInLaunchPad) {
    obj = { style: null, children: null };
    obj[0] = tmp.headerTitle;
    const obj1 = { style: null, accessibilityLabel: null, onPress: null, children: null };
    obj1[0] = tmp.headerClose;
    const intl = tmp5(1236).intl;
    obj1[1] = intl.string(tmp5(1236).t["13/7kX"]);
    obj1[2] = goBack;
    obj1[3] = tmp12(tmp5(15392).LeftBackIconWithBadge, {});
    const items1 = [tmp12(tmp5(4812).PressableOpacity, obj1), , ];
    const obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: null, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    obj2[2] = tmp.headerText;
    const intl2 = tmp5(1236).intl;
    obj2[5] = intl2.string(tmp5(1236).t.HcoRu0);
    items1[1] = tmp12(tmp5(4281).Text, obj2);
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actionButtons;
    tmp10Result = null;
    if (isForLaterExperimentOn) {
      const obj4 = { children: null };
      const obj5 = { ref: null, type: null, onOpen: null };
      obj5[0] = ref;
      let tmp2Result = tmp2(15393);
      obj5[1] = tmp5(8192).SavedMessageSortTypes.BOOKMARK;
      obj5[2] = callback;
      const items2 = [tmp12(tmp2Result, obj5), ];
      const obj6 = { type: null, onOpen: null };
      tmp2Result = tmp2(15393);
      obj6[0] = tmp5(8192).SavedMessageSortTypes.REMINDER;
      obj6[1] = callback;
      items2[1] = tmp12(tmp2Result, obj6);
      obj4[0] = items2;
      tmp10Result = tmp10(closure_8, obj4);
    }
    const items3 = [tmp10Result, tmp12(tmp2(15395), {})];
    obj3[1] = items3;
    items1[2] = tmp10(tmp11, obj3);
    obj[1] = items1;
    tmp10Result = tmp10(tmp11, obj);
  }
  const obj7 = { children: null };
  obj[1] = tmp10Result;
  const items4 = [closure_7(_SafeAreaPaddingView.SafeAreaPaddingView, obj), ];
  const items5 = [tmp.headerBorder];
  items4[1] = closure_7(View, { style: items5 });
  obj7[0] = items4;
  return closure_9(View, obj7);
});
let obj3 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("MODE_CHANGE_PHYSICS").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return callback(ThemedNotifications, { inNestedNavigator: true });
};