// === Module 12269: AppLauncherNavigator ===

// Module 12269 (AppLauncherNavigator)
import nativeDefault from "native" /* 575 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["initialRouteName"];
const AppLauncherRouteName = fn(1496).AppLauncherRouteName;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const NativeStackNavigator = fn(9856);
let closure_10 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5014);
let obj = { navigator: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 } };
let closure_11 = createStyles.createStyles(obj);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default noop.memo(function AppLauncherNavigator(bottomSheetExpandReasonRef) {
  bottomSheetExpandReasonRef = bottomSheetExpandReasonRef.bottomSheetExpandReasonRef;
  const bottomSheetIndex = bottomSheetExpandReasonRef.bottomSheetIndex;
  const bottomSheetPosition = bottomSheetExpandReasonRef.bottomSheetPosition;
  ({ context, chatInputRef } = bottomSheetExpandReasonRef);
  const entrypoint = bottomSheetExpandReasonRef.entrypoint;
  ({ expandBottomSheet, keyboardCloseReasonRef } = bottomSheetExpandReasonRef);
  const onActivityItemSelected = bottomSheetExpandReasonRef.onActivityItemSelected;
  const width = bottomSheetExpandReasonRef.width;
  let overrideParams = bottomSheetExpandReasonRef.overrideParams;
  let customId;
  let referrerId;
  c10 = undefined;
  let memo;
  const tmp3 = bottomSheetIndex(bottomSheetPosition[8]);
  const navigationContainerRef = bottomSheetExpandReasonRef(bottomSheetPosition[10]).useNavigationContainerRef();
  let obj = bottomSheetExpandReasonRef(bottomSheetPosition[10]);
  const trackNavigationBackPress = bottomSheetExpandReasonRef(bottomSheetPosition[11]).useTrackNavigationBackPress(navigationContainerRef);
  const obj2 = bottomSheetExpandReasonRef(bottomSheetPosition[11]);
  const tmp7 = memo();
  if (overrideParams == null) {
    overrideParams = obj3.useKeyboardContextForType(bottomSheetExpandReasonRef(bottomSheetPosition[13]).KeyboardTypes.APP_LAUNCHER);
  }
  obj3 = bottomSheetExpandReasonRef(bottomSheetPosition[12]);
  const accessibilityNativeStackOptions = bottomSheetExpandReasonRef(bottomSheetPosition[14]).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj19 = entrypoint(overrideParams, chatInputRef);
  const items = [entrypoint];
  const layoutEffect = keyboardCloseReasonRef.useLayoutEffect(() => {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "app_launcher", source: entrypoint });
  }, items);
  const obj4 = { ref: navigationContainerRef, children: null };
  const obj5 = { value: tmp3(bottomSheetIndex(bottomSheetPosition[9]).APP_LAUNCHER).analyticsLocations, children: null };
  const obj7 = { initialRouteName, screenOptions: null, children: null };
  const obj8 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
  const items1 = [tmp7.navigator, bottomSheetExpandReasonRef.contentStyle];
  obj8.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj7.screenOptions = obj8;
  const obj9 = { name: onActivityItemSelected.HOME, component: bottomSheetIndex(bottomSheetPosition[16]), initialParams: null };
  const obj10 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === onActivityItemSelected.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj10.initialSearchQuery = initialSearchQuery;
  obj9.initialParams = obj10;
  const items2 = [customId(c10.Screen, obj9), , , ];
  const obj11 = { name: onActivityItemSelected.APPLICATION_VIEW, component: bottomSheetIndex(bottomSheetPosition[17]), initialParams: null };
  const obj12 = { context };
  let obj13 = obj19;
  if (initialRouteName !== onActivityItemSelected.APPLICATION_VIEW) {
    obj13 = {};
  }
  const merged1 = Object.assign(obj13);
  obj12.expandBottomSheet = expandBottomSheet;
  obj11.initialParams = obj12;
  items2[1] = customId(c10.Screen, obj11);
  const obj14 = { name: onActivityItemSelected.COMMAND_VIEW, component: bottomSheetIndex(bottomSheetPosition[18]), initialParams: null };
  let tmp17;
  if ("channel" === context.type) {
    tmp17 = context;
  }
  const obj15 = { context: tmp17 };
  let obj16 = obj19;
  if (overrideParams.initialRouteName !== onActivityItemSelected.COMMAND_VIEW) {
    obj16 = {};
  }
  const merged2 = Object.assign(obj16);
  obj15.expandBottomSheet = expandBottomSheet;
  obj14.initialParams = obj15;
  items2[2] = customId(c10.Screen, obj14);
  const obj17 = { name: onActivityItemSelected.APP_LIST_VIEW, component: bottomSheetIndex(bottomSheetPosition[19]), initialParams: null };
  if (overrideParams.initialRouteName !== onActivityItemSelected.APP_LIST_VIEW) {
    obj19 = {};
  }
  const obj20 = { children: null };
  const merged3 = Object.assign(obj19);
  obj17.initialParams = { context };
  items2[3] = customId(c10.Screen, obj17);
  obj7.children = items2;
  obj5.children = referrerId(c10.Navigator, obj7);
  obj4.children = customId(bottomSheetExpandReasonRef(bottomSheetPosition[8]).AnalyticsLocationProvider, obj5);
  obj20.children = customId(bottomSheetExpandReasonRef(bottomSheetPosition[10]).NavigationContainer, obj4);
  c10 = false;
  let tmp21 = "customId" in overrideParams;
  const children = tmp10(tmp4(tmp2[10]).NavigationIndependentTree, obj20);
  if (!tmp21) {
    tmp21 = "referrerId" in overrideParams;
  }
  let flag = false;
  let tmp22;
  let tmp23;
  if (tmp21) {
    c10 = true;
    customId = overrideParams.customId;
    referrerId = overrideParams.referrerId;
    flag = true;
    tmp22 = referrerId;
    tmp23 = customId;
  }
  const items3 = [flag, tmp23, tmp22];
  memo = obj6.useMemo(() => {
    let tmp = null;
    if (c10) {
      const obj = { customId, referrerId };
      tmp = obj;
    }
    return tmp;
  }, items3);
  const items4 = [bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, memo, keyboardCloseReasonRef, onActivityItemSelected, width];
  value = obj6.useMemo(() => ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: memo, keyboardCloseReasonRef, onActivityItemSelected, width }), items4);
  return customId(bottomSheetExpandReasonRef(bottomSheetPosition[20]).AppLauncherContext.Provider, { value, children });
});