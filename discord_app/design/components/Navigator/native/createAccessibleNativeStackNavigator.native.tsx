// discord_app/design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx
import Link from "../../../../../_runtime/01484_Link.js";
import Navigator from "Navigator.native.tsx";
import NativeStackNavigator from "../../../../../_runtime/07913_NativeStackNavigator.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AccessibleNativeStackNavigator(arg0) {
  ({
    id,
    initialRouteName,
    UNSTABLE_routeNamesChangeBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
    screenLayout,
    UNSTABLE_router,
  } = arg0);
  let merged = Object.assign(
    arg0,
    Object.assign({
      id: 0,
      initialRouteName: 0,
      UNSTABLE_routeNamesChangeBehavior: 0,
      children: 0,
      layout: 0,
      screenListeners: 0,
      screenOptions: 0,
      screenLayout: 0,
      UNSTABLE_router: 0,
    }),
  );
  let obj = Link;
  const navigationBuilder = obj.useNavigationBuilder(Link.StackRouter, {
    id,
    initialRouteName,
    UNSTABLE_routeNamesChangeBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
    screenLayout,
    UNSTABLE_router,
  });
  const descriptors = navigationBuilder.descriptors;
  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  const items = [descriptors, accessibilityNativeStackOptions];
  obj = { children: null };
  const memo = noop.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      let obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let merged = Object.assign(tmp14);
          obj = {};
          let merged1 = Object.assign(tmp14.options);
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
  obj.children = jsx(NativeStackNavigator.NativeStackView, {});
  return <NavigationContent />;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx",
);

export default function createAccessibleNativeStackNavigator(arg0) {
  return Link.createNavigatorFactory(AccessibleNativeStackNavigator)(arg0);
}
export const useAccessibilityPatchedDescriptors = function useAccessibilityPatchedDescriptors(filteredDescriptors) {
  closure_0 = filteredDescriptors;
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  const items = [filteredDescriptors, accessibilityNativeStackOptions];
  return noop.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      let obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let merged = Object.assign(tmp14);
          obj = {};
          let merged1 = Object.assign(tmp14.options);
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
