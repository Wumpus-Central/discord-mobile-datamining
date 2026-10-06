// === Module 5720: AlertModal ===

// Module 5720 (AlertModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl2 from "intl" /* 1126 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import spring from "spring" /* 5604 */;
import useAlertStore2 from "useAlertStore" /* 5716 */;
import OverlayViewDefault from "OverlayView" /* 5721 */;
import Dialog2 from "Dialog" /* 5773 */;
import react_native from "react-native" /* 5786 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, dependencyMap, onPress;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let size;
let unpackModuleId;
function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  let closure_0;
  const useAlertStore = require("useAlertStore").useAlertStore;
  const arr = _toArray(useAlertStore.getState().alerts);
  const first = arr[0];
  _require = arr.slice(1);
  const tmp4 = null != first && false === first.dismissable;
  if (!tmp4) {
    let key;
    const dismissAlert = require("useAlertStore").dismissAlert;
    require("useAlertStore");
    if (first != null) {
      key = first.key;
    }
    dismissAlert(key);
    const tmpResult2 = require("react-native");
    tmpResult2.batchUpdates(() => {
      const useAlertStore = context(context2[13]).useAlertStore;
      const obj = { alerts };
      return useAlertStore.setState(obj);
    });
  }
}
let closure_3 = ["onPress", "loading"];
({ View: c9, StyleSheet: c10, ScrollView: unpackModuleId } = react_native2);
const NOOP = Constants.NOOP;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }, content: size, overflow: { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" }, body: { alignItems: "center" }, contentText: { textAlign: "center" } };
size = { backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
let closure_15 = createStyles(obj);
let obj2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = react.createContext(native.TransitionStates.YEETED);
let context2 = react.createContext(NOOP);
const context3 = react.createContext(0);
const context4 = react.createContext("");
const context5 = react.createContext(null);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const __initData2 = { code: "function AlertModalNativeTsx2(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let length;
  let redux;
  let redux2;
  let redux3;
  let redux4;
  let redux5;
  let root;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp4 = closure_15();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(alerts) {
      return alerts.alerts;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5716);
  const alertStore = tmpResult.useAlertStore(first);
  const tmpResult2 = tmp(4618);
  const sharedValue = tmpResult2.useSharedValue(0);
  if (cResult[1] !== alertStore) {
    let items;
    if (0 === alertStore.length) {
      items = [];
    } else {
      items = [{ type: "backdrop", key: "backdrop" }];
      const substr = alertStore.slice(0, 3);
      const item = substr.forEach((alert, index) => {
        const obj = { type: "alert", alert, key: alert.key, index };
        items.push(obj);
      });
    }
    cResult[1] = alertStore;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  dependencyMap = tmp7;
  if (cResult[3] !== tmp7) {
    const fn2 = function f() {
      if (length.length > 0) {
        const obj = KeyboardManagerUtils;
        const result = obj.dismissGlobalKeyboard();
      }
    };
    const items1 = [tmp7];
    cResult[3] = tmp7;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
  if (cResult[6] !== tmp4.root) {
    const fn3 = function p(children) {
      let Dialog;
      let obj3;
      const obj = { style: authStore.absoluteFillObject, children: closure_12(Dialog, obj2) };
      obj2 = { onDismiss: dismissTopAlert, children: closure_12(React4, obj3) };
      obj3 = { style: root.root, pointerEvents: "box-none", children };
      const tmp = OverlayViewDefault;
      Dialog = Dialog2.Dialog;
      return closure_12(tmp, obj);
    };
    cResult[6] = tmp4.root;
    cResult[7] = fn3;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] !== sharedValue) {
    const fn4 = function b(value, type, value2, value3) {
      let Provider2;
      let Provider3;
      let Provider4;
      let Provider5;
      let node;
      let obj3;
      let obj4;
      let obj5;
      if ("alert" === type.type) {
        node = type.alert.node;
      } else {
        node = closure_12(closure_26, {});
      }
      let num = -1;
      if ("alert" === type.type) {
        num = type.index;
      }
      const obj = { value: sharedValue, children: closure_12(Provider2, obj2) };
      obj2 = { value: value3, children: closure_12(Provider3, obj3) };
      obj3 = { value: value2, children: closure_12(Provider4, obj4) };
      const Provider = redux5.Provider;
      Provider2 = redux2.Provider;
      Provider3 = redux.Provider;
      Provider4 = redux3.Provider;
      obj4 = { value: num, children: closure_12(Provider5, obj5) };
      Provider5 = redux4.Provider;
      obj5 = { value, children: closure_12(react.Suspense, { fallback: null, children: node }) };
      return closure_12(Provider, obj, value);
    };
    cResult[8] = sharedValue;
    cResult[9] = fn4;
    tmp13 = fn4;
  } else {
    tmp13 = cResult[9];
  }
  if (cResult[10] === tmp7) {
    if (cResult[11] === tmp13) {
      let tmp14;
      if (cResult[12] === tmp12) {
        tmp14 = cResult[13];
      }
      return tmp14;
    }
  }
  obj2 = { wrapChildren: tmp12, items: tmp7, renderItem: tmp13, getItemKey: getAlertModalItemKey };
  const tmp15 = closure_12(tmp(4595).TransitionGroup, obj2);
  cResult[10] = tmp7;
  cResult[11] = tmp13;
  cResult[12] = tmp12;
  cResult[13] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let items;
  let redux;
  let redux2;
  let redux3;
  let redux4;
  let redux5;
  let root;
  let tmp = closure_15();
  _require = tmp;
  let obj = require("useAlertStore");
  const alertStore = obj.useAlertStore((alerts) => alerts.alerts);
  obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  const tmp3 = items;
  items = undefined;
  const tmp2 = _require;
  if (0 === alertStore.length) {
    items = [];
  } else {
    items = [{ type: "backdrop", key: "backdrop" }];
    let num = 3;
    const substr = alertStore.slice(0, 3);
    const item = substr.forEach((alert, index) => {
      const obj = { type: "alert", alert, key: alert.key, index };
      items.push(obj);
    });
  }
  const items1 = [items];
  const layoutEffect = react.useLayoutEffect(() => {
    if (items.length > 0) {
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    }
  }, items1);
  const items2 = [tmp];
  const items3 = [sharedValue];
  const callback = react.useCallback((children) => {
    let Dialog;
    let obj3;
    const obj = { style: authStore.absoluteFillObject, children: closure_12(Dialog, obj2) };
    obj2 = { onDismiss: dismissTopAlert, children: closure_12(React4, obj3) };
    obj3 = { style: root.root, pointerEvents: "box-none", children };
    const tmp = OverlayViewDefault;
    Dialog = Dialog2.Dialog;
    return closure_12(tmp, obj);
  }, items2);
  const callback1 = react.useCallback((value, type, value2, value3) => {
    let Provider2;
    let Provider3;
    let Provider4;
    let Provider5;
    let node;
    let obj3;
    let obj4;
    let obj5;
    if ("alert" === type.type) {
      node = type.alert.node;
    } else {
      node = closure_12(closure_26, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    const obj = { value: sharedValue, children: closure_12(Provider2, obj2) };
    obj2 = { value: value3, children: closure_12(Provider3, obj3) };
    obj3 = { value: value2, children: closure_12(Provider4, obj4) };
    const Provider = redux5.Provider;
    Provider2 = redux2.Provider;
    Provider3 = redux.Provider;
    Provider4 = redux3.Provider;
    obj4 = { value: num, children: closure_12(Provider5, obj5) };
    Provider5 = redux4.Provider;
    obj5 = { value, children: closure_12(react.Suspense, { fallback: null, children: node }) };
    return closure_12(Provider, obj, value);
  }, items3);
  let obj3 = { wrapChildren: callback, items, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return closure_12(tmp2(tmp3[10]).TransitionGroup, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let context;
  let first1;
  let sharedTransitionState;
  let tmp12;
  let tmp = context;
  let obj = context(576);
  const cResult = obj.c(5);
  context = react.useContext(closure_18);
  [sharedTransitionState] = closure_35();
  dependencyMap = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function t(arg0) {
      const first = arg0.alerts[0];
      let dismissable;
      if (first != null) {
        dismissable = first.dismissable;
      }
      return false !== dismissable;
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const tmpResult = tmp(5716);
  const alertStore = tmpResult.useAlertStore(first1);
  const fn2 = function f() {
    let fn;
    let value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: obj2.withSpring(value, obj2, "animate-always", fn) };
      fn = (arg0) => {
        let tmp = true === arg0 && 0 === closure_1_2.get();
        if (tmp) {
          const value = sharedTransitionState.get();
          tmp = value === context(closure_2[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = context(closure_2[14]);
          obj.runOnJS(closure_1_0)();
        }
      };
      obj2 = spring;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const tmpResult2 = tmp(4618);
  obj2 = { withAlertModalSpring, sharedVisible: tmp7, sharedTransitionState, TransitionStates: tmp(4595).TransitionStates, runOnJS: tmp(4618).runOnJS, cleanUp: context };
  fn2.__closure = obj2;
  fn2.__workletHash = 4470729133936;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
  let tmp11 = null;
  if (alertStore) {
    tmp11 = dismissTopAlert;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.Xkfav5);
    cResult[1] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    let tmp14;
    if (cResult[3] === tmp11) {
      tmp14 = cResult[4];
    }
    return tmp14;
  }
  const tmp15 = closure_12(tmp(5778).Backdrop, { blur: "strong", style: animatedStyle, onDismiss: tmp11, accessibilityLabel: tmp12 });
  cResult[2] = animatedStyle;
  cResult[3] = tmp11;
  cResult[4] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let closure_2;
  let intl;
  let sharedTransitionState;
  let tmp10;
  let tmp4;
  const context = react.useContext(closure_18);
  [sharedTransitionState, tmp4] = closure_35();
  dependencyMap = tmp4;
  let obj = context(5716);
  const alertStore = obj.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  obj2 = context(4618);
  let fn = function t() {
    let fn;
    let value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: obj2.withSpring(value, obj2, "animate-always", fn) };
      fn = (arg0) => {
        let tmp = true === arg0 && 0 === closure_1_2.get();
        if (tmp) {
          const value = sharedTransitionState.get();
          tmp = value === context(closure_2[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = context(closure_2[14]);
          obj.runOnJS(closure_1_0)();
        }
      };
      obj2 = spring;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn.__closure = { withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(4595).TransitionStates, runOnJS: context(4618).runOnJS, cleanUp: context };
  fn.__workletHash = 10548540937715;
  fn.__initData = __initData2;
  ({ withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState, TransitionStates: context(4595).TransitionStates, runOnJS: context(4618).runOnJS, cleanUp: context });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { blur: "strong", style: animatedStyle, onDismiss: tmp10, accessibilityLabel: intl.string(context(1126).t.Xkfav5) };
  tmp10 = null;
  const Backdrop = context(5778).Backdrop;
  if (alertStore) {
    tmp10 = dismissTopAlert;
  }
  intl = tmp5(1126).intl;
  return closure_12(Backdrop, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = { code: "function AlertModalNativeTsx3(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;const onComplete=function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}};const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:\"absolute\",opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():\"auto\",maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
const __initData4 = { code: "function AlertModalNativeTsx4(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let context;
  let tmp3;
  let obj = context(576);
  const cResult = obj.c(2);
  context = react.useContext(closure_20);
  if (cResult[0] !== context) {
    const fn = function t() {
      const obj = useAlertStore2;
      obj.dismissAlert(context);
    };
    cResult[0] = context;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const context = react.useContext(closure_20);
  const items = [context];
  return react.useCallback(() => {
    const obj = useAlertStore2;
    obj.dismissAlert(context);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actions;
  let content;
  let context;
  let context2;
  let extraContent;
  let header;
  let items2;
  let items3;
  let obj9;
  let sharedTransitionState;
  let title;
  let tmp14;
  let tmp15;
  let top;
  let tmp = context;
  let obj = context(context2[12]);
  const cResult = obj.c(40);
  ({ header, title, content, actions, extraContent } = arg0);
  obj2 = top;
  context = top.useContext(closure_18);
  const context1 = top.useContext(closure_19);
  const tmp6 = closure_15();
  context2 = top.useContext(closure_21);
  const enabled = top.useContext(context(context2[21]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const ref = top.useRef(null);
  let obj3 = context(context2[14]);
  const sharedValue = obj3.useSharedValue(context1);
  const tmp10 = sharedTransitionState(closure_35(), 2);
  sharedTransitionState = tmp10[0];
  let closure_7 = tmp12;
  const rect = context1(context2[22])();
  top = rect.top;
  const bottom = rect.bottom;
  if (cResult[0] !== context1) {
    let fn = function n() {
      if (0 === context1) {
        obj2 = { ref, delay: 300 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
    let items = [context1];
    cResult[0] = context1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp15 = items;
    tmp14 = fn;
  } else {
    tmp14 = cResult[1];
    tmp15 = cResult[2];
  }
  const effect = obj2.useEffect(tmp14, tmp15);
  const height = tmp13(tmp2[24])().height;
  const tmpResult = tmp(tmp2[14]);
  class G {
    constructor() {
      let fn;
      let items;
      let obj3;
      let str3;
      let tmp5Result;
      let tmp5Result2;
      const diff = height - 32;
      const result = 2 * Math.max(top, bottom);
      let value = closure_7.get();
      if (typeof withAlertModalSpring === "function") {
        obj2 = { position: "absolute", opacity: obj3.withSpring(value, obj2, "animate-always", fn), zIndex: 10 - sharedValue.get(), height: str3, maxHeight: diff - result, transform: items };
        fn = (arg0) => {
          let tmp = true === arg0 && 0 === closure_1_7.get();
          if (tmp) {
            const value = sharedTransitionState.get();
            tmp = value === context(context2[10]).TransitionStates.YEETED;
          }
          if (tmp) {
            const obj = context(context2[14]);
            obj.runOnJS(closure_1_0)();
          }
        };
        str3 = "auto";
        obj3 = spring;
        if (sharedValue.get() > 0) {
          str3 = context2.get();
        }
        if (enabled) {
          items = [];
        } else {
          let num3 = 0.7;
          if (1 === closure_7.get()) {
            num3 = 1 - 0.1 * sharedValue.get();
          }
          if (typeof withAlertModalSpring === "function") {
            let diff1;
            const obj5 = { scale: tmp5Result.withSpring(num3, obj2, "animate-always", undefined) };
            items = [obj5, ];
            tmp5Result = spring;
            if (1 === closure_7.get()) {
              let result1 = [0, -20, -34][sharedValue.get(sharedValue)];
              if (result1 == null) {
                result1 = -12 * closure_7.get();
              }
              diff1 = result1;
            } else {
              diff1 = 50 - 50 * sharedValue.get();
            }
            if (typeof withAlertModalSpring === "function") {
              const obj6 = { translateY: tmp5Result2.withSpring(diff1, obj2, "animate-always", undefined) };
              items[1] = obj6;
              tmp5Result2 = spring;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  G.__closure = { sharedVisible: tmp10[1], sharedTransitionState, TransitionStates: tmp(context2[10]).TransitionStates, runOnJS: tmp(context2[14]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
  G.__workletHash = 15768220325168;
  G.__initData = __initData3;
  ({ sharedVisible: tmp10[1], sharedTransitionState, TransitionStates: tmp(context2[10]).TransitionStates, runOnJS: tmp(context2[14]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled });
  const animatedStyle = tmpResult.useAnimatedStyle(G);
  if (cResult[3] === context1) {
    let tmp18;
    let tmp19;
    let tmp22;
    if (cResult[4] === sharedValue) {
      tmp18 = cResult[5];
      tmp19 = cResult[6];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp18, tmp19);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function j() {
        let closure_0;
        const useAlertStore = context(context2[13]).useAlertStore;
        const arr = closure_7(useAlertStore.getState().alerts);
        const first = arr[0];
        context = arr.slice(1);
        const tmp4 = null != first && false === first.dismissable;
        if (!tmp4) {
          let key;
          const dismissAlert = context(context2[13]).dismissAlert;
          context(context2[13]);
          if (first != null) {
            key = first.key;
          }
          dismissAlert(key);
          const tmpResult2 = context(context2[18]);
          tmpResult2.batchUpdates(() => {
            const useAlertStore = context(context2[13]).useAlertStore;
            const obj = { alerts };
            return useAlertStore.setState(obj);
          });
        }
        return true;
      };
      let num3 = 7;
      cResult[7] = fn2;
      tmp22 = fn2;
    } else {
      tmp22 = cResult[7];
    }
    context1(context2[25])(tmp22);
    let str2 = "no-hide-descendants";
    if (0 === context1) {
      str2 = "auto";
    }
    if (cResult[8] === animatedStyle) {
      let tmp24;
      let tmp25;
      let tmp26;
      let tmp27;
      if (cResult[9] === tmp6.content) {
        tmp24 = cResult[10];
      }
      if (cResult[11] !== context2) {
        const fn3 = function q(nativeEvent) {
          const result = context2.set(nativeEvent.nativeEvent.layout.height);
        };
        cResult[11] = context2;
        cResult[12] = fn3;
        tmp25 = fn3;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== tmp6.body) {
        const items1 = [tmp6.body];
        cResult[13] = tmp6.body;
        cResult[14] = items1;
        tmp26 = items1;
      } else {
        tmp26 = cResult[14];
      }
      if (cResult[15] !== title) {
        let obj5 = { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title };
        const tmp29 = closure_12(tmp(context2[26]).Text, obj5);
        cResult[15] = title;
        cResult[16] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[16];
      }
      if (cResult[17] === content) {
        let tmp30;
        if (cResult[18] === tmp6.contentText) {
          tmp30 = cResult[19];
        }
        if (cResult[20] === tmp26) {
          if (cResult[21] === tmp27) {
            let tmp33;
            let tmp36;
            if (cResult[22] === tmp30) {
              tmp33 = cResult[23];
            }
            if (cResult[24] !== actions) {
              let tmp37 = null;
              if (null != actions) {
                let obj6 = { children: actions };
                tmp37 = closure_12(closure_36, obj6);
              }
              cResult[24] = actions;
              cResult[25] = tmp37;
              tmp36 = tmp37;
            } else {
              tmp36 = cResult[25];
            }
            if (cResult[26] === extraContent) {
              if (cResult[27] === header) {
                if (cResult[28] === tmp33) {
                  let tmp40;
                  if (cResult[29] === tmp36) {
                    tmp40 = cResult[30];
                  }
                  if (cResult[31] === tmp6.overflow) {
                    let tmp43;
                    if (cResult[32] === tmp40) {
                      tmp43 = cResult[33];
                    }
                    if (cResult[34] === tmp25) {
                      if (cResult[35] === tmp43) {
                        if (cResult[36] === str2) {
                          if (cResult[37] === 0 !== context1) {
                            let tmp49;
                            if (cResult[38] === tmp24) {
                              tmp49 = cResult[39];
                            }
                            return tmp49;
                          }
                        }
                      }
                    }
                    const obj7 = { importantForAccessibility: str2, accessibilityElementsHidden: 0 !== context1, style: tmp24, onLayout: tmp25, children: tmp43 };
                    const tmp51 = closure_12(context1(context2[14]).View, obj7);
                    cResult[34] = tmp25;
                    cResult[35] = tmp43;
                    cResult[36] = str2;
                    cResult[37] = 0 !== context1;
                    cResult[38] = tmp24;
                    cResult[39] = tmp51;
                    tmp49 = tmp51;
                  }
                  const obj8 = { alwaysBounceVertical: false, children: closure_12(bottom, obj9) };
                  obj9 = { style: tmp6.overflow, children: tmp40 };
                  const tmp47 = closure_12(closure_11, obj8);
                  cResult[31] = tmp6.overflow;
                  cResult[32] = tmp40;
                  cResult[33] = tmp47;
                  tmp43 = tmp47;
                }
              }
            }
            const obj10 = { spacing: 24, children: items2 };
            items2 = [header, tmp33, extraContent, tmp36];
            const tmp42 = closure_13(tmp(context2[27]).Stack, obj10);
            cResult[26] = extraContent;
            cResult[27] = header;
            cResult[28] = tmp33;
            cResult[29] = tmp36;
            cResult[30] = tmp42;
            tmp40 = tmp42;
          }
        }
        const obj11 = { spacing: 8, style: tmp26, children: items3 };
        items3 = [tmp27, tmp30];
        const tmp35 = closure_13(tmp(context2[27]).Stack, obj11);
        cResult[20] = tmp26;
        cResult[21] = tmp27;
        cResult[22] = tmp30;
        cResult[23] = tmp35;
        tmp33 = tmp35;
      }
      let tmp31 = null;
      if (null != content) {
        let str3 = "";
        tmp31 = null;
        if ("" !== content) {
          const obj12 = { variant: "text-md/medium", color: "text-default", style: tmp6.contentText, children: content };
          tmp31 = closure_12(tmp(tmp2[26]).Text, obj12);
        }
      }
      cResult[17] = content;
      cResult[18] = tmp6.contentText;
      cResult[19] = tmp31;
      tmp30 = tmp31;
    }
    const items4 = [tmp6.content, animatedStyle];
    cResult[8] = animatedStyle;
    cResult[9] = tmp6.content;
    cResult[10] = items4;
    tmp24 = items4;
  }
  class K {
    constructor() {
      const result = sharedValue.set(context1);
    }
  }
  const items5 = [context1, sharedValue];
  cResult[3] = context1;
  cResult[4] = sharedValue;
  cResult[5] = K;
  cResult[6] = items5;
  tmp19 = items5;
  tmp18 = K;
}) : ((arg0) => {
  let Stack;
  let actions;
  let content;
  let extraContent;
  let header;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj9;
  let title;
  ({ content, actions } = arg0);
  let sharedTransitionState;
  let top;
  ({ header, title, extraContent } = arg0);
  let context = top.useContext(closure_18);
  const context1 = top.useContext(closure_19);
  const tmp3 = closure_15();
  const context2 = top.useContext(closure_21);
  const enabled = top.useContext(context(context2[21]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const ref = top.useRef(null);
  let obj = context(context2[14]);
  const sharedValue = obj.useSharedValue(context1);
  const tmp9 = sharedTransitionState(closure_35(), 2);
  sharedTransitionState = tmp9[0];
  let closure_7 = tmp11;
  const rect = context1(context2[22])();
  top = rect.top;
  const bottom = rect.bottom;
  let items = [context1];
  const effect = top.useEffect(() => {
    if (0 === context1) {
      obj2 = { ref, delay: 300 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  const height = context1(context2[24])().height;
  obj2 = context(context2[14]);
  class J {
    constructor() {
      let fn;
      let items;
      let obj3;
      let str3;
      let tmp5Result;
      let tmp5Result2;
      const diff = height - 32;
      const result = 2 * Math.max(top, bottom);
      let value = closure_7.get();
      if (typeof withAlertModalSpring === "function") {
        obj2 = { position: "absolute", opacity: obj3.withSpring(value, obj2, "animate-always", fn), zIndex: 10 - sharedValue.get(), height: str3, maxHeight: diff - result, transform: items };
        fn = (arg0) => {
          let tmp = true === arg0 && 0 === closure_1_7.get();
          if (tmp) {
            const value = sharedTransitionState.get();
            tmp = value === context(context2[10]).TransitionStates.YEETED;
          }
          if (tmp) {
            const obj = context(context2[14]);
            obj.runOnJS(closure_1_0)();
          }
        };
        str3 = "auto";
        obj3 = spring;
        if (sharedValue.get() > 0) {
          str3 = context2.get();
        }
        if (enabled) {
          items = [];
        } else {
          let num3 = 0.7;
          if (1 === closure_7.get()) {
            num3 = 1 - 0.1 * sharedValue.get();
          }
          if (typeof withAlertModalSpring === "function") {
            let diff1;
            const obj5 = { scale: tmp5Result.withSpring(num3, obj2, "animate-always", undefined) };
            items = [obj5, ];
            tmp5Result = spring;
            if (1 === closure_7.get()) {
              let result1 = [0, -20, -34][sharedValue.get(sharedValue)];
              if (result1 == null) {
                result1 = -12 * closure_7.get();
              }
              diff1 = result1;
            } else {
              diff1 = 50 - 50 * sharedValue.get();
            }
            if (typeof withAlertModalSpring === "function") {
              const obj6 = { translateY: tmp5Result2.withSpring(diff1, obj2, "animate-always", undefined) };
              items[1] = obj6;
              tmp5Result2 = spring;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let obj3 = { sharedVisible: tmp11, sharedTransitionState, TransitionStates: context(context2[10]).TransitionStates, runOnJS: context(context2[14]).runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
  J.__closure = obj3;
  J.__workletHash = 13605485290396;
  J.__initData = __initData4;
  const items1 = [context1, sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(J);
  const layoutEffect = top.useLayoutEffect(() => {
    const result = sharedValue.set(context1);
  }, items1);
  context1(context2[25])(() => {
    let alerts;
    let useAlertStore = context(context2[13]).useAlertStore;
    const arr = closure_7(useAlertStore.getState().alerts);
    const first = arr[0];
    context = arr.slice(1);
    const tmp4 = null != first && false === first.dismissable;
    if (!tmp4) {
      let key;
      const dismissAlert = context(context2[13]).dismissAlert;
      context(context2[13]);
      if (first != null) {
        key = first.key;
      }
      dismissAlert(key);
      const tmpResult2 = context(context2[18]);
      tmpResult2.batchUpdates(() => {
        const useAlertStore = context(context2[13]).useAlertStore;
        const obj = { alerts };
        return useAlertStore.setState(obj);
      });
    }
    return true;
  });
  let str = "no-hide-descendants";
  const View = context1(context2[14]).View;
  if (0 === context1) {
    str = "auto";
  }
  const obj4 = {
    importantForAccessibility: str,
    accessibilityElementsHidden: 0 !== context1,
    style: items2,
    onLayout(nativeEvent) {
      const result = context2.set(nativeEvent.nativeEvent.layout.height);
    },
    children: closure_12(closure_11, obj9)
  };
  items2 = [tmp3.content, animatedStyle];
  let obj5 = { style: tmp3.overflow, children: closure_13(Stack, { spacing: 24, children: items3 }) };
  items3 = [header, , , ];
  Stack = tmp5(tmp6[27]).Stack;
  let obj6 = { spacing: 8, style: items4, children: items5 };
  items4 = [tmp3.body];
  const Stack2 = tmp5(tmp6[27]).Stack;
  items5 = [closure_12(context(context2[26]).Text, { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title }), ];
  let tmp16Result = null;
  const tmp18 = bottom;
  if (null != content) {
    tmp16Result = null;
    if ("" !== content) {
      const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp3.contentText, children: content };
      tmp16Result = closure_12(tmp5(tmp6[26]).Text, obj7);
    }
  }
  items5[1] = tmp16Result;
  items3[1] = closure_13(Stack2, obj6);
  items3[2] = extraContent;
  let tmp16Result2 = null;
  if (null != actions) {
    const obj8 = { children: actions };
    tmp16Result2 = closure_12(closure_36, obj8);
  }
  items3[3] = tmp16Result2;
  obj9 = { alwaysBounceVertical: false, children: closure_12(tmp18, obj5) };
  return closure_12(View, obj4);
});
let closure_29 = tmp8;
function withAlertModalSpring(targetHeight, fn) {
  const obj = spring;
  return obj.withSpring(targetHeight, obj2, "animate-always", fn);
}
let obj3 = { withSpring: spring.withSpring, MODAL_SPRING: obj2 };
withAlertModalSpring.__closure = obj3;
withAlertModalSpring.__workletHash = 7851172244290;
withAlertModalSpring.__initData = { code: "function withAlertModalSpring_AlertModalNativeTsx5(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
const __initData5 = { code: "function AlertModalNativeTsx6(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
const __initData6 = { code: "function AlertModalNativeTsx7(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const __initData7 = { code: "function AlertModalNativeTsx8(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
const __initData8 = { code: "function AlertModalNativeTsx9(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let context;
  let sharedValue;
  const obj = context(sharedValue[12]);
  const cResult = obj.c(10);
  context = react.useContext(closure_17);
  const context1 = react.useContext(closure_18);
  const useSharedValue = context(sharedValue[14]).useSharedValue;
  let num = 0;
  const tmp6 = context(sharedValue[14]);
  if (context === context(sharedValue[10]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let tmpResult = tmp(tmp2[14]);
  const sharedValue1 = tmpResult.useSharedValue(context);
  if (cResult[0] === sharedValue1) {
    let tmp9;
    if (cResult[1] === context) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === sharedValue1) {
      if (cResult[4] === sharedValue) {
        let tmp10;
        if (cResult[5] === context) {
          tmp10 = cResult[6];
        }
        const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
        const fn2 = function o() {
          return sharedValue1.get();
        };
        const obj3 = { sharedTransitionState: sharedValue1 };
        fn2.__closure = obj3;
        fn2.__workletHash = 11706255444795;
        fn2.__initData = __initData5;
        const fn3 = function s(arg0) {
          if (arg0 === native.TransitionStates.YEETED) {
            if (1 === sharedValue.get()) {
              const result = sharedValue.set(0);
            } else {
              const tmpResult = ReanimatedRexport;
              tmpResult.runOnJS(context1)();
            }
          } else {
            const result1 = sharedValue.set(1);
          }
        };
        const obj4 = { TransitionStates: context(sharedValue[10]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[14]).runOnJS, cleanUp: context1 };
        const useAnimatedReaction = context(sharedValue[14]).useAnimatedReaction;
        context(sharedValue[14]);
        fn3.__closure = obj4;
        fn3.__workletHash = 819342653838;
        fn3.__initData = __initData6;
        const animatedReaction = useAnimatedReaction(fn2, fn3);
        if (cResult[7] === sharedValue1) {
          let tmp16;
          if (cResult[8] === sharedValue) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
        const items = [sharedValue1, sharedValue];
        cResult[7] = sharedValue1;
        cResult[8] = sharedValue;
        cResult[9] = items;
        tmp16 = items;
      }
    }
    const items1 = [sharedValue, context, sharedValue1];
    cResult[3] = sharedValue1;
    cResult[4] = sharedValue;
    cResult[5] = context;
    cResult[6] = items1;
    tmp10 = items1;
  }
  const fn = function t() {
    const result = sharedValue1.set(context);
  };
  cResult[0] = sharedValue1;
  cResult[1] = context;
  cResult[2] = fn;
  tmp9 = fn;
}) : (() => {
  let sharedValue;
  const context = react.useContext(closure_17);
  const context1 = react.useContext(closure_18);
  const useSharedValue = context(sharedValue[14]).useSharedValue;
  let num = 0;
  context(sharedValue[14]);
  if (context === context(sharedValue[10]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmp3Result = context(sharedValue[14]);
  const sharedValue1 = tmp3Result.useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 1529466560437;
  fn.__initData = __initData7;
  const fn2 = function t(arg0) {
    if (arg0 === native.TransitionStates.YEETED) {
      if (1 === sharedValue.get()) {
        const result = sharedValue.set(0);
      } else {
        const tmpResult = ReanimatedRexport;
        tmpResult.runOnJS(context1)();
      }
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  const tmp3Result2 = context(sharedValue[14]);
  fn2.__closure = { TransitionStates: context(sharedValue[10]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[14]).runOnJS, cleanUp: context1 };
  fn2.__workletHash = 15761977288448;
  fn2.__initData = __initData8;
  ({ TransitionStates: context(sharedValue[10]).TransitionStates, sharedVisible: sharedValue, runOnJS: context(sharedValue[14]).runOnJS, cleanUp: context1 });
  const animatedReaction = tmp3Result2.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    obj2 = { spacing: 12, children };
    const tmp6 = closure_12(Stack_Stack.Stack, obj2);
    cResult[0] = children;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((children) => closure_12(Stack_Stack.Stack, { spacing: 12, children: children.children }));
let closure_36 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let closure_1;
  let context;
  let first;
  let tmp4;
  let tmp6;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp2 = context;
  if (cResult[0] !== onPress) {
    onPress = onPress.onPress;
    _require = onPress;
    const loading = onPress.loading;
    const tmp9 = _objectWithoutProperties(onPress, closure_3);
    cResult[0] = onPress;
    cResult[1] = loading;
    cResult[2] = onPress;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp4 = loading;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  [first, closure_1] = react.useState(false);
  context = react.useContext(closure_20);
  if (tmp4 == null) {
    tmp4 = first;
  }
  if (cResult[4] === context) {
    let tmp13;
    if (cResult[5] === tmp5) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp4) {
        let tmp14;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    obj2 = { grow: true, loading: tmp4, onPress: tmp13 };
    const tmp16 = obj2;
    const Button = tmp(tmp2[29]).Button;
    const merged = Object.assign(tmp6);
    const tmp19 = closure_12(Button, obj2);
    cResult[7] = tmp6;
    cResult[8] = tmp4;
    cResult[9] = tmp13;
    cResult[10] = tmp19;
    tmp14 = tmp19;
  }
  _require = _asyncToGenerator(async (arg0) => {
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp8;
            if (closure_0 != null) {
              tmp8 = closure_0(closure_0);
            }
            if (null != tmp8) {
              if (tmp8 instanceof Promise) {
                tmp(true);
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: tmp8, done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          tmp(false);
          c4 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
        }
        const obj3 = closure_0(context[13]);
        obj3.dismissAlert(c2);
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        if (0 === c3) {
          c4 = 3;
          throw tmp16;
        } else {
          c2 = 1;
        }
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[4] = context;
  cResult[5] = tmp5;
  cResult[6] = fn;
  tmp13 = fn;
}) : ((arg0) => {
  let closure_1;
  let closure_2;
  let first;
  let loading;
  let require;
  ({ onPress: require, loading } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onPress: 0, loading: 0 }));
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  dependencyMap = react.useContext(closure_20);
  let obj = {
    grow: true,
    loading,
    onPress: function() {
      return closure_0(...arguments);
    }
  };
  const Button = components_Button_Button.Button;
  const merged1 = Object.assign(merged);
  if (loading == null) {
    loading = first;
  }
  let closure_0 = _asyncToGenerator(async (arg0) => {
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp8;
            if (closure_0 != null) {
              tmp8 = closure_0(closure_0);
            }
            if (null != tmp8) {
              if (tmp8 instanceof Promise) {
                tmp(true);
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: tmp8, done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          tmp(false);
          c4 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
        }
        const obj3 = closure_0(closure_2_2[13]);
        obj3.dismissAlert(c2);
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        if (0 === c3) {
          c4 = 3;
          throw tmp16;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return closure_12(Button, obj);
});
let closure_37 = tmp10;
size = size_mod;
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = tmp7;
export const AlertModal = tmp8;
export const AlertActions = tmp9;
export const AlertActionButton = tmp10;
export const showConfirmModal = function showConfirmModal(arg0) {
  let cancelText;
  let confirmText;
  let content;
  let dismissable;
  let extraContent;
  let items;
  let key;
  let onCancel;
  let onCloseCallback;
  let onConfirm;
  let title;
  let variant;
  ({ key, cancelText } = arg0);
  ({ title, content, confirmText } = arg0);
  if (cancelText === undefined) {
    const intl = intl2.intl;
    cancelText = intl.string(intl2.t["ETE/oC"]);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  const obj = { title, content, extraContent, actions: map1(authStore2, obj2) };
  obj2 = { children: items };
  const openAlert = useAlertStore2.openAlert;
  items = [, ];
  useAlertStore2;
  items[0] = closure_12(closure_37, { variant, text: confirmText, onPress: onConfirm });
  items[1] = closure_12(closure_37, { variant: "secondary", text: cancelText, onPress: onCancel });
  const obj3 = { dismissable };
  openAlert(key, closure_12(closure_29, obj), onCloseCallback, obj3);
};