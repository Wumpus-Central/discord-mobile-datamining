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
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const NativeStackNavigator = fn(7913);
let closure_10 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4560);
let obj = { navigator: null };
obj = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  paddingTop: 16,
  overflow: "visible",
  flex: 1,
};
obj.navigator = obj;
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(function AppLauncherNavigator(arg0) {
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
  let obj = entrypoint(4427);
  if (overrideParams == null) {
    overrideParams = obj.useKeyboardContextForType(entrypoint(1609).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4 = closure_11();
  const accessibilityNativeStackOptions = entrypoint(7000).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj12 = _objectWithoutProperties(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  obj = { value: tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations, children: null };
  obj = { initialRouteName, screenOptions: null, children: null };
  const obj1 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
  const items1 = [tmp4.navigator, contentStyle];
  obj1.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = obj1;
  const obj2 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: null };
  const obj3 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj3.initialSearchQuery = initialSearchQuery;
  obj2.initialParams = obj3;
  const items2 = [closure_8(closure_10.Screen, obj2), , ,];
  const obj4 = {
    name: AppLauncherRouteName.APPLICATION_VIEW,
    component: AppLauncherApplicationViewScreenDefault,
    initialParams: null,
  };
  const obj5 = { context };
  let obj6 = obj12;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj5.expandBottomSheet = expandBottomSheet;
  obj4.initialParams = obj5;
  items2[1] = closure_8(closure_10.Screen, obj4);
  const obj7 = {
    name: AppLauncherRouteName.COMMAND_VIEW,
    component: AppLauncherCommandViewScreenDefault,
    initialParams: null,
  };
  let tmp15;
  if ("channel" === context.type) {
    tmp15 = context;
  }
  const obj8 = { context: tmp15 };
  let obj9 = obj12;
  if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj9 = {};
  }
  const merged2 = Object.assign(obj9);
  obj8.expandBottomSheet = expandBottomSheet;
  obj7.initialParams = obj8;
  items2[2] = closure_8(closure_10.Screen, obj7);
  const obj10 = {
    name: AppLauncherRouteName.APP_LIST_VIEW,
    component: AppLauncherViewAllScreenDefault,
    initialParams: null,
  };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj12 = {};
  }
  const obj13 = { children: null };
  const obj14 = { children: null };
  const merged3 = Object.assign(obj12);
  obj10.initialParams = { context };
  items2[3] = closure_8(closure_10.Screen, obj10);
  obj.children = items2;
  obj.children = closure_9(closure_10.Navigator, obj);
  obj14.children = closure_8(entrypoint(7162).AnalyticsLocationProvider, obj);
  obj13.children = closure_8(entrypoint(1484).NavigationContainer, obj14);
  let tmp19 = "customId" in overrideParams;
  const obj11 = { context };
  const tmp5Result = entrypoint(7000);
  if (!tmp19) {
    tmp19 = "referrerId" in overrideParams;
  }
  let tmp20 = null;
  if (tmp19) {
    ({ customId: obj19.customId, referrerId: obj19.referrerId } = overrideParams);
    tmp20 = { customId: null, referrerId: null };
    const obj15 = { customId: null, referrerId: null };
  }
  const tmp8Result = closure_8(entrypoint(1484).NavigationIndependentTree, obj13);
  return closure_8(entrypoint(11215).AppLauncherContext.Provider, {
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
    children: closure_8(entrypoint(1484).NavigationIndependentTree, obj13),
  });
});
