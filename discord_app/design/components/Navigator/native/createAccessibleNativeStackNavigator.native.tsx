// === Module 14209: createAccessibleNativeStackNavigator ===

// Module 14209 (createAccessibleNativeStackNavigator)
import c from "c" /* 576 */;
import Link from "Link" /* 1504 */;
import Navigator from "Navigator" /* 6686 */;
import NativeStackNavigator from "NativeStackNavigator" /* 9317 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["id", "initialRouteName", "UNSTABLE_routeNamesChangeBehavior", "children", "layout", "screenListeners", "screenOptions", "screenLayout", "UNSTABLE_router"];
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccessibilityPatchedDescriptors(obj) {
  obj = c;
  const cResult = obj.c(3);
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  if (null == accessibilityNativeStackOptions) {
    return obj;
  } else {
    if (cResult[0] === accessibilityNativeStackOptions) {
    }
    const obj3 = {};
    for (const key10021 in arg0) {
      let tmp16 = arg0[key10021];
      let tmp13 = tmp16;
      if ("none" !== tmp16.options.animation) {
        let obj4 = {};
        let merged = Object.assign(tmp16);
        let obj5 = {};
        let merged1 = Object.assign(tmp16.options);
        let merged2 = Object.assign(accessibilityNativeStackOptions);
        obj4.options = obj5;
        tmp13 = obj4;
      }
      obj3[key10021] = tmp13;
      continue;
    }
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = obj;
    cResult[2] = obj3;
  }
}) : (function useAccessibilityPatchedDescriptors(arg0) {
  closure_0 = arg0;
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  const items = [arg0, accessibilityNativeStackOptions];
  return noop.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return closure_0;
    } else {
      const obj = {};
      for (const key10006 in closure_0) {
        let tmp14 = closure_0[key10006];
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
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccessibleNativeStackNavigator(arg0) {
  const cResult = c.c(30);
  if (cResult[0] !== arg0) {
    ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
    const tmp16 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = UNSTABLE_routeNamesChangeBehavior;
    cResult[2] = UNSTABLE_router;
    cResult[3] = children;
    cResult[4] = id;
    cResult[5] = initialRouteName;
    cResult[6] = layout;
    cResult[7] = tmp16;
    cResult[8] = screenLayout;
    cResult[9] = screenListeners;
    cResult[10] = screenOptions;
    let tmp13 = screenOptions;
    let tmp12 = screenListeners;
    let tmp11 = screenLayout;
    let tmp10 = tmp16;
    let tmp9 = layout;
    let tmp8 = initialRouteName;
    let tmp7 = id;
    let tmp6 = children;
    let tmp5 = UNSTABLE_router;
    let tmp4 = UNSTABLE_routeNamesChangeBehavior;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
  }
  if (cResult[11] === tmp4) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp6) {
        if (cResult[14] === tmp7) {
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp9) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp12) {
                  if (cResult[19] === tmp13) {
                    let tmp17 = cResult[20];
                  }
                  const navigationBuilder = Link.useNavigationBuilder(Link.StackRouter, tmp17);
                  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
                  const tmp20 = closure_6(navigationBuilder.descriptors);
                  if (cResult[21] === describe) {
                    if (cResult[22] === navigation) {
                      if (cResult[23] === tmp20) {
                        if (cResult[24] === tmp10) {
                          if (cResult[25] === state) {
                            let tmp21 = cResult[26];
                          }
                          if (cResult[27] === NavigationContent) {
                            if (cResult[28] === tmp21) {
                              let tmp27 = cResult[29];
                            }
                            return tmp27;
                          }
                          const obj2 = { children: tmp21 };
                          const tmp29 = <NavigationContent>{tmp21}</NavigationContent>;
                          cResult[27] = NavigationContent;
                          cResult[28] = tmp21;
                          cResult[29] = tmp29;
                          tmp27 = tmp29;
                        }
                      }
                    }
                  }
                  const obj3 = {};
                  const merged = Object.assign(tmp10);
                  obj3.state = state;
                  obj3.navigation = navigation;
                  obj3.descriptors = tmp20;
                  obj3.describe = describe;
                  const tmp26 = jsx(NativeStackNavigator.NativeStackView, {});
                  cResult[21] = describe;
                  cResult[22] = navigation;
                  cResult[23] = tmp20;
                  cResult[24] = tmp10;
                  cResult[25] = state;
                  cResult[26] = tmp26;
                  tmp21 = tmp26;
                  const tmpResult = Link;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj4 = { id: tmp7, initialRouteName: tmp8, UNSTABLE_routeNamesChangeBehavior: tmp4, children: tmp6, layout: tmp9, screenListeners: tmp12, screenOptions: tmp13, screenLayout: tmp11, UNSTABLE_router: tmp5 };
  cResult[11] = tmp4;
  cResult[12] = tmp5;
  cResult[13] = tmp6;
  cResult[14] = tmp7;
  cResult[15] = tmp8;
  cResult[16] = tmp9;
  cResult[17] = tmp11;
  cResult[18] = tmp12;
  cResult[19] = tmp13;
  cResult[20] = obj4;
  tmp17 = obj4;
}) : (function AccessibleNativeStackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  const merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  const navigationBuilder = Link.useNavigationBuilder(Link.StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
  const obj2 = { children: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.state = state;
  obj3.navigation = navigation;
  obj3.descriptors = closure_6(navigationBuilder.descriptors);
  obj3.describe = describe;
  obj2.children = jsx(NativeStackNavigator.NativeStackView, {});
  return <NavigationContent>{null}</NavigationContent>;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default function createAccessibleNativeStackNavigator(arg0) {
  return Link.createNavigatorFactory(closure_7)(arg0);
};
export const useAccessibilityPatchedDescriptors = tmp2;