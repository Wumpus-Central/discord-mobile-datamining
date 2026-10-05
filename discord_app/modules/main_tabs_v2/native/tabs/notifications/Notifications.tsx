// discord_app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
import c from "../../../../../../_runtime/00576_c.js";
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
const YouBarNavigatorScreens = fn(10820).YouBarNavigatorScreens;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
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
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (nestedInLaunchPad) => {
        const cResult = require("c").c(18);
        nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
        const tmp4 = closure_10();
        const obj = require("c");
        const tmp6 = useIsWindowLargeDefault();
        const isForLaterExperimentOn = require("ForLaterExperiment").useIsForLaterExperimentOn("NativeNotifications");
        const ref = noop.useRef(null);
        const tmp9 = useForLaterCoachmarkDefault(ref);
        _require = tmp9;
        if (cResult[0] !== tmp9) {
          const fn = function l() {
            return closure_0(ContentDismissActionType.TAKE_ACTION);
          };
          cResult[0] = tmp9;
          cResult[1] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[1];
        }
        let tmp11 = !nestedInLaunchPad;
        if (!nestedInLaunchPad) {
          tmp11 = !tmp6;
        }
        if (cResult[2] === nestedInLaunchPad) {
          if (cResult[3] === tmp10) {
            if (cResult[4] === isForLaterExperimentOn) {
              if (cResult[5] === tmp4.actionButtons) {
                if (cResult[6] === tmp4.headerClose) {
                  if (cResult[7] === tmp4.headerText) {
                    if (cResult[8] === tmp4.headerTitle) {
                      let tmp12 = cResult[9];
                    }
                    if (cResult[10] === tmp11) {
                      if (cResult[11] === tmp12) {
                        let tmp22 = cResult[12];
                      }
                      if (cResult[13] !== tmp4.headerBorder) {
                        const obj3 = { style: null };
                        const items = [tmp4.headerBorder];
                        obj3.style = items;
                        const tmp28 = closure_7(View, obj3);
                        cResult[13] = tmp4.headerBorder;
                        cResult[14] = tmp28;
                        let tmp25 = tmp28;
                      } else {
                        tmp25 = cResult[14];
                      }
                      if (cResult[15] === tmp22) {
                        if (cResult[16] === tmp25) {
                          let tmp29 = cResult[17];
                        }
                        return tmp29;
                      }
                      const obj4 = { children: null };
                      const items1 = [tmp22, tmp25];
                      obj4.children = items1;
                      const tmp32 = closure_9(View, obj4);
                      cResult[15] = tmp22;
                      cResult[16] = tmp25;
                      cResult[17] = tmp32;
                      tmp29 = tmp32;
                    }
                    const obj5 = { top: tmp11, children: tmp12 };
                    const tmp24 = closure_7(tmp(6619).SafeAreaPaddingView, obj5);
                    cResult[10] = tmp11;
                    cResult[11] = tmp12;
                    cResult[12] = tmp24;
                    tmp22 = tmp24;
                  }
                }
              }
            }
          }
        }
        let tmp14Result2 = null;
        if (!nestedInLaunchPad) {
          const obj6 = { style: tmp4.headerTitle, children: null };
          const obj7 = { style: tmp4.headerClose, accessibilityLabel: null, onPress: null, children: null };
          const intl = tmp(1126).intl;
          obj7.accessibilityLabel = intl.string(tmp(1126).t["13/7kX"]);
          obj7.onPress = goBack;
          obj7.children = closure_7(tmp(16345).LeftBackIconWithBadge, {});
          const items2 = [closure_7(tmp(5909).PressableOpacity, obj7), ,];
          const obj8 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            style: tmp4.headerText,
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: null,
          };
          const intl2 = tmp(1126).intl;
          obj8.children = intl2.string(tmp(1126).t.HcoRu0);
          items2[1] = closure_7(tmp(4886).Text, obj8);
          const obj9 = { style: tmp4.actionButtons, children: null };
          let tmp14Result = null;
          if (isForLaterExperimentOn) {
            const obj10 = { children: null };
            const obj11 = { ref, type: tmp(7495).SavedMessageSortTypes.BOOKMARK, onOpen: tmp10 };
            const items3 = [closure_7(ForLaterOpenActionButtonDefault, obj11)];
            const obj12 = { type: null, onOpen: null };
            const tmp5Result = ForLaterOpenActionButtonDefault;
            obj12.type = tmp(7495).SavedMessageSortTypes.REMINDER;
            obj12.onOpen = tmp10;
            items3[1] = closure_7(ForLaterOpenActionButtonDefault, obj12);
            obj10.children = items3;
            tmp14Result = closure_9(closure_8, obj10);
            const tmp5Result2 = ForLaterOpenActionButtonDefault;
          }
          const items4 = [tmp14Result, closure_7(NotificationCenterActionButtonDefault, {})];
          obj9.children = items4;
          items2[2] = closure_9(View, obj9);
          obj6.children = items2;
          tmp14Result2 = closure_9(View, obj6);
        }
        cResult[2] = nestedInLaunchPad;
        cResult[3] = tmp10;
        cResult[4] = isForLaterExperimentOn;
        cResult[5] = tmp4.actionButtons;
        cResult[6] = tmp4.headerClose;
        cResult[7] = tmp4.headerText;
        cResult[8] = tmp4.headerTitle;
        cResult[9] = tmp14Result2;
        tmp12 = tmp14Result2;
        const obj2 = require("ForLaterExperiment");
      }
    : (nestedInLaunchPad) => {
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
          const intl = tmp5(1126).intl;
          obj4.accessibilityLabel = intl.string(tmp5(1126).t["13/7kX"]);
          obj4.onPress = goBack;
          obj4.children = closure_7(tmp5(16345).LeftBackIconWithBadge, {});
          const items1 = [closure_7(tmp5(5909).PressableOpacity, obj4), ,];
          const obj5 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            style: tmp.headerText,
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: null,
          };
          const intl2 = tmp5(1126).intl;
          obj5.children = intl2.string(tmp5(1126).t.HcoRu0);
          items1[1] = closure_7(tmp5(4886).Text, obj5);
          const obj6 = { style: tmp.actionButtons, children: null };
          let tmp10Result = null;
          if (isForLaterExperimentOn) {
            const obj7 = { children: null };
            const obj8 = { ref, type: tmp5(7495).SavedMessageSortTypes.BOOKMARK, onOpen: callback };
            const items2 = [closure_7(ForLaterOpenActionButtonDefault, obj8)];
            const obj9 = { type: null, onOpen: null };
            const tmp2Result = ForLaterOpenActionButtonDefault;
            obj9.type = tmp5(7495).SavedMessageSortTypes.REMINDER;
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
        const items4 = [closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj2)];
        const obj11 = { style: null };
        const items5 = [tmp.headerBorder];
        obj11.style = items5;
        items4[1] = closure_7(View, obj11);
        obj10.children = items4;
        return closure_9(View, obj10);
      },
);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ style, nestedInLaunchPad, inNestedNavigator } = arg0);
      const tmp6 = closure_10();
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.NOTIFICATIONS,
      ).analyticsLocations;
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
        const fn2 = function u() {
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
          const tmp31 = options(View, obj5);
          cResult[13] = tmp14;
          cResult[14] = tmp15;
          cResult[15] = tmp22;
          cResult[16] = tmp31;
          tmp28 = tmp31;
        }
        const obj6 = { nestedInLaunchPad: tmp4, inNestedNavigator: tmp5 };
        const tmp18 = React5(closure_12, obj6);
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
    }
  : (nestedInLaunchPad) => {
      let flag = nestedInLaunchPad.nestedInLaunchPad;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = nestedInLaunchPad.inNestedNavigator;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const tmp = closure_10();
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
      const items1 = [
        React5(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 }),
        React5(NotificationCenterPermissionNudgeDefault, {}),
        React5(NotificationCenterForYou.NotificationCenterForYou, { nestedInLaunchPad: flag }),
        React5(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" }),
      ];
      obj4.children = items1;
      obj3.children = options(View, obj4);
      obj2.children = React5(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
      return React5(LayerScope.LayerScope, obj2);
    };
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      const cResult = c.c(15);
      const tmp5 = useColorThemeBackgroundDefault();
      let containerOuter = useSafeAreaInsetsDefault().top;
      const tmp6 = useIsWindowLargeDefault();
      let containerOuterTablet = closure_10();
      if (cResult[0] === tmp6) {
        if (cResult[1] === containerOuter) {
          if (cResult[2] === containerOuterTablet.containerOuter) {
            if (cResult[3] === containerOuterTablet.containerOuterTablet) {
              const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(
                YouBarNavigatorScreens.NOTIFICATIONS,
              );
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
                  const tmp30 = options(View, obj2);
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
              const tmp23 = React5(closure_13, obj4);
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
        const items1 = [containerOuterTablet.containerOuterTablet];
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
    }
  : (route) => {
      const top = useSafeAreaInsetsDefault().top;
      const tmp2 = useIsWindowLargeDefault();
      closure_1 = tmp2;
      const tmp3 = closure_10();
      closure_2 = tmp3;
      let items = [tmp3, tmp2, top];
      const memo = noop.useMemo(() => {
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
      const tmp = useColorThemeBackgroundDefault();
      const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
      const obj2 = { style: memo, children: null };
      const items1 = [React5(ThemedGradientDefault, { absolute: true })];
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
      obj3.children = React5(closure_13, obj4);
      items1[1] = React5(native.ThemeContextProvider, obj3);
      obj2.children = items1;
      return options(View, obj2);
    };
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
  flexGrow: 1,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default tmp3;
export { goBack };
export const ThemedNotifications = tmp4;
export const ThemedNotificationsModal = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5 = React5(closure_14, { inNestedNavigator: true });
        cResult[0] = tmp5;
        let first = tmp5;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => React5(closure_14, { inNestedNavigator: true });
