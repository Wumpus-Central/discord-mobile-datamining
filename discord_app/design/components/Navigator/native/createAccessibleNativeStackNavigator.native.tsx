// === Module 14548: createAccessibleNativeStackNavigator ===

// Module 14548 (createAccessibleNativeStackNavigator)
import Link from "Link" /* 1485 */;
import Navigator from "Navigator" /* 7333 */;
import NativeStackNavigator from "NativeStackNavigator" /* 8245 */;
import noop from "module_19" /* 19 */;

require = fn;
function AccessibleNativeStackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  const navigationBuilder = Link.useNavigationBuilder(Link.StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  const descriptors = navigationBuilder.descriptors;
  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  const items = [descriptors, accessibilityNativeStackOptions];
  let obj3 = { children: null };
  const memo = noop.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      const obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          let obj2 = {};
          let merged = Object.assign(tmp14);
          let obj3 = {};
          let merged1 = Object.assign(tmp14.options);
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          obj2.options = obj3;
          tmp10 = obj2;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
  const obj4 = {};
  let merged1 = Object.assign(merged);
  obj4.state = state;
  obj4.navigation = navigation;
  obj4.descriptors = memo;
  obj4.describe = describe;
  obj3.children = jsx(NativeStackNavigator.NativeStackView, {});
  return <NavigationContent>{null}</NavigationContent>;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default function createAccessibleNativeStackNavigator(arg0) {
  return Link.createNavigatorFactory(AccessibleNativeStackNavigator)(arg0);
};
export const useAccessibilityPatchedDescriptors = function useAccessibilityPatchedDescriptors(filteredDescriptors) {
  closure_0 = filteredDescriptors;
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  const items = [filteredDescriptors, accessibilityNativeStackOptions];
  return noop.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      const obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          let obj2 = {};
          let merged = Object.assign(tmp14);
          let obj3 = {};
          let merged1 = Object.assign(tmp14.options);
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          obj2.options = obj3;
          tmp10 = obj2;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
};