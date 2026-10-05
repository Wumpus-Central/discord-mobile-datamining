// discord_app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import LayerScope2 from "../../../../../design/components/Layers/native/LayerScope.native.tsx";
import useAnalyticsLocations from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import MainTabsConstants from "../../MainTabsConstants.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import useForLaterCoachmarkDefault from "../../../../saved_messages/native/useForLaterCoachmark.tsx";
import ForLaterOpenActionButtonDefault from "../../../../saved_messages/native/ForLaterOpenActionButton.tsx";
import NotificationCenterActionButtonDefault from "../../../../notification_center/native/NotificationCenterActionButton.tsx";
import NotificationCenterPermissionNudgeDefault from "../../../../notification_center/native/NotificationCenterPermissionNudge.tsx";
import NotificationCenterForYou from "../../../../notification_center/native/NotificationCenterForYou.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, navigation, route;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
function goBack() {
  const obj = RootNavigationRef;
  navigation = obj.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
const View = react_native.View;
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  containerOuter: { flex: 1 },
  containerOuterTablet: obj2,
  container: obj3,
  headerTitle: { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" },
  actionButtons: { flexDirection: "row", gap: 12 },
  headerClose: size,
  headerText: { flex: 1, marginTop: 2 },
  headerBorder: size1,
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  flex: 1,
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
  flexGrow: 1,
};
size = {
  marginRight: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_32,
  width: nativeDefault.space.PX_32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
};
size1 = {
  left: 0,
  bottom: 0,
  height: 1,
  width: "100%",
  position: "absolute",
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (nestedInLaunchPad) => {
        let closure_0;
        let intl;
        let intl2;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let tmp10;
        const obj = require("react");
        const cResult = obj.c(18);
        nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
        const tmp4 = closure_10();
        const tmp6 = useIsWindowLargeDefault();
        const obj2 = require("ForLaterExperiment");
        const isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("NativeNotifications");
        const ref = react.useRef(null);
        const tmp9 = useForLaterCoachmarkDefault(ref);
        _require = tmp9;
        if (cResult[0] !== tmp9) {
          const fn = function l() {
            return closure_0(ContentDismissActionType.TAKE_ACTION);
          };
          cResult[0] = tmp9;
          cResult[1] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[1];
        }
        if (cResult[2] === nestedInLaunchPad) {
          if (cResult[3] === tmp10) {
            if (cResult[4] === isForLaterExperimentOn) {
              if (cResult[5] === tmp4.actionButtons) {
                if (cResult[6] === tmp4.headerClose) {
                  if (cResult[7] === tmp4.headerText) {
                    let tmp12;
                    if (cResult[8] === tmp4.headerTitle) {
                      tmp12 = cResult[9];
                    }
                    if (cResult[10] === (!nestedInLaunchPad && !tmp6)) {
                      let tmp22;
                      let tmp25;
                      if (cResult[11] === tmp12) {
                        tmp22 = cResult[12];
                      }
                      if (cResult[13] !== tmp4.headerBorder) {
                        const obj3 = { style: items };
                        items = [tmp4.headerBorder];
                        const tmp28 = closure_7(View, obj3);
                        cResult[13] = tmp4.headerBorder;
                        cResult[14] = tmp28;
                        tmp25 = tmp28;
                      } else {
                        tmp25 = cResult[14];
                      }
                      if (cResult[15] === tmp22) {
                        let tmp29;
                        if (cResult[16] === tmp25) {
                          tmp29 = cResult[17];
                        }
                        return tmp29;
                      }
                      const obj4 = { children: items1 };
                      items1 = [tmp22, tmp25];
                      const tmp32 = closure_9(View, obj4);
                      cResult[15] = tmp22;
                      cResult[16] = tmp25;
                      cResult[17] = tmp32;
                      tmp29 = tmp32;
                    }
                    const obj5 = { top: !nestedInLaunchPad && !tmp6, children: tmp12 };
                    const tmp24 = closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj5);
                    cResult[10] = !nestedInLaunchPad && !tmp6;
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
          const obj6 = { style: tmp4.headerTitle, children: items2 };
          const obj7 = {
            style: tmp4.headerClose,
            accessibilityLabel: intl.string(require("intl").t["13/7kX"]),
            onPress: goBack,
            children: closure_7(require("BackIconWithBadge").LeftBackIconWithBadge, {}),
          };
          const PressableOpacity = tmp(5909).PressableOpacity;
          intl = tmp(1126).intl;
          items2 = [closure_7(PressableOpacity, obj7), ,];
          const obj8 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            style: tmp4.headerText,
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: intl2.string(require("intl").t.HcoRu0),
          };
          const Text = tmp(4886).Text;
          intl2 = tmp(1126).intl;
          items2[1] = closure_7(Text, obj8);
          let tmp14Result = null;
          const obj9 = { style: tmp4.actionButtons, children: items4 };
          if (isForLaterExperimentOn) {
            const obj10 = { children: items3 };
            const obj11 = { ref, type: require("SavedMessagesTypes").SavedMessageSortTypes.BOOKMARK, onOpen: tmp10 };
            const tmp5Result = ForLaterOpenActionButtonDefault;
            items3 = [closure_7(tmp5Result, obj11)];
            const obj12 = { type: require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER, onOpen: tmp10 };
            const tmp5Result2 = ForLaterOpenActionButtonDefault;
            items3[1] = closure_7(tmp5Result2, obj12);
            tmp14Result = closure_9(closure_8, obj10);
          }
          items4 = [tmp14Result, closure_7(NotificationCenterActionButtonDefault, {})];
          items2[2] = closure_9(View, obj9);
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
      }
    : (nestedInLaunchPad) => {
        let closure_0;
        let intl;
        let intl2;
        let items1;
        let items2;
        let items3;
        let items4;
        let items5;
        let tmp10Result2;
        nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
        _require = undefined;
        const tmp = closure_10();
        const tmp4 = useIsWindowLargeDefault();
        const obj = require("ForLaterExperiment");
        const isForLaterExperimentOn = obj.useIsForLaterExperimentOn("NativeNotifications");
        const ref = react.useRef(null);
        const tmp8 = useForLaterCoachmarkDefault(ref);
        _require = tmp8;
        const items = [tmp8];
        const callback = react.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
        let tmp13 = !nestedInLaunchPad;
        const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
        if (!nestedInLaunchPad) {
          tmp13 = !tmp4;
        }
        const obj2 = { top: tmp13, children: tmp10Result2 };
        tmp10Result2 = null;
        if (!nestedInLaunchPad) {
          const obj3 = { style: tmp.headerTitle, children: items1 };
          const obj4 = {
            style: tmp.headerClose,
            accessibilityLabel: intl.string(require("intl").t["13/7kX"]),
            onPress: goBack,
            children: closure_7(require("BackIconWithBadge").LeftBackIconWithBadge, {}),
          };
          const PressableOpacity = tmp5(5909).PressableOpacity;
          intl = tmp5(1126).intl;
          items1 = [closure_7(PressableOpacity, obj4), ,];
          const obj5 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            style: tmp.headerText,
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: intl2.string(require("intl").t.HcoRu0),
          };
          const Text = tmp5(4886).Text;
          intl2 = tmp5(1126).intl;
          items1[1] = closure_7(Text, obj5);
          let tmp10Result = null;
          const obj6 = { style: tmp.actionButtons, children: items3 };
          if (isForLaterExperimentOn) {
            const obj7 = { children: items2 };
            const obj8 = { ref, type: require("SavedMessagesTypes").SavedMessageSortTypes.BOOKMARK, onOpen: callback };
            const tmp2Result = ForLaterOpenActionButtonDefault;
            items2 = [closure_7(tmp2Result, obj8)];
            const obj9 = { type: require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER, onOpen: callback };
            const tmp2Result2 = ForLaterOpenActionButtonDefault;
            items2[1] = closure_7(tmp2Result2, obj9);
            tmp10Result = closure_9(closure_8, obj7);
          }
          items3 = [tmp10Result, closure_7(NotificationCenterActionButtonDefault, {})];
          items1[2] = closure_9(View, obj6);
          tmp10Result2 = closure_9(View, obj3);
        }
        const obj10 = { children: items4 };
        items4 = [closure_7(SafeAreaPaddingView, obj2)];
        const obj11 = { style: items5 };
        items5 = [tmp.headerBorder];
        items4[1] = closure_7(View, obj11);
        return closure_9(View, obj10);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let inNestedNavigator;
      let items1;
      let nestedInLaunchPad;
      let obj4;
      let style;
      let tmp10;
      let tmp12;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(20);
      ({ style, nestedInLaunchPad, inNestedNavigator } = arg0);
      const tmp6 = closure_10();
      const tmp8 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp8(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const obj = require("TTIAnalyticsUtils");
          return obj.trackAppUIViewed();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp10 = items;
        tmp9 = fn;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          const obj = require("RootNavigationRef");
          navigation = obj.getRootNavigationRef();
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
        tmp12 = fn2;
      } else {
        tmp12 = cResult[2];
      }
      const tmpResult = useNavigatorBackPressHandler;
      tmpResult.useNavigatorBackPressHandler(tmp12);
      if (cResult[3] === style) {
        let tmp14;
        if (cResult[4] === tmp6.container) {
          tmp14 = cResult[5];
        }
        if (cResult[6] === (undefined !== inNestedNavigator && inNestedNavigator)) {
          let tmp15;
          let tmp19;
          let tmp22;
          let tmp25;
          if (cResult[7] === (undefined !== nestedInLaunchPad && nestedInLaunchPad)) {
            tmp15 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = metroImportDefault(NotificationCenterPermissionNudgeDefault, {});
            cResult[9] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[9];
          }
          if (cResult[10] !== (undefined !== nestedInLaunchPad && nestedInLaunchPad)) {
            const obj2 = { nestedInLaunchPad: undefined !== nestedInLaunchPad && nestedInLaunchPad };
            const tmp24 = metroImportDefault(NotificationCenterForYou.NotificationCenterForYou, obj2);
            cResult[10] = undefined !== nestedInLaunchPad && nestedInLaunchPad;
            cResult[11] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp27 = metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
              label: "notifications",
            });
            cResult[12] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[12];
          }
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp15) {
              let tmp28;
              if (cResult[15] === tmp22) {
                tmp28 = cResult[16];
              }
              if (cResult[17] === analyticsLocations) {
                let tmp32;
                if (cResult[18] === tmp28) {
                  tmp32 = cResult[19];
                }
                return tmp32;
              }
              const obj3 = {
                zIndex: 1,
                children: metroImportDefault(useAnalyticsLocations.AnalyticsLocationProvider, obj4),
              };
              const LayerScope = LayerScope2.LayerScope;
              obj4 = { value: analyticsLocations, children: tmp28 };
              const tmp34 = metroImportDefault(LayerScope, obj3);
              cResult[17] = analyticsLocations;
              cResult[18] = tmp28;
              cResult[19] = tmp34;
              tmp32 = tmp34;
            }
          }
          const obj5 = { style: tmp14, children: items1 };
          items1 = [tmp15, tmp19, tmp22, tmp25];
          const tmp31 = React4(View, obj5);
          cResult[13] = tmp14;
          cResult[14] = tmp15;
          cResult[15] = tmp22;
          cResult[16] = tmp31;
          tmp28 = tmp31;
        }
        const obj6 = {
          nestedInLaunchPad: undefined !== nestedInLaunchPad && nestedInLaunchPad,
          inNestedNavigator: undefined !== inNestedNavigator && inNestedNavigator,
        };
        const tmp18 = metroImportDefault(closure_12, obj6);
        cResult[6] = undefined !== inNestedNavigator && inNestedNavigator;
        cResult[7] = undefined !== nestedInLaunchPad && nestedInLaunchPad;
        cResult[8] = tmp18;
        tmp15 = tmp18;
      }
      const items2 = [tmp6.container, style];
      cResult[3] = style;
      cResult[4] = tmp6.container;
      cResult[5] = items2;
      tmp14 = items2;
    }
  : (nestedInLaunchPad) => {
      let AnalyticsLocationProvider;
      let items;
      let items1;
      let obj3;
      let obj4;
      let flag = nestedInLaunchPad.nestedInLaunchPad;
      const style = nestedInLaunchPad.style;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = nestedInLaunchPad.inNestedNavigator;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const tmp = closure_10();
      const tmp2 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp2(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations;
      const layoutEffect = react.useLayoutEffect(() => {
        const obj = require("TTIAnalyticsUtils");
        return obj.trackAppUIViewed();
      }, []);
      const callback = react.useCallback(() => {
        const obj = require("RootNavigationRef");
        navigation = obj.getRootNavigationRef();
        if (null != navigation) {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("guilds");
          }
        }
        return true;
      }, []);
      let obj = useNavigatorBackPressHandler;
      obj.useNavigatorBackPressHandler(callback);
      const obj2 = { zIndex: 1, children: metroImportDefault(AnalyticsLocationProvider, obj3) };
      const LayerScope = LayerScope2.LayerScope;
      obj3 = { value: analyticsLocations, children: React4(View, obj4) };
      obj4 = { style: items, children: items1 };
      items = [tmp.container, style];
      AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      items1 = [
        metroImportDefault(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 }),
        metroImportDefault(NotificationCenterPermissionNudgeDefault, {}),
        metroImportDefault(NotificationCenterForYou.NotificationCenterForYou, { nestedInLaunchPad: flag }),
        metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" }),
      ];
      return metroImportDefault(LayerScope, obj2);
    };
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let containerOuter;
      let items;
      const obj = react2;
      const cResult = obj.c(15);
      const tmp5 = useColorThemeBackgroundDefault();
      const top = useSafeAreaInsetsDefault().top;
      const tmp6 = useIsWindowLargeDefault();
      const tmp7 = closure_10();
      if (cResult[0] === tmp6) {
        if (cResult[1] === top) {
          if (cResult[2] === tmp7.containerOuter) {
            let tmp8;
            let tmp12;
            if (cResult[3] === tmp7.containerOuterTablet) {
              tmp8 = cResult[4];
            }
            const tmpResult = TabsPerformanceTracker;
            const trackTabPerformance = tmpResult.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp14 = metroImportDefault(ThemedGradientDefault, { absolute: true });
              cResult[5] = tmp14;
              tmp12 = tmp14;
            } else {
              tmp12 = cResult[5];
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
              let tmp18;
              if (cResult[7] === inNestedNavigator) {
                tmp18 = cResult[8];
              }
              if (cResult[9] === tmp5) {
                let tmp25;
                if (cResult[10] === tmp18) {
                  tmp25 = cResult[11];
                }
                if (cResult[12] === tmp8) {
                  let tmp28;
                  if (cResult[13] === tmp25) {
                    tmp28 = cResult[14];
                  }
                  return tmp28;
                }
                const obj2 = { style: tmp8, children: items };
                items = [tmp12, tmp25];
                const tmp31 = React4(View, obj2);
                cResult[12] = tmp8;
                cResult[13] = tmp25;
                cResult[14] = tmp31;
                tmp28 = tmp31;
              }
              const obj3 = { gradient: tmp5, children: tmp18 };
              const tmp27 = metroImportDefault(native.ThemeContextProvider, obj3);
              cResult[9] = tmp5;
              cResult[10] = tmp18;
              cResult[11] = tmp27;
              tmp25 = tmp27;
            }
            const obj4 = { inNestedNavigator };
            const merged = Object.assign(route);
            const tmp24 = metroImportDefault(closure_13, obj4);
            cResult[6] = route;
            cResult[7] = inNestedNavigator;
            cResult[8] = tmp24;
            tmp18 = tmp24;
          }
        }
      }
      if (tmp6) {
        const items1 = [tmp7.containerOuterTablet];
        const obj5 = { paddingTop: top };
        items1[1] = obj5;
        containerOuter = items1;
      } else {
        containerOuter = tmp7.containerOuter;
      }
      cResult[0] = tmp6;
      cResult[1] = top;
      cResult[2] = tmp7.containerOuter;
      cResult[3] = tmp7.containerOuterTablet;
      cResult[4] = containerOuter;
      tmp8 = containerOuter;
    }
  : (route) => {
      let inNestedNavigator;
      let items1;
      let obj4;
      const tmp = useColorThemeBackgroundDefault();
      const top = useSafeAreaInsetsDefault().top;
      const tmp2 = useIsWindowLargeDefault();
      let closure_1 = tmp2;
      const tmp3 = closure_10();
      let closure_2 = tmp3;
      let items = [tmp3, tmp2, top];
      const memo = react.useMemo(() => {
        let containerOuter;
        if (closure_1) {
          const items = [closure_2.containerOuterTablet];
          const obj = { paddingTop: top };
          items[1] = obj;
          containerOuter = items;
        } else {
          containerOuter = closure_2.containerOuter;
        }
        return containerOuter;
      }, items);
      let obj = TabsPerformanceTracker;
      const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
      const obj2 = { style: memo, children: items1 };
      items1 = [metroImportDefault(ThemedGradientDefault, { absolute: true })];
      const obj3 = { gradient: tmp, children: metroImportDefault(closure_13, obj4) };
      obj4 = { inNestedNavigator };
      const ThemeContextProvider = native.ThemeContextProvider;
      const merged = Object.assign(route);
      route = route.route;
      inNestedNavigator = undefined;
      if (route != null) {
        const params = route.params;
        if (params != null) {
          inNestedNavigator = params.inNestedNavigator;
        }
      }
      items1[1] = metroImportDefault(ThemeContextProvider, obj3);
      return React4(View, obj2);
    };
let closure_14 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5 = metroImportDefault(closure_14, { inNestedNavigator: true });
        cResult[0] = tmp5;
        first = tmp5;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => metroImportDefault(closure_14, { inNestedNavigator: true });
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default tmp4;
export { goBack };
export const ThemedNotifications = tmp5;
export const ThemedNotificationsModal = tmp6;
