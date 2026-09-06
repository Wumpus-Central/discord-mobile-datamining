// discord_app/modules/app_launcher/native/AppLauncherNavigator.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import AppRowLabelDefault from "screens/home/AppLauncherHomeScreen.tsx";
import AppLauncherApplicationViewScreenInnerDefault from "screens/application_view/AppLauncherApplicationViewScreen.tsx";
import AppLauncherCommandViewFooterDefault from "screens/command_view/AppLauncherCommandViewScreen.tsx";
import DEFAULT_CONTENT_PADDINGDefault from "screens/app_list_view/AppLauncherViewAllScreen.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { AppLauncherRouteName } from "AppLauncherNativeConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../_runtime/07913_createNativeStackNavigator.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_3 = ["initialRouteName"];
let c5 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createNativeStackNavigator.createNativeStackNavigator();
let obj = { navigator: null };
obj = {
  backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  paddingTop: 16,
  overflow: "visible",
  flex: 1,
};
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function AppLauncherNavigator(arg0) {
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
  const tmp3 = contextDefault;
  let obj = entrypoint(4427);
  if (overrideParams == null) {
    overrideParams = obj.useKeyboardContextForType(entrypoint(1609).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4 = callback2();
  const accessibilityNativeStackOptions = entrypoint(7000).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj12 = callback(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = entrypoint(closure_1_2[13]);
    obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(closure_1_7.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  obj = { value: tmp3(QUICK_SWITCHERDefault.APP_LAUNCHER).analyticsLocations, children: null };
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
  const items2 = [closure_8(closure_10.Screen, obj2), , ,];
  const obj4 = {
    name: AppLauncherRouteName.APPLICATION_VIEW,
    component: AppLauncherApplicationViewScreenInnerDefault,
    initialParams: null,
  };
  const obj5 = { context };
  let obj6 = obj12;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj5.expandBottomSheet = expandBottomSheet;
  obj4[2] = obj5;
  items2[1] = closure_8(closure_10.Screen, obj4);
  const obj7 = {
    name: AppLauncherRouteName.COMMAND_VIEW,
    component: AppLauncherCommandViewFooterDefault,
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
  obj7[2] = obj8;
  items2[2] = closure_8(closure_10.Screen, obj7);
  const obj10 = {
    name: AppLauncherRouteName.APP_LIST_VIEW,
    component: DEFAULT_CONTENT_PADDINGDefault,
    initialParams: null,
  };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj12 = {};
  }
  const obj13 = { children: null };
  const obj14 = { children: null };
  const merged3 = Object.assign(obj12);
  obj10[2] = { context };
  items2[3] = closure_8(closure_10.Screen, obj10);
  obj[2] = items2;
  obj[1] = closure_9(closure_10.Navigator, obj);
  obj14[0] = closure_8(entrypoint(7162).AnalyticsLocationProvider, obj);
  obj13[0] = closure_8(entrypoint(1484).NavigationContainer, obj14);
  let tmp19 = "customId" in overrideParams;
  const children = tmp8(tmp5(1484).NavigationIndependentTree, obj13);
  if (!tmp19) {
    tmp19 = "referrerId" in overrideParams;
  }
  let entrypointParams = null;
  if (tmp19) {
    ({ customId: obj19[0], referrerId: obj19[1] } = overrideParams);
    entrypointParams = { customId: null, referrerId: null };
    const obj15 = { customId: null, referrerId: null };
  }
  return closure_8(entrypoint(11215).AppLauncherContext.Provider, {
    value: {
      bottomSheetExpandReasonRef,
      bottomSheetIndex,
      bottomSheetPosition,
      chatInputRef,
      entrypoint,
      entrypointParams,
      keyboardCloseReasonRef,
      onActivityItemSelected,
      width,
    },
    children,
  });
});
const result = require("set").fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
