// discord_app/design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Link from "../../../../../_runtime/01491_Link.js";
import Navigator from "Navigator.native.tsx";
import NativeStackView2 from "../../../../../_runtime/07556_NativeStackView.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = [
  "id",
  "initialRouteName",
  "UNSTABLE_routeNamesChangeBehavior",
  "children",
  "layout",
  "screenListeners",
  "screenOptions",
  "screenLayout",
  "UNSTABLE_router",
];
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (obj) => {
      obj = react2;
      const cResult = obj.c(3);
      const obj2 = Navigator;
      const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
      let tmp3 = obj;
      if (null != accessibilityNativeStackOptions) {
        if (cResult[0] === accessibilityNativeStackOptions) {
          let tmp4;
          if (cResult[1] === obj) {
            tmp4 = cResult[2];
          }
          tmp3 = tmp4;
        }
        const obj3 = {};
        for (const key10021 in obj) {
          let tmp16 = obj[key10021];
          let tmp14 = tmp16;
          if ("none" !== tmp16.options.animation) {
            let obj4 = { options: obj5 };
            let merged = Object.assign(tmp16);
            let obj5 = {};
            let merged1 = Object.assign(tmp16.options);
            let merged2 = Object.assign(accessibilityNativeStackOptions);
            tmp14 = obj4;
          }
          obj3[key10021] = tmp14;
          continue;
        }
        cResult[0] = accessibilityNativeStackOptions;
        cResult[1] = obj;
        cResult[2] = obj3;
        tmp4 = obj3;
      }
      return tmp3;
    }
  : (arg0) => {
      let closure_0 = arg0;
      let obj = Navigator;
      const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
      const items = [arg0, accessibilityNativeStackOptions];
      return react.useMemo(() => {
        if (null == accessibilityNativeStackOptions) {
          return closure_0;
        } else {
          const obj = {};
          for (const key10006 in closure_0) {
            let tmp14 = closure_0[key10006];
            let tmp10 = tmp14;
            if ("none" !== tmp14.options.animation) {
              let obj2 = { options: obj3 };
              let merged = Object.assign(tmp14);
              let obj3 = {};
              let merged1 = Object.assign(tmp14.options);
              let merged2 = Object.assign(accessibilityNativeStackOptions);
              tmp10 = obj2;
            }
            obj[key10006] = tmp10;
            continue;
          }
          return obj;
        }
      }, items);
    };
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let NavigationContent;
      let UNSTABLE_routeNamesChangeBehavior;
      let UNSTABLE_router;
      let children;
      let describe;
      let id;
      let initialRouteName;
      let layout;
      let screenLayout;
      let screenListeners;
      let screenOptions;
      let state;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(30);
      if (cResult[0] !== arg0) {
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
        tmp13 = screenOptions;
        tmp12 = screenListeners;
        tmp11 = screenLayout;
        tmp10 = tmp16;
        tmp9 = layout;
        tmp8 = initialRouteName;
        tmp7 = id;
        tmp6 = children;
        tmp5 = UNSTABLE_router;
        tmp4 = UNSTABLE_routeNamesChangeBehavior;
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
                      let tmp17;
                      if (cResult[19] === tmp13) {
                        tmp17 = cResult[20];
                      }
                      const tmpResult = Link;
                      const navigationBuilder = tmpResult.useNavigationBuilder(Link.StackRouter, tmp17);
                      ({ state, describe, navigation, NavigationContent } = navigationBuilder);
                      const tmp20 = closure_6(navigationBuilder.descriptors);
                      if (cResult[21] === describe) {
                        if (cResult[22] === navigation) {
                          if (cResult[23] === tmp20) {
                            if (cResult[24] === tmp10) {
                              let tmp21;
                              if (cResult[25] === state) {
                                tmp21 = cResult[26];
                              }
                              if (cResult[27] === NavigationContent) {
                                let tmp27;
                                if (cResult[28] === tmp21) {
                                  tmp27 = cResult[29];
                                }
                                return tmp27;
                              }
                              const tmp29 = <NavigationContent>{tmp21}</NavigationContent>;
                              cResult[27] = NavigationContent;
                              cResult[28] = tmp21;
                              cResult[29] = tmp29;
                              tmp27 = tmp29;
                            }
                          }
                        }
                      }
                      const NativeStackView = NativeStackView2.NativeStackView;
                      const merged = Object.assign(tmp10);
                      const tmp26 = (
                        <NativeStackView
                          state={state}
                          navigation={navigation}
                          descriptors={tmp20}
                          describe={describe}
                        />
                      );
                      cResult[21] = describe;
                      cResult[22] = navigation;
                      cResult[23] = tmp20;
                      cResult[24] = tmp10;
                      cResult[25] = state;
                      cResult[26] = tmp26;
                      tmp21 = tmp26;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj4 = {
        id: tmp7,
        initialRouteName: tmp8,
        UNSTABLE_routeNamesChangeBehavior: tmp4,
        children: tmp6,
        layout: tmp9,
        screenListeners: tmp12,
        screenOptions: tmp13,
        screenLayout: tmp11,
        UNSTABLE_router: tmp5,
      };
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
    }
  : (arg0) => {
      let NavigationContent;
      let UNSTABLE_routeNamesChangeBehavior;
      let UNSTABLE_router;
      let children;
      let describe;
      let id;
      let initialRouteName;
      let layout;
      let screenLayout;
      let screenListeners;
      let screenOptions;
      let state;
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
      const merged = Object.assign(
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
      const obj = Link;
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
      ({ state, describe, navigation, NavigationContent } = navigationBuilder);
      const tmp3 = closure_6(navigationBuilder.descriptors);
      const NativeStackView = NativeStackView2.NativeStackView;
      const merged1 = Object.assign(merged);
      return <NavigationContent>{null}</NavigationContent>;
    };
const result = size.fileFinishedImporting(
  "design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx",
);

export default function createAccessibleNativeStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(closure_7)(arg0);
}
export const useAccessibilityPatchedDescriptors = tmp2;
