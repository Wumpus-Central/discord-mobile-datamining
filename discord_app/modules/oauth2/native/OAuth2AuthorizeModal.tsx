// discord_app/modules/oauth2/native/OAuth2AuthorizeModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, goBackOrCancel, set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  contentContainer: { flex: 1 },
  titleContainer: { padding: 16, flexDirection: "row", gap: 16 },
  titleContainerBorder: rect,
  title: obj3,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  marginEnd: 40,
};
let closure_8 = createStyles(obj);
const __initData = {
  code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}",
};
const __initData2 = {
  code: "function OAuth2AuthorizeModalTsx2(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let sharedValue;
      let tmp11;
      const obj = require("react");
      const cResult = obj.c(38);
      const tmp4 = closure_8();
      const tmp6 = sharedValue(8717)(arg0);
      _require = tmp6;
      const top = sharedValue(1618)().top;
      const obj2 = require("ReanimatedRexport");
      sharedValue = obj2.useSharedValue(0);
      const fn = function o() {
        let opacity = sharedValue.get();
        if (opacity == null) {
          opacity = 1;
        }
        return { opacity };
      };
      fn.__closure = { borderOpacity: sharedValue };
      fn.__workletHash = 5916964482569;
      fn.__initData = __initData;
      const obj3 = require("ReanimatedRexport");
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] !== sharedValue) {
        const fn2 = function p(nativeEvent) {
          let num = 0;
          set = sharedValue.set;
          const withSpring = spring.withSpring;
          spring;
          if (nativeEvent.nativeEvent.contentOffset.y > 16) {
            num = 1;
          }
          const result = set(withSpring(num, closure_7));
        };
        cResult[0] = sharedValue;
        let num = 1;
        cResult[1] = fn2;
      }
      const sum = top + 16;
      if (cResult[2] !== sum) {
        const obj4 = { paddingTop: sum };
        cResult[2] = sum;
        cResult[3] = obj4;
        tmp11 = obj4;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === tmp4.titleContainer) {
        let tmp13;
        if (cResult[7] !== tmp6.backStep) {
          let stringResult;
          if (null != tmp6.backStep) {
            const intl2 = tmp(1126).intl;
            stringResult = intl2.string(tmp(1126).t["13/7kX"]);
          } else {
            const intl = tmp(1126).intl;
            stringResult = intl.string(tmp(1126).t.cpT0Cq);
          }
          cResult[7] = tmp6.backStep;
          cResult[8] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp6) {
          class A {
            constructor() {
              goBackOrCancel = goBackOrCancel.goBackOrCancel;
              let goBackOrCancelResult;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
          cResult[9] = tmp6;
          cResult[10] = A;
        } else {
          class A {
            constructor() {
              goBackOrCancel = goBackOrCancel.goBackOrCancel;
              let goBackOrCancelResult;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
        }
        if (cResult[11] !== tmp6.backStep) {
          let tmp18;
          class A {
            constructor() {
              goBackOrCancel = goBackOrCancel.goBackOrCancel;
              let goBackOrCancelResult;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
          if (null != tmp6.backStep) {
            class A {
              constructor() {
                goBackOrCancel = goBackOrCancel.goBackOrCancel;
                let goBackOrCancelResult;
                if (goBackOrCancel != null) {
                  goBackOrCancelResult = goBackOrCancel();
                }
                return goBackOrCancelResult;
              }
            }
            const obj5 = { color: sharedValue(587).colors.INTERACTIVE_TEXT_DEFAULT };
            const ArrowSmallLeftIcon = tmp(8963).ArrowSmallLeftIcon;
            tmp18 = closure_5(ArrowSmallLeftIcon, obj5);
          } else {
            class A {
              constructor() {
                goBackOrCancel = goBackOrCancel.goBackOrCancel;
                let goBackOrCancelResult;
                if (goBackOrCancel != null) {
                  goBackOrCancelResult = goBackOrCancel();
                }
                return goBackOrCancelResult;
              }
            }
            const obj6 = { color: sharedValue(587).colors.INTERACTIVE_TEXT_DEFAULT };
            const XSmallIcon = tmp(6017).XSmallIcon;
            tmp18 = closure_5(XSmallIcon, obj6);
          }
          cResult[11] = tmp6.backStep;
          cResult[12] = tmp18;
        } else {
          class A {
            constructor() {
              goBackOrCancel = goBackOrCancel.goBackOrCancel;
              let goBackOrCancelResult;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
        }
        if (cResult[13] === tmp13) {
          class A {
            constructor() {
              goBackOrCancel = goBackOrCancel.goBackOrCancel;
              let goBackOrCancelResult;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
        }
        const obj7 = { accessibilityRole: "button", accessibilityLabel: tmp13, onPress: A, children: tmp17 };
        cResult[13] = tmp13;
        cResult[14] = A;
        cResult[15] = tmp17;
        cResult[16] = closure_5(require("Pressables").PressableOpacity, obj7);
        const tmp21 = closure_5(require("Pressables").PressableOpacity, obj7);
      }
      const items = [tmp4.titleContainer, tmp11];
      cResult[4] = tmp4.titleContainer;
      cResult[5] = tmp11;
      cResult[6] = items;
    }
  : (arg0) => {
      let Text;
      let intl3;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj10;
      let obj13;
      let sharedValue;
      let stringResult;
      let tmp11Result;
      let tmp2Result;
      const tmp = closure_8();
      const tmp2 = sharedValue;
      const tmp4 = sharedValue(8717)(arg0);
      _require = tmp4;
      const top = sharedValue(1618)().top;
      const obj = require("ReanimatedRexport");
      sharedValue = obj.useSharedValue(0);
      const fn = function u() {
        let opacity = sharedValue.get();
        if (opacity == null) {
          opacity = 1;
        }
        return { opacity };
      };
      fn.__closure = { borderOpacity: sharedValue };
      fn.__workletHash = 12534576233994;
      fn.__initData = __initData2;
      const items = [sharedValue];
      const obj2 = require("ReanimatedRexport");
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = { style: items1, children: items2 };
      items1 = [tmp.titleContainer];
      const obj3 = { style: tmp.container, children: items4 };
      const obj5 = { paddingTop: top + 16 };
      items1[1] = obj5;
      const callback = react.useCallback((nativeEvent) => {
        let num = 0;
        set = sharedValue.set;
        const withSpring = spring.withSpring;
        spring;
        if (nativeEvent.nativeEvent.contentOffset.y > 16) {
          num = 1;
        }
        const result = set(withSpring(num, closure_7));
      }, items);
      const PressableOpacity = require("Pressables").PressableOpacity;
      if (null != tmp4.backStep) {
        const intl2 = tmp5(1126).intl;
        stringResult = intl2.string(tmp5(1126).t["13/7kX"]);
      } else {
        const intl = tmp5(1126).intl;
        stringResult = intl.string(tmp5(1126).t.cpT0Cq);
      }
      const obj6 = {
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        onPress() {
          goBackOrCancel = goBackOrCancel.goBackOrCancel;
          let goBackOrCancelResult;
          if (goBackOrCancel != null) {
            goBackOrCancelResult = goBackOrCancel();
          }
          return goBackOrCancelResult;
        },
        children: tmp11Result,
      };
      if (null != tmp4.backStep) {
        const obj7 = { color: tmp2(587).colors.INTERACTIVE_TEXT_DEFAULT };
        const ArrowSmallLeftIcon = tmp5(8963).ArrowSmallLeftIcon;
        tmp11Result = closure_5(ArrowSmallLeftIcon, obj7);
      } else {
        const obj8 = { color: tmp2(587).colors.INTERACTIVE_TEXT_DEFAULT };
        const XSmallIcon = tmp5(6017).XSmallIcon;
        tmp11Result = closure_5(XSmallIcon, obj8);
      }
      items2 = [closure_5(PressableOpacity, obj6), ,];
      const obj9 = { style: tmp.title, children: closure_5(Text, obj10) };
      obj10 = {
        variant: "redesign/heading-18/bold",
        accessibilityRole: "header",
        children: intl3.string(require("intl").t["y+/PE9"]),
      };
      Text = tmp5(4886).Text;
      intl3 = tmp5(1126).intl;
      items2[1] = closure_5(View, obj9);
      const obj11 = { style: items3 };
      items3 = [tmp.titleContainerBorder, animatedStyle];
      items2[2] = closure_5(tmp2(4612).View, obj11);
      items4 = [closure_6(View, obj4)];
      const obj12 = { bottom: true, style: tmp.contentContainer, children: closure_5(tmp2Result, obj13) };
      const SafeAreaPaddingView = tmp5(6619).SafeAreaPaddingView;
      obj13 = { onScroll: callback, centerContent: true };
      tmp2Result = tmp2(8965);
      const merged = Object.assign(tmp4);
      items4[1] = closure_5(SafeAreaPaddingView, obj12);
      return closure_6(View, obj3);
    };
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default tmp4;
