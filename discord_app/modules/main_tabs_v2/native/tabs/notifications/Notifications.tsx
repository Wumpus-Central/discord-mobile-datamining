// === Module 15954: goBack ===

// Module 15954 (goBack)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4298 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4303 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 5038 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5469 */;
import Layer from "Layer" /* 5908 */;
import context from "context" /* 5921 */;
import contextDefault from "context" /* 5921 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5941 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7686 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11430 */;
import CoachmarkImgDefault from "CoachmarkImg" /* 15955 */;
import NotificationCenterBannerImplDefault from "NotificationCenterBannerImpl" /* 15963 */;
import YouBarNavigatorScreens2 from "YouBarNavigatorScreens" /* 15964 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 10793 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function goBack() {
  const navigation = getRootNavigationRef.getRootNavigationRef();
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
    tmp2 = require("context");
    layoutEffect = closure_3.useLayoutEffect(() => callback(7188).trackAppUIViewed(), []);
    callback = closure_3.useCallback(() => {
      const navigation = callback(4303).getRootNavigationRef();
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
    items1[0] = jsx(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 });
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
    tmp3 = closure_10();
    closure_2 = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = closure_3.useMemo(() => {
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
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: null, container: null, headerTitle: null, actionButtons: null, headerClose: null, headerText: null, headerBorder: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: ThemesDefault.space.PX_8, flex: 1 };
obj[1] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm, flexGrow: 1 };
obj[2] = createCacheKey;
obj[3] = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj[4] = { flexDirection: "row", gap: 12 };
obj[5] = { marginRight: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_32, width: ThemesDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg };
obj[6] = { flex: 1, marginTop: 2 };
let obj2 = { marginRight: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_32, width: ThemesDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg };
obj[7] = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_10 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  let _require;
  const tmp = callback3();
  let obj = _require(7567);
  const isForLaterExperimentOn = obj.useIsForLaterExperimentOn("NativeNotifications");
  const ref = importAllResult.useRef(null);
  const tmp8 = CoachmarkImgDefault(ref);
  _require = tmp8;
  const items = [tmp8];
  const callback = importAllResult.useCallback(() => callback(closure_1_6.TAKE_ACTION), items);
  let tmp13 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    tmp13 = !tmp4;
  }
  obj = { top: tmp13, children: null };
  let tmp10Result = null;
  if (!nestedInLaunchPad) {
    obj = { style: null, children: null };
    obj[0] = tmp.headerTitle;
    obj1 = { style: null, accessibilityLabel: null, onPress: null, children: null };
    obj1[0] = tmp.headerClose;
    const intl = tmp5(1236).intl;
    obj1[1] = intl.string(tmp5(1236).t["13/7kX"]);
    obj1[2] = goBack;
    obj1[3] = tmp12(tmp5(15956).LeftBackIconWithBadge, {});
    const items1 = [tmp12(tmp5(5036).PressableOpacity, obj1), , ];
    const obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: null, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    obj2[2] = tmp.headerText;
    const intl2 = tmp5(1236).intl;
    obj2[5] = intl2.string(tmp5(1236).t.HcoRu0);
    items1[1] = tmp12(tmp5(4444).Text, obj2);
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actionButtons;
    tmp10Result = null;
    if (isForLaterExperimentOn) {
      const obj4 = { children: null };
      const obj5 = { ref: null, type: null, onOpen: null };
      obj5[0] = ref;
      let tmp2Result = tmp2(15957);
      obj5[1] = tmp5(7572).SavedMessageSortTypes.BOOKMARK;
      obj5[2] = callback;
      const items2 = [tmp12(tmp2Result, obj5), ];
      const obj6 = { type: null, onOpen: null };
      tmp2Result = tmp2(15957);
      obj6[0] = tmp5(7572).SavedMessageSortTypes.REMINDER;
      obj6[1] = callback;
      items2[1] = tmp12(tmp2Result, obj6);
      obj4[0] = items2;
      tmp10Result = tmp10(closure_8, obj4);
    }
    const items3 = [tmp10Result, tmp12(tmp2(15959), {})];
    obj3[1] = items3;
    items1[2] = tmp10(tmp11, obj3);
    obj[1] = items1;
    tmp10Result = tmp10(tmp11, obj);
  }
  const obj7 = { children: null };
  obj[1] = tmp10Result;
  const items4 = [closure_7(_require(5521).SafeAreaPaddingView, obj), ];
  const items5 = [tmp.headerBorder];
  items4[1] = closure_7(View, { style: items5 });
  obj7[0] = items4;
  return closure_9(View, obj7);
});
let obj3 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return callback(ThemedNotifications, { inNestedNavigator: true });
};