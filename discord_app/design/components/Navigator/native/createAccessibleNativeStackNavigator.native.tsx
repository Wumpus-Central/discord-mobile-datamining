// discord_app/design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "../../../../../_runtime/01500_createStandardNavigationFactories.js";

const require = arg1;
function AccessibleNativeStackNavigator(arg0) {
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let id;
  let initialRouteName;
  let layout;
  let navigation;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  let state;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let obj = descriptors(accessibilityNativeStackOptions[3]);
  const navigationBuilder = obj.useNavigationBuilder(descriptors(accessibilityNativeStackOptions[3]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  descriptors = navigationBuilder.descriptors;
  accessibilityNativeStackOptions = undefined;
  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
  accessibilityNativeStackOptions = descriptors(accessibilityNativeStackOptions[2]).useAccessibilityNativeStackOptions();
  const items = [descriptors, accessibilityNativeStackOptions];
  obj = { children: null };
  const memo = React.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      let obj = {};
      for (const key10006 in descriptors) {
        let tmp12 = key10006;
        let tmp13 = descriptors;
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let tmp2 = obj;
          let tmp3 = tmp14;
          let merged = Object.assign(tmp14);
          obj = {};
          let tmp5 = obj;
          let merged1 = Object.assign(tmp14.options);
          let tmp7 = accessibilityNativeStackOptions;
          let tmp8 = obj;
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          obj.options = obj;
          tmp10 = obj;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
  obj = {};
  let merged1 = Object.assign(merged);
  obj.state = state;
  obj.navigation = navigation;
  obj.descriptors = memo;
  obj.describe = describe;
  obj[0] = jsx(descriptors(accessibilityNativeStackOptions[4]).NativeStackView, {});
  return <NavigationContent />;
}
const result = require("NavigationStack").fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default function createAccessibleNativeStackNavigator(arg0) {
  return createStandardNavigationFactories.createNavigatorFactory(AccessibleNativeStackNavigator)(arg0);
};
export const useAccessibilityPatchedDescriptors = function useAccessibilityPatchedDescriptors(filteredDescriptors) {
  const _require = filteredDescriptors;
  accessibilityNativeStackOptions = _require(accessibilityNativeStackOptions[2]).useAccessibilityNativeStackOptions();
  const items = [filteredDescriptors, accessibilityNativeStackOptions];
  return React.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      let obj = {};
      for (const key10006 in descriptors) {
        let tmp12 = key10006;
        let tmp13 = descriptors;
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let tmp2 = obj;
          let tmp3 = tmp14;
          let merged = Object.assign(tmp14);
          obj = {};
          let tmp5 = obj;
          let merged1 = Object.assign(tmp14.options);
          let tmp7 = accessibilityNativeStackOptions;
          let tmp8 = obj;
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          obj.options = obj;
          tmp10 = obj;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
};