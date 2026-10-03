// discord_app/modules/app_launcher/native/AppLauncherNavigator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import AppLauncherHomeScreenDefault from "screens/home/AppLauncherHomeScreen.tsx";
import AppLauncherApplicationViewScreenDefault from "screens/application_view/AppLauncherApplicationViewScreen.tsx";
import AppLauncherCommandViewScreenDefault from "screens/command_view/AppLauncherCommandViewScreen.tsx";
import AppLauncherViewAllScreenDefault from "screens/app_list_view/AppLauncherViewAllScreen.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["initialRouteName"];
let closure_4 = ["initialRouteName"];
const AppLauncherRouteName = fn(1489).AppLauncherRouteName;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const NativeStackNavigator = fn(7556);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4890);
let obj = {
  navigator: {
    backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
    paddingTop: 16,
    overflow: "visible",
    flex: 1,
  },
};
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  paddingTop: 16,
  overflow: "visible",
  flex: 1,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = entrypoint(576).c(61);
        ({
          bottomSheetExpandReasonRef,
          bottomSheetIndex,
          bottomSheetPosition,
          context,
          chatInputRef,
          contentStyle,
          entrypoint,
        } = arg0);
        ({ expandBottomSheet, keyboardCloseReasonRef, onActivityItemSelected, width, overrideParams } = arg0);
        const obj = entrypoint(576);
        const analyticsLocations = useAnalyticsLocationsDefault(
          AnalyticsLocationDefault.APP_LAUNCHER,
        ).analyticsLocations;
        const tmp6 = closure_12();
        if (overrideParams == null) {
          overrideParams = obj2.useKeyboardContextForType(entrypoint(1616).KeyboardTypes.APP_LAUNCHER);
        }
        obj2 = entrypoint(4747);
        const accessibilityNativeStackOptions = entrypoint(6496).useAccessibilityNativeStackOptions();
        if (cResult[0] !== overrideParams) {
          const initialRouteName = overrideParams.initialRouteName;
          const tmp12 = _objectWithoutProperties(overrideParams, closure_3);
          cResult[0] = overrideParams;
          cResult[1] = initialRouteName;
          cResult[2] = tmp12;
          let tmp9 = tmp12;
          let tmp8 = initialRouteName;
        } else {
          tmp8 = cResult[1];
          tmp9 = cResult[2];
        }
        if (cResult[3] !== entrypoint) {
          class S {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { location: "app_launcher", source: entrypoint };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj1);
              return;
            }
          }
          const items = [entrypoint];
          cResult[3] = entrypoint;
          cResult[4] = S;
          cResult[5] = items;
          let tmp14 = items;
        } else {
          class S {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { location: "app_launcher", source: entrypoint };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj1);
              return;
            }
          }
          tmp14 = cResult[5];
        }
        const layoutEffect = noop.useLayoutEffect(S, tmp14);
        if (cResult[6] === contentStyle) {
          class S {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { location: "app_launcher", source: entrypoint };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj1);
              return;
            }
          }
          if (cResult[9] === accessibilityNativeStackOptions) {
            class S {
              constructor() {
                obj = closure_0(closure_2[15]);
                obj1 = { location: "app_launcher", source: entrypoint };
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj1);
                return;
              }
            }
            if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
              class S {
                constructor() {
                  obj = closure_0(closure_2[15]);
                  obj1 = { location: "app_launcher", source: entrypoint };
                  trackWithMetadataResult = obj.trackWithMetadata(
                    AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL,
                    obj1,
                  );
                  return;
                }
              }
            }
            if (cResult[12] === context) {
              class S {
                constructor() {
                  obj = closure_0(closure_2[15]);
                  obj1 = { location: "app_launcher", source: entrypoint };
                  trackWithMetadataResult = obj.trackWithMetadata(
                    AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL,
                    obj1,
                  );
                  return;
                }
              }
              if (cResult[15] === tmp8) {
                class S {
                  constructor() {
                    obj = closure_0(closure_2[15]);
                    obj1 = { location: "app_launcher", source: entrypoint };
                    trackWithMetadataResult = obj.trackWithMetadata(
                      AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL,
                      obj1,
                    );
                    return;
                  }
                }
                if (cResult[18] === context) {
                  class S {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { location: "app_launcher", source: entrypoint };
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL,
                        obj1,
                      );
                      return;
                    }
                  }
                }
                const obj3 = {
                  name: AppLauncherRouteName.APPLICATION_VIEW,
                  component: AppLauncherApplicationViewScreenDefault,
                  initialParams: null,
                };
                const obj4 = { context };
                const merged = Object.assign(tmp27);
                obj4.expandBottomSheet = expandBottomSheet;
                obj3.initialParams = obj4;
                const tmp35 = closure_9(closure_11.Screen, obj3);
                cResult[18] = context;
                cResult[19] = expandBottomSheet;
                cResult[20] = tmp27;
                cResult[21] = tmp35;
              }
              if (tmp8 !== AppLauncherRouteName.APPLICATION_VIEW) {
                class S {
                  constructor() {
                    obj = closure_0(closure_2[15]);
                    obj1 = { location: "app_launcher", source: entrypoint };
                    trackWithMetadataResult = obj.trackWithMetadata(
                      AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL,
                      obj1,
                    );
                    return;
                  }
                }
              }
              cResult[15] = tmp8;
              cResult[16] = tmp9;
              cResult[17] = tmp9;
            }
            const obj5 = {
              name: AppLauncherRouteName.HOME,
              component: AppLauncherHomeScreenDefault,
              initialParams: null,
            };
            const obj6 = { context, initialSearchQuery: undefined };
            obj5.initialParams = obj6;
            const tmp26 = closure_9(closure_11.Screen, obj5);
            cResult[12] = context;
            cResult[13] = undefined;
            cResult[14] = tmp26;
          }
          const obj7 = { contentStyle: tmp16, headerShown: false, fullScreenGestureEnabled: true };
          const merged1 = Object.assign(accessibilityNativeStackOptions);
          cResult[9] = accessibilityNativeStackOptions;
          cResult[10] = tmp16;
          cResult[11] = obj7;
        }
        const items1 = [tmp6.navigator, contentStyle];
        cResult[6] = contentStyle;
        cResult[7] = tmp6.navigator;
        cResult[8] = items1;
        const tmpResult = entrypoint(6496);
      }
    : (arg0) => {
        ({ context, entrypoint } = arg0);
        ({ expandBottomSheet, overrideParams } = arg0);
        ({
          bottomSheetExpandReasonRef,
          bottomSheetIndex,
          bottomSheetPosition,
          chatInputRef,
          contentStyle,
          keyboardCloseReasonRef,
          onActivityItemSelected,
          width,
        } = arg0);
        const tmp3 = useAnalyticsLocationsDefault;
        const tmp4 = closure_12();
        if (overrideParams == null) {
          overrideParams = obj.useKeyboardContextForType(entrypoint(1616).KeyboardTypes.APP_LAUNCHER);
        }
        obj = entrypoint(4747);
        const accessibilityNativeStackOptions = entrypoint(6496).useAccessibilityNativeStackOptions();
        const initialRouteName = overrideParams.initialRouteName;
        let obj15 = _objectWithoutProperties(overrideParams, closure_4);
        const items = [entrypoint];
        const layoutEffect = noop.useLayoutEffect(() => {
          AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
            location: "app_launcher",
            source: entrypoint,
          });
        }, items);
        const obj2 = { value: tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations, children: null };
        const obj3 = { initialRouteName, screenOptions: null, children: null };
        const obj4 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
        const items1 = [tmp4.navigator, contentStyle];
        obj4.contentStyle = items1;
        const merged = Object.assign(accessibilityNativeStackOptions);
        obj3.screenOptions = obj4;
        const obj5 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: null };
        const obj6 = { context, initialSearchQuery: null };
        let initialSearchQuery;
        if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
          initialSearchQuery = overrideParams.initialSearchQuery;
        }
        obj6.initialSearchQuery = initialSearchQuery;
        obj5.initialParams = obj6;
        const items2 = [closure_9(closure_11.Screen, obj5), , ,];
        const obj7 = {
          name: AppLauncherRouteName.APPLICATION_VIEW,
          component: AppLauncherApplicationViewScreenDefault,
          initialParams: null,
        };
        const obj8 = { context };
        let obj9 = obj15;
        if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
          obj9 = {};
        }
        const merged1 = Object.assign(obj9);
        obj8.expandBottomSheet = expandBottomSheet;
        obj7.initialParams = obj8;
        items2[1] = closure_9(closure_11.Screen, obj7);
        const obj10 = {
          name: AppLauncherRouteName.COMMAND_VIEW,
          component: AppLauncherCommandViewScreenDefault,
          initialParams: null,
        };
        let tmp15;
        if ("channel" === context.type) {
          tmp15 = context;
        }
        const obj11 = { context: tmp15 };
        let obj12 = obj15;
        if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
          obj12 = {};
        }
        const merged2 = Object.assign(obj12);
        obj11.expandBottomSheet = expandBottomSheet;
        obj10.initialParams = obj11;
        items2[2] = closure_9(closure_11.Screen, obj10);
        const obj13 = {
          name: AppLauncherRouteName.APP_LIST_VIEW,
          component: AppLauncherViewAllScreenDefault,
          initialParams: null,
        };
        if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
          obj15 = {};
        }
        const obj16 = { children: null };
        const obj17 = { children: null };
        const merged3 = Object.assign(obj15);
        obj13.initialParams = { context };
        items2[3] = closure_9(closure_11.Screen, obj13);
        obj3.children = items2;
        obj2.children = closure_10(closure_11.Navigator, obj3);
        obj17.children = closure_9(entrypoint(6657).AnalyticsLocationProvider, obj2);
        obj16.children = closure_9(entrypoint(1491).NavigationContainer, obj17);
        let tmp19 = "customId" in overrideParams;
        const obj14 = { context };
        const tmp5Result = entrypoint(6496);
        if (!tmp19) {
          tmp19 = "referrerId" in overrideParams;
        }
        let tmp20 = null;
        if (tmp19) {
          ({ customId: obj19.customId, referrerId: obj19.referrerId } = overrideParams);
          tmp20 = { customId: null, referrerId: null };
          const obj18 = { customId: null, referrerId: null };
        }
        const tmp8Result = closure_9(entrypoint(1491).NavigationIndependentTree, obj16);
        return closure_9(entrypoint(10994).AppLauncherContext.Provider, {
          value: {
            bottomSheetExpandReasonRef,
            bottomSheetIndex,
            bottomSheetPosition,
            chatInputRef,
            entrypoint,
            entrypointParams: tmp20,
            keyboardCloseReasonRef,
            onActivityItemSelected,
            width,
          },
          children: closure_9(entrypoint(1491).NavigationIndependentTree, obj16),
        });
      },
);
