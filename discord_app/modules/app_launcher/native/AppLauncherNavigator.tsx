// discord_app/modules/app_launcher/native/AppLauncherNavigator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AppLauncherNativeConstants from "AppLauncherNativeConstants.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import AppLauncherHomeScreenDefault from "screens/home/AppLauncherHomeScreen.tsx";
import AppLauncherApplicationViewScreenDefault from "screens/application_view/AppLauncherApplicationViewScreen.tsx";
import AppLauncherCommandViewScreenDefault from "screens/command_view/AppLauncherCommandViewScreen.tsx";
import AppLauncherViewAllScreenDefault from "screens/app_list_view/AppLauncherViewAllScreen.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../_runtime/07556_NativeStackView.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj1, trackWithMetadataResult;

let c10;
let c9;
let obj2;
let closure_3 = ["initialRouteName"];
let closure_4 = ["initialRouteName"];
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = NativeStackView.createNativeStackNavigator();
let obj = { navigator: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  paddingTop: 16,
  overflow: "visible",
  flex: 1,
};
let closure_12 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let bottomSheetExpandReasonRef;
        let bottomSheetIndex;
        let bottomSheetPosition;
        let chatInputRef;
        let contentStyle;
        let context;
        let entrypoint;
        let expandBottomSheet;
        let keyboardCloseReasonRef;
        let obj3;
        let obj5;
        let onActivityItemSelected;
        let overrideParams;
        let tmp10;
        let tmp15;
        let tmp9;
        let width;
        let obj = entrypoint(576);
        const cResult = obj.c(61);
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
        const tmp5 = useAnalyticsLocationsDefault;
        const analyticsLocations = tmp5(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
        const tmp6 = closure_12();
        const useKeyboardContextForType = entrypoint(4747).useKeyboardContextForType;
        entrypoint(4747);
        if (overrideParams == null) {
          overrideParams = useKeyboardContextForType(entrypoint(1616).KeyboardTypes.APP_LAUNCHER);
        }
        const tmpResult = entrypoint(6496);
        const accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
        if (cResult[0] !== overrideParams) {
          const initialRouteName = overrideParams.initialRouteName;
          const tmp13 = _objectWithoutProperties(overrideParams, closure_3);
          cResult[0] = overrideParams;
          cResult[1] = initialRouteName;
          cResult[2] = tmp13;
          tmp10 = tmp13;
          tmp9 = initialRouteName;
        } else {
          tmp9 = cResult[1];
          tmp10 = cResult[2];
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
          tmp15 = items;
        } else {
          class S {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { location: "app_launcher", source: entrypoint };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj1);
              return;
            }
          }
          tmp15 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(S, tmp15);
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
              if (cResult[15] === tmp9) {
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
                let obj2 = {
                  name: AppLauncherRouteName.APPLICATION_VIEW,
                  component: AppLauncherApplicationViewScreenDefault,
                  initialParams: obj3,
                };
                const Screen2 = closure_11.Screen;
                obj3 = { context, expandBottomSheet };
                const merged = Object.assign(tmp28);
                cResult[18] = context;
                cResult[19] = expandBottomSheet;
                cResult[20] = tmp28;
                cResult[21] = closure_9(Screen2, obj2);
                const tmp36 = closure_9(Screen2, obj2);
              }
              if (tmp9 !== AppLauncherRouteName.APPLICATION_VIEW) {
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
              cResult[15] = tmp9;
              cResult[16] = tmp10;
              cResult[17] = tmp10;
            }
            const Screen = closure_11.Screen;
            const obj4 = {
              name: AppLauncherRouteName.HOME,
              component: AppLauncherHomeScreenDefault,
              initialParams: obj5,
            };
            obj5 = { context, initialSearchQuery: undefined };
            cResult[12] = context;
            cResult[13] = undefined;
            cResult[14] = closure_9(Screen, obj4);
            const tmp27 = closure_9(Screen, obj4);
          }
          const obj6 = { contentStyle: tmp17, headerShown: false, fullScreenGestureEnabled: true };
          const merged1 = Object.assign(accessibilityNativeStackOptions);
          cResult[9] = accessibilityNativeStackOptions;
          cResult[10] = tmp17;
          cResult[11] = obj6;
        }
        const items1 = [tmp6.navigator, contentStyle];
        cResult[6] = contentStyle;
        cResult[7] = tmp6.navigator;
        cResult[8] = items1;
      }
    : (arg0) => {
        let Navigator;
        let bottomSheetExpandReasonRef;
        let bottomSheetIndex;
        let bottomSheetPosition;
        let chatInputRef;
        let contentStyle;
        let context;
        let entrypoint;
        let expandBottomSheet;
        let initialSearchQuery;
        let items1;
        let items2;
        let keyboardCloseReasonRef;
        let obj10;
        let obj13;
        let obj16;
        let obj2;
        let obj3;
        let obj5;
        let obj7;
        let onActivityItemSelected;
        let overrideParams;
        let width;
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
        const analyticsLocations = tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
        const tmp4 = closure_12();
        const useKeyboardContextForType = entrypoint(4747).useKeyboardContextForType;
        entrypoint(4747);
        if (overrideParams == null) {
          overrideParams = useKeyboardContextForType(entrypoint(1616).KeyboardTypes.APP_LAUNCHER);
        }
        const tmp5Result = entrypoint(6496);
        const accessibilityNativeStackOptions = tmp5Result.useAccessibilityNativeStackOptions();
        const initialRouteName = overrideParams.initialRouteName;
        let obj14 = _objectWithoutProperties(overrideParams, closure_4);
        const items = [entrypoint];
        const layoutEffect = react.useLayoutEffect(() => {
          const obj = AppAnalyticsUtils;
          const obj2 = { location: "app_launcher", source: entrypoint };
          obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
        }, items);
        const NavigationIndependentTree = entrypoint(1491).NavigationIndependentTree;
        const NavigationContainer = entrypoint(1491).NavigationContainer;
        let obj = { value: analyticsLocations, children: closure_10(Navigator, obj2) };
        obj2 = { initialRouteName, screenOptions: obj3, children: items2 };
        obj3 = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
        items1 = [tmp4.navigator, contentStyle];
        const AnalyticsLocationProvider = entrypoint(6657).AnalyticsLocationProvider;
        Navigator = closure_11.Navigator;
        const merged = Object.assign(accessibilityNativeStackOptions);
        const Screen = closure_11.Screen;
        const obj4 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: obj5 };
        obj5 = { context, initialSearchQuery };
        initialSearchQuery = undefined;
        if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
          initialSearchQuery = overrideParams.initialSearchQuery;
        }
        items2 = [closure_9(Screen, obj4), , ,];
        const Screen2 = closure_11.Screen;
        const obj6 = {
          name: AppLauncherRouteName.APPLICATION_VIEW,
          component: AppLauncherApplicationViewScreenDefault,
          initialParams: obj7,
        };
        let obj8 = obj14;
        obj7 = { context, expandBottomSheet };
        if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
          obj8 = {};
        }
        const merged1 = Object.assign(obj8);
        items2[1] = closure_9(Screen2, obj6);
        const Screen3 = closure_11.Screen;
        let tmp16;
        const obj9 = {
          name: AppLauncherRouteName.COMMAND_VIEW,
          component: AppLauncherCommandViewScreenDefault,
          initialParams: obj10,
        };
        if ("channel" === context.type) {
          tmp16 = context;
        }
        let obj11 = obj14;
        obj10 = { context: tmp16, expandBottomSheet };
        if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
          obj11 = {};
        }
        const merged2 = Object.assign(obj11);
        items2[2] = closure_9(Screen3, obj9);
        const Screen4 = closure_11.Screen;
        const obj12 = {
          name: AppLauncherRouteName.APP_LIST_VIEW,
          component: AppLauncherViewAllScreenDefault,
          initialParams: obj13,
        };
        obj13 = { context };
        if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
          obj14 = {};
        }
        const obj15 = { children: closure_9(NavigationContainer, obj16) };
        obj16 = { children: closure_9(AnalyticsLocationProvider, obj) };
        const merged3 = Object.assign(obj14);
        items2[3] = closure_9(Screen4, obj12);
        let tmp20 = "customId" in overrideParams;
        const tmp9Result = closure_9(NavigationIndependentTree, obj15);
        if (!tmp20) {
          tmp20 = "referrerId" in overrideParams;
        }
        let tmp21 = null;
        if (tmp20) {
          const obj17 = { customId: null, referrerId: null };
          ({ customId: obj18.customId, referrerId: obj18.referrerId } = overrideParams);
          tmp21 = obj17;
        }
        const obj19 = {
          value: {
            bottomSheetExpandReasonRef,
            bottomSheetIndex,
            bottomSheetPosition,
            chatInputRef,
            entrypoint,
            entrypointParams: tmp21,
            keyboardCloseReasonRef,
            onActivityItemSelected,
            width,
          },
          children: tmp9Result,
        };
        return closure_9(entrypoint(10994).AppLauncherContext.Provider, obj19);
      },
);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
