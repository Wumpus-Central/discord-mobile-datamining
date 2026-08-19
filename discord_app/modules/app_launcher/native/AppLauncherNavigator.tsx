// === Module 11257: ? ===

// Module 11257
import ThemesDefault from "Themes" /* 712 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import AppRowLabelDefault from "AppRowLabel" /* 11258 */;
import AppLauncherApplicationViewScreenInnerDefault from "AppLauncherApplicationViewScreenInner" /* 11305 */;
import AppLauncherCommandViewFooterDefault from "AppLauncherCommandViewFooter" /* 11331 */;
import DEFAULT_CONTENT_PADDINGDefault from "DEFAULT_CONTENT_PADDING" /* 11370 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_3 = ["initialRouteName"];
let c5 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createNativeStackNavigator.createNativeStackNavigator();
let obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function AppLauncherNavigator(arg0) {
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = contextDefault;
  let obj = entrypoint(4239);
  if (overrideParams == null) {
    overrideParams = obj.useKeyboardContextForType(entrypoint(1627).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4 = callback2();
  const accessibilityNativeStackOptions = entrypoint(6312).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj12 = callback(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    entrypoint(dependencyMap[13]);
    const obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  { value: tmp3(QUICK_SWITCHERDefault.APP_LAUNCHER).analyticsLocations, children: null };
  obj = { initialRouteName, screenOptions: null, children: null };
  const items1 = [tmp4.navigator, contentStyle];
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  const obj2 = { name: AppLauncherRouteName.HOME, component: AppRowLabelDefault, initialParams: null };
  const obj3 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj3[1] = initialSearchQuery;
  obj2[2] = obj3;
  const items2 = [callback(closure_10.Screen, obj2), , , ];
  const obj4 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenInnerDefault, initialParams: null };
  const obj5 = { context };
  let obj6 = obj12;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj5.expandBottomSheet = expandBottomSheet;
  obj4[2] = obj5;
  items2[1] = callback(closure_10.Screen, obj4);
  const obj7 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewFooterDefault, initialParams: null };
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
  obj7[2] = obj8;
  items2[2] = callback(closure_10.Screen, obj7);
  const obj10 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: DEFAULT_CONTENT_PADDINGDefault, initialParams: null };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj12 = {};
  }
  const obj13 = { children: null };
  const obj14 = { children: null };
  const merged3 = Object.assign(obj12);
  obj10[2] = { context };
  items2[3] = callback(closure_10.Screen, obj10);
  obj[2] = items2;
  obj[1] = callback2(closure_10.Navigator, obj);
  obj14[0] = callback(entrypoint(7139).AnalyticsLocationProvider, obj);
  obj13[0] = callback(entrypoint(1501).NavigationContainer, obj14);
  let tmp19 = "customId" in overrideParams;
  const children = callback(entrypoint(1501).NavigationIndependentTree, obj13);
  if (!tmp19) {
    tmp19 = "referrerId" in overrideParams;
  }
  let entrypointParams = null;
  if (tmp19) {
    ({ customId: obj19[0], referrerId: obj19[1] } = overrideParams);
    entrypointParams = { customId: null, referrerId: null };
  }
  return callback(entrypoint(9565).AppLauncherContext.Provider, { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams, keyboardCloseReasonRef, onActivityItemSelected, width }, children });
});
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;