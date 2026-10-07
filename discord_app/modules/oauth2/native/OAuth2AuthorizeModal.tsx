// === Module 8748: OAuth2AuthorizeModal ===

// Module 8748 (OAuth2AuthorizeModal)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5604 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, contentContainer: { flex: 1 }, titleContainer: { padding: 16, flexDirection: "row", gap: 16 }, titleContainerBorder: null, title: null };
const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.titleContainerBorder = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.title = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginEnd: 40 };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
const __initData2 = { code: "function OAuth2AuthorizeModalTsx2(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginEnd: 40 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(38);
  const tmp4 = closure_8();
  const tmp6 = sharedValue(8749)(arg0);
  _require = tmp6;
  let obj = require("c");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const obj2 = require("ReanimatedRexport");
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
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  if (cResult[0] !== sharedValue) {
    const fn2 = function p(nativeEvent) {
      let num = 0;
      if (nativeEvent.nativeEvent.contentOffset.y > 16) {
        num = 1;
      }
      const result = sharedValue.set(spring.withSpring(num, closure_7));
    };
    cResult[0] = sharedValue;
    cResult[1] = fn2;
  }
  const sum = sharedValue(1618)().top + 16;
  if (cResult[2] !== sum) {
    const obj4 = { paddingTop: sum };
    cResult[2] = sum;
    cResult[3] = obj4;
    let tmp11 = obj4;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.titleContainer) {
    if (cResult[7] !== tmp6.backStep) {
      if (null != tmp6.backStep) {
        const intl2 = tmp(1126).intl;
        let stringResult = intl2.string(tmp(1126).t["13/7kX"]);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.cpT0Cq);
      }
      cResult[7] = tmp6.backStep;
      cResult[8] = stringResult;
    } else {
      if (cResult[9] !== tmp6) {
        class A {
          constructor() {
            goBackOrCancel = closure_0.goBackOrCancel;
            goBackOrCancelResult = undefined;
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
            goBackOrCancel = closure_0.goBackOrCancel;
            goBackOrCancelResult = undefined;
            if (goBackOrCancel != null) {
              goBackOrCancelResult = goBackOrCancel();
            }
            return goBackOrCancelResult;
          }
        }
      }
      if (cResult[11] !== tmp6.backStep) {
        class A {
          constructor() {
            goBackOrCancel = closure_0.goBackOrCancel;
            goBackOrCancelResult = undefined;
            if (goBackOrCancel != null) {
              goBackOrCancelResult = goBackOrCancel();
            }
            return goBackOrCancelResult;
          }
        }
        if (null != tmp6.backStep) {
          class A {
            constructor() {
              goBackOrCancel = closure_0.goBackOrCancel;
              goBackOrCancelResult = undefined;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
          const obj5 = { color: tmp5(587).colors.INTERACTIVE_TEXT_DEFAULT };
          let tmp19 = closure_5(tmp(8992).ArrowSmallLeftIcon, obj5);
        } else {
          class A {
            constructor() {
              goBackOrCancel = closure_0.goBackOrCancel;
              goBackOrCancelResult = undefined;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
          const obj6 = { color: tmp5(587).colors.INTERACTIVE_TEXT_DEFAULT };
          tmp19 = closure_5(tmp(6024).XSmallIcon, obj6);
        }
        cResult[11] = tmp6.backStep;
        cResult[12] = tmp19;
      } else {
        class A {
          constructor() {
            goBackOrCancel = closure_0.goBackOrCancel;
            goBackOrCancelResult = undefined;
            if (goBackOrCancel != null) {
              goBackOrCancelResult = goBackOrCancel();
            }
            return goBackOrCancelResult;
          }
        }
        if (cResult[13] === tmp13) {
          class A {
            constructor() {
              goBackOrCancel = closure_0.goBackOrCancel;
              goBackOrCancelResult = undefined;
              if (goBackOrCancel != null) {
                goBackOrCancelResult = goBackOrCancel();
              }
              return goBackOrCancelResult;
            }
          }
        }
        const obj7 = { accessibilityRole: "button", accessibilityLabel: tmp13, onPress: A, children: tmp18 };
        const tmp23 = closure_5(tmp(5916).PressableOpacity, obj7);
        cResult[13] = tmp13;
        cResult[14] = A;
        cResult[15] = tmp18;
        cResult[16] = tmp23;
      }
    }
  }
  const items = [tmp4.titleContainer, tmp11];
  cResult[4] = tmp4.titleContainer;
  cResult[5] = tmp11;
  cResult[6] = items;
  const obj3 = require("ReanimatedRexport");
}) : ((arg0) => {
  const tmp = closure_8();
  const tmp4 = sharedValue(8749)(arg0);
  _require = tmp4;
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj = require("ReanimatedRexport");
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
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: null, children: null };
  const items1 = [tmp.titleContainer, ];
  const obj2 = require("ReanimatedRexport");
  items1[1] = { paddingTop: sharedValue(1618)().top + 16 };
  obj4.style = items1;
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, closure_7));
  }, items);
  if (null != tmp4.backStep) {
    const intl2 = tmp5(1126).intl;
    let stringResult = intl2.string(tmp5(1126).t["13/7kX"]);
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
    children: null
  };
  if (null != tmp4.backStep) {
    const obj7 = { color: tmp2(587).colors.INTERACTIVE_TEXT_DEFAULT };
    let tmp11Result = closure_5(tmp5(8992).ArrowSmallLeftIcon, obj7);
  } else {
    const obj8 = { color: tmp2(587).colors.INTERACTIVE_TEXT_DEFAULT };
    tmp11Result = closure_5(tmp5(6024).XSmallIcon, obj8);
  }
  obj6.children = tmp11Result;
  const items2 = [closure_5(require("Pressables").PressableOpacity, obj6), , ];
  const obj9 = { style: tmp.title, children: null };
  const obj10 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl3 = tmp5(1126).intl;
  obj10.children = intl3.string(require("util").t["y+/PE9"]);
  obj9.children = closure_5(require("Text/Text").Text, obj10);
  items2[1] = closure_5(View, obj9);
  const obj11 = { style: null };
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  obj11.style = items3;
  items2[2] = closure_5(sharedValue(4618).View, obj11);
  obj4.children = items2;
  const items4 = [closure_6(View, obj4), ];
  const obj12 = { bottom: true, style: tmp.contentContainer, children: null };
  const obj13 = {};
  const obj5 = { paddingTop: sharedValue(1618)().top + 16 };
  const merged = Object.assign(tmp4);
  obj13.onScroll = callback;
  obj13.centerContent = true;
  obj12.children = closure_5(sharedValue(8994), obj13);
  items4[1] = closure_5(require("common/SafeAreaView").SafeAreaPaddingView, obj12);
  obj3.children = items4;
  return closure_6(View, obj3);
});