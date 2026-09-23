// === Module 12415: AppLauncherNavigator ===

// Module 12415 (AppLauncherNavigator)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5007 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7493 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7513 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 12416 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 12460 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 12486 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 12528 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["initialRouteName"];
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const NativeStackNavigator = fn(8243);
let closure_10 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4827);
let obj = { navigator: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 } };
let closure_11 = createStyles.createStyles(obj);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(function AppLauncherNavigator(arg0) {
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = useAnalyticsLocationsDefault;
  const tmp4 = closure_11();
  if (overrideParams == null) {
    overrideParams = obj.useKeyboardContextForType(entrypoint(1610).KeyboardTypes.APP_LAUNCHER);
  }
  obj = entrypoint(4695);
  const accessibilityNativeStackOptions = entrypoint(7331).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj15 = _objectWithoutProperties(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = noop.useLayoutEffect(() => {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "app_launcher", source: entrypoint });
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
  const items2 = [closure_8(closure_10.Screen, obj5), , , ];
  const obj7 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: null };
  const obj8 = { context };
  let obj9 = obj15;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj9 = {};
  }
  const merged1 = Object.assign(obj9);
  obj8.expandBottomSheet = expandBottomSheet;
  obj7.initialParams = obj8;
  items2[1] = closure_8(closure_10.Screen, obj7);
  const obj10 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: null };
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
  items2[2] = closure_8(closure_10.Screen, obj10);
  const obj13 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: null };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj15 = {};
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  const merged3 = Object.assign(obj15);
  obj13.initialParams = { context };
  items2[3] = closure_8(closure_10.Screen, obj13);
  obj3.children = items2;
  obj2.children = closure_9(closure_10.Navigator, obj3);
  obj17.children = closure_8(entrypoint(7493).AnalyticsLocationProvider, obj2);
  obj16.children = closure_8(entrypoint(1485).NavigationContainer, obj17);
  let tmp19 = "customId" in overrideParams;
  const obj14 = { context };
  const tmp5Result = entrypoint(7331);
  if (!tmp19) {
    tmp19 = "referrerId" in overrideParams;
  }
  let tmp20 = null;
  if (tmp19) {
    ({ customId: obj19.customId, referrerId: obj19.referrerId } = overrideParams);
    tmp20 = { customId: null, referrerId: null };
    const obj18 = { customId: null, referrerId: null };
  }
  const tmp8Result = closure_8(entrypoint(1485).NavigationIndependentTree, obj16);
  return closure_8(entrypoint(11561).AppLauncherContext.Provider, { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp20, keyboardCloseReasonRef, onActivityItemSelected, width }, children: closure_8(entrypoint(1485).NavigationIndependentTree, obj16) });
});